(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about-details .collection .collection-item.avatar {\r\n    min-height: 84px;\r\n    margin-left: 38px;\r\n    padding-left: 0px;\r\n    position: relative;\r\n    color: #9e9e9e;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    #about-image .card.large {\r\n        height : auto;\r\n    }\r\n    #about-image {        \r\n        height: auto;\r\n        border-bottom: 1px solid #e0e0e0;       \r\n    }\r\n    #about-image .card.large {        \r\n        margin-bottom: 0;        \r\n    }    \r\n    #about-social ul {\r\n        margin-bottom: 0;\r\n        border-top: 1px solid #eeeeee  ;\r\n    }\r\n\r\n    #about-social ul li {\r\n        padding-bottom: 0;\r\n        margin-bottom: 0;\r\n        border-bottom: 0;\r\n        border-right: 1px solid #eeeeee  ;\r\n    }\r\n    #about-image {\r\n        display: inline-block;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\" id=\"about-section\">\n  <div class=\"col s12 section-wrapper\">    \n      <div class=\"row z-depth-1\" id=\"about-wrapper\">\n        <div class=\"col s12 m4 section-left-col\" id=\"about-image\">\n          <div class=\"card large z-depth-0\">\n            <div class=\"card-image\">\n              <img src=\"../../assets/img/profile_image.jpg\" alt=\"\">\n              <span class=\"card-title\">Anh Khoa</span>\n            </div><!--end of card-image-->\n            <div class=\"card-content\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n                In, voluptatum soluta aspernatur quod quaerat saepe accusamus ducimus dolore commodi, rem. <br>\n                In, voluptatum soluta aspernatur quod quaerat saepe accusamus ducimus dolore commodi, rem.\n              </p>\n            </div>\n          </div><!--end of card large-->\n        </div><!--end of about-image-->\n        <div class=\"col s12 m7\" id=\"about-details\">\n          <h3 class=\"section-title\">\n            About me\n          </h3>\n          <div class=\"row\" \n            style=\"margin-bottom: 0; padding-bottom:0;\">            \n            <ul class=\"collection col s12 m11\">\n              <li class=\"collection-item avatar\">\n                <i class=\"material-icons small grey-text\">account_circle</i>\n                <span class=\"title\" style=\"padding: 0; margin: -10px 0 0 5px;\">\n                  Full name\n                </span>   \n                <p>\n                  {{fullName}}\n                </p>          \n                <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n              </li>\n              <li class=\"collection-item avatar\">\n                  <i class=\"material-icons small grey-text\">location_on</i>\n                  <span class=\"title\">\n                    Address\n                  </span>   \n                  <p>\n                    {{address + \", \" + country + \". zip: \" + zipCode}}\n                  </p>          \n                  <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n                </li>                               \n                <li class=\"collection-item avatar\">\n                  <i class=\"material-icons small grey-text\">phone_iphone</i>\n                  <span class=\"title\">\n                    Phone\n                  </span>   \n                  <p>\n                    {{phone}}\n                  </p>          \n                  <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n                </li>\n                <li class=\"collection-item avatar\">\n                    <i class=\"material-icons small grey-text\">email</i>\n                    <span class=\"title\">\n                      Email\n                    </span>   \n                    <p>\n                      {{email}}\n                    </p>          \n                    <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n                  </li>\n            </ul>            \n          </div>\n        </div><!--end of about-details-->\n        <div class=\"col s12 m1\" id=\"about-social\"> \n          <div class=\" row\" style=\"margin-bottom: 0px;\">                          \n            <ul class=\"collection about-social-collection\" style=\"margin-top: 0;\">\n            \n              <li class=\"col s2 m12 collection-item avatar tooltipped\" onclick=\"Materialize.toast('Successfully downloaed resume', 4000, 'rounded')\"\n                data-position=\"left\" data-tooltip=\"Download resume\"\n              >      \n                <a href=\"/dummy_resume.txt\">\n                  <span class=\"ti-download grey-text\"></span>                                                                                        \n                </a>\n              </li>        \n              <li class=\"col s2 m12 collection-item avatar tooltipped\" data-position=\"left\" data-tooltip=\"Fork me on github\">      \n                  <a href=\"#\">                  \n                    <span class=\"ti-github grey-text\"></span>                                              \n                  </a>                        \n              </li>   \n              <li class=\"col s2 m12 collection-item avatar tooltipped\" data-position=\"left\" data-tooltip=\"Follow on linkedin\">      \n                  <a href=\"#\">                  \n                    <span class=\"ti-linkedin grey-text\"></span>                                              \n                  </a>                        \n              </li>   \n              <li class=\"col s2 m12 collection-item avatar tooltipped\" data-position=\"left\" data-tooltip=\"Follow on twitter\">      \n                  <a href=\"#\">                  \n                    <span class=\"ti-twitter grey-text\"></span>                                              \n                  </a>                        \n              </li>   \n              <li class=\"col s2 m12 collection-item avatar tooltipped\" data-position=\"left\" data-tooltip=\"Follow on facebook\">      \n                  <a href=\"#\">                  \n                    <span class=\"ti-facebook grey-text\"></span>                                              \n                  </a>                        \n              </li>   \n              <li class=\"col s2 m12 collection-item avatar tooltipped\" data-position=\"left\" data-tooltip=\"Connect with me on skype\"\n                style=\"border:none;\"\n              >      \n                  <a href=\"#\">                  \n                    <span class=\"ti-skype grey-text\"></span>                                              \n                  </a>                        \n              </li>          \n            \n            </ul>              \n          </div>  \n        </div><!--end of about-social-->\n      </div><!--end of about-wrapper-->    \n  </div>\n</div><!--end of about-container-->"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _personal_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../personal-info.service */ "./src/app/personal-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(personalInfoService) {
        this._fullName = personalInfoService.getFullName();
        this._address = personalInfoService.getAddress();
        this._zipCode = personalInfoService.getZipCode();
        this._country = personalInfoService.getCountry();
        this._phone = personalInfoService.getPhone();
        this._email = personalInfoService.getEmail();
    }
    Object.defineProperty(AboutComponent.prototype, "fullName", {
        get: function () { return this._fullName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutComponent.prototype, "address", {
        get: function () { return this._address; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutComponent.prototype, "zipCode", {
        get: function () { return this._zipCode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutComponent.prototype, "country", {
        get: function () { return this._country; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutComponent.prototype, "phone", {
        get: function () { return this._phone; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutComponent.prototype, "email", {
        get: function () { return this._email; },
        enumerable: true,
        configurable: true
    });
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_personal_info_service__WEBPACK_IMPORTED_MODULE_1__["PersonalInfoService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/achievements/achievements.component.css":
/*!*********************************************************!*\
  !*** ./src/app/achievements/achievements.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#achievements {\r\n    /*padding: 70px 0;*/\r\n    padding: 0;\r\n    background-attachment: fixed;\r\n    background-image:url('achievement-background.jpg'); \r\n}\r\n\r\n#achievements:before {\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDMjMzQzZFMDExNjExRTZCMkVEOTNERjhGRjcyNTBDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDMjMzQzZGMDExNjExRTZCMkVEOTNERjhGRjcyNTBDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEMyMzNDNkMwMTE2MTFFNkIyRUQ5M0RGOEZGNzI1MEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEMyMzNDNkQwMTE2MTFFNkIyRUQ5M0RGOEZGNzI1MEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5zAmdsAAAOiUlEQVR42uxd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);\r\n    z-index: -1;\r\n}\r\n\r\n#achievements:after, #achievements:before {\r\n    content: '';\r\n    width: 100%;\r\n    top: 0;\r\n    height: 100%;\r\n    /*position: relative;*/\r\n    display: block;\r\n}\r\n\r\n*, :after, :before {    \r\n    box-sizing: border-box;\r\n}"

/***/ }),

/***/ "./src/app/achievements/achievements.component.html":
/*!**********************************************************!*\
  !*** ./src/app/achievements/achievements.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 section-wrapper\" id=\"achievements\">  \n    \n  </div>  \n  <div class=\"parallax\"></div>\n</div>"

/***/ }),

/***/ "./src/app/achievements/achievements.component.ts":
/*!********************************************************!*\
  !*** ./src/app/achievements/achievements.component.ts ***!
  \********************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent() {
    }
    AchievementsComponent.prototype.ngOnInit = function () {
    };
    AchievementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-achievements',
            template: __webpack_require__(/*! ./achievements.component.html */ "./src/app/achievements/achievements.component.html"),
            styles: [__webpack_require__(/*! ./achievements.component.css */ "./src/app/achievements/achievements.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AchievementsComponent);
    return AchievementsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\">\n  <div class=\"content-wrapper\">\n    <app-about></app-about>\n    <app-skills></app-skills>       \n  </div>\n  <app-achievements></app-achievements> \n</div>  \n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"],
                _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_5__["AchievementsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/personal-info.service.ts":
/*!******************************************!*\
  !*** ./src/app/personal-info.service.ts ***!
  \******************************************/
/*! exports provided: PersonalInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoService", function() { return PersonalInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalInfoService = /** @class */ (function () {
    function PersonalInfoService() {
    }
    PersonalInfoService.prototype.getFullName = function () { return "Dang, Nguyen Anh Khoa"; };
    PersonalInfoService.prototype.getAddress = function () { return "23, alley 612/1, Lac Long Quan, Tay Ho, Hanoi"; };
    PersonalInfoService.prototype.getZipCode = function () { return "24000"; };
    PersonalInfoService.prototype.getCountry = function () { return "Vietnam"; };
    PersonalInfoService.prototype.getPhone = function () { return "+(84)-08686-99599"; };
    PersonalInfoService.prototype.getEmail = function () { return "anhkhoa91280@gmail.com"; };
    PersonalInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PersonalInfoService);
    return PersonalInfoService;
}());



/***/ }),

/***/ "./src/app/skills.service.ts":
/*!***********************************!*\
  !*** ./src/app/skills.service.ts ***!
  \***********************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsService = /** @class */ (function () {
    function SkillsService() {
    }
    SkillsService.prototype.getSkillList = function () {
        var skills = [
            "Web front and back-end application",
            "Desktop Qt C++ development",
            "Relational databases, NoSQL databases",
            "DevOps: AWS EC2, Linux OS, Apache2, IIS",
            "Version controls: Git"
        ];
        return skills;
    };
    SkillsService.prototype.getSkillRatings = function () {
        var ratings = [
            { skill: "Angular", rate: 75 },
            { skill: "Nodejs", rate: 80 },
            { skill: "Laravel", rate: 50 },
            { skill: "Databases", rate: 70 },
            { skill: "DevOps", rate: 60 },
        ];
        return ratings;
    };
    SkillsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SkillsService);
    return SkillsService;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#skills-rate {\r\n    margin-top: 18px;\r\n    margin-bottom: 13px;\r\n}\r\n\r\n.collection {\r\n    float: right;\r\n}\r\n\r\n.collection .collection-item {\r\n    background-color: #fff;\r\n    line-height: 1.5rem;\r\n    padding: 16px 6px;\r\n    margin: 0;\r\n    color: #bdbdbd;\r\n    border-bottom: 1px solid #eeeeee;\r\n}\r\n\r\n.collection .collection-item:last-child {\r\n    border-bottom: none !important;\r\n}\r\n\r\n.progress-bar-container {\r\n    border: none !important;    \r\n    margin-bottom: -35px !important;\r\n}\r\n\r\n.progress-title {\r\n    color: #747474;\r\n    font-size: 14px;\r\n    letter-spacing: 2px;\r\n    text-transform: capitalize;\r\n    top: 1px;\r\n    margin-left: 45px;\r\n}\r\n\r\n.progress-bar-wrapper-layout {\r\n    width:68% !important;\r\n    margin-left: 39px !important;\r\n}\r\n\r\n.progress-bar {\r\n    height: 18px; \r\n    padding-top: 0px;    \r\n    background: #eeeeee; \r\n    margin-top:31px;    \r\n    font-size: 12px;\r\n    text-align: center;\r\n    color: #fff;\r\n    border-radius: 25px 0 50px 25px;\r\n}\r\n\r\n.progress {    \r\n    position: relative;\r\n    /*height: auto;*/\r\n    height: 18px;\r\n    margin-bottom: 0;\r\n    width: 0px;    \r\n    background-color: #e0e0e0;      \r\n    border-radius: 25px 0 50px 25px;   \r\n}\r\n\r\n@media only screen and (max-width: 767px) {        \r\n    .progress-bar-container {        \r\n        margin-bottom: -25px !important;\r\n    }\r\n    .collection .collection-item {               \r\n        padding: 10px 0px;       \r\n    }\r\n    .progress-bar-wrapper-layout[_ngcontent-c2] {       \r\n        margin-top: -27px;\r\n    }\r\n    .section-left-col {  \r\n        border-right: none;      \r\n        margin-bottom: -64px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content-section\" id=\"skills-section\">\n  <div class=\"col s12 section-wrapper\">\n    <div class=\"row z-depth-1\" id=\"skills-wrapper\">\n      <div class=\"col m4 s12 section-left-col\" id=\"skills-list\">\n        <h3 class=\"section-title\">Skills</h3>\n        <div class=\"row\">\n          <ul class=\"collection col m11 s11\">\n            <li class=\"collection-item\" *ngFor=\"let skill of skills\">\n              {{skill}}\n            </li>            \n          </ul>\n        </div>\n      </div><!--end of skills-list-->\n\n      <div class=\"col m8 s12\" id=\"skills-rate\">                   \n        <div class=\"row\">\n          <ul class=\"collection col m12 s12\">\n            <li class=\"collection-item progress-bar-container\" *ngFor=\"let rating of skillRatings\">                          \n              <div class=\"row\">\n                  <div class=\"col m2 s12\">\n                    <h3 class=\"progress-title\">{{rating.skill}}</h3>\n                  </div>\n                  <div class=\"col m9 s12 progress-bar-wrapper-layout\">\n                    <div class=\"progress-bar-wrapper\">              \n                      <div class=\"progress-bar\">\n                        <div class=\"progress\" [attr.value]=\"rating.rate\" [attr.id]=\"rating.skill\">\n                          \n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>            \n            </li><!--end of progress-bar-container-->\n          </ul>   \n        </div>\n      </div><!--end of skills-rate-->  \n    </div><!--end of skill-wrapper-->\n  </div><!--end of section wrapper-->\n</div><!--end of content-section-->\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skills.service */ "./src/app/skills.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillsService) {
        this._skills = skillsService.getSkillList();
        this._skillRatings = skillsService.getSkillRatings();
    }
    Object.defineProperty(SkillsComponent.prototype, "skills", {
        get: function () { return this._skills; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillsComponent.prototype, "skillRatings", {
        get: function () { return this._skillRatings; },
        enumerable: true,
        configurable: true
    });
    /*@HostListener('mouseenter') doMouseEnter() {
      console.log('mouse entered');
    }
    @HostListener('mouseleave') doMouseLeave() {
      console.log('mouse left');
    }*/
    SkillsComponent.prototype.ngOnInit = function () {
        /*$(document).ready(function(){
          console.log('in skills rating');
        });*/
        /*function test() {
          console.log('testing');
        }*/
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillsService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\UpgradingSkills\FrontEnd\Angular\storkwhite-project\storkwhite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map