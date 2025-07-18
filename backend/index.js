const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite requisições do Angular
app.use(express.json());

const CLIENT_ID = 'Ov23li766aJxc12btjVV';
const CLIENT_SECRET = '3f984221e656ba522cedcf287a47c79716f6a361';

app.post('/auth/github', async (req, res) => {
  const { code } = req.body;

  try {
    // 1. Trocar o código por um access_token
    const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
      },
      {
        headers: { Accept: 'application/json' },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // 2. Obter os dados do usuário
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    res.json({
      login: userResponse.data.login,
      name: userResponse.data.name,
      avatar_url: userResponse.data.avatar_url,
      email: userResponse.data.email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao autenticar com o GitHub' });
  }
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Backend ouvindo em http://localhost:${PORT}`);
});
