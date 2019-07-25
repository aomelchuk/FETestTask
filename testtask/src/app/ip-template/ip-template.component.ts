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


  toggle() {

  }


  constructor() { }

  db;


  ngOnInit() {
    this.db = db;
  }

}
