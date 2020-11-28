import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private api = 'http://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=92a1dcb01f9445df9552e934792b300e';

  constructor(public http:HttpClient) { }

  public getNews() {
    let news = this.api

    return this.http.get(news)
  }
}
