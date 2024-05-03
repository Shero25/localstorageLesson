import { Component } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sessionApp';

  constructor(private localstorage:LocalstorageService){}

  //save items to local storage
  savetoLocalstorage(){
    this.localstorage.setItem("mykey","welcome to sessioApp");
  }
  //fetch item from local storage
 retrieve(){
const value=this.localstorage.getItem("mykey");
console.log(value);
 }

 //
 saveUser(){
  this.localstorage.saveData("userId","AdminUser");
 }

 getUserId(){
console.log(this.localstorage.getData("userId"));
 }

 ngOnInit()
 {
  
 }
}
