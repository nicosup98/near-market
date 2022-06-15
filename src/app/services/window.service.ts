import { Inject, Injectable } from '@angular/core';
import { WINDOW } from './window.provider'
@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(@Inject(WINDOW) public window: any) { }
}
