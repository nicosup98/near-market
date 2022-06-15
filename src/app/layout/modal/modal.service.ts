import { Injectable, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalConfiguration } from 'src/app/Models/ModalConfigartion';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modalResponse = new BehaviorSubject<ModalResponse>('waiting')
  modalResponse = this._modalResponse.asObservable()

  private _modalConfiguration = new BehaviorSubject<ModalConfiguration | null>(null)
  modalConfiguration = this._modalConfiguration.asObservable()
  
  confirmation(data: ModalResponse){
    this._modalResponse.next(data)
  }

  setModalConfiguration(modalConfiguration: ModalConfiguration){
    this._modalConfiguration.next(modalConfiguration)
  }

  disableOkButton(value: boolean){
    const configuration = {...this._modalConfiguration.value,disableOk:value}
    this._modalConfiguration.next(configuration as ModalConfiguration)
  }
  constructor() { }
}

type ModalResponse = 'waiting' | 'ok' | 'close'
