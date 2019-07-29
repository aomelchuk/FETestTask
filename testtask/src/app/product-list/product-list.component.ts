import { Component, OnInit } from '@angular/core';

import { GetDbService } from '../shared/get-db.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  db;


 constructor(private getDbService:GetDbService) {
//constructor() {
   this.getDbService.get().subscribe(data=>{
     this.db = data;
   })
  }




  ngOnInit() {

  }


}
