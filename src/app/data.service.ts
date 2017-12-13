import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {


  private ingrid = new BehaviorSubject<any>([]);
  private description = new BehaviorSubject<any>([]);
  private newCake = new BehaviorSubject<any>([]);
  ingrident = this.ingrid.asObservable();
  desc = this.description.asObservable();
  cake = this.newCake.asObservable();
  constructor() { }
  
  changeIngrid(ingrident){
    this.ingrid.next(ingrident)
  }
  changeDescription(desc){
    this.description.next(desc)
  }
  changeCake(cake){
    this.newCake.next(cake)
  }
}
