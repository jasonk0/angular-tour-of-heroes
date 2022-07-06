import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[] = []
  
  add(str:string) {
    this.message.push(str)
  }

  clear() {
    this.message = []
    return this.message
  }
  constructor() { }

}
