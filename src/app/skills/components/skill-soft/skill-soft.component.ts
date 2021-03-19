import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../../models/skills';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skill-soft',
  templateUrl: './skill-soft.component.html',
  styleUrls: ['./skill-soft.component.less']
})
export class SkillSoftComponent implements OnInit, OnDestroy {

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
    return content.join(" ");
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
