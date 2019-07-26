import { Input, Output, Component, OnInit, EventEmitter, OnChanges, ChangeDetectionStrategy  } from '@angular/core';


import {db} from '../shared/db';

@Component({
  selector: 'ip-template',
  templateUrl: './ip-template.component.html',
  styleUrls: ['./ip-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IpTemplateComponent implements OnInit {

  @Input() includeArr:any[];

  @Input() typeArr:string;

  @Output() changeSelectedProductsEvent = new EventEmitter<any>();


  dbTemp;
  preIncludeDB;
  preIncludeIncl;
  include;

  ngOnChanges(...args: any[]) {
    console.log('changing', args);
  }
  ngOnInit() {
    this.dbTemp=[];
    this.dbTemp  = this.geDBData(db);

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
    console.log(this.includeArr);
    if(this.includeArr['include'] !=[] || this.includeArr['include'] != undefined) newDB = newDB.filter(x =>  this.includeArr['include'].indexOf(x) < 0 );
    if(this.includeArr['pass'] !=[] || this.includeArr['pass'] != undefined) newDB = newDB.filter(x =>   this.includeArr['pass'].indexOf(x) < 0 );

    return newDB;
  }

  selectProduct(product:any, source:any[], selectedProds:any[]) {
      let temp = source.find( x => x.sku == product.sku );

      if(selectedProds.find( x => x.sku == product.sku ) != temp)selectedProds.push(temp);
      product.status = true;



  }

  unselectProduct(product:any, selectedProds:any[]) {
    selectedProds = selectedProds.filter(x => x.sku != product.sku );
    product.status = false;


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


      if(this.includeArr['include'] != null || this.includeArr['include'] != undefined) {
        this.includeArr['include'].push(this.include);
        this.dbTemp = this.dbTemp.filter(x => this.includeArr['include'].indexOf(x) < 0);
      }
    if(this.includeArr['pass'] != null || this.includeArr['pass'] != undefined) {
      this.includeArr['pass'].push(this.include);
      this.dbTemp = this.dbTemp.filter(x => this.includeArr['pass'].indexOf(x) < 0);
    }

    console.log(this.typeArr);
    console.log(this.includeArr);


    this.changeSelectedProductsEvent.emit(this.include);

  }

  constructor() { }



}
