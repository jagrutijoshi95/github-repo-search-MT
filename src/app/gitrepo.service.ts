import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private readonly apiRoot = 'https://api.github.com/search';
  constructor(private http: HttpClient) {}

  getRepoByKeyword(keyword: any): Observable<any> {
    console.log('calling..' + keyword);
    const url = `${this.apiRoot}/repositories?per_page=10&q=${keyword}`;
    // const url = `${this.apiRoot}/repositories?per_page=10&q=java`;

    return this.http.get<any>(url);
  }
}
