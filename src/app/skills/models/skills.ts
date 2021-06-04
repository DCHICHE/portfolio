export interface Skill {
  mainTitle: string;
  subTitle: string;
  content: SkillContent[];
  linkedProject: LinkedSkill[];
}

export interface SkillContent {
  subTitle: string;
  subContent: string[];
}

export interface ListSkill {
  name: string;
  skills: ListSkillContent[]
}

export interface ListSkillContent {
  name: string;
  redirect: string;
  image: string;
}

export interface LinkedSkill {
  name: string;
  redirect: string;
}
