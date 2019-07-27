import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdateIncludesService {

  private subject = new Subject<any>();

  sendObject(includesArr:any):void {
    this.subject.next(includesArr);
  }
  clearObject():void {
    this.subject.next();
  }
  getObject():Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}
