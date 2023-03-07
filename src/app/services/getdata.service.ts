import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getData(param: string){
    
    return this.http.post('http://127.0.0.1:5000/get_results', param);
  }
}
