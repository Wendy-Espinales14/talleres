import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TALLER 2 ISP';

  employees=[

    {'name': 'wendy', position: 'manager'},
    {'name': 'mishelle', position: 'designer'},
    {'name': 'alaia', position: 'programmer'},
  ];
  model: any= {};
  model2: any= {};
  

  addEmployees():void{
 this.employees.push(this.model);

  }


  deleteEmployee(i:any): void {
      var answer= confirm('seguro deseas eliminar el registro?');
 if (answer){
  this.employees.splice(i,1);
 }
  }



myValue: any;
editEmployee(i:any): void {
    this.model2.name=this.employees[i].name;
    this.model2.position=this.employees[i].position;
    this.myValue=i;
  
  
    
  }
 
  updateEmployee(): void {
let i = this.myValue;
for (let j=0; j  <this.employees.length; j++){
  if(i==j){
    this.employees[i]=this.model2;
  this.model2={}
  }
}
  }  
 } 