webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".workspace{\r\n    position: absolute;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex; \r\n    padding: 10px;\r\n    background:white;\r\n}\r\n\r\nimg{ /* Safari */\r\n    transition: box-shadow 2s, background .5s, padding .5s;\r\n   padding: 15px;\r\n   width:120px;\r\n   height:120px;\r\n}\r\n.author{\r\n\ttext-align:right;\r\n\tfont-weight:bold;\t\r\n}\r\n\r\nimg:hover{\r\n  padding:5px;\r\n  color: red;\r\n \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n            <div style=\"flex-grow:column;position:fixed;width:100%;height:100%;text-align: center;background:white;\"> \n                <!-- -->    \n                <div style=\"display:flex;height:100%;\">\n                    <div  style=\"padding:20px; background:none;flex-grow:1;border-right-width: thin;\" >\n                        <img style=\"cursor:pointer;\" src=\"./assets/images/datacleaning.svg\" width=\"100px;\" height=\"100px;\"/>\n                        <br>\n                        Data pre-processing  \n\n                    </div>\n                    \n                    <div style=\"padding:20px; background:none;flex-grow:1;border-right-width: thin;font-family: 'Catamaran', sans-serif;\">\n                        <img  style=\"cursor:pointer;\" src=\"./assets/images/mining.svg\"  width=\"100px;\" height=\"100px;\"/>\n                        <br>                        \n                        Mining\n                    </div>\n                    <div style=\" padding:20px; background:none;flex-grow:1;border-right-width: thin;\">\n                        <img  style=\"cursor:pointer;\" src=\"./assets/images/visualization.svg\"  width=\"100px;\" height=\"100px;\"/>\n                        <br>                        \n                        Visualization        \n                    </div>\n                    <div style=\"padding:20px; background:none;flex-grow:1;;\">\n                        <img  style=\"cursor:pointer;\" src=\"./assets/images/analytics.svg\"  width=\"100px;\" height=\"100px;\"/>\n                        <br>                       \n                        Analytics     \n                    </div>\n                </div>    \n                <!-- -->\n                <upload-modal></upload-modal>\n             </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__ = __webpack_require__("../../../../../src/app/services/component-interaction/interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(updateService) {
        var _this = this;
        this.updateService = updateService;
        this.show = false;
        this.title = 'app';
        this.subscription = updateService.newData$.subscribe(function (show) {
            console.log(show);
            _this.show = show;
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_component_interaction_interaction_service__ = __webpack_require__("../../../../../src/app/services/component-interaction/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bars_top_topbar_component__ = __webpack_require__("../../../../../src/app/bars/top/topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bars_left_leftMenuBar_component__ = __webpack_require__("../../../../../src/app/bars/left/leftMenuBar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_drop_down_dropdown_component__ = __webpack_require__("../../../../../src/app/menu/drop-down/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__terminal_terminal_component__ = __webpack_require__("../../../../../src/app/terminal/terminal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_draggable__ = __webpack_require__("../../../../angular2-draggable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_resizable__ = __webpack_require__("../../../../angular2-resizable/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_upload_component__ = __webpack_require__("../../../../../src/app/modals/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__bars_top_topbar_component__["a" /* TopBarComponent */], __WEBPACK_IMPORTED_MODULE_5__bars_left_leftMenuBar_component__["a" /* LeftMenuBarComponent */], __WEBPACK_IMPORTED_MODULE_6__menu_drop_down_dropdown_component__["a" /* DropdownButtonComponent */], __WEBPACK_IMPORTED_MODULE_8__terminal_terminal_component__["a" /* Terminal */], __WEBPACK_IMPORTED_MODULE_13__modals_upload_component__["a" /* UploadModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_9_angular2_draggable__["a" /* AngularDraggableModule */], __WEBPACK_IMPORTED_MODULE_10_angular2_resizable__["a" /* ResizableModule */], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_component_interaction_interaction_service__["a" /* InteractionService */],],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__bars_top_topbar_component__["a" /* TopBarComponent */], __WEBPACK_IMPORTED_MODULE_5__bars_left_leftMenuBar_component__["a" /* LeftMenuBarComponent */], __WEBPACK_IMPORTED_MODULE_6__menu_drop_down_dropdown_component__["a" /* DropdownButtonComponent */], __WEBPACK_IMPORTED_MODULE_8__terminal_terminal_component__["a" /* Terminal */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bars/left/leftMenuBar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    background: none;\r\n    width:100%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: left ;\r\n            flex-flow: left ;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    font-size: 12px;\r\n    padding: 2px;\r\n    font-family: unset;\r\n    font-weight: 400;\r\n}\r\n\r\n.container:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.label{\r\n    color:rgba(84, 84, 84, 0.78);\r\n    font-family: 'Open Sans', sans-serif !important;\r\n    font-size: 14px !important;\r\n    font-size: 14px; \r\n}\r\n\r\n.icon{\r\n    font-size:18px;\r\n}\r\n\r\n.expanded{\r\n    width:200px !important;\r\n    background: white !important;\r\n}\r\n.leftpane{\r\n    position: relative;\r\n    /* float: left; */\r\n    left: 0px;\r\n    width: 55px;\r\n    height: 100%;\r\n    padding: 10px;\r\n    background: white;\r\n    border-right-width: thin;\r\n    z-index: 99;\r\n    border-right: #aec3fd;\r\n    border-right-style: solid;\r\n    border-right-width: thin;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n  th{\r\n    font-family: 'Open Sans', sans-serif !important;\r\n    font-size: 14px !important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bars/left/leftMenuBar.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"leftpane\" [ngClass]=\"{'expanded': show}\">\r\n    <div class=\"container\">\r\n            \r\n            <button  style=\"background:none; \" type=\"button\" class=\"btn\" aria-label=\"Left Align\" (click)=\"toggle()\">\r\n               <span class=\"glyphicon glyphicon-menu-hamburger glyph\"></span> \r\n            </button> \r\n        <table class=\"table table-hover\">\r\n\r\n                <tbody style=\"font-family: 'Open Sans', sans-serif !important;\r\n                font-size: 16px !important; color:grey\">\r\n                  <tr>\r\n                    <th scope=\"row\">\r\n                        <span class=\"glyphicon glyphicon-plus glyph icon\">  \r\n                        </span> \r\n                        <span [hidden]=\"!show\">\r\n                        <span class=\"label\" >New project</span>\r\n                        <span class=\"glyphicon glyphicon-menu-right glyph icon\" style=\"float:right\">  </span> \r\n                        </span>\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">\r\n                        <span class=\"glyphicon glyphicon-folder-open glyph icon\">  </span> \r\n                        <span [hidden]=\"!show\">\r\n                        <span class=\"label\">Open </span>\r\n                        <span class=\"glyphicon glyphicon-menu-right glyph icon\" style=\"float:right\">  </span> \r\n                        </span>\r\n                    </th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\" (click)=\"uploadData();\">\r\n                            <span class=\"glyphicon glyphicon-cloud-upload glyph icon\">  </span> \r\n                            <span [hidden]=\"!show\">\r\n                            <span class=\"label\">Upload Data</span>\r\n                            <span class=\"glyphicon glyphicon-menu-right glyph icon\" style=\"float:right\">  </span> \r\n                            </span>\r\n                        </th>\r\n                    </tr>                                        \r\n                </tbody>\r\n              </table>\r\n    </div>\r\n\r\n    <div style=\"display: flex;\r\n    flex-flow: row-reverse;\r\n    width: 100%;\r\n    \r\n    flex-grow:1;\r\n    align-items: end;\r\n    flex-direction: column-reverse;\">\r\n    <div style=\"display:flex; flex-flow:row-reverse;\">\r\n        <div class=\"icon icons-right\" [hidden]=\"!terminal\" >\r\n            <button style=\"background:none;font-size:16px;\" type=\"button\" class=\"btn\" aria-label=\"Left Align\" (click)=\"showTerminal()\">\r\n            <span class=\"glyphicon glyphicon-console glyph\"></span>\r\n            </button>        \r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/bars/left/leftMenuBar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__ = __webpack_require__("../../../../../src/app/services/component-interaction/interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftMenuBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftMenuBarComponent = (function () {
    function LeftMenuBarComponent(updateService) {
        var _this = this;
        this.updateService = updateService;
        this.toggle_main_pane = false;
        this.terminal = true;
        this.show = false;
        this.title = 'app';
        this.subscription = updateService.newData$.subscribe(function (show) {
            console.log(show);
            _this.show = show;
        });
        this.subscription = updateService.terminal$.subscribe(function (terminal) {
            console.log(terminal);
            _this.terminal = terminal;
        });
    }
    LeftMenuBarComponent.prototype.changeOutside = function () {
        this.toggle_main_pane = !this.toggle_main_pane;
        this.updateService.changeData(this.toggle_main_pane);
    };
    LeftMenuBarComponent.prototype.showTerminal = function () {
        this.updateService.showTerminal(false);
    };
    LeftMenuBarComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    LeftMenuBarComponent.prototype.uploadData = function () {
        this.updateService.showUploadModal(false);
    };
    return LeftMenuBarComponent;
}());
LeftMenuBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'left-menu-bar',
        template: __webpack_require__("../../../../../src/app/bars/left/leftMenuBar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bars/left/leftMenuBar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */]) === "function" && _a || Object])
], LeftMenuBarComponent);

var _a;
//# sourceMappingURL=leftMenuBar.component.js.map

/***/ }),

/***/ "../../../../../src/app/bars/top/topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button{\r\n    background: none;\r\n}\r\n\r\nbutton:hover{\r\n    color:black;\r\n    background: rgba(0, 0, 0, 0.075)    ;\r\n}\r\n\r\nbutton:focus  { \r\n    color: #55C5FE;\r\n}\r\n\r\n.topbar{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    padding-top: 5px;\r\n    height: 50px;  \r\n    background: rgba(245, 244, 244, 0.48);\r\n    border-bottom-color: rgba(80, 126, 255, 0.45);\r\n    border-bottom-style: solid;\r\n    border-bottom-width: thin;\r\n}\r\n\r\n.iconplates{\r\n    background: none;\r\n    padding-right:40px;\r\n}\r\n\r\n.right{\r\n    -ms-flex-line-pack: right ;\r\n        align-content: right ;\r\n    -webkit-box-flex:.30;\r\n        -ms-flex-positive:.30;\r\n            flex-grow:.30;\r\n    margin-right: 20px;\r\n}\r\n\r\n.left{\r\n    -ms-flex-line-pack: left ;\r\n        align-content: left ;\r\n    -webkit-box-flex:.35;\r\n        -ms-flex-positive:.35;\r\n            flex-grow:.35;\r\n}\r\n\r\n.center{\r\n    -ms-flex-line-pack: left;\r\n        align-content: left;\r\n    -webkit-box-flex:.35;\r\n        -ms-flex-positive:.35;\r\n            flex-grow:.35;\r\n}\r\n\r\n.icon{\r\n    color: #000000;   \r\n    margin-top: 5px;\r\n    cursor:pointer;\r\n    font-size: 12px;\r\n   }\r\n\r\n.icons-left{\r\n   float: left;    \r\n}\r\n\r\n.icons-right{   \r\n    float: right;\r\n}\r\n    \r\n.icon:hover{\r\n    color: black;\r\n    \r\n}\r\n\r\n.form-control{\r\n    height: 30px;\r\n    color: #d4cece;\r\n    background-color: rgb(250, 250, 250);\r\n    background-image: none;\r\n    border: 1px solid #949191;\r\n    \r\n}\r\n\r\n.form-control:focus {\r\n    border-color: #444141;\r\n    box-shadow: inset 0 1px 1px rgba(215, 210, 210, 0.07), 0 0 8px rgba(185, 181, 181, 0.60);\r\n    \r\n    color:#303030;\r\n  }\r\n\r\n  .blinking-cursor {\r\n    font-weight: 400;\r\n    font-size: 25px;\r\n    color:ivory !important;\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes\r\n\r\n\"blink\" {\r\n    from, to\r\n\r\n{\r\n    color: transparent;\r\n}\r\n\r\n50% {\r\n    color: black;\r\n}\r\n\r\n}\r\n\r\n@-webkit-keyframes\r\n\r\n\"blink\" {\r\n    from, to\r\n\r\n{\r\n    color: transparent;\r\n}\r\n\r\n50% {\r\n    color: black;\r\n}\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bars/top/topbar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class='topbar'> \r\n    <div class=\"iconplates left\">\r\n        <div class=\"icon  icons-left\">\r\n                        <span style=\"font-size:24px;padding-left: 10px;\" class=\"glyphicon glyphicon-stats glyph\"></span>  \r\n                        <span style=\"font-size:24px;padding-left: 10px;\" ><strong>tar</strong>kol<span class=\"blinking-cursor\">_</span> </span>\r\n                          \r\n        \r\n        </div>        \r\n        <div class=\"icon  icons-left\"></div>\r\n    </div> \r\n    <div class=\"iconplates center\">\r\n               \r\n        <input type=\"text\" placeholder=\"Search\" style=\"margin-top:5px;\" class=\"form-control\" id=\"usr\">\r\n    </div> \r\n        \r\n    <div class=\"iconplates right icons-right\">\r\n                \r\n            <div class=\"icon  icons-right\">\r\n                    <drop-down-button></drop-down-button>\r\n            </div>       \r\n            <div class=\"icon icons-right\">\r\n                    \r\n                    <button type=\"button\" class=\"btn\" aria-label=\"Left Align\">\r\n                        <span class=\"glyphicon glyphicon-cog glyph\"></span>\r\n                       \r\n                    </button>\r\n            </div>\r\n\r\n            <div class=\"icon  icons-right\">\r\n                    <button type=\"button\" class=\"btn\" aria-label=\"Left Align\" (click)=\"newProject();\">\r\n                    <span class=\"glyphicon glyphicon-plus glyph\"></span>\r\n                    <span class=\"caret\"></span>\r\n                    </button>\r\n            </div>             \r\n\r\n    </div>        \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/bars/top/topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__ = __webpack_require__("../../../../../src/app/services/component-interaction/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopBarComponent = (function () {
    function TopBarComponent(updateService, http) {
        this.updateService = updateService;
        this.http = http;
        this.toggle_main_pane = false;
        this.title = 'app';
    }
    TopBarComponent.prototype.changeOutside = function () {
        this.toggle_main_pane = !this.toggle_main_pane;
        this.updateService.changeData(this.toggle_main_pane);
    };
    TopBarComponent.prototype.newProject = function () {
        console.log('Sending get request');
        this.http.get("topics/1")
            .toPromise()
            .then(function (response) { console.log(response.json()); alert(response.json()); })
            .catch(this.handleError);
    };
    TopBarComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TopBarComponent;
}());
TopBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'top-bar',
        template: __webpack_require__("../../../../../src/app/bars/top/topbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bars/top/topbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _b || Object])
], TopBarComponent);

var _a, _b;
//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/drop-down/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DropdownButtonComponent = (function () {
    function DropdownButtonComponent() {
    }
    return DropdownButtonComponent;
}());
DropdownButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'drop-down-button',
        template: __webpack_require__("../../../../../src/app/menu/drop-down/dropdown.template.html"),
    })
], DropdownButtonComponent);

