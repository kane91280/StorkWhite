import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  _skills : string[];
  _skillRatings : any[];

  get skills() : string[] { return this._skills; }
  get skillRatings() : any[] { return this._skillRatings; }

  constructor(skillsService : SkillsService) { 
    this._skills = skillsService.getSkillList();
    this._skillRatings = skillsService.getSkillRatings();
  }

  ngOnInit() {
  }

}
