import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../../models/skills';

@Component({
  selector: 'app-skill-soft',
  templateUrl: './skill-soft.component.html',
  styleUrls: ['./skill-soft.component.less']
})
export class SkillSoftComponent implements OnInit {

  public skill: Skill;
  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    this.skill = await this.httpClient.get<Skill>("assets/json/esprit-d'equipe.json").toPromise();
  }

  public getSubSkillContent(content: string[]): string {
    return content.join(" ");
  }

}
