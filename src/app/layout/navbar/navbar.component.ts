import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetlocalstoragedataService } from 'src/app/core/services/getlocalstoragedata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  name!: string;
  userData: any = this.localstorageService.getUserData();
  
  constructor(private localstorageService: GetlocalstoragedataService, private router: Router) { }
  ngOnInit(): void {}

  logout() {
    this.localstorageService.clearLocalstorage();
    this.router.navigate(['/auth/login'])
  }
}
