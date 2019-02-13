import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiProvider {

  private apiUrl: string = environment.apiUrl

  constructor(public http: HttpClient) { }

  public get(endpoint: string) {
    return this.http.get(this.apiUrl + endpoint)
  }

}
