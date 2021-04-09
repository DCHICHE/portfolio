import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListArticle } from '../../models/article';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.less']
})
export class ListArticleComponent implements OnInit {

  private articles: ListArticle[];

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  async ngOnInit() {
    const json = `assets/json/${this.activatedRoute.routeConfig.path}.json`
    this.articles = await this.httpClient.get<ListArticle[]>(json).toPromise();
  }

  public coverSkill(imageSrc: string): string {
    return `assets/${imageSrc}`;
  }

}
