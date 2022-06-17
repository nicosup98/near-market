import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { NearService } from '../services/near.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private nearService: NearService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const isSignedIn = await firstValueFrom(this.nearService.isSignedIn())
    
    if (isSignedIn) {
      this.router.navigateByUrl('/products')

    }
  }

  login() {
    this.nearService.login()
  }

}
