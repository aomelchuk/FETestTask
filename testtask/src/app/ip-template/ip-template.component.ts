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

      console.log('this.typeArr +',this.typeArr);



      this.includeArr = includeObj;

      if (this.typeArr == 'include') {

        //this.dbTemp = this.dbTemp.filter(x => includeObj['pass'].indexOf(x)<0);
      }
      if (this.typeArr == 'pass') {

        for (let ii in this.dbTemp ) {
          for (let iy in includeObj['include']) {
            console.log('this.dbTemp[ii].id + ', this.dbTemp[ii].id);
            console.log('includeObj[include][iy.id]', includeObj['include'][iy].id);
              if(this.dbTemp[ii].id == includeObj['include'][iy].id) console.log(this.dbTemp[ii].id);

          }
        }


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

  selectProduct(product:any, source:any[], selectedProds:any[]) {
      let temp = source.find( x => x.sku == product.sku );
      product.status = true;
      if(selectedProds.find( x => x.sku == product.sku ) != temp && product.status == true) selectedProds.push(temp);
  }

  unselectProduct(product:any, selectedProds:any[]) {
    product.status = false;
   // console.log(selectedProds.filter(x => x.sku != product.sku ));
    return selectedProds.filter(x => x.sku != product.sku );
  }

  toggle(product:any, source:any[], selectedProds:any[]) {
    let status:boolean;

    if(product.status) {
      selectedProds =  this.unselectProduct(product, selectedProds);
      console.log(selectedProds);
      console.log(this.preIncludeDB);
      console.log( this.preIncludeIncl);

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
