import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListArticle } from '../../models/article';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.less']
})
export class ListArticleComponent implements OnInit {

  public articles: ListArticle;

  constructor(private activatedRoute: ActivatedRoute,private route: Router, private httpClient: HttpClient) { }

  async ngOnInit() {
    const urlSplit = this.route.url.split("/");
    const json = `assets/json/${urlSplit[urlSplit.length - 1]}.json`
    this.articles = await this.httpClient.get<ListArticle>(json).toPromise();
  }

  public coverSkill(imageSrc: string): string {
    return `assets/${imageSrc}`;
  }

}
