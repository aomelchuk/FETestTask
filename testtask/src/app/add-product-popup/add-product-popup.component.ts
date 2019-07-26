import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import {db} from '../shared/db';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-product-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddProductPopupComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
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

  changeSelectedProd(res, type) {

    this.includeObj[type] = res;
  
  }


}
/*
export class NewProduct {
  constructor() {

  }
}
*/

