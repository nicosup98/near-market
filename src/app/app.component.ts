import { Component, OnInit } from '@angular/core';
import { NearService } from './services/near.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private nearService: NearService) {
    
  }

  async ngOnInit() {
    await this.nearService.initContract()
    
  }

}
