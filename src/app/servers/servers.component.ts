import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  public allowNewServer: boolean = false; // Its example will used in property binding
  public serverCreationStatus: string = 'Server no created.';
  public serverName: string = 'testServer';
  public serverCreated: boolean = false;
  public arrayServers: string[] = ['Testeserver','Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(): any {
    
  }

  onCreateServer(){
    this.serverCreated = true;
    this.arrayServers.push(this.serverName);
    this.serverCreationStatus = `Server was created. The name he is ${this.serverName}`;
    console.log(this.arrayServers)
  }

  onUpdateServerName( event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
