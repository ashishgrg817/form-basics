import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
url='https://jsonplaceholder.typicode.com/posts';
  constructor() { }

  createUser(data){
    return new Promise((resolve,reject)=>{
      fetch(this.url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Access-Control-Allow-Origin':'*',
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response=>response.json())
      .then(json=>{
        if(json){
          resolve(json)
        }
      }
    ).catch(err=>err.message)
    })

  }

  getUser(Id){
    return new Promise((resolve,reject)=>{
      fetch('https://jsonplaceholder.typicode.com/posts/'+Id)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err=>err.message)
    })
    
  }
}
