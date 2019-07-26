import { Input,Component, OnInit } from '@angular/core';

import {db} from '../shared/db';

@Component({
  selector: 'ip-template',
  templateUrl: './ip-template.component.html',
  styleUrls: ['./ip-template.component.scss']
})
export class IpTemplateComponent implements OnInit {

  @Input() includeArr:any[];
  @Input() typeArr:string;


  dbTemp;
  preIncludeDB;
  preIncludeIncl;
  include;


  ngOnInit() {
    this.dbTemp=[];
    this.dbTemp  = this.geDBData(db);


    console.log(db[1]);

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

      if(selectedProds.find( x => x.sku == product.sku ) != temp)selectedProds.push(temp);
      product.status = true;

      console.log("where is action, Billy?");
      console.log(this.typeArr);
      console.log(product);

  }

  unselectProduct(product:any, selectedProds:any[]) {
    selectedProds = selectedProds.filter(x => x.sku != product.sku );
    product.status = false;

    console.log("where is another action, Billy?");
    console.log(this.typeArr);
    console.log(product);

  }

  toggle(product:any, source:any[], selectedProds:any[]) {
    let status:boolean;

   // if(selectedProds.find( x => x.sku == product.sku )!= undefined) {
    if(product.status) {
      this.unselectProduct(product, selectedProds);

    } else {
      this.selectProduct(product, source, selectedProds);
    }

  }

  moveSelected(isDB:boolean, selectedProds:any[]) {
    if(isDB) {
      this.include = this.include.concat(selectedProds);
      this.include.forEach(function(element){
        element.status = false;
      });
      this.dbTemp = this.dbTemp.filter( x => selectedProds.indexOf(x) < 0 );

      this.preIncludeDB=[];
    }
    else {
      this.dbTemp = this.dbTemp.concat(selectedProds);
      this.dbTemp.forEach(x=>x.status =false);
      this.include = this.include.filter( x => selectedProds.indexOf(x) < 0 );

    }

  }

  constructor() { }



}
