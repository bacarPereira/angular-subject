import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  public value: string = "";
  public subject: Subject<string> = new Subject<string>();

  constructor() {
    this.subscribeSubject()
   }

   private subscribeSubject():void{
    this.subject.subscribe((newValue:string) =>{
      this.value = newValue;
    })
   }

   public changeValue(newValue:string):void {
    this.subject.next(newValue);
  }
}
