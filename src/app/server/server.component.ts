import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  name:string = "Ashar" ;
  id:number = 4;
  Status = "" ;
  constructor() { 
    this.Status = Math.random() > 0.5 ? 'online' : 'offline'; 
  }

  ngOnInit() {
  }
  getServerStatus(){
    return this.Status;
  }

  getColor(){
    return this.getServerStatus()==='online'? 'green':'red'; 
  }
}