//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/drop-down/dropdown.template.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\nhttps://ng-bootstrap.github.io/#/components/dropdown/examples\r\n-->\r\n<div ngbDropdown class=\"d-inline-block\">\r\n    <button class=\"btn btn-outline-primary\" id=\"dropdownBasic\" ngbDropdownToggle>\r\n      <span class=\"glyphicon glyphicon-user glyph\"></span>\r\n    </button>\r\n    \r\n    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic\">\r\n      <button class=\"dropdown-item\">Login</button>\r\n      <button class=\"dropdown-item\">Preferences</button>\r\n      <button class=\"dropdown-item\">Update profile</button>\r\n    </div>\r\n \r\n  </div>\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/modals/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tmodal{\r\n    \r\n    width: 40%;\r\n    height: 30%;\r\n    position: fixed;\r\n    top:35%;\r\n    left:30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div \r\n[hidden]=\"show\" \r\nstyle=\"    position: absolute;\r\nwidth: 100%;\r\nheight: 100%;\r\nleft: 0px;\r\ntop: 0px;\r\nbackground: rgba(250, 250, 250, 0.97);\r\nz-index: 999999999999999999999999999999999999999999999999999999999999;\">\r\n<div class=\"tmodal\" style=\" \r\nwidth: 50%;\r\nheight: 45%;\r\nposition: absolute;\r\ntop: 20%;\r\nleft: 25%;\r\nbackground: #ffffff;\r\nz-index: 9999999;\r\nmin-width: 350px;\r\nmin-height: 250px;\r\nbox-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\r\npadding: 20px;\r\nborder-width: thin;\r\nborder-color: #aec3fd;\r\nborder-style: solid;\r\n\">\r\n<div class=\"tmodal-title\" style=\"float:right;width:100%;padding:5px;border-bottom-style: inset;\">\r\n    <div style=\"float:left;\"><span style=\"margin-top:0px;font-size:20px;\"><span class=\"glyphicon glyphicon-hdd\"></span> File uploader</span></div>\r\n    <div style=\"float:right;\">\r\n    <a href=\"#\" style=\"color:grey;\" (click)=\"closeUploadModal();\">\r\n            <span class=\"glyphicon glyphicon-remove\"></span>\r\n            </a>\r\n    </div>\r\n</div>    \r\n   <HR>\r\n   \r\n    <div style=\"margin-top:50px;\">\r\n  \r\n        <h4 style=\"color:#08598a;\"><strong>Upload your new data file here</strong></h4>\r\n        <h6>\r\n            {{uploadStatus}} \r\n            <span style=\"color:green;\"><strong> {{successMsg}}</strong></span> \r\n            <span style=\"color:saddlebrown;\">{{errorMsg}}</span>\r\n        </h6>\r\n        <BR><BR>\r\n        <DIV>\r\n                \r\n\r\n        \r\n        <input type=\"file\" (change)='fileChange($event);' placeholder=\"Upload file\" style=\"display:unset;\">\r\n        <!--input type=\"file\" name=\"file\" style=\"display:unset;\" --> \r\n        <span style=\"padding-left:5px;\">\r\n            <button  (click)=\"upload();\" style=\"border-style:solid;width:120px;padding:5px;background:none;border-color: #aec3fd; \">\r\n            <span class=\"glyphicon glyphicon-cloud-upload glyph icon\">\r\n            </span>   Upload</button>\r\n        </span>\r\n        \r\n        \r\n        </DIV>\r\n\r\n    </div>  \r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__ = __webpack_require__("../../../../../src/app/services/component-interaction/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadModal = (function () {
    function UploadModal(updateService, http) {
        var _this = this;
        this.updateService = updateService;
        this.http = http;
        this.show = true;
        this.uploadStatus = "";
        this.successMsg = "";
        this.errorMsg = "";
        this.multiple = false;
        this.apiEndPoint = '/files';
        this.subscription = updateService.displayUploadModal$.subscribe(function (show) {
            console.log(show);
            _this.show = show;
            _this.uploadStatus = "";
            _this.successMsg = "";
            _this.errorMsg = "";
        });
        this.data = {
            file: 'file'
        };
    }
    UploadModal.prototype.closeUploadModal = function () {
        this.show = true;
    };
    UploadModal.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        this.errorMsg = "";
        this.successMsg = "";
        if (fileList.length > 0) {
            var file = fileList[0];
            this.formData = new FormData();
            this.formData.append('file', file, file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
            /** No need to include Content-Type in Angular 4 */
            // headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
            console.log("File ready for upload");
        }
    };
    UploadModal.prototype.upload = function () {
        /*
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        let formData:FormData = new FormData();
       // formData['enctype'] ="multipart/form-data";
        if (fileCount > 0) { // a file was selected
           
            for (let i = 0; i < fileCount; i++) {
                formData.append('file', inputEl.files.item(i), inputEl.files.item(i).name  );
                //formData['file'] = inputEl.files.item(i);
               console.log( formData);
            }
            console.log(formData);
            this.http
                .post('files', formData)
                .subscribe(res => alert(res.text),
                error => console.log(error));
                // do whatever you do...
                // subscribe to observable to listen for response
        }
        */
        var _this = this;
        console.log("UPLOADING FILE..");
        this.uploadStatus = "Uploading...";
        this.http.post("" + this.apiEndPoint, this.formData, this.options)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error); })
            .subscribe(function (data) {
            console.log('success');
            _this.successMsg = "Successfully uploaded!";
            _this.uploadStatus = "";
        }, function (error) {
            console.log(error);
            _this.errorMsg = "Failled to upload: Error " + error;
            _this.uploadStatus = "";
        });
        console.log("Sent data!!");
    };
    return UploadModal;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], UploadModal.prototype, "multiple", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('file'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], UploadModal.prototype, "inputEl", void 0);
UploadModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'upload-modal',
        template: __webpack_require__("../../../../../src/app/modals/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _c || Object])
], UploadModal);

var _a, _b, _c;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/component-interaction/interaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InteractionService = (function () {
    function InteractionService() {
        // Observable boolean sources
        this.newDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.terminal = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.uploadModal = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable boolean streams
        this.newData$ = this.newDataSource.asObservable();
        this.terminal$ = this.terminal.asObservable();
        this.displayUploadModal$ = this.uploadModal.asObservable();
    }
    InteractionService.prototype.changeData = function (data) {
        this.newDataSource.next(data);
    };
    InteractionService.prototype.showTerminal = function (terminal) {
        this.terminal.next(terminal);
    };
    ;
    InteractionService.prototype.showUploadModal = function (show) {
        this.uploadModal.next(show);
    };
    return InteractionService;
}());
InteractionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], InteractionService);

//# sourceMappingURL=interaction.service.js.map

/***/ }),

/***/ "../../../../../src/app/terminal/terminal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".console{\r\n    position: fixed;\r\n    width: 98%;\r\n    top: 74%;\r\n    height: 24%;\r\n    background: rgba(152, 47, 158, 0.24);;\r\n    z-index: 99999999;\r\n    color: #a7a4a4;\r\n    font-size: 14.5px;\r\n    text-shadow: 1px 1px 2px black;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    box-shadow: 1px -1px 10px 0px black;\r\n    margin: 10px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.console-header{\r\n    position:relative;\r\n    width:100%;\r\n    background: rgb(36, 41, 46); \r\n    padding: 5px;\r\n    padding-left:5px;\r\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.69);    \r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.console-control{\r\n    float:right;\r\n}\r\n\r\n.close-button{\r\n    color:#e50000;\r\n    padding-right:5px;\r\n}\r\n\r\n.min-button{\r\n    color:#00e500;\r\n    padding-right:5px; \r\n}\r\n\r\n.console-body{\r\n    color:black;\r\n    z-index: 9999;\r\n    padding:10px;\r\n    text-shadow: 0px 0px ;\r\n}\r\n\r\n.ng-draggable {\r\n    cursor: move;\r\n  }\r\n\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terminal/terminal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"console\" [hidden]=\"!show\" [@heroState]=\"state\" ngDraggable [handle]=\"DemoHandle\" mwlResizable (resizeEnd)=\"onResizeEnd($event)\" >\r\n    <div class =\"console-header\" #DemoHandle >\r\n        <button [@heroState]=\"state\" (click)=\"toggle()\"> (+) </button>\r\n     Data console\r\n     <div class=\"console-control\">\r\n        <span  class=\"glyphicon glyphicon-minus-sign min-button\" aria-hidden=\"true\"  ></span> \r\n        <span class=\"glyphicon glyphicon-remove-sign close-button\" aria-hidden=\"true\" (click)=\"hideTerminal();\"></span>\r\n    </div>\r\n    \r\n    </div>\r\n    <div class=\"console-body\">\r\n        Console body\r\n    </div>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/terminal/terminal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__ = __webpack_require__("../../../../../src/app/services/component-interaction/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Terminal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Terminal = (function () {
    function Terminal(updateService) {
        var _this = this;
        this.updateService = updateService;
        this.show = false;
        this.state = 'inactive';
        this.subscription = updateService.terminal$.subscribe(function (show) {
            console.log(show);
            _this.show = !show;
        });
    }
    Terminal.prototype.hideTerminal = function () {
        //this.show = !this.show; 
        this.updateService.showTerminal(true);
    };
    Terminal.prototype.onResizeEnd = function (event) {
        console.log('Element was resized', event);
    };
    Terminal.prototype.toggle = function () {
        if (this.state === 'active')
            this.state = 'inactive';
        else
            this.state = 'active';
    };
    return Terminal;
}());
Terminal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'terminal',
        template: __webpack_require__("../../../../../src/app/terminal/terminal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/terminal/terminal.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('heroState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0) scale(1)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0) scale(1.1)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('100ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('100ms ease-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void => inactive', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(-100%) scale(1)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(100)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('inactive => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(100%) scale(1)' }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void => active', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0) scale(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(200)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('active => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(200, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0) scale(0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_component_interaction_interaction_service__["a" /* InteractionService */]) === "function" && _a || Object])
], Terminal);

var _a;
//# sourceMappingURL=terminal.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map