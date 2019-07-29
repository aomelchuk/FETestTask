import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { saveAs } from 'file-saver';



import {GetDbService} from '../shared/get-db.service';
import {UpdateIncludesService} from '../shared/update-includes.service';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-product-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddProductPopupComponent implements OnInit {

  constructor(private getDbService:GetDbService, config: NgbModalConfig, private modalService: NgbModal, private updateIncludesService:UpdateIncludesService) {
    // customize default values of modals used by this component tree
    this.getDbService.get().subscribe(data=>{
      this.db = data;
    });

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

  }

  changeSelectedProd(res) {
    this.includeObj[res.typeArr] = res.include;
    this.updateIncludesService.sendObject(this.includeObj);
  }


 createNewProduct(...args: any[]) {

    args.push(this.includeObj);
console.log(new NewProduct(args));
   try {
    // var FileSaver = require('file-saver');
   //  let blob = new Blob([JSON.stringify(new NewProduct(args))], {type: "JSON"});
    // FileSaver.saveAs(blob, "new_product.json");

   }
   catch (ex) {
     console.log(ex);
   }

    this.includeObj = null;

 }


}

class NewProduct {
  customerType;
  name;
  validValue;
  price;
  sku;
  type;
  allowRecharge;
  rechargePrice;
  includes;

 constructor(...[args]) {
   this.customerType = args[0];
    this.name = args[1];
    this.validValue = args[2] || 0;
    this.price = args[3];
    this.sku = args[4];
    this.type = args[5];
    if(args[6] == "")this.allowRecharge=false;
    else  this.allowRecharge=args[6];
     if(args[6]==true ) this.rechargePrice = args[7];
     else this.rechargePrice =0;

    this.includes = this.processingIncludesArray(args[8]);

  }

  processingIncludesArray(includes:any) {
    let temp = [];

    for (let x in includes) {
      if (includes[x].length != 0) {
        for (let item of includes[x]) {
          temp.push({
            type: x.toUpperCase(),
            connectedProduct: {
              id: item.id
            }
          });
        }
      }
    };
    return temp;
  }

}


