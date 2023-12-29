import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService 
{
  private buttonSubject = new Subject<string>();
  buttonClicked$ = this.buttonSubject.asObservable();

  constructor() { }

  sendButtonClicked(button: string) 
  {
    console.log('2');
    this.buttonSubject.next(button);
    console.log(button);
  }
}
