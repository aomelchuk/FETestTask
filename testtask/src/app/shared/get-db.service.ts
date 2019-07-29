import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDbService {
  sourceUrl = 'https://raw.githubusercontent.com/makedonmax/test_data/master/data.txt';


  constructor(private http: HttpClient) {

  }
  public get():Observable<any> {
    return this.http.get(this.sourceUrl);
  }


}
