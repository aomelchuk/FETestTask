import {Input, Output, Component, OnInit, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';

import {GetDbService} from '../shared/get-db.service';
import {UpdateIncludesService} from '../shared/update-includes.service';

@Component({
  selector: 'ip-template',
  templateUrl: './ip-template.component.html',
  styleUrls: ['./ip-template.component.scss']

})
export class IpTemplateComponent implements OnInit {

  @Input() includeArr:any;
  @Input() typeArr:string;
  @Input() db;

  @Output() changeSelectedProductsEvent = new EventEmitter<any>();


  dbTemp;
  preIncludeDB;
  preIncludeIncl;
  include;
  includeBuff;
  subscription:Subscription;


  constructor(private getDbService:GetDbService, private updateIncludesService:UpdateIncludesService) {
    this.dbTemp = [];



   this.getDbService.get().subscribe(data=>{
      this.dbTemp = this.geDBData(data);
    });

    this.subscription = this.updateIncludesService.getObject().subscribe(res => {

      console.log(res)

      switch (this.typeArr) {
        case 'include':
        this.updateDBList('pass', res.includeObj, res.includeBuff);
          break;

        case 'pass':
          this.updateDBList('include', res.includeObj, res.includeBuff);
          break;
        default:
          console.log("Exception: do not have typeArr");
      }


    });
  }

  ngOnInit() {
    this.preIncludeDB = [];
    this.preIncludeIncl = [];
    this.include = [];
  }

  geDBData(db):any[] {
    let newDB = [];
    for (let i in db) {
      newDB[i] = Object.assign({}, db[i]);
      newDB[i].status = false;
    }
    return newDB;
  }


  updateDBList(typeStr:string, includeObj, includeBuff) {

    if (includeObj[typeStr].length != 0) {
      for (let iy in includeObj[typeStr]) {
        for (let ii in this.dbTemp) {
          if (this.dbTemp[ii].id == includeObj[typeStr][iy].id) {
            this.dbTemp.splice(this.dbTemp.indexOf(this.dbTemp[ii]), 1);
          }
        }
      }
    } else {

      if (this.dbTemp.length == 0) this.dbTemp = this.geDBData(includeBuff);
      else {
        for (let iy in includeBuff) {
          if (!this.dbTemp.find(x => x.id == includeBuff[iy].id)) this.dbTemp = this.dbTemp.concat(includeBuff[iy]);
        }
      }
    }
  }

  selectProduct(product:any, source:any[], selectedProds:any[]) {
    let temp = source.find(x => x.sku == product.sku);
    product.status = true;
    if (selectedProds.find(x => x.sku == product.sku) != temp && product.status == true) selectedProds.push(temp);
  }

  unselectProduct(product:any, selectedProds:any[]) {
    product.status = false;
    return selectedProds.filter(x => x.sku != product.sku);
  }

  toggle(product:any, source:any[], selectedProds:any[]) {
    let status:boolean;

    if (product.status) {
      selectedProds = this.unselectProduct(product, selectedProds);

    } else {
      this.selectProduct(product, source, selectedProds);
      return selectedProds;

    }
    return selectedProds;
  }

  moveSelected(isDB:boolean, selectedProds:any[]) {
    this.includeBuff = this.include;
    if (isDB) {
      this.include = this.include.concat(selectedProds);
      this.include.forEach(x=>x.status = false);
      this.dbTemp = this.dbTemp.filter(x => selectedProds.indexOf(x) < 0);
      this.preIncludeDB = [];
    }
    else {
      this.dbTemp = this.dbTemp.concat(selectedProds);
      this.dbTemp.forEach(x=>x.status = false);
      this.includeBuff = this.include;
      this.include = this.include.filter(x => selectedProds.indexOf(x) < 0);
    }


    this.changeSelectedProductsEvent.emit({include: this.include, typeArr: this.typeArr, includeBuff:this.includeBuff});

  }

  moveAll(isDB:boolean, dbRes) {
    this.moveSelected(isDB, dbRes);

  };
}
