import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import {db} from '../shared/db';
import {UpdateIncludesService} from '../shared/update-includes.service';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-product-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddProductPopupComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, private updateIncludesService:UpdateIncludesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    try {
      this.modalService.open(content);
    }
   catch (ex) {
     console.log(ex);
   }
  };

  newProduct = {
    id: 1,
    sku:"",
    name:"",
    newProductAllowRecharge:false
  };

  db:any[];
  typeValues = {
    'BASIC_SINGLE':'Basic single',
    'BASIC_VALID_HOURS':'Basic valid hours',
    'PASS_LIMITED':'Pass limited',
    'PASS_UNLIMITED':'Pass unlimited'
  };
  customerTypeValues ={
    'ADULT':'Adult',
    'CHILD':'Child'
  };
  includeObj= {
    pass: [],
    include:[]
  }  ;

  ngOnInit() {
    this.db = db;
  }

  changeSelectedProd(res) {

    console.log(res.typeArr, res.include);

    this.includeObj[res.typeArr] = res.include;
    console.log("add product popup");
    console.log(this.includeObj);
    this.updateIncludesService.sendObject(this.includeObj);

  }
 createNewProduct() {
   let temp = new Object;
   
   
   
   
   
   console.log(temp);
   
 }
  

}
/*
export class NewProduct {
  constructor() {

  }
}
*/

