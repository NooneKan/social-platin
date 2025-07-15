import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: 'perfil/:id', component: PerfilComponent },
  { path: '', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
