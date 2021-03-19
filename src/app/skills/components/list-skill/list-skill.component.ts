import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListSkillContent } from '../../models/skills';

@Component({
  selector: 'app-list-skill',
  templateUrl: './list-skill.component.html',
  styleUrls: ['./list-skill.component.less']
})
export class ListSkillComponent implements OnInit {

  private skills: ListSkillContent[];

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  async ngOnInit() {
    const json = `assets/json/${this.activatedRoute.routeConfig.path}.json`
    this.skills = await this.httpClient.get<ListSkillContent[]>(json).toPromise();
    console.log(this.skills);

  }

  public coverSkill(imageSrc: string): string {
    return `assets/${imageSrc}`;
  }

}
