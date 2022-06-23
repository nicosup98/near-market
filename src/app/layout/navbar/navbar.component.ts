import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NearService } from 'src/app/services/near.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private nearService: NearService, private router: Router) { }
  isSignedIn$!: Observable<boolean>
  wallet$ = this.nearService.getAccountId()
  amount$ = this.nearService.accountBalance()
  ngOnInit(): void {
  this.isSignedIn$ = this.nearService.isSignedIn()
  
  }

  logOut(){
    this.nearService.logOut()
    this.router.navigateByUrl('/login')
  }

  log(value: any){
    console.log(!!value)
  }

}
