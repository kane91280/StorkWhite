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

module.exports = ".cvitae-container {\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .cvitae-container {\r\n        width: 1200px;\r\n    }\r\n}\r\n\r\n/*.cvitae-section-title {\r\n    color: #616477;\r\n    letter-spacing: 2px;\r\n    padding-bottom: 70px;\r\n    position : relative;\r\n    text-transform : uppercase;\r\n}*/\r\n\r\nh3 {\r\n    display: block;\r\n    /*font-size: 1.17em;*/\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n}\r\n\r\n.cvitae-about-me .info span {\r\n    display: table-cell;\r\n    position: relative;\r\n}\r\n\r\np {\r\n    color: #616477;\r\n    line-height: 1.5;\r\n}\r\n\r\n@media(max-width: 767px) { \r\n    .field-title {\r\n        width: auto;\r\n        font-size: 16px;\r\n        font-weight: 700;\r\n        margin-bottom: 20px;    \r\n    }\r\n}\r\n\r\n/*.cvitae-about-me .info span .ti-download:before {\r\n    content: \"\\e6a7\";\r\n}*/\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id = \"about\" class=\"cvitae-section cvitae-about-me \">\n  <div class=\"cvitae-container\">    \n    <!--h3 class=\"cvitae-section-title\">About me</h3-->\n\n    <div class=\"cvitae-section-content\">\n      <div class=\"content-left short-bio\">\n        <div class=\"pic\">\n          <img class=\"img-responsive\" src=\"assets/img/profile_image.jpg\" alt=\"Bio Pic\">\n        </div>\n        <p>\n          Advanced web developer with 12 years of experience in structuring, \n          developing &amp; implementing interactive website with the best \n          use of technology &amp; SEO to drive traffic.\n        </p>\n      </div>\n\n      <div class=\"content-right about\">\n        <h3 class=\"cvitae-section-title\">\n          About Me\n        </h3>\n        <p class=\"info\">\n          <span class=\"field-title\">Full Name</span> \n          <span class=\"field-separator\">:</span> \n          <span id=\"full-name\" class=\"field-value\" [innerHTML]=\"fullName\"></span>\n        </p>\n\n        <p class=\"info\">\n          <span class=\"field-title\">Address</span> \n          <span class=\"field-separator\">:</span> \n          <span id = \"address\" class=\"field-value\" [innerHTML] = \"address\" ></span>\n        </p>\n\n        <p class=\"info\">\n            <span class=\"field-title\">Address</span> \n            <span class=\"field-separator\">:</span> \n            <span id = \"country\" class=\"field-value\" [innerHTML] = \"country\" ></span>\n        </p>\n      </div><!--end of content-right about-->\n      <div class=\"links\">\n        <a \n          download=\"dummy-resume.txt\" \n          onclick=\"Materialize.toast('Resume Download Successfully', 4000, 'rounded')\" \n          href=\"dummy-resume.txt\" class=\"tooltipped\" data-position=\"left\" \n          data-delay=\"50\" data-tooltip=\"Download this Resume\" \n          data-tooltip-id=\"a2270d6e-7242-a8e3-653b-74d68f171123\">\n          <span class=\"ti-download\"></span>Download Resume\n        </a>       \n\n      </div>\n    </div><!--end of cvitae-section-content-->\n  </div><!--end of cvitae-container-->\n</div><!--end of id=\"about\" cvitae-section-->"

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

module.exports = "<div class=\"cvitae-site-container\">\n  <app-about></app-about>\n</div>  \n\n\n"

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
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
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
    PersonalInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PersonalInfoService);
    return PersonalInfoService;
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