import { Component } from '@angular/core';
import { GetlocalstoragedataService } from 'src/app/core/services/getlocalstoragedata.service';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
export class HorizontalComponent {
  role!:string;
  constructor(private localstorageService:GetlocalstoragedataService){}
  ngOnInit(): void {
    this.role=this.localstorageService.getUserData().role as string
  }
}
