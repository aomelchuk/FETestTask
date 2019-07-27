import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import {db} from '../shared/db';
import {UpdateIncludesService} from '../shared/update-includes.service';

@Component({
  selector: 'ip-template',
  templateUrl: './ip-template.component.html',
  styleUrls: ['./ip-template.component.scss']

})
export class IpTemplateComponent implements OnInit {

  @Input() includeArr:any;

  @Input() typeArr:string;

  @Output() changeSelectedProductsEvent = new EventEmitter<any>();


  dbTemp;
  preIncludeDB;
  preIncludeIncl;
  include;
  subscription:Subscription;


  constructor(private updateIncludesService:UpdateIncludesService) {
    this.dbTemp=[];
    this.dbTemp  = this.geDBData(db);


    this.subscription = this.updateIncludesService.getObject().subscribe(includeObj => {


      this.includeArr = includeObj;

      switch(this.typeArr) {
        case 'include':
          this.dbTemp.splice(this.updateDBList('pass', includeObj),1);
          break;

        case 'pass':
          this.dbTemp.splice(this.updateDBList('include', includeObj), 1);
          break;
        default:
          console.log("Exception: do not have typeArr");
      }



      });
  }


  ngOnInit() {


    this.preIncludeDB=[];
    this.preIncludeIncl=[];
    this.include = [];
  }

  geDBData(db):any[] {
    let newDB=[];
    for (let i in db) {
      newDB[i] = Object.assign({}, db[i]);
      newDB[i].status = false;
    }

    return newDB;
  }
  updateDBList(typeStr:string, includeObj) {
    for (let ii in this.dbTemp) {
      for (let iy in includeObj[typeStr]) {
        if (this.dbTemp[ii].id == includeObj[typeStr][iy].id) {
          return this.dbTemp.indexOf(this.dbTemp[ii]);
        }
      }
    }
  }

  selectProduct(product:any, source:any[], selectedProds:any[]) {
      let temp = source.find( x => x.sku == product.sku );
      product.status = true;
      if(selectedProds.find( x => x.sku == product.sku ) != temp && product.status == true) selectedProds.push(temp);
  }

  unselectProduct(product:any, selectedProds:any[]) {
    product.status = false;
    return selectedProds.filter(x => x.sku != product.sku );
  }

  toggle(product:any, source:any[], selectedProds:any[]) {
    let status:boolean;

    if(product.status) {
      selectedProds =  this.unselectProduct(product, selectedProds);

    } else {
      this.selectProduct(product, source, selectedProds);
    return selectedProds;

    }
    return selectedProds;
  }

  moveSelected(isDB:boolean, selectedProds:any[]) {
    if(isDB) {
      this.include = this.include.concat(selectedProds);
      this.include.forEach(x=>x.status =false);
      this.dbTemp = this.dbTemp.filter( x => selectedProds.indexOf(x) < 0 );

      this.preIncludeDB=[];
    }
    else {
      this.dbTemp = this.dbTemp.concat(selectedProds);
      this.dbTemp.forEach(x=>x.status =false);
      this.include = this.include.filter( x => selectedProds.indexOf(x) < 0 );
    }





    this.changeSelectedProductsEvent.emit({include:this.include, typeArr:this.typeArr});

  }




}
