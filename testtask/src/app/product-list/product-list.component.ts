import { Component, OnInit } from '@angular/core';

import {db} from '../shared/db';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  db;


  ngOnInit() {
    this.db = db;
  }

}
