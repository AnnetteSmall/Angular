import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['test 1', 'test 2'];
  clickCounterList = [];
  showContentOfChoice = true;


  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {

  }
  onClickDisplayDetails() {
    // this.clickCounterList.push(this.clickCounterList.length +1);
    this.clickCounterList.push(new Date());
    this.showContentOfChoice = !this.showContentOfChoice;
  }



  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }


  onUpdateServerName(event:any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
