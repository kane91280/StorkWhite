import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  _skills : string[];

  get skills() : string[] { return this._skills; }

  constructor(skillsService : SkillsService) { 
    this._skills = skillsService.getSkillList();
  }

  ngOnInit() {
  }

}
