import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
//   styles: [`
//   h3 {
//   color: dodgerblue;
//   }
// `]
})
export class ServerComponent {
  serverId: number = 10;
  serverstatus = 'offline';

  constructor(){
    this.serverstatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverstatus
  }

  getColor() {
    return this.serverstatus === 'online' ? 'green' : 'red';
  }
}
