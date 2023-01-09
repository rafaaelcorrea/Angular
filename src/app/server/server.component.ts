import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    serverId: number = 12;
    serverStatus: string = 'Online';

    showStatusServer(): any{
       return  this.serverStatus;
    }
}


