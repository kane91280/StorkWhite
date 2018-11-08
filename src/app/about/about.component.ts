import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../personal-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  _fullName : string;
  _address : string;
  _zipCode : string;
  _country : string;

  get fullName() : string { return this._fullName; }
  get address() : string { return this._address; }
  get zipCode() : string { return this._zipCode; }
  get country() : string { return this._country; }

  constructor(personalInfoService : PersonalInfoService) {
    this._fullName = personalInfoService.getFullName();   
    this._address = personalInfoService.getAddress();
    this._zipCode = personalInfoService.getZipCode();
    this._country = personalInfoService.getCountry();
  }

  ngOnInit() {
  }
}
