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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _princeton_princeton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./princeton/princeton.component */ "./src/app/princeton/princeton.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/maintenance/maintenance.component.ts");



// import { HomesComponent } from './homes/homes.component';

// import { BlackstoneComponent } from './blackstone/blackstone.component';



var routes = [
    // { path: 'homes', component: HomesComponent }, 
    { path: 'princeton', component: _princeton_princeton_component__WEBPACK_IMPORTED_MODULE_3__["PrincetonComponent"] },
    // { path: 'blackstone', component: BlackstoneComponent }, 
    { path: 'contacts', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'maintenance', component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__["MaintenanceComponent"] },
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled'
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-card {\n    margin: 15vh 10vw 2vh 10vw;\n    padding: 2vw;\n    display: grid;\n    align-content: center;\n    text-align: center;\n    justify-items: center;\n}\n\nh1 {\n    font-size: 30px;\n    font: bold;\n    margin: 4vh 0vh;\n}\n\nh2 {\n    font-size: 25px;\n}\n\nh3 {\n    font-size: 20px;\n}\n\n@media screen and (max-width: 1024px) {\n    .ui-card {\n        margin: 10vh 2vw 2vh 3vw;\n    }\n}\n\n@media screen and (max-width: 576px) {\n    .ui-card {\n        margin: 10vh 2vw 2vh 2vw;\n    }\n}\n\n@media screen and (max-width: 458px) {\n    .p-grid {\n        align-items: center;\n        justify-content: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWNhcmQge1xuICAgIG1hcmdpbjogMTV2aCAxMHZ3IDJ2aCAxMHZ3O1xuICAgIHBhZGRpbmc6IDJ2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQ6IGJvbGQ7XG4gICAgbWFyZ2luOiA0dmggMHZoO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAudWktY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMTB2aCAydncgMnZoIDN2dztcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgLnVpLWNhcmQge1xuICAgICAgICBtYXJnaW46IDEwdmggMnZ3IDJ2aCAydnc7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NThweCkge1xuICAgIC5wLWdyaWQge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _princeton_princeton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./princeton/princeton.component */ "./src/app/princeton/princeton.component.ts");
/* harmony import */ var _blackstone_blackstone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blackstone/blackstone.component */ "./src/app/blackstone/blackstone.component.ts");
/* harmony import */ var _homes_homes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homes/homes.component */ "./src/app/homes/homes.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/maintenance/maintenance.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/galleria */ "./node_modules/primeng/galleria.js");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_galleria__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-parallax */ "./node_modules/ngx-parallax/dist/bundle.js");
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_parallax__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
























// declare const require: any;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _princeton_princeton_component__WEBPACK_IMPORTED_MODULE_6__["PrincetonComponent"],
                _blackstone_blackstone_component__WEBPACK_IMPORTED_MODULE_7__["BlackstoneComponent"],
                _homes_homes_component__WEBPACK_IMPORTED_MODULE_8__["HomesComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_11__["MaintenanceComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_13__["TabMenuModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_14__["CardModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextareaModule"],
                primeng_galleria__WEBPACK_IMPORTED_MODULE_18__["GalleriaModule"],
                ngx_parallax__WEBPACK_IMPORTED_MODULE_19__["ParallaxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blackstone/blackstone.component.css":
/*!*****************************************************!*\
  !*** ./src/app/blackstone/blackstone.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JsYWNrc3RvbmUvYmxhY2tzdG9uZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blackstone/blackstone.component.html":
/*!******************************************************!*\
  !*** ./src/app/blackstone/blackstone.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card>\n    <p>\n        This is where info and pics for blackstone will go\n    </p>\n</p-card>\n"

/***/ }),

/***/ "./src/app/blackstone/blackstone.component.ts":
/*!****************************************************!*\
  !*** ./src/app/blackstone/blackstone.component.ts ***!
  \****************************************************/
/*! exports provided: BlackstoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackstoneComponent", function() { return BlackstoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlackstoneComponent = /** @class */ (function () {
    function BlackstoneComponent() {
    }
    BlackstoneComponent.prototype.ngOnInit = function () {
    };
    BlackstoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blackstone',
            template: __webpack_require__(/*! ./blackstone.component.html */ "./src/app/blackstone/blackstone.component.html"),
            styles: [__webpack_require__(/*! ./blackstone.component.css */ "./src/app/blackstone/blackstone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlackstoneComponent);
    return BlackstoneComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n    padding: 2em;\n}\n\n.man, .woman {\n    width: 15em;\n    height: 15em;\n}\n\nh3 {\n    padding: 4vh 0vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0IHtcbiAgICBwYWRkaW5nOiAyZW07XG59XG5cbi5tYW4sIC53b21hbiB7XG4gICAgd2lkdGg6IDE1ZW07XG4gICAgaGVpZ2h0OiAxNWVtO1xufVxuXG5oMyB7XG4gICAgcGFkZGluZzogNHZoIDB2dztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card>\n  <h1>Contacts</h1>\n  <h3>For inquiries regarding this property, please contact us at LCAllcproperties@gmail.com</h3>\n  <div class=\"contact\">\n    <img src=\"../../assets/images/woman.png\" alt=\"woman\" class=\"woman\" />\n    <h2>Geri Price-Warner</h2>\n    <h3>Property Manager</h3>\n  </div>\n  <div class=\"contact\">\n    <img src=\"../../assets/images/man.png\" alt=\"man\" class=\"man\" />\n    <h2>Ryan Warner</h2>\n    <h3>Assistant Property Manager</h3>\n  </div>\n  <div class=\"contact\">\n    <img src=\"../../assets/images/man.png\" alt=\"man\" class=\"man\" />\n    <h2>Rashaun Warner</h2>\n    <h3>Web Developer</h3>\n  </div>\n</p-card>\n<!-- \n  - what content should be displayed. make mockups. \n  - email directly on page\n  - \n -->"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/emailService.service.ts":
/*!*****************************************!*\
  !*** ./src/app/emailService.service.ts ***!
  \*****************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/plain;charset=UTF-8' })
};
var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        // private emailUrl = 'http://localhost:3000/send-mail';  // URL to web api
        this.emailUrl = 'https://lca-email.herokuapp.com/send-mail';
    }
    EmailService.prototype.sendMaintenanceRequest = function (message) {
        this.http.post(this.emailUrl, message).subscribe(function (email) { return email; });
        console.log('email sent', message);
    };
    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\n    position: fixed;\n    top: 0;\n    left: 0; \n    right: 0;\n    background-color: rgb(65, 65, 107);\n    padding: 0vw 2vw;\n    z-index: 999;\n}\n\n.lca-logo {\n    border-color: black;\n    border-width: .1em;\n    border-style: solid;\n    height: 5em;\n    width: 20em;\n}\n\n.navbar-item {\n    color: white;\n    font-size: 1.5em;\n}\n\n.navbar-burger, .navbar-burger.is-active {\n    color: white;\n}\n\n.currentTabStyle {\n    text-decoration: underline;\n}\n\n@media screen and (max-width: 1024px) {\n    .navbar-item {\n        color: black;\n        font-size: 1em;\n    }\n}\n\n@media screen and (max-width: 576px) {\n    .lca-logo {\n        height: 2em;\n        width: 10em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDsgXG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgMTA3KTtcbiAgICBwYWRkaW5nOiAwdncgMnZ3O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmxjYS1sb2dvIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci13aWR0aDogLjFlbTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGhlaWdodDogNWVtO1xuICAgIHdpZHRoOiAyMGVtO1xufVxuXG4ubmF2YmFyLWl0ZW0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4ubmF2YmFyLWJ1cmdlciwgLm5hdmJhci1idXJnZXIuaXMtYWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXJyZW50VGFiU3R5bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubmF2YmFyLWl0ZW0ge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAubGNhLWxvZ28ge1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navigation navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a routerLink=\"/\">\n      <img src=\"../../assets/images/lca-logo.jpeg\" alt=\"logo\" class=\"lca-logo navbar-brand\" />\n    </a>\n    <a role=\"button\" #navBurger class=\"navbar-burger burger\" aria-label=\"menu\" aria-expanded=\"false\"\n       data-target=\"navbarBasicExample\" (click)=\"toggleMenu()\">\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n    </a>\n  </div>\n  <div id=\"navbarBasicExample\" class=\"navbar-menu\" #navMenu>\n    <div class=\"navbar-end\" (click)=\"toggleMenu()\">\n      <a\n        class=\"navbar-item\"\n        routerLink=\"/\"\n        [ngClass]=\"{ 'currentTabStyle' : currentTab('/')}\"\n        >\n        Home\n      </a>\n      <a\n        class=\"navbar-item\"\n        routerLink=\"/princeton\"\n        [ngClass]=\"{ 'currentTabStyle' : currentTab('/princeton')}\"\n      >\n        Princeton\n      </a>\n      <a\n        class=\"navbar-item\"\n        routerLink=\"/maintenance\"\n        [ngClass]=\"{ 'currentTabStyle' : currentTab('/maintenance')}\"\n        >\n        Maintenance\n      </a>\n      <a\n        class=\"navbar-item\"\n        routerLink=\"/contacts\"\n        [ngClass]=\"{ 'currentTabStyle' : currentTab('/contacts')}\"\n        >\n        Contact\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.title = 'LCA Apartments';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.navBurger.nativeElement.classList.toggle('is-active');
        this.navMenu.nativeElement.classList.toggle('is-active');
    };
    HeaderComponent.prototype.clickedBurgerNav = function () {
        this.navMenu.nativeElement.classList.toggle('is-active');
    };
    HeaderComponent.prototype.currentTab = function (tab) {
        return this.router.url.toString() === tab;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navBurger'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "navBurger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "navMenu", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homes/homes.component.css":
/*!*******************************************!*\
  !*** ./src/app/homes/homes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVzL2hvbWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homes/homes.component.html":
/*!********************************************!*\
  !*** ./src/app/homes/homes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card>\n  <p>\n    This is where info and pics for home rentals will go\n  </p>\n<p-card>\n\n"

/***/ }),

/***/ "./src/app/homes/homes.component.ts":
/*!******************************************!*\
  !*** ./src/app/homes/homes.component.ts ***!
  \******************************************/
/*! exports provided: HomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomesComponent", function() { return HomesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomesComponent = /** @class */ (function () {
    function HomesComponent() {
    }
    HomesComponent.prototype.ngOnInit = function () {
    };
    HomesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homes',
            template: __webpack_require__(/*! ./homes.component.html */ "./src/app/homes/homes.component.html"),
            styles: [__webpack_require__(/*! ./homes.component.css */ "./src/app/homes/homes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomesComponent);
    return HomesComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax1 {\n    background-image: url('chicago-skyline_3.jpg');\n    height: 60vh;\n    background-repeat: no-repeat;\n    background-size: auto;\n    margin: 4vh 0vw;\n    background-size: cover;\n}\n\n.parallax2 {\n    background-image: url('princeton-google-maps-view.jpeg');\n    height: 60vh;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: auto;\n    margin: 4vh 0vw;\n    background-size: contain;\n}\n\n@media screen and (min-width: 1100px) {\n    .parallax1 {\n\n        background-image: url('chicago-skyline_3.jpg');\n        \n        /* Full height */\n        height: 75vh; \n    \n        /* Create the parallax scrolling effect */\n        background-attachment: fixed;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: auto;\n        margin: 4vh 0vw;\n    }\n    .parallax2 {\n\n        background-image: url('princeton-google-maps-view.jpeg');\n        \n        /* Full height */\n        height: 75vh; \n    \n        /* Create the parallax scrolling effect */\n        background-attachment: fixed;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: auto;\n        margin: 4vh 0vw;\n    }\n}\n\n.amenities {\n    text-align: center;\n    padding: 4vh 0vw;\n    margin: 0vh 4vw;\n    border-bottom: 1.5px lightgray solid;\n}\n\n.vision-container {\n      display: grid;\n      justify-items: center;\n  }\n\n.vision {\n      width: 75%;\n  }\n\n@media screen and (max-width: 458px) {\n    .first-availability {\n        padding-bottom: 24px;\n      }\n    .availability {\n        width: 100%;\n    }\n    .parallax1 {\n        height: 25vh;\n    }\n    .parallax2 {\n        height: 30vh;\n    }\n  }\n\n@media screen and (max-width: 458px) {\n    .highways {\n        width: 100%;\n    }\n  }\n\n@media screen and (min-width: 768px) and (max-width: 1100px) {\n    .parallax1 {\n        height: 50vh;\n    }\n    .parallax2 {\n        height: 50vh;\n    }\n}\n\n@media screen and (min-width: 786px) and (max-width: 950px) and (orientation: landscape) {\n    .parallax1 {\n        height: 80vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4Q0FBa0U7SUFDbEUsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdEQUFzRjtJQUN0RixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJOztRQUVJLDhDQUFrRTs7UUFFbEUsZ0JBQWdCO1FBQ2hCLFlBQVk7O1FBRVoseUNBQXlDO1FBQ3pDLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25CO0lBQ0E7O1FBRUksd0RBQXNGOztRQUV0RixnQkFBZ0I7UUFDaEIsWUFBWTs7UUFFWix5Q0FBeUM7UUFDekMsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFFRTtNQUNJLGFBQWE7TUFDYixxQkFBcUI7RUFDekI7O0FBRUE7TUFDSSxVQUFVO0VBQ2Q7O0FBRUE7SUFDRTtRQUNJLG9CQUFvQjtNQUN0QjtJQUNGO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0VBQ0Y7O0FBQ0E7SUFDRTtRQUNJLFdBQVc7SUFDZjtFQUNGOztBQUVBO0lBQ0U7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGF4MSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGljYWdvLXNreWxpbmVfMy5qcGdcIik7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgIG1hcmdpbjogNHZoIDB2dztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFyYWxsYXgyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3ByaW5jZXRvbi9wcmluY2V0b24tZ29vZ2xlLW1hcHMtdmlldy5qcGVnXCIpO1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgbWFyZ2luOiA0dmggMHZ3O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSB7XG4gICAgLnBhcmFsbGF4MSB7XG5cbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGljYWdvLXNreWxpbmVfMy5qcGdcIik7XG4gICAgICAgIFxuICAgICAgICAvKiBGdWxsIGhlaWdodCAqL1xuICAgICAgICBoZWlnaHQ6IDc1dmg7IFxuICAgIFxuICAgICAgICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgICAgIG1hcmdpbjogNHZoIDB2dztcbiAgICB9XG4gICAgLnBhcmFsbGF4MiB7XG5cbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9wcmluY2V0b24vcHJpbmNldG9uLWdvb2dsZS1tYXBzLXZpZXcuanBlZ1wiKTtcbiAgICAgICAgXG4gICAgICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgICAgIGhlaWdodDogNzV2aDsgXG4gICAgXG4gICAgICAgIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgbWFyZ2luOiA0dmggMHZ3O1xuICAgIH1cbn1cblxuLmFtZW5pdGllcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDR2aCAwdnc7XG4gICAgbWFyZ2luOiAwdmggNHZ3O1xuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IGxpZ2h0Z3JheSBzb2xpZDtcbn1cblxuICAudmlzaW9uLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnZpc2lvbiB7XG4gICAgICB3aWR0aDogNzUlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDU4cHgpIHtcbiAgICAuZmlyc3QtYXZhaWxhYmlsaXR5IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICB9XG4gICAgLmF2YWlsYWJpbGl0eSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucGFyYWxsYXgxIHtcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xuICAgIH1cbiAgICAucGFyYWxsYXgyIHtcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NThweCkge1xuICAgIC5oaWdod2F5cyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgLnBhcmFsbGF4MSB7XG4gICAgICAgIGhlaWdodDogNTB2aDtcbiAgICB9XG4gICAgLnBhcmFsbGF4MiB7XG4gICAgICAgIGhlaWdodDogNTB2aDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4NnB4KSBhbmQgKG1heC13aWR0aDogOTUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC5wYXJhbGxheDEge1xuICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card>\n  <div class=\"vision-container\">\n    <h1>Vision</h1>\n    <p class=\"vision\">\n      Founded in 2005, LCA Residential Properties strives to provide high quality, safe, affordable housing for professionals,\n      retirees, and families in the Chicagoland area.\n    </p>\n  </div>\n  <div class=\"parallax1\"></div>\n  <h1>Princeton Apartments</h1>\n  <p>7255-7257 S Princeton Ave, Chicago IL 60621</p>\n  <p>248-250 W 73rd St, Chicago, IL 60621 </p>\n  <div class=\"p-grid p-justify-center p-align-center amenities\">\n    <div class=\"p-lg-4 p-md-4  p-sm-12 availability\">\n      <h3>Availabilities</h3>\n    </div>\n    <div class=\"p-lg-4 p-md-4  p-sm-6 first-availability\">\n      <p>3 bedrooms, living room,<br />kitchen, bath</p>\n      <br/>\n      <p>Starting at $925</p>\n    </div>\n    <div class=\"p-lg-4 p-md-4 p-sm-6\">\n      <p>2 bedrooms, living room,<br />kitchen, bath</p>\n      <br/>\n      <p>Starting at $825</p>\n    </div>\n  </div>\n  <div class=\"parallax2\"></div>\n  <div class=\"p-grid p-justify-center p-align-center amenities\">\n    <div class=\"p-lg-4 p-md-4\">\n      <h3>Community  <i class=\"fas fa-users\"></i></h3>\n    </div>\n    <div class=\"p-lg-8 p-md-8\">\n      Princeton Apartments is locating in the Grand Crossing Community. It is minutes from downtown Chicago via bus and Red Line.\n    </div>\n  </div>\n  <div class=\"p-grid amenities p-justify-center p-align-center\">\n    <div class=\"p-lg-4 p-md-4  p-sm-12 highways\">\n      <h3>Highways  <i class=\"fas fa-road\"></i></h3>\n    </div>\n    <div class=\"p-lg-4 p-md-4 p-sm-6\">\n      <p>I-94</p>\n    </div>\n    <div class=\"p-lg-4 p-md-4 p-sm-6\">\n      <p>Dan Ryan</p>\n    </div>\n  </div>\n  <div class=\"p-grid p-justify-center p-align-center amenities\">\n    <div class=\"p-lg-4 p-md-4 p p-sm-12\">\n      <h3>Bus Stops  <i class=\"fas fa-bus\"></i></h3>\n    </div>\n    <div class=\"p-lg-8  p-md-8 p-sm-12\">\n      <div class=\"p-grid\">\n        <div class=\"p-lg-6 p-md-6 p-sm-6\">\n          Wentworth & 73rd Street\n        </div>\n        <div class=\"p-lg-6 p-md-6 p-sm-6\">\n          Wentworth & Vincennes\n        </div>\n        <div class=\"p-lg-6 p-md-6 p-sm-6\">\n          Wentworth & 72nd Street\n        </div>\n        <div class=\"p-lg-6 p-md-6 p-sm-6\">\n          Vincennes & 74th Street\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-grid p-justify-center p-align-center amenities\">\n    <div class=\"p-lg-4 p-md-4  p-sm-12\">\n      <h3>Parks and Fitness  <i class=\"fas fa-tree\"></i></h3>\n    </div>\n    <div class=\"p-lg-4 p-md-4 p-sm-6\">\n      <p>Hamilton Park Pool</p>\n    </div>\n    <div class=\"p-lg-4 p-md-4 p-sm-6\">\n      <p>Memorial Park</p>\n    </div>\n  </div>\n  <div class=\"p-grid p-justify-center p-align-center amenities\">\n    <div class=\"p-lg-4 p-md-4 p-sm-12\">\n      <h3>Schools  <i class=\"fas fa-graduation-cap\"></i></h3>\n    </div>\n    <div class=\"p-lg-4 p-md-4 p-sm-12\">\n      <p>Harvard School of Excellence</p>\n      <p>7525 S Harvard Ave, Chicago, IL 60620</p>\n    </div>\n    <div class=\"p-lg-4 p-md-4 p-sm-12\">\n      <p>Kids Are US Learning Center</p>\n      <p>7453 S Vincennes Ave, Chicago, IL 60621</p>\n    </div>\n  </div>\n  <div class=\"p-grid p-justify-center p-align-center amenities\">\n    <div class=\"p-lg-4 p-md-4 p-sm-12\">\n      <h3>Dining, Food, and Grocery  <i class=\"fas fa-utensils\"></i></h3>\n    </div>\n    <div class=\"p-lg-8 p-md-8 p-sm-12\">\n      <div class=\"p-grid\">\n        <div class=\"p-lg-6 p-md-6 p-sm-4\">Harolds Chicken Shack</div>\n        <div class=\"p-lg-6 p-md-6 p-sm-4\">Shark's Fish & Chicken</div>\n        <div class=\"p-lg-6 p-md-6 p-sm-4\">A&J Food Market</div>\n        <div class=\"p-lg-6 p-md-6 p-sm-4\">A One Gyros</div>\n        <div class=\"p-lg-6 p-md-6 p-sm-4\">Vincennes Food & Liquor</div>\n        <div class=\"p-lg-6 p-md-6 p-sm-4\">Triple Jays</div>\n        <div class=\"p-lg-6 p-md-6 p-sm-4\">Popeyes Louisiana Kitchen</div>\n        <div class=\"p-lg-6 p-md-6 p-sm-4\">Fred and Jack's</div>\n        <div class=\"p-lg-6 p-md-6 p-sm-4\">McDonalds</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-grid p-justify-center p-align-center amenities\">\n    <div class=\"p-lg-4 p-md-4  p-sm-12 highways\">\n      <h3>Hospital  <i class=\"fas fa-hospital\"></i></h3>\n    </div>\n    <div class=\"p-lg-8 p-md-8  p-sm-12\">\n      <p>St. Bernards Hospital</p>\n    </div>\n  </div>\n  <h3 style=\"padding-top: 5vh\">Contact us at: LCAllcproperties@gmail.com</h3>\n</p-card>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance.component.css":
/*!*******************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-inputtext {\n    width: 70%;\n}\n\n.select {\n    width: 70%;\n    margin-bottom: .75rem;\n    border: 1px solid #a6a6a6;\n}\n\n.select-box {\n    width: 100%;\n}\n\n.option {\n    width: 70%;\n}\n\n.submit-button {\n    margin: 1em;\n}\n\n.maintenance-header {\n    width: 70%;\n    padding: 0vh 0vh 5vh 0vh;\n}\n\n.maintenance-container {\n    display: grid;\n    justify-items: center;\n}\n\n@media screen and (max-width: 576px) {\n    .ui-inputtext {\n        width: 80%;\n    }\n    .option {\n        width: 80%;\n    }\n    .select {\n        width: 80%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRlbmFuY2UvbWFpbnRlbmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW50ZW5hbmNlL21haW50ZW5hbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktaW5wdXR0ZXh0IHtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4uc2VsZWN0IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xufVxuXG4uc2VsZWN0LWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb24ge1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLm1haW50ZW5hbmNlLWhlYWRlciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiAwdmggMHZoIDV2aCAwdmg7XG59XG5cbi5tYWludGVuYW5jZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIC51aS1pbnB1dHRleHQge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICAub3B0aW9uIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLnNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.html":
/*!********************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card>\n    <div class=\"maintenance-container\">\n        <h1>Maintenance Form</h1>\n        <h3 class=\"maintenance-header\">\n            Please fill out this form to submit a maintenance request and we will respond to your issue as soon as possible.\n        </h3>\n    </div>\n    <form [formGroup]=\"maintenanceForm\">\n        <div class=\"field\">\n            <input formControlName=\"firstName\"firstName type=\"text\" pInputText placeholder=\"First Name\" class=\"input\" />\n        </div>\n        <div class=\"field\">\n            <input formControlName=\"lastName\" type=\"text\" pInputText placeholder=\"Last Name\" class=\"input\" />\n        </div>\n        <div class=\"field\">\n            <input formControlName=\"phoneNumber\" type=\"text\" pInputText placeholder=\"Phone Number\" class=\"input\" />\n        </div>\n        <div class=\"field\">\n            <input formControlName=\"emailAddress\" type=\"text\" pInputText placeholder=\"Email Address\" class=\"input\" />\n        </div>\n        <div class=\"select\">\n            <select class=\"select-box\" formControlName=\"aptNumber\">\n                <option class=\"option\" value=\"\" disabled selected>Select Apartment</option>\n                <option class=\"option\" value=\"7255 S Princeton Apt 1\">7255 S Princeton Apt 1</option>\n                <option class=\"option\" value=\"7255 S Princeton Apt 2\">7255 S Princeton Apt 2</option>\n                <option class=\"option\" value=\"7255 S Princeton Apt 3\">7255 S Princeton Apt 3</option>\n                <option class=\"option\" value=\"7257 S Princeton Apt 1\">7257 S Princeton Apt 1</option>\n                <option class=\"option\" value=\"7257 S Princeton Apt 2\">7257 S Princeton Apt 2</option>\n                <option class=\"option\" value=\"7257 S Princeton Apt 3\">7257 S Princeton Apt 3</option>\n\n                <option class=\"option\" value=\"248 W 73rd St Apt 1\">248 W 73rd St Apt 1</option>\n                <option class=\"option\" value=\"248 W 73rd St Apt 2\">248 W 73rd St Apt 2</option>\n                <option class=\"option\" value=\"248 W 73rd St Apt 3\">248 W 73rd St Apt 3</option>\n                <option class=\"option\" value=\"250 W 73rd St Apt 1\">250 W 73rd St Apt 1</option>\n                <option class=\"option\" value=\"250 W 73rd St Apt 2\">250 W 73rd St Apt 2</option>\n                <option class=\"option\" value=\"250 W 73rd St Apt 3\">250 W 73rd St Apt 3</option>\n\n                <option>Other</option>\n            </select>\n        </div>\n        <div class=\"field\">\n            <input formControlName=\"maintenanceLocation\" type=\"text\" pInputText placeholder=\"Maintenance Needed\" class=\"input\" />\n        </div>\n        <div class=\"field\">\n            <textarea formControlName=\"details\" type=\"text\" pInputTextarea placeholder=\"Details\" class=\"input\"></textarea>\n        </div>\n    </form>\n    <p-button type=\"submit\" label=\"Submit\" (onClick)=\"processForm()\" class=\"submit-button\"></p-button>\n</p-card>\n\n\n<!-- \n  location\n  - building * (dropdown)\n  - apt number\n  - description (textinput) * min 5 words\n\n  contact\n  first name *\n  last name *\n  phone number * (radio button for mobile or home)\n      -allow texts checkbox?\n  alternate phone number \n  email address *\n  verify email address\n    font sizes em\nchange submitProperty to validateField and validate the field\n-->"

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.ts":
/*!******************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.ts ***!
  \******************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _emailService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emailService.service */ "./src/app/emailService.service.ts");




var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent(emailService) {
        this.emailService = emailService;
        // properties: SelectItem[];
        this.maintenanceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            aptNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            maintenanceLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.val = this.maintenanceForm.value;
        // this.properties = [   { label: 'Select Property', value: null },   { label:
        // 'Rental Homes', value: { id: 1, name: 'Rental Homes' }},   { label:
        // 'Blacstone', value: { id: 1, name: 'Blacstone' }},   { label: 'Princeton',
        // value: { id: 1, name: 'Princeton' }}, ] this will eventually be used when
        // more locations are added
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
    };
    MaintenanceComponent.prototype.processForm = function () {
        var name = this.maintenanceForm.value.firstName + " " + this.maintenanceForm.value.lastName;
        var phoneNumber = "" + this.maintenanceForm.value.phoneNumber;
        var emailAddress = "" + this.maintenanceForm.value.emailAddress;
        var aptNumber = "" + this.maintenanceForm.value.aptNumber;
        var maintenance = "" + this.maintenanceForm.value.maintenanceLocation;
        var details = "" + this.maintenanceForm.value.details;
        var allInfo = { name: name, phoneNumber: phoneNumber, emailAddress: emailAddress, aptNumber: aptNumber, maintenance: maintenance, details: details };
        this.emailService.sendMaintenanceRequest(allInfo);
        alert('Your maintenance request has been submitted!');
    };
    MaintenanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance',
            template: __webpack_require__(/*! ./maintenance.component.html */ "./src/app/maintenance/maintenance.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./maintenance.component.css */ "./src/app/maintenance/maintenance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_emailService_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/princeton/princeton.component.css":
/*!***************************************************!*\
  !*** ./src/app/princeton/princeton.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".features {\n    text-align: center;\n    padding: 4vh 0vw;\n    margin: 0vh 5vw;\n    border-bottom: 1.5px lightgray solid;\n}\n\n.first {\n    border-top: 1.5px lightgray solid;\n    margin-top: 4vh;\n}\n\n.ui-panel-images {\n    width: 100%;\n}\n\n.ui-panel-images img {\n    width: 100%;\n}\n\n.ui-galleria-panel {\n    width: 100%;\n}\n\n.ui-galleria-panel-wrapper {\n    width: 100%;\n}\n\n@media screen and (min-width: 700px) and (max-width: 1024px) and (orientation: portrait) {\n    .ui-galleria-panel-wrapper {\n        height: 30vh !important;\n    }\n}\n\n@media screen and (max-width: 700px) and (orientation: portrait) {\n    .ui-galleria-panel-wrapper {\n        height: 30vh !important;\n    }\n}\n\n@media screen and (max-width: 700px) and (orientation: landscape) {\n    .ui-galleria-panel-wrapper {\n        height: 70vh !important;\n    }\n}\n\n.ui-galleria {\n    width: 80%;\n    margin: auto;\n}\n\n.princeton-header {\n    margin-bottom: 8vh;\n}\n\n.p-grid {\n    align-items: center\n}\n\n@media screen and (max-width: 458px) {\n    .ui-card-body {\n        padding: 0px;\n    }\n    \n    .last-amenity {\n        align-self: flex-start;\n    }\n    .ui-card.ui-widget.ui-widget-content.ui-corner-all {\n        display: inline-block;\n    }\n    .p-grid {\n        justify-content: flex-start;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .princeton-title {\n        font-size: 17px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbmNldG9uL3ByaW5jZXRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3ByaW5jZXRvbi9wcmluY2V0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0dXJlcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDR2aCAwdnc7XG4gICAgbWFyZ2luOiAwdmggNXZ3O1xuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IGxpZ2h0Z3JheSBzb2xpZDtcbn1cblxuLmZpcnN0IHtcbiAgICBib3JkZXItdG9wOiAxLjVweCBsaWdodGdyYXkgc29saWQ7XG4gICAgbWFyZ2luLXRvcDogNHZoO1xufVxuXG4udWktcGFuZWwtaW1hZ2VzIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnVpLXBhbmVsLWltYWdlcyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udWktZ2FsbGVyaWEtcGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udWktZ2FsbGVyaWEtcGFuZWwtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIC51aS1nYWxsZXJpYS1wYW5lbC13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiAzMHZoICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAudWktZ2FsbGVyaWEtcGFuZWwtd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogMzB2aCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAudWktZ2FsbGVyaWEtcGFuZWwtd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnVpLWdhbGxlcmlhIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnByaW5jZXRvbi1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDh2aDtcbn1cblxuLnAtZ3JpZCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NThweCkge1xuICAgIC51aS1jYXJkLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5sYXN0LWFtZW5pdHkge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAudWktY2FyZC51aS13aWRnZXQudWktd2lkZ2V0LWNvbnRlbnQudWktY29ybmVyLWFsbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLnAtZ3JpZCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgLnByaW5jZXRvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/princeton/princeton.component.html":
/*!****************************************************!*\
  !*** ./src/app/princeton/princeton.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card>\n  <h1  class=\"princeton-header\">Living at Princeton Apartments</h1>\n  <h3>This property has been sold and is no longer under the management of LCA Residential Properties LLC. Other properties will be added soon!</h3>\n  <!-- <div class=\"gallery\"> -->\n    <p-galleria [images]=\"images\" [showCaption]=\"true\" [autoPlay]=\"false\" interval=\"5\" panelWidth=\"auto\" [showCaption]=\"true\"></p-galleria>\n  <!-- </div> -->\n  <div class=\"p-grid p-justify-center p-align-center features first\">\n    <div class=\"p-col-4\">\n      <h3 class=\"princeton-title\">Amenities</h3>\n    </div>\n    <div class=\"p-col-8\">\n      <div class=\"p-grid\">\n        <div class=\"p-col-6\">Security camera surveillance</div>\n        <div class=\"p-col-6\">Heat included</div>\n        <div class=\"p-col-6\">Hardwood floors</div>\n        <div class=\"p-col-6\">Front balcony</div>\n        <div class=\"p-col-6\">Intercom bell system</div>\n        <div class=\"p-col-6\">Keyed entry</div>\n        <div class=\"p-col-6\">Ample street parking</div>\n        <div class=\"p-col-6\">Back porch</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-grid p-justify-center p-align-center features\">\n    <div class=\"p-col-4\">\n      <h3 class=\"princeton-title\">Living Room</h3>\n    </div>\n    <div class=\"p-col-8\">\n      <div class=\"p-grid\">\n        <div class=\"p-col-6\">Spacious living room area</div>\n        <div class=\"p-col-6\">Artificial fireplace<br />with side shelves</div>\n        <div class=\"p-col-6 last-amenity\">Balcony</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-grid p-justify-center p-align-center features\">\n    <div class=\"p-col-4\">\n      <h3 class=\"princeton-title\">Kitchen</h3>\n    </div>\n    <div class=\"p-col-8\">\n      <div class=\"p-grid\">\n        <div class=\"p-col-6\">Walk-in pantry </div>\n        <div class=\"p-col-6\">Stove and refrigerator provided</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-grid p-justify-center p-align-center features\">\n    <div class=\"p-col-4\">\n      <h3 class=\"princeton-title\">Bathroom</h3>\n    </div>\n    <div class=\"p-col-4\">\n      <p>Full bathroom</p>\n      <p>Vanity</p>\n    </div>\n    <div class=\"p-col-4\">\n      <p>Ceramic tile flooring</p>\n      <p>Medicine cabinet</p>\n    </div>\n  </div>\n  <div class=\"p-grid p-justify-center p-align-center features\">\n    <div class=\"p-col-4\">\n      <h3 class=\"princeton-title\">Bedroom</h3>\n    </div>\n    <div class=\"p-col-4\">\n      <p>Spacious closet </p>\n    </div>\n    <div class=\"p-col-4\">\n      <p>Cable ready</p>\n    </div>\n  </div>\n  <h3 style=\"padding-top: 5vh\">Contact us at: LCAllcproperties@gmail.com</h3>\n</p-card>\n"

/***/ }),

/***/ "./src/app/princeton/princeton.component.ts":
/*!**************************************************!*\
  !*** ./src/app/princeton/princeton.component.ts ***!
  \**************************************************/
/*! exports provided: PrincetonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincetonComponent", function() { return PrincetonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrincetonComponent = /** @class */ (function () {
    function PrincetonComponent() {
    }
    PrincetonComponent.prototype.ngOnInit = function () {
        this.images = [
            { source: 'assets/images/princeton/princeton-living-room.jpg', title: 'Living Room' },
            { source: 'assets/images/princeton/princeton-livingroom-1.jpg' },
            { source: 'assets/images/princeton/princeton-livingroom-2.jpg' },
            { source: 'assets/images/princeton/princeton-livingroom-3.jpg' },
            { source: 'assets/images/princeton/princeton-bathroom.jpg', title: 'Bathroom' },
            { source: 'assets/images/princeton/princeton-bathroom-2.jpg' },
            { source: 'assets/images/princeton/princeton-bathroom-3.jpg' },
            { source: 'assets/images/princeton/princeton-bedroom-1.jpg', title: 'Bedroom' },
            { source: 'assets/images/princeton/princeton-bedroom-2.jpg' },
            { source: 'assets/images/princeton/princeton-bedroom-4.jpg' },
            { source: 'assets/images/princeton/princeton-bedroom-closet-2.jpg' },
            { source: 'assets/images/princeton/princeton-bedroom-closet.jpg' },
            { source: 'assets/images/princeton/princeton-kitchen-2.jpg', title: 'Kitchen' },
            { source: 'assets/images/princeton/princeton-kitchen.jpg' },
            { source: 'assets/images/princeton/princeton-hall-2.jpg', title: 'Hallway' },
            { source: 'assets/images/princeton/princeton-hall.jpg' },
        ];
    };
    PrincetonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-princeton',
            template: __webpack_require__(/*! ./princeton.component.html */ "./src/app/princeton/princeton.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./princeton.component.css */ "./src/app/princeton/princeton.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrincetonComponent);
    return PrincetonComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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




if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rashaunwarner/projects/lca-apts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map