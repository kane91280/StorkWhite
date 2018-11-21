import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkillList() : string[] {
    let skills : string[] = [
      "Web front and back-end application",
      "Desktop Qt C++ development",
      "Relational databases, NoSQL databases",
      "DevOps: AWS EC2, Linux OS, Apache2, IIS",
      "Version controls: Git"
    ];
    return skills;
  }

  getSkillRatings() : any[] {
    let ratings : any[] = [
      { skill :"Angular", rate: 75},
      { skill :"Nodejs", rate: 80},
      { skill :"Laravel", rate: 50},       
      { skill :"Databases", rate: 70},
      { skill :"DevOps", rate: 60},  
    ]
    return ratings;
  }
}
