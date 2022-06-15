import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private _data = new BehaviorSubject<any>(null)
  data = this._data.asObservable()

  setData(data:any){
    this._data.next(data)
  }
  constructor() { }
}
