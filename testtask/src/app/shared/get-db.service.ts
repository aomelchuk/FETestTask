import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetDbService {
  sourceUrl = 'https://raw.githubusercontent.com/makedonmax/test_data/master/data.txt';
  db=[];

  constructor(private http: HttpClient) {
    /*this.get().subscribe(data=>{
      this.db = data
      console.log(this.db);
    });*/
  }
  public getDb() {
    return this.db;
  }
  public get():Observable<any> {
    console.log("zapros");
    return this.http.get(this.sourceUrl).pipe(map(res=>this.db = res as any[]))
  }


}
