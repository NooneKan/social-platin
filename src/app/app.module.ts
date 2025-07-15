import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HomeComponent,
    CadastrarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
