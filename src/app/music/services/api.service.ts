import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

	clientId = '2f98992c40b8edf17423d93bda2e04ab';

  constructor(private http: HttpClient) { }

  get(url, attachClientId?) {
  	let m;
  	attachClientId ? m = this.prepareUrl(url) : m = url;

  	return this.http.get(m);
  }

  prepareUrl(url){
  	return `${url}?client_id=${this.clientId}`
  }

}
