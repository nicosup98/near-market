import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NearService } from '../services/near.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private nearService: NearService, private router: Router) { }

  ngOnInit(): void {
  }

  async login(){
    this.router.navigateByUrl('/products')
    this.nearService.login()
  }

}
