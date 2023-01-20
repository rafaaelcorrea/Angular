import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    serverId: number = 12;
    serverStatus: string = 'Online';
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }
    showStatusServer(): any{
       return  this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}


