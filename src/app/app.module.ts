import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';// Importamos esse componente da pasta raiz dele
import { ServersComponent } from './servers/servers.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,//Declaramos esse componente que criamos. 
    ServersComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
