import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor() { }

  getFullName() : string { return "Dang, Nguyen Anh Khoa"; }
  getAddress() : string { return "23, alley 612/1, Lac Long Quan, Tay Ho, Hanoi"; }
  getZipCode() : string { return "24000"; }
  getCountry() : string { return "Vietnam"; }
}
