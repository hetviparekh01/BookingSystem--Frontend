import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { GetlocalstoragedataService } from 'src/app/core/services/getlocalstoragedata.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private localstorageService: GetlocalstoragedataService,private router:Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(`^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$|^$|^ $`)])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          if(response.status){
            Swal.fire({
              icon: 'success',
              title: response.message,
              showConfirmButton: false,
              timer: 1500,
            });
            this.localstorageService.setToken(response.accessToken)
            this.localstorageService.setUserData(response.data)
            this.router.navigate(['/'])
            this.loginForm.reset()
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: response.message,
            });
          }
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          });
        },  
      });
    }
  }
}
