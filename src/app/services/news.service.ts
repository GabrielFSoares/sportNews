import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private api = 'http://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=93vddcb01f9345df5552ed3f5768g300e'; //chave fictícia

  constructor(public http:HttpClient) { }

  public getNews() {
    let news = this.api

    return this.http.get(news)
  }
}
