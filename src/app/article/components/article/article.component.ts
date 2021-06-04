import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Skill } from 'src/app/skills/models/skills';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  public skill: Skill;
  public skillName: string;
  private _subscription: Subscription;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }


  async ngOnInit() {
    this._subscription =
      this.route.params.subscribe(value => {
        this.skillName = value.skill;
      })

    const json = `assets/json/${this.skillName}.json`;
    this.skill = await this.httpClient.get<Skill>(json).toPromise();
  }

  public getSubSkillContent(content: string[]): string {
    return content.join("");
  }

  public redirect(redirect: string) {
    this.router.navigate([redirect]);
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

}
