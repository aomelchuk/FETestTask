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

  db;
  preInclude;
  include;

  ngOnInit() {
    this.db = db;
    for (let i in this.db) {
      this.db[i].status = false;
    }
    this.preInclude=[];
    this.include = [];
  }


  selectProduct(product:any) {

      let temp = this.db.find( x => x.sku == product.sku );

      this.preInclude.push(temp);
      product.status = true;
      console.log(this.preInclude);
  }
  unselectProduct(product:any) {
    //let temp = this.preInclude.find( x => x.sku == product.sku );
    this.preInclude = this.preInclude.filter(x => x.sku != product.sku );
    product.status = false;
    console.log(this.preInclude);
  }

  toggle(product:any) {
    let status:boolean;
    console.log(this.preInclude.find( x => x.sku == product.sku ));
    if(this.preInclude.find( x => x.sku == product.sku )!= undefined) {
      this.unselectProduct(product);

    } else {
      this.selectProduct(product);

    }
    return status;
  }

  moveSelected(arrayType:string) {
    if(arrayType == 'firstArr') {
      this.include = this.include.concat(this.preInclude);
      this.include.forEach(function(element){
        element.status = false;
      });
      this.db = this.db.filter( x => this.preInclude.indexOf(x) < 0 );

      this.preInclude=[];

    }

  }

  constructor() { }



}
