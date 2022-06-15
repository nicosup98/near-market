import { Component, Input, OnInit } from '@angular/core';
import { ModalConfiguration } from 'src/app/Models/ModalConfigartion';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) { }
  configuration = this.modalService.modalConfiguration

  ngOnInit(): void {
    console.log(this.configuration)
  }

  handleOk(){
    this.modalService.confirmation('ok')
  }

  handleClose(){
    this.modalService.confirmation('close')
  }

}

