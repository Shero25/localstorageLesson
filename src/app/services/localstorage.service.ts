import { Injectable } from '@angular/core';
import * as Cryptojs from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {


  private keys="12345"

  constructor() { }

  //save data to local storage and encrypt it to plaintext
  public saveData(keys:string,data:string):void{
  localStorage.setItem(keys,this.encrypt(data));
  }

  //get data from local storage and decrypt it
public getData(keys:string){
  let data= localStorage.getItem(keys)||"";
  return this.decrypt(data);
}
//remove one item from local storage
public removeData(keys:string){
  localStorage.removeItem(keys)
}

public clearData(){
  localStorage.clear();
}

//
private encrypt(txtToDecrypt:string):string{
  return Cryptojs.AES.encrypt(txtToDecrypt,this.keys).toString();
}


//
private decrypt(txt:string):string{
  return Cryptojs.AES.decrypt(txt,this.keys).toString(Cryptojs.enc.Utf8);
}

  //set item in local storage

  setItem(key:string,value:any):void{
  localStorage.setItem(key,value)
  }
 //get a value from the local storage
 getItem(key:string):string|null{
  return localStorage.getItem(key)
 }
 //remove one item from local storage
 removeItem(key:string):void{
  localStorage.removeItem(key)
 }
 //clear all items in local storage
 clearAll():void{
  localStorage.clear()
 }
}
