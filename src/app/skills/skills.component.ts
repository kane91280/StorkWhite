import { Component, OnInit, Testability } from '@angular/core';
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

  test() {
    //console.log('test');
    this.isScrollIntoView();
  }

  isScrollIntoView(){
    /*let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();

    console.log("top " + docViewTop);
    console.log("bottom " + docViewBottom);*/
  }

  ngOnInit() {
    /*$(document).ready(function(){
      console.log('in skills rating');
    });*/
    /*function test() {
      console.log('testing');
    }*/
  }

}
