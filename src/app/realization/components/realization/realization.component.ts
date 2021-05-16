import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Skill } from 'src/app/skills/models/skills';

@Component({
  selector: 'app-realization',
  templateUrl: './realization.component.html',
  styleUrls: ['./realization.component.less']
})
export class RealizationComponent implements OnInit {

  public skill: Skill;
  public skillName: string;
  private _subscription: Subscription;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }


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

  public ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }

}
