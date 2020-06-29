(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'testAPP';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
/* harmony import */ var src_app_prem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/prem */ "./src/app/prem.ts");
/* harmony import */ var _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./out-graph/out-graph.component */ "./src/app/out-graph/out-graph.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main-content/main-content.component */ "./src/app/main-content/main-content.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



























const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"] },
    { path: 'main', component: _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_21__["MainContentComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_23__["NewsComponent"] },
    { path: '**', redirectTo: '/' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [src_app_prem__WEBPACK_IMPORTED_MODULE_18__["ParamsModel"]], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_17__["HighchartsChartModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_19__["OutGraphComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_21__["MainContentComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_23__["NewsComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_17__["HighchartsChartModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_19__["OutGraphComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_21__["MainContentComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_23__["NewsComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_17__["HighchartsChartModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"]
                ],
                providers: [src_app_prem__WEBPACK_IMPORTED_MODULE_18__["ParamsModel"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ddf_russia.json":
/*!*********************************!*\
  !*** ./src/app/ddf_russia.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"country\":\"Москва\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":59,\"deaths\":0,\"cured\":23},{\"date\":\"29.04.2020\",\"confirmed\":3447,\"deaths\":44,\"cured\":1415},{\"date\":\"30.04.2020\",\"confirmed\":6952,\"deaths\":89,\"cured\":2855},{\"date\":\"01.05.2020\",\"confirmed\":10578,\"deaths\":136,\"cured\":4344},{\"date\":\"02.05.2020\",\"confirmed\":14329,\"deaths\":185,\"cured\":5885},{\"date\":\"03.05.2020\",\"confirmed\":18210,\"deaths\":235,\"cured\":7479},{\"date\":\"04.05.2020\",\"confirmed\":22224,\"deaths\":287,\"cured\":9128},{\"date\":\"05.05.2020\",\"confirmed\":26377,\"deaths\":341,\"cured\":10833},{\"date\":\"06.05.2020\",\"confirmed\":30673,\"deaths\":397,\"cured\":12597},{\"date\":\"07.05.2020\",\"confirmed\":35117,\"deaths\":455,\"cured\":14422},{\"date\":\"08.05.2020\",\"confirmed\":39714,\"deaths\":515,\"cured\":16310},{\"date\":\"09.05.2020\",\"confirmed\":44470,\"deaths\":577,\"cured\":18263},{\"date\":\"10.05.2020\",\"confirmed\":49390,\"deaths\":641,\"cured\":20283},{\"date\":\"11.05.2020\",\"confirmed\":54479,\"deaths\":707,\"cured\":22373},{\"date\":\"12.05.2020\",\"confirmed\":59744,\"deaths\":775,\"cured\":24535},{\"date\":\"13.05.2020\",\"confirmed\":65191,\"deaths\":846,\"cured\":26772},{\"date\":\"14.05.2020\",\"confirmed\":70825,\"deaths\":919,\"cured\":29086},{\"date\":\"15.05.2020\",\"confirmed\":76654,\"deaths\":995,\"cured\":31480},{\"date\":\"16.05.2020\",\"confirmed\":82684,\"deaths\":1073,\"cured\":33956},{\"date\":\"17.05.2020\",\"confirmed\":88922,\"deaths\":1154,\"cured\":36518},{\"date\":\"18.05.2020\",\"confirmed\":95375,\"deaths\":1238,\"cured\":39168},{\"date\":\"19.05.2020\",\"confirmed\":102050,\"deaths\":1325,\"cured\":41909},{\"date\":\"20.05.2020\",\"confirmed\":108955,\"deaths\":1415,\"cured\":44745},{\"date\":\"21.05.2020\",\"confirmed\":116098,\"deaths\":1508,\"cured\":47679},{\"date\":\"22.05.2020\",\"confirmed\":123488,\"deaths\":1604,\"cured\":50714},{\"date\":\"23.05.2020\",\"confirmed\":131133,\"deaths\":1703,\"cured\":53853},{\"date\":\"24.05.2020\",\"confirmed\":139041,\"deaths\":1806,\"cured\":57101},{\"date\":\"25.05.2020\",\"confirmed\":147222,\"deaths\":1912,\"cured\":60461},{\"date\":\"26.05.2020\",\"confirmed\":155685,\"deaths\":2022,\"cured\":63937},{\"date\":\"27.05.2020\",\"confirmed\":164440,\"deaths\":2136,\"cured\":67532},{\"date\":\"28.05.2020\",\"confirmed\":173497,\"deaths\":2254,\"cured\":71251}]},{\"country\":\"Московская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":13,\"deaths\":0,\"cured\":2},{\"date\":\"29.04.2020\",\"confirmed\":730,\"deaths\":7,\"cured\":136},{\"date\":\"30.04.2020\",\"confirmed\":1472,\"deaths\":15,\"cured\":274},{\"date\":\"01.05.2020\",\"confirmed\":2240,\"deaths\":23,\"cured\":417},{\"date\":\"02.05.2020\",\"confirmed\":3034,\"deaths\":31,\"cured\":565},{\"date\":\"03.05.2020\",\"confirmed\":3856,\"deaths\":39,\"cured\":718},{\"date\":\"04.05.2020\",\"confirmed\":4706,\"deaths\":48,\"cured\":876},{\"date\":\"05.05.2020\",\"confirmed\":5585,\"deaths\":57,\"cured\":1040},{\"date\":\"06.05.2020\",\"confirmed\":6494,\"deaths\":66,\"cured\":1209},{\"date\":\"07.05.2020\",\"confirmed\":7435,\"deaths\":76,\"cured\":1384},{\"date\":\"08.05.2020\",\"confirmed\":8408,\"deaths\":86,\"cured\":1565},{\"date\":\"09.05.2020\",\"confirmed\":9415,\"deaths\":96,\"cured\":1753},{\"date\":\"10.05.2020\",\"confirmed\":10457,\"deaths\":107,\"cured\":1947},{\"date\":\"11.05.2020\",\"confirmed\":11534,\"deaths\":118,\"cured\":2148},{\"date\":\"12.05.2020\",\"confirmed\":12649,\"deaths\":130,\"cured\":2356},{\"date\":\"13.05.2020\",\"confirmed\":13802,\"deaths\":142,\"cured\":2571},{\"date\":\"14.05.2020\",\"confirmed\":14995,\"deaths\":154,\"cured\":2793},{\"date\":\"15.05.2020\",\"confirmed\":16229,\"deaths\":167,\"cured\":3023},{\"date\":\"16.05.2020\",\"confirmed\":17506,\"deaths\":180,\"cured\":3261},{\"date\":\"17.05.2020\",\"confirmed\":18827,\"deaths\":194,\"cured\":3507},{\"date\":\"18.05.2020\",\"confirmed\":20193,\"deaths\":208,\"cured\":3762},{\"date\":\"19.05.2020\",\"confirmed\":21606,\"deaths\":223,\"cured\":4025},{\"date\":\"20.05.2020\",\"confirmed\":23068,\"deaths\":238,\"cured\":4297},{\"date\":\"21.05.2020\",\"confirmed\":24580,\"deaths\":254,\"cured\":4579},{\"date\":\"22.05.2020\",\"confirmed\":26144,\"deaths\":270,\"cured\":4870},{\"date\":\"23.05.2020\",\"confirmed\":27762,\"deaths\":287,\"cured\":5172},{\"date\":\"24.05.2020\",\"confirmed\":29436,\"deaths\":304,\"cured\":5484},{\"date\":\"25.05.2020\",\"confirmed\":31168,\"deaths\":322,\"cured\":5807},{\"date\":\"26.05.2020\",\"confirmed\":32960,\"deaths\":341,\"cured\":6141},{\"date\":\"27.05.2020\",\"confirmed\":34813,\"deaths\":360,\"cured\":6486},{\"date\":\"28.05.2020\",\"confirmed\":36730,\"deaths\":380,\"cured\":6843}]},{\"country\":\"Санкт-Петербург\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":5,\"deaths\":0,\"cured\":2},{\"date\":\"29.04.2020\",\"confirmed\":295,\"deaths\":4,\"cured\":95},{\"date\":\"30.04.2020\",\"confirmed\":595,\"deaths\":7,\"cured\":192},{\"date\":\"01.05.2020\",\"confirmed\":905,\"deaths\":10,\"cured\":292},{\"date\":\"02.05.2020\",\"confirmed\":1226,\"deaths\":14,\"cured\":395},{\"date\":\"03.05.2020\",\"confirmed\":1558,\"deaths\":18,\"cured\":502},{\"date\":\"04.05.2020\",\"confirmed\":1902,\"deaths\":22,\"cured\":613},{\"date\":\"05.05.2020\",\"confirmed\":2257,\"deaths\":26,\"cured\":727},{\"date\":\"06.05.2020\",\"confirmed\":2625,\"deaths\":30,\"cured\":845},{\"date\":\"07.05.2020\",\"confirmed\":3005,\"deaths\":34,\"cured\":968},{\"date\":\"08.05.2020\",\"confirmed\":3398,\"deaths\":38,\"cured\":1095},{\"date\":\"09.05.2020\",\"confirmed\":3805,\"deaths\":43,\"cured\":1226},{\"date\":\"10.05.2020\",\"confirmed\":4226,\"deaths\":48,\"cured\":1362},{\"date\":\"11.05.2020\",\"confirmed\":4662,\"deaths\":53,\"cured\":1502},{\"date\":\"12.05.2020\",\"confirmed\":5113,\"deaths\":58,\"cured\":1647},{\"date\":\"13.05.2020\",\"confirmed\":5579,\"deaths\":63,\"cured\":1797},{\"date\":\"14.05.2020\",\"confirmed\":6061,\"deaths\":68,\"cured\":1952},{\"date\":\"15.05.2020\",\"confirmed\":6560,\"deaths\":74,\"cured\":2113},{\"date\":\"16.05.2020\",\"confirmed\":7076,\"deaths\":80,\"cured\":2279},{\"date\":\"17.05.2020\",\"confirmed\":7610,\"deaths\":86,\"cured\":2451},{\"date\":\"18.05.2020\",\"confirmed\":8162,\"deaths\":92,\"cured\":2629},{\"date\":\"19.05.2020\",\"confirmed\":8733,\"deaths\":98,\"cured\":2813},{\"date\":\"20.05.2020\",\"confirmed\":9324,\"deaths\":105,\"cured\":3003},{\"date\":\"21.05.2020\",\"confirmed\":9935,\"deaths\":112,\"cured\":3200},{\"date\":\"22.05.2020\",\"confirmed\":10567,\"deaths\":119,\"cured\":3404},{\"date\":\"23.05.2020\",\"confirmed\":11221,\"deaths\":126,\"cured\":3615},{\"date\":\"24.05.2020\",\"confirmed\":11898,\"deaths\":134,\"cured\":3833},{\"date\":\"25.05.2020\",\"confirmed\":12598,\"deaths\":142,\"cured\":4059},{\"date\":\"26.05.2020\",\"confirmed\":13322,\"deaths\":150,\"cured\":4292},{\"date\":\"27.05.2020\",\"confirmed\":14071,\"deaths\":158,\"cured\":4533},{\"date\":\"28.05.2020\",\"confirmed\":14846,\"deaths\":167,\"cured\":4783}]},{\"country\":\"Нижегородская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":3,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":178,\"deaths\":2,\"cured\":63},{\"date\":\"30.04.2020\",\"confirmed\":359,\"deaths\":4,\"cured\":129},{\"date\":\"01.05.2020\",\"confirmed\":546,\"deaths\":6,\"cured\":197},{\"date\":\"02.05.2020\",\"confirmed\":740,\"deaths\":8,\"cured\":267},{\"date\":\"03.05.2020\",\"confirmed\":940,\"deaths\":10,\"cured\":340},{\"date\":\"04.05.2020\",\"confirmed\":1147,\"deaths\":12,\"cured\":415},{\"date\":\"05.05.2020\",\"confirmed\":1362,\"deaths\":14,\"cured\":493},{\"date\":\"06.05.2020\",\"confirmed\":1584,\"deaths\":16,\"cured\":573},{\"date\":\"07.05.2020\",\"confirmed\":1814,\"deaths\":18,\"cured\":656},{\"date\":\"08.05.2020\",\"confirmed\":2052,\"deaths\":20,\"cured\":742},{\"date\":\"09.05.2020\",\"confirmed\":2298,\"deaths\":22,\"cured\":831},{\"date\":\"10.05.2020\",\"confirmed\":2552,\"deaths\":24,\"cured\":923},{\"date\":\"11.05.2020\",\"confirmed\":2815,\"deaths\":26,\"cured\":1018},{\"date\":\"12.05.2020\",\"confirmed\":3087,\"deaths\":29,\"cured\":1116},{\"date\":\"13.05.2020\",\"confirmed\":3368,\"deaths\":32,\"cured\":1218},{\"date\":\"14.05.2020\",\"confirmed\":3659,\"deaths\":35,\"cured\":1323},{\"date\":\"15.05.2020\",\"confirmed\":3960,\"deaths\":38,\"cured\":1432},{\"date\":\"16.05.2020\",\"confirmed\":4271,\"deaths\":41,\"cured\":1545},{\"date\":\"17.05.2020\",\"confirmed\":4593,\"deaths\":44,\"cured\":1662},{\"date\":\"18.05.2020\",\"confirmed\":4926,\"deaths\":47,\"cured\":1783},{\"date\":\"19.05.2020\",\"confirmed\":5271,\"deaths\":50,\"cured\":1908},{\"date\":\"20.05.2020\",\"confirmed\":5628,\"deaths\":53,\"cured\":2037},{\"date\":\"21.05.2020\",\"confirmed\":5997,\"deaths\":56,\"cured\":2171},{\"date\":\"22.05.2020\",\"confirmed\":6379,\"deaths\":60,\"cured\":2309},{\"date\":\"23.05.2020\",\"confirmed\":6774,\"deaths\":64,\"cured\":2452},{\"date\":\"24.05.2020\",\"confirmed\":7183,\"deaths\":68,\"cured\":2600},{\"date\":\"25.05.2020\",\"confirmed\":7606,\"deaths\":72,\"cured\":2753},{\"date\":\"26.05.2020\",\"confirmed\":8043,\"deaths\":76,\"cured\":2911},{\"date\":\"27.05.2020\",\"confirmed\":8495,\"deaths\":80,\"cured\":3075},{\"date\":\"28.05.2020\",\"confirmed\":8963,\"deaths\":84,\"cured\":3244}]},{\"country\":\"Свердловская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":93,\"deaths\":1,\"cured\":37},{\"date\":\"30.04.2020\",\"confirmed\":188,\"deaths\":1,\"cured\":74},{\"date\":\"01.05.2020\",\"confirmed\":286,\"deaths\":1,\"cured\":112},{\"date\":\"02.05.2020\",\"confirmed\":387,\"deaths\":1,\"cured\":152},{\"date\":\"03.05.2020\",\"confirmed\":492,\"deaths\":1,\"cured\":193},{\"date\":\"04.05.2020\",\"confirmed\":601,\"deaths\":1,\"cured\":235},{\"date\":\"05.05.2020\",\"confirmed\":713,\"deaths\":1,\"cured\":279},{\"date\":\"06.05.2020\",\"confirmed\":829,\"deaths\":1,\"cured\":324},{\"date\":\"07.05.2020\",\"confirmed\":949,\"deaths\":2,\"cured\":371},{\"date\":\"08.05.2020\",\"confirmed\":1073,\"deaths\":3,\"cured\":419},{\"date\":\"09.05.2020\",\"confirmed\":1202,\"deaths\":4,\"cured\":469},{\"date\":\"10.05.2020\",\"confirmed\":1335,\"deaths\":5,\"cured\":521},{\"date\":\"11.05.2020\",\"confirmed\":1473,\"deaths\":6,\"cured\":575},{\"date\":\"12.05.2020\",\"confirmed\":1615,\"deaths\":7,\"cured\":630},{\"date\":\"13.05.2020\",\"confirmed\":1762,\"deaths\":8,\"cured\":687},{\"date\":\"14.05.2020\",\"confirmed\":1914,\"deaths\":9,\"cured\":746},{\"date\":\"15.05.2020\",\"confirmed\":2072,\"deaths\":10,\"cured\":807},{\"date\":\"16.05.2020\",\"confirmed\":2235,\"deaths\":11,\"cured\":871},{\"date\":\"17.05.2020\",\"confirmed\":2404,\"deaths\":12,\"cured\":937},{\"date\":\"18.05.2020\",\"confirmed\":2579,\"deaths\":13,\"cured\":1005},{\"date\":\"19.05.2020\",\"confirmed\":2760,\"deaths\":14,\"cured\":1075},{\"date\":\"20.05.2020\",\"confirmed\":2947,\"deaths\":15,\"cured\":1148},{\"date\":\"21.05.2020\",\"confirmed\":3140,\"deaths\":16,\"cured\":1223},{\"date\":\"22.05.2020\",\"confirmed\":3340,\"deaths\":17,\"cured\":1301},{\"date\":\"23.05.2020\",\"confirmed\":3547,\"deaths\":18,\"cured\":1382},{\"date\":\"24.05.2020\",\"confirmed\":3761,\"deaths\":19,\"cured\":1465},{\"date\":\"25.05.2020\",\"confirmed\":3982,\"deaths\":20,\"cured\":1551},{\"date\":\"26.05.2020\",\"confirmed\":4211,\"deaths\":21,\"cured\":1640},{\"date\":\"27.05.2020\",\"confirmed\":4448,\"deaths\":22,\"cured\":1732},{\"date\":\"28.05.2020\",\"confirmed\":4693,\"deaths\":23,\"cured\":1827}]},{\"country\":\"Республика Дагестан\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":2,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":91,\"deaths\":4,\"cured\":87},{\"date\":\"30.04.2020\",\"confirmed\":184,\"deaths\":7,\"cured\":176},{\"date\":\"01.05.2020\",\"confirmed\":280,\"deaths\":10,\"cured\":268},{\"date\":\"02.05.2020\",\"confirmed\":379,\"deaths\":13,\"cured\":363},{\"date\":\"03.05.2020\",\"confirmed\":481,\"deaths\":16,\"cured\":461},{\"date\":\"04.05.2020\",\"confirmed\":587,\"deaths\":19,\"cured\":563},{\"date\":\"05.05.2020\",\"confirmed\":697,\"deaths\":23,\"cured\":668},{\"date\":\"06.05.2020\",\"confirmed\":810,\"deaths\":27,\"cured\":777},{\"date\":\"07.05.2020\",\"confirmed\":927,\"deaths\":31,\"cured\":890},{\"date\":\"08.05.2020\",\"confirmed\":1048,\"deaths\":35,\"cured\":1007},{\"date\":\"09.05.2020\",\"confirmed\":1173,\"deaths\":39,\"cured\":1128},{\"date\":\"10.05.2020\",\"confirmed\":1303,\"deaths\":43,\"cured\":1253},{\"date\":\"11.05.2020\",\"confirmed\":1437,\"deaths\":47,\"cured\":1382},{\"date\":\"12.05.2020\",\"confirmed\":1576,\"deaths\":52,\"cured\":1516},{\"date\":\"13.05.2020\",\"confirmed\":1720,\"deaths\":57,\"cured\":1654},{\"date\":\"14.05.2020\",\"confirmed\":1869,\"deaths\":62,\"cured\":1797},{\"date\":\"15.05.2020\",\"confirmed\":2023,\"deaths\":67,\"cured\":1945},{\"date\":\"16.05.2020\",\"confirmed\":2182,\"deaths\":72,\"cured\":2098},{\"date\":\"17.05.2020\",\"confirmed\":2347,\"deaths\":77,\"cured\":2256},{\"date\":\"18.05.2020\",\"confirmed\":2517,\"deaths\":83,\"cured\":2420},{\"date\":\"19.05.2020\",\"confirmed\":2693,\"deaths\":89,\"cured\":2589},{\"date\":\"20.05.2020\",\"confirmed\":2875,\"deaths\":95,\"cured\":2764},{\"date\":\"21.05.2020\",\"confirmed\":3064,\"deaths\":101,\"cured\":2945},{\"date\":\"22.05.2020\",\"confirmed\":3259,\"deaths\":107,\"cured\":3132},{\"date\":\"23.05.2020\",\"confirmed\":3461,\"deaths\":114,\"cured\":3326},{\"date\":\"24.05.2020\",\"confirmed\":3670,\"deaths\":121,\"cured\":3527},{\"date\":\"25.05.2020\",\"confirmed\":3886,\"deaths\":128,\"cured\":3735},{\"date\":\"26.05.2020\",\"confirmed\":4109,\"deaths\":135,\"cured\":3950},{\"date\":\"27.05.2020\",\"confirmed\":4340,\"deaths\":143,\"cured\":4172},{\"date\":\"28.05.2020\",\"confirmed\":4579,\"deaths\":151,\"cured\":4402}]},{\"country\":\"Ростовская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":0,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":83,\"deaths\":1,\"cured\":30},{\"date\":\"30.04.2020\",\"confirmed\":170,\"deaths\":2,\"cured\":61},{\"date\":\"01.05.2020\",\"confirmed\":260,\"deaths\":3,\"cured\":93},{\"date\":\"02.05.2020\",\"confirmed\":353,\"deaths\":4,\"cured\":126},{\"date\":\"03.05.2020\",\"confirmed\":449,\"deaths\":5,\"cured\":160},{\"date\":\"04.05.2020\",\"confirmed\":548,\"deaths\":6,\"cured\":195},{\"date\":\"05.05.2020\",\"confirmed\":651,\"deaths\":7,\"cured\":232},{\"date\":\"06.05.2020\",\"confirmed\":757,\"deaths\":8,\"cured\":270},{\"date\":\"07.05.2020\",\"confirmed\":867,\"deaths\":9,\"cured\":309},{\"date\":\"08.05.2020\",\"confirmed\":981,\"deaths\":10,\"cured\":350},{\"date\":\"09.05.2020\",\"confirmed\":1098,\"deaths\":11,\"cured\":392},{\"date\":\"10.05.2020\",\"confirmed\":1220,\"deaths\":12,\"cured\":435},{\"date\":\"11.05.2020\",\"confirmed\":1346,\"deaths\":13,\"cured\":480},{\"date\":\"12.05.2020\",\"confirmed\":1476,\"deaths\":14,\"cured\":526},{\"date\":\"13.05.2020\",\"confirmed\":1611,\"deaths\":15,\"cured\":574},{\"date\":\"14.05.2020\",\"confirmed\":1750,\"deaths\":16,\"cured\":624},{\"date\":\"15.05.2020\",\"confirmed\":1894,\"deaths\":17,\"cured\":675},{\"date\":\"16.05.2020\",\"confirmed\":2043,\"deaths\":18,\"cured\":728},{\"date\":\"17.05.2020\",\"confirmed\":2197,\"deaths\":19,\"cured\":783},{\"date\":\"18.05.2020\",\"confirmed\":2356,\"deaths\":20,\"cured\":840},{\"date\":\"19.05.2020\",\"confirmed\":2521,\"deaths\":21,\"cured\":899},{\"date\":\"20.05.2020\",\"confirmed\":2692,\"deaths\":22,\"cured\":960},{\"date\":\"21.05.2020\",\"confirmed\":2869,\"deaths\":23,\"cured\":1023},{\"date\":\"22.05.2020\",\"confirmed\":3052,\"deaths\":24,\"cured\":1088},{\"date\":\"23.05.2020\",\"confirmed\":3241,\"deaths\":25,\"cured\":1155},{\"date\":\"24.05.2020\",\"confirmed\":3436,\"deaths\":27,\"cured\":1225},{\"date\":\"25.05.2020\",\"confirmed\":3638,\"deaths\":29,\"cured\":1297},{\"date\":\"26.05.2020\",\"confirmed\":3847,\"deaths\":31,\"cured\":1372},{\"date\":\"27.05.2020\",\"confirmed\":4063,\"deaths\":33,\"cured\":1449},{\"date\":\"28.05.2020\",\"confirmed\":4287,\"deaths\":35,\"cured\":1529}]},{\"country\":\"Красноярский край\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":2,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":77,\"deaths\":0,\"cured\":17},{\"date\":\"30.04.2020\",\"confirmed\":155,\"deaths\":0,\"cured\":34},{\"date\":\"01.05.2020\",\"confirmed\":235,\"deaths\":1,\"cured\":51},{\"date\":\"02.05.2020\",\"confirmed\":318,\"deaths\":2,\"cured\":69},{\"date\":\"03.05.2020\",\"confirmed\":404,\"deaths\":3,\"cured\":88},{\"date\":\"04.05.2020\",\"confirmed\":493,\"deaths\":4,\"cured\":107},{\"date\":\"05.05.2020\",\"confirmed\":585,\"deaths\":5,\"cured\":127},{\"date\":\"06.05.2020\",\"confirmed\":680,\"deaths\":6,\"cured\":148},{\"date\":\"07.05.2020\",\"confirmed\":779,\"deaths\":7,\"cured\":169},{\"date\":\"08.05.2020\",\"confirmed\":881,\"deaths\":8,\"cured\":191},{\"date\":\"09.05.2020\",\"confirmed\":986,\"deaths\":9,\"cured\":214},{\"date\":\"10.05.2020\",\"confirmed\":1095,\"deaths\":10,\"cured\":238},{\"date\":\"11.05.2020\",\"confirmed\":1208,\"deaths\":11,\"cured\":262},{\"date\":\"12.05.2020\",\"confirmed\":1325,\"deaths\":12,\"cured\":287},{\"date\":\"13.05.2020\",\"confirmed\":1446,\"deaths\":13,\"cured\":313},{\"date\":\"14.05.2020\",\"confirmed\":1571,\"deaths\":14,\"cured\":340},{\"date\":\"15.05.2020\",\"confirmed\":1700,\"deaths\":15,\"cured\":368},{\"date\":\"16.05.2020\",\"confirmed\":1834,\"deaths\":16,\"cured\":397},{\"date\":\"17.05.2020\",\"confirmed\":1972,\"deaths\":17,\"cured\":427},{\"date\":\"18.05.2020\",\"confirmed\":2115,\"deaths\":18,\"cured\":458},{\"date\":\"19.05.2020\",\"confirmed\":2263,\"deaths\":19,\"cured\":490},{\"date\":\"20.05.2020\",\"confirmed\":2416,\"deaths\":20,\"cured\":523},{\"date\":\"21.05.2020\",\"confirmed\":2574,\"deaths\":21,\"cured\":557},{\"date\":\"22.05.2020\",\"confirmed\":2738,\"deaths\":22,\"cured\":593},{\"date\":\"23.05.2020\",\"confirmed\":2908,\"deaths\":23,\"cured\":630},{\"date\":\"24.05.2020\",\"confirmed\":3083,\"deaths\":24,\"cured\":668},{\"date\":\"25.05.2020\",\"confirmed\":3264,\"deaths\":25,\"cured\":707},{\"date\":\"26.05.2020\",\"confirmed\":3452,\"deaths\":26,\"cured\":748},{\"date\":\"27.05.2020\",\"confirmed\":3646,\"deaths\":27,\"cured\":790},{\"date\":\"28.05.2020\",\"confirmed\":3847,\"deaths\":29,\"cured\":834}]},{\"country\":\"Калужская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":72,\"deaths\":0,\"cured\":22},{\"date\":\"30.04.2020\",\"confirmed\":146,\"deaths\":0,\"cured\":47},{\"date\":\"01.05.2020\",\"confirmed\":222,\"deaths\":1,\"cured\":73},{\"date\":\"02.05.2020\",\"confirmed\":301,\"deaths\":2,\"cured\":100},{\"date\":\"03.05.2020\",\"confirmed\":383,\"deaths\":3,\"cured\":128},{\"date\":\"04.05.2020\",\"confirmed\":467,\"deaths\":4,\"cured\":157},{\"date\":\"05.05.2020\",\"confirmed\":554,\"deaths\":5,\"cured\":187},{\"date\":\"06.05.2020\",\"confirmed\":644,\"deaths\":6,\"cured\":218},{\"date\":\"07.05.2020\",\"confirmed\":738,\"deaths\":7,\"cured\":250},{\"date\":\"08.05.2020\",\"confirmed\":835,\"deaths\":8,\"cured\":283},{\"date\":\"09.05.2020\",\"confirmed\":935,\"deaths\":9,\"cured\":317},{\"date\":\"10.05.2020\",\"confirmed\":1039,\"deaths\":10,\"cured\":352},{\"date\":\"11.05.2020\",\"confirmed\":1146,\"deaths\":11,\"cured\":388},{\"date\":\"12.05.2020\",\"confirmed\":1257,\"deaths\":12,\"cured\":426},{\"date\":\"13.05.2020\",\"confirmed\":1372,\"deaths\":13,\"cured\":465},{\"date\":\"14.05.2020\",\"confirmed\":1491,\"deaths\":14,\"cured\":505},{\"date\":\"15.05.2020\",\"confirmed\":1614,\"deaths\":15,\"cured\":547},{\"date\":\"16.05.2020\",\"confirmed\":1741,\"deaths\":16,\"cured\":590},{\"date\":\"17.05.2020\",\"confirmed\":1872,\"deaths\":17,\"cured\":634},{\"date\":\"18.05.2020\",\"confirmed\":2008,\"deaths\":18,\"cured\":680},{\"date\":\"19.05.2020\",\"confirmed\":2149,\"deaths\":19,\"cured\":728},{\"date\":\"20.05.2020\",\"confirmed\":2294,\"deaths\":20,\"cured\":777},{\"date\":\"21.05.2020\",\"confirmed\":2444,\"deaths\":21,\"cured\":828},{\"date\":\"22.05.2020\",\"confirmed\":2600,\"deaths\":22,\"cured\":881},{\"date\":\"23.05.2020\",\"confirmed\":2761,\"deaths\":23,\"cured\":936},{\"date\":\"24.05.2020\",\"confirmed\":2928,\"deaths\":24,\"cured\":992},{\"date\":\"25.05.2020\",\"confirmed\":3100,\"deaths\":25,\"cured\":1050},{\"date\":\"26.05.2020\",\"confirmed\":3278,\"deaths\":26,\"cured\":1110},{\"date\":\"27.05.2020\",\"confirmed\":3462,\"deaths\":27,\"cured\":1172},{\"date\":\"28.05.2020\",\"confirmed\":3653,\"deaths\":29,\"cured\":1237}]},{\"country\":\"Краснодарский край\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":71,\"deaths\":0,\"cured\":48},{\"date\":\"30.04.2020\",\"confirmed\":143,\"deaths\":0,\"cured\":96},{\"date\":\"01.05.2020\",\"confirmed\":218,\"deaths\":1,\"cured\":146},{\"date\":\"02.05.2020\",\"confirmed\":295,\"deaths\":2,\"cured\":198},{\"date\":\"03.05.2020\",\"confirmed\":375,\"deaths\":3,\"cured\":252},{\"date\":\"04.05.2020\",\"confirmed\":458,\"deaths\":4,\"cured\":307},{\"date\":\"05.05.2020\",\"confirmed\":544,\"deaths\":5,\"cured\":364},{\"date\":\"06.05.2020\",\"confirmed\":633,\"deaths\":6,\"cured\":423},{\"date\":\"07.05.2020\",\"confirmed\":725,\"deaths\":7,\"cured\":484},{\"date\":\"08.05.2020\",\"confirmed\":820,\"deaths\":8,\"cured\":547},{\"date\":\"09.05.2020\",\"confirmed\":918,\"deaths\":9,\"cured\":613},{\"date\":\"10.05.2020\",\"confirmed\":1020,\"deaths\":10,\"cured\":681},{\"date\":\"11.05.2020\",\"confirmed\":1125,\"deaths\":11,\"cured\":751},{\"date\":\"12.05.2020\",\"confirmed\":1234,\"deaths\":12,\"cured\":824},{\"date\":\"13.05.2020\",\"confirmed\":1346,\"deaths\":13,\"cured\":899},{\"date\":\"14.05.2020\",\"confirmed\":1462,\"deaths\":14,\"cured\":977},{\"date\":\"15.05.2020\",\"confirmed\":1582,\"deaths\":15,\"cured\":1057},{\"date\":\"16.05.2020\",\"confirmed\":1706,\"deaths\":16,\"cured\":1140},{\"date\":\"17.05.2020\",\"confirmed\":1835,\"deaths\":17,\"cured\":1226},{\"date\":\"18.05.2020\",\"confirmed\":1968,\"deaths\":18,\"cured\":1315},{\"date\":\"19.05.2020\",\"confirmed\":2106,\"deaths\":19,\"cured\":1407},{\"date\":\"20.05.2020\",\"confirmed\":2249,\"deaths\":20,\"cured\":1502},{\"date\":\"21.05.2020\",\"confirmed\":2396,\"deaths\":21,\"cured\":1601},{\"date\":\"22.05.2020\",\"confirmed\":2549,\"deaths\":22,\"cured\":1703},{\"date\":\"23.05.2020\",\"confirmed\":2707,\"deaths\":23,\"cured\":1808},{\"date\":\"24.05.2020\",\"confirmed\":2870,\"deaths\":24,\"cured\":1917},{\"date\":\"25.05.2020\",\"confirmed\":3039,\"deaths\":25,\"cured\":2030},{\"date\":\"26.05.2020\",\"confirmed\":3214,\"deaths\":26,\"cured\":2147},{\"date\":\"27.05.2020\",\"confirmed\":3395,\"deaths\":27,\"cured\":2268},{\"date\":\"28.05.2020\",\"confirmed\":3582,\"deaths\":29,\"cured\":2393}]},{\"country\":\"Тульская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":70,\"deaths\":0,\"cured\":32},{\"date\":\"30.04.2020\",\"confirmed\":141,\"deaths\":1,\"cured\":64},{\"date\":\"01.05.2020\",\"confirmed\":215,\"deaths\":2,\"cured\":97},{\"date\":\"02.05.2020\",\"confirmed\":291,\"deaths\":3,\"cured\":131},{\"date\":\"03.05.2020\",\"confirmed\":370,\"deaths\":4,\"cured\":166},{\"date\":\"04.05.2020\",\"confirmed\":452,\"deaths\":5,\"cured\":202},{\"date\":\"05.05.2020\",\"confirmed\":537,\"deaths\":6,\"cured\":239},{\"date\":\"06.05.2020\",\"confirmed\":624,\"deaths\":7,\"cured\":278},{\"date\":\"07.05.2020\",\"confirmed\":714,\"deaths\":8,\"cured\":318},{\"date\":\"08.05.2020\",\"confirmed\":808,\"deaths\":9,\"cured\":359},{\"date\":\"09.05.2020\",\"confirmed\":905,\"deaths\":10,\"cured\":402},{\"date\":\"10.05.2020\",\"confirmed\":1005,\"deaths\":11,\"cured\":446},{\"date\":\"11.05.2020\",\"confirmed\":1109,\"deaths\":12,\"cured\":492},{\"date\":\"12.05.2020\",\"confirmed\":1216,\"deaths\":13,\"cured\":539},{\"date\":\"13.05.2020\",\"confirmed\":1327,\"deaths\":14,\"cured\":588},{\"date\":\"14.05.2020\",\"confirmed\":1442,\"deaths\":15,\"cured\":639},{\"date\":\"15.05.2020\",\"confirmed\":1561,\"deaths\":16,\"cured\":692},{\"date\":\"16.05.2020\",\"confirmed\":1684,\"deaths\":17,\"cured\":746},{\"date\":\"17.05.2020\",\"confirmed\":1811,\"deaths\":18,\"cured\":802},{\"date\":\"18.05.2020\",\"confirmed\":1942,\"deaths\":19,\"cured\":860},{\"date\":\"19.05.2020\",\"confirmed\":2078,\"deaths\":20,\"cured\":920},{\"date\":\"20.05.2020\",\"confirmed\":2219,\"deaths\":21,\"cured\":982},{\"date\":\"21.05.2020\",\"confirmed\":2364,\"deaths\":22,\"cured\":1046},{\"date\":\"22.05.2020\",\"confirmed\":2514,\"deaths\":23,\"cured\":1113},{\"date\":\"23.05.2020\",\"confirmed\":2670,\"deaths\":24,\"cured\":1182},{\"date\":\"24.05.2020\",\"confirmed\":2831,\"deaths\":25,\"cured\":1253},{\"date\":\"25.05.2020\",\"confirmed\":2998,\"deaths\":26,\"cured\":1327},{\"date\":\"26.05.2020\",\"confirmed\":3170,\"deaths\":27,\"cured\":1403},{\"date\":\"27.05.2020\",\"confirmed\":3348,\"deaths\":28,\"cured\":1482},{\"date\":\"28.05.2020\",\"confirmed\":3532,\"deaths\":30,\"cured\":1564}]},{\"country\":\"Брянская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":67,\"deaths\":0,\"cured\":38},{\"date\":\"30.04.2020\",\"confirmed\":135,\"deaths\":1,\"cured\":76},{\"date\":\"01.05.2020\",\"confirmed\":205,\"deaths\":2,\"cured\":116},{\"date\":\"02.05.2020\",\"confirmed\":278,\"deaths\":3,\"cured\":157},{\"date\":\"03.05.2020\",\"confirmed\":353,\"deaths\":4,\"cured\":199},{\"date\":\"04.05.2020\",\"confirmed\":431,\"deaths\":5,\"cured\":243},{\"date\":\"05.05.2020\",\"confirmed\":512,\"deaths\":6,\"cured\":288},{\"date\":\"06.05.2020\",\"confirmed\":595,\"deaths\":7,\"cured\":335},{\"date\":\"07.05.2020\",\"confirmed\":681,\"deaths\":8,\"cured\":384},{\"date\":\"08.05.2020\",\"confirmed\":770,\"deaths\":9,\"cured\":434},{\"date\":\"09.05.2020\",\"confirmed\":862,\"deaths\":10,\"cured\":486},{\"date\":\"10.05.2020\",\"confirmed\":957,\"deaths\":11,\"cured\":540},{\"date\":\"11.05.2020\",\"confirmed\":1056,\"deaths\":12,\"cured\":596},{\"date\":\"12.05.2020\",\"confirmed\":1158,\"deaths\":13,\"cured\":653},{\"date\":\"13.05.2020\",\"confirmed\":1264,\"deaths\":14,\"cured\":712},{\"date\":\"14.05.2020\",\"confirmed\":1373,\"deaths\":15,\"cured\":773},{\"date\":\"15.05.2020\",\"confirmed\":1486,\"deaths\":16,\"cured\":837},{\"date\":\"16.05.2020\",\"confirmed\":1603,\"deaths\":17,\"cured\":903},{\"date\":\"17.05.2020\",\"confirmed\":1724,\"deaths\":18,\"cured\":971},{\"date\":\"18.05.2020\",\"confirmed\":1849,\"deaths\":19,\"cured\":1041},{\"date\":\"19.05.2020\",\"confirmed\":1978,\"deaths\":20,\"cured\":1114},{\"date\":\"20.05.2020\",\"confirmed\":2112,\"deaths\":21,\"cured\":1189},{\"date\":\"21.05.2020\",\"confirmed\":2250,\"deaths\":22,\"cured\":1267},{\"date\":\"22.05.2020\",\"confirmed\":2393,\"deaths\":23,\"cured\":1348},{\"date\":\"23.05.2020\",\"confirmed\":2541,\"deaths\":24,\"cured\":1431},{\"date\":\"24.05.2020\",\"confirmed\":2694,\"deaths\":25,\"cured\":1517},{\"date\":\"25.05.2020\",\"confirmed\":2853,\"deaths\":26,\"cured\":1606},{\"date\":\"26.05.2020\",\"confirmed\":3017,\"deaths\":27,\"cured\":1698},{\"date\":\"27.05.2020\",\"confirmed\":3187,\"deaths\":29,\"cured\":1794},{\"date\":\"28.05.2020\",\"confirmed\":3363,\"deaths\":31,\"cured\":1893}]},{\"country\":\"Рязанская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":65,\"deaths\":0,\"cured\":17},{\"date\":\"30.04.2020\",\"confirmed\":131,\"deaths\":0,\"cured\":34},{\"date\":\"01.05.2020\",\"confirmed\":200,\"deaths\":0,\"cured\":52},{\"date\":\"02.05.2020\",\"confirmed\":271,\"deaths\":0,\"cured\":70},{\"date\":\"03.05.2020\",\"confirmed\":344,\"deaths\":0,\"cured\":89},{\"date\":\"04.05.2020\",\"confirmed\":420,\"deaths\":0,\"cured\":109},{\"date\":\"05.05.2020\",\"confirmed\":499,\"deaths\":0,\"cured\":129},{\"date\":\"06.05.2020\",\"confirmed\":580,\"deaths\":0,\"cured\":150},{\"date\":\"07.05.2020\",\"confirmed\":664,\"deaths\":0,\"cured\":172},{\"date\":\"08.05.2020\",\"confirmed\":751,\"deaths\":0,\"cured\":194},{\"date\":\"09.05.2020\",\"confirmed\":841,\"deaths\":0,\"cured\":217},{\"date\":\"10.05.2020\",\"confirmed\":934,\"deaths\":0,\"cured\":241},{\"date\":\"11.05.2020\",\"confirmed\":1030,\"deaths\":0,\"cured\":266},{\"date\":\"12.05.2020\",\"confirmed\":1130,\"deaths\":0,\"cured\":292},{\"date\":\"13.05.2020\",\"confirmed\":1233,\"deaths\":0,\"cured\":319},{\"date\":\"14.05.2020\",\"confirmed\":1340,\"deaths\":0,\"cured\":347},{\"date\":\"15.05.2020\",\"confirmed\":1450,\"deaths\":0,\"cured\":375},{\"date\":\"16.05.2020\",\"confirmed\":1564,\"deaths\":0,\"cured\":404},{\"date\":\"17.05.2020\",\"confirmed\":1682,\"deaths\":0,\"cured\":434},{\"date\":\"18.05.2020\",\"confirmed\":1804,\"deaths\":0,\"cured\":466},{\"date\":\"19.05.2020\",\"confirmed\":1930,\"deaths\":0,\"cured\":499},{\"date\":\"20.05.2020\",\"confirmed\":2061,\"deaths\":0,\"cured\":533},{\"date\":\"21.05.2020\",\"confirmed\":2196,\"deaths\":0,\"cured\":568},{\"date\":\"22.05.2020\",\"confirmed\":2336,\"deaths\":1,\"cured\":604},{\"date\":\"23.05.2020\",\"confirmed\":2481,\"deaths\":2,\"cured\":641},{\"date\":\"24.05.2020\",\"confirmed\":2631,\"deaths\":3,\"cured\":680},{\"date\":\"25.05.2020\",\"confirmed\":2786,\"deaths\":4,\"cured\":720},{\"date\":\"26.05.2020\",\"confirmed\":2946,\"deaths\":5,\"cured\":761},{\"date\":\"27.05.2020\",\"confirmed\":3112,\"deaths\":6,\"cured\":804},{\"date\":\"28.05.2020\",\"confirmed\":3283,\"deaths\":7,\"cured\":848}]},{\"country\":\"Мурманская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":61,\"deaths\":2,\"cured\":36},{\"date\":\"30.04.2020\",\"confirmed\":123,\"deaths\":5,\"cured\":71},{\"date\":\"01.05.2020\",\"confirmed\":187,\"deaths\":5,\"cured\":107},{\"date\":\"02.05.2020\",\"confirmed\":254,\"deaths\":5,\"cured\":144},{\"date\":\"03.05.2020\",\"confirmed\":323,\"deaths\":5,\"cured\":183},{\"date\":\"04.05.2020\",\"confirmed\":394,\"deaths\":5,\"cured\":223},{\"date\":\"05.05.2020\",\"confirmed\":468,\"deaths\":5,\"cured\":264},{\"date\":\"06.05.2020\",\"confirmed\":544,\"deaths\":5,\"cured\":307},{\"date\":\"07.05.2020\",\"confirmed\":623,\"deaths\":5,\"cured\":351},{\"date\":\"08.05.2020\",\"confirmed\":705,\"deaths\":5,\"cured\":397},{\"date\":\"09.05.2020\",\"confirmed\":789,\"deaths\":5,\"cured\":444},{\"date\":\"10.05.2020\",\"confirmed\":876,\"deaths\":5,\"cured\":493},{\"date\":\"11.05.2020\",\"confirmed\":966,\"deaths\":5,\"cured\":544},{\"date\":\"12.05.2020\",\"confirmed\":1059,\"deaths\":5,\"cured\":596},{\"date\":\"13.05.2020\",\"confirmed\":1156,\"deaths\":5,\"cured\":650},{\"date\":\"14.05.2020\",\"confirmed\":1256,\"deaths\":5,\"cured\":706},{\"date\":\"15.05.2020\",\"confirmed\":1359,\"deaths\":5,\"cured\":764},{\"date\":\"16.05.2020\",\"confirmed\":1466,\"deaths\":5,\"cured\":824},{\"date\":\"17.05.2020\",\"confirmed\":1577,\"deaths\":5,\"cured\":886},{\"date\":\"18.05.2020\",\"confirmed\":1691,\"deaths\":5,\"cured\":950},{\"date\":\"19.05.2020\",\"confirmed\":1809,\"deaths\":5,\"cured\":1016},{\"date\":\"20.05.2020\",\"confirmed\":1931,\"deaths\":5,\"cured\":1085},{\"date\":\"21.05.2020\",\"confirmed\":2058,\"deaths\":5,\"cured\":1156},{\"date\":\"22.05.2020\",\"confirmed\":2189,\"deaths\":5,\"cured\":1230},{\"date\":\"23.05.2020\",\"confirmed\":2325,\"deaths\":5,\"cured\":1306},{\"date\":\"24.05.2020\",\"confirmed\":2465,\"deaths\":5,\"cured\":1385},{\"date\":\"25.05.2020\",\"confirmed\":2610,\"deaths\":5,\"cured\":1467},{\"date\":\"26.05.2020\",\"confirmed\":2760,\"deaths\":5,\"cured\":1551},{\"date\":\"27.05.2020\",\"confirmed\":2915,\"deaths\":6,\"cured\":1638},{\"date\":\"28.05.2020\",\"confirmed\":3076,\"deaths\":7,\"cured\":1728}]},{\"country\":\"Республика Татарстан\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":60,\"deaths\":0,\"cured\":47},{\"date\":\"30.04.2020\",\"confirmed\":121,\"deaths\":0,\"cured\":95},{\"date\":\"01.05.2020\",\"confirmed\":184,\"deaths\":0,\"cured\":144},{\"date\":\"02.05.2020\",\"confirmed\":249,\"deaths\":0,\"cured\":195},{\"date\":\"03.05.2020\",\"confirmed\":317,\"deaths\":0,\"cured\":248},{\"date\":\"04.05.2020\",\"confirmed\":387,\"deaths\":1,\"cured\":302},{\"date\":\"05.05.2020\",\"confirmed\":459,\"deaths\":1,\"cured\":358},{\"date\":\"06.05.2020\",\"confirmed\":534,\"deaths\":1,\"cured\":416},{\"date\":\"07.05.2020\",\"confirmed\":611,\"deaths\":1,\"cured\":476},{\"date\":\"08.05.2020\",\"confirmed\":691,\"deaths\":1,\"cured\":538},{\"date\":\"09.05.2020\",\"confirmed\":774,\"deaths\":1,\"cured\":602},{\"date\":\"10.05.2020\",\"confirmed\":860,\"deaths\":1,\"cured\":669},{\"date\":\"11.05.2020\",\"confirmed\":949,\"deaths\":1,\"cured\":738},{\"date\":\"12.05.2020\",\"confirmed\":1041,\"deaths\":1,\"cured\":809},{\"date\":\"13.05.2020\",\"confirmed\":1136,\"deaths\":1,\"cured\":883},{\"date\":\"14.05.2020\",\"confirmed\":1234,\"deaths\":1,\"cured\":959},{\"date\":\"15.05.2020\",\"confirmed\":1336,\"deaths\":1,\"cured\":1038},{\"date\":\"16.05.2020\",\"confirmed\":1441,\"deaths\":1,\"cured\":1120},{\"date\":\"17.05.2020\",\"confirmed\":1550,\"deaths\":1,\"cured\":1204},{\"date\":\"18.05.2020\",\"confirmed\":1663,\"deaths\":1,\"cured\":1291},{\"date\":\"19.05.2020\",\"confirmed\":1779,\"deaths\":1,\"cured\":1381},{\"date\":\"20.05.2020\",\"confirmed\":1899,\"deaths\":2,\"cured\":1474},{\"date\":\"21.05.2020\",\"confirmed\":2024,\"deaths\":3,\"cured\":1571},{\"date\":\"22.05.2020\",\"confirmed\":2153,\"deaths\":4,\"cured\":1671},{\"date\":\"23.05.2020\",\"confirmed\":2286,\"deaths\":5,\"cured\":1775},{\"date\":\"24.05.2020\",\"confirmed\":2424,\"deaths\":6,\"cured\":1882},{\"date\":\"25.05.2020\",\"confirmed\":2567,\"deaths\":7,\"cured\":1993},{\"date\":\"26.05.2020\",\"confirmed\":2715,\"deaths\":8,\"cured\":2108},{\"date\":\"27.05.2020\",\"confirmed\":2868,\"deaths\":9,\"cured\":2227},{\"date\":\"28.05.2020\",\"confirmed\":3026,\"deaths\":10,\"cured\":2350}]},{\"country\":\"Республика Башкортостан\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":60,\"deaths\":4,\"cured\":19},{\"date\":\"30.04.2020\",\"confirmed\":121,\"deaths\":4,\"cured\":38},{\"date\":\"01.05.2020\",\"confirmed\":184,\"deaths\":4,\"cured\":58},{\"date\":\"02.05.2020\",\"confirmed\":249,\"deaths\":4,\"cured\":79},{\"date\":\"03.05.2020\",\"confirmed\":317,\"deaths\":4,\"cured\":100},{\"date\":\"04.05.2020\",\"confirmed\":387,\"deaths\":4,\"cured\":122},{\"date\":\"05.05.2020\",\"confirmed\":459,\"deaths\":4,\"cured\":145},{\"date\":\"06.05.2020\",\"confirmed\":534,\"deaths\":4,\"cured\":168},{\"date\":\"07.05.2020\",\"confirmed\":611,\"deaths\":4,\"cured\":192},{\"date\":\"08.05.2020\",\"confirmed\":691,\"deaths\":4,\"cured\":217},{\"date\":\"09.05.2020\",\"confirmed\":774,\"deaths\":4,\"cured\":243},{\"date\":\"10.05.2020\",\"confirmed\":860,\"deaths\":4,\"cured\":270},{\"date\":\"11.05.2020\",\"confirmed\":949,\"deaths\":4,\"cured\":298},{\"date\":\"12.05.2020\",\"confirmed\":1041,\"deaths\":4,\"cured\":327},{\"date\":\"13.05.2020\",\"confirmed\":1136,\"deaths\":4,\"cured\":357},{\"date\":\"14.05.2020\",\"confirmed\":1234,\"deaths\":4,\"cured\":388},{\"date\":\"15.05.2020\",\"confirmed\":1336,\"deaths\":5,\"cured\":420},{\"date\":\"16.05.2020\",\"confirmed\":1441,\"deaths\":6,\"cured\":453},{\"date\":\"17.05.2020\",\"confirmed\":1550,\"deaths\":7,\"cured\":487},{\"date\":\"18.05.2020\",\"confirmed\":1662,\"deaths\":8,\"cured\":522},{\"date\":\"19.05.2020\",\"confirmed\":1778,\"deaths\":9,\"cured\":558},{\"date\":\"20.05.2020\",\"confirmed\":1898,\"deaths\":10,\"cured\":596},{\"date\":\"21.05.2020\",\"confirmed\":2022,\"deaths\":11,\"cured\":635},{\"date\":\"22.05.2020\",\"confirmed\":2151,\"deaths\":12,\"cured\":675},{\"date\":\"23.05.2020\",\"confirmed\":2284,\"deaths\":13,\"cured\":717},{\"date\":\"24.05.2020\",\"confirmed\":2422,\"deaths\":14,\"cured\":760},{\"date\":\"25.05.2020\",\"confirmed\":2564,\"deaths\":15,\"cured\":805},{\"date\":\"26.05.2020\",\"confirmed\":2711,\"deaths\":16,\"cured\":851},{\"date\":\"27.05.2020\",\"confirmed\":2863,\"deaths\":17,\"cured\":899},{\"date\":\"28.05.2020\",\"confirmed\":3021,\"deaths\":18,\"cured\":948}]},{\"country\":\"Ярославская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":2,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":58,\"deaths\":0,\"cured\":12},{\"date\":\"30.04.2020\",\"confirmed\":116,\"deaths\":0,\"cured\":25},{\"date\":\"01.05.2020\",\"confirmed\":176,\"deaths\":0,\"cured\":39},{\"date\":\"02.05.2020\",\"confirmed\":238,\"deaths\":0,\"cured\":53},{\"date\":\"03.05.2020\",\"confirmed\":303,\"deaths\":0,\"cured\":68},{\"date\":\"04.05.2020\",\"confirmed\":370,\"deaths\":0,\"cured\":83},{\"date\":\"05.05.2020\",\"confirmed\":439,\"deaths\":0,\"cured\":99},{\"date\":\"06.05.2020\",\"confirmed\":511,\"deaths\":0,\"cured\":115},{\"date\":\"07.05.2020\",\"confirmed\":585,\"deaths\":0,\"cured\":132},{\"date\":\"08.05.2020\",\"confirmed\":662,\"deaths\":0,\"cured\":149},{\"date\":\"09.05.2020\",\"confirmed\":741,\"deaths\":0,\"cured\":167},{\"date\":\"10.05.2020\",\"confirmed\":823,\"deaths\":0,\"cured\":186},{\"date\":\"11.05.2020\",\"confirmed\":908,\"deaths\":0,\"cured\":205},{\"date\":\"12.05.2020\",\"confirmed\":996,\"deaths\":0,\"cured\":225},{\"date\":\"13.05.2020\",\"confirmed\":1087,\"deaths\":0,\"cured\":245},{\"date\":\"14.05.2020\",\"confirmed\":1181,\"deaths\":0,\"cured\":266},{\"date\":\"15.05.2020\",\"confirmed\":1278,\"deaths\":0,\"cured\":288},{\"date\":\"16.05.2020\",\"confirmed\":1379,\"deaths\":1,\"cured\":311},{\"date\":\"17.05.2020\",\"confirmed\":1483,\"deaths\":2,\"cured\":334},{\"date\":\"18.05.2020\",\"confirmed\":1591,\"deaths\":3,\"cured\":358},{\"date\":\"19.05.2020\",\"confirmed\":1702,\"deaths\":4,\"cured\":383},{\"date\":\"20.05.2020\",\"confirmed\":1817,\"deaths\":5,\"cured\":409},{\"date\":\"21.05.2020\",\"confirmed\":1936,\"deaths\":6,\"cured\":436},{\"date\":\"22.05.2020\",\"confirmed\":2059,\"deaths\":7,\"cured\":464},{\"date\":\"23.05.2020\",\"confirmed\":2186,\"deaths\":8,\"cured\":493},{\"date\":\"24.05.2020\",\"confirmed\":2318,\"deaths\":9,\"cured\":523},{\"date\":\"25.05.2020\",\"confirmed\":2454,\"deaths\":10,\"cured\":554},{\"date\":\"26.05.2020\",\"confirmed\":2595,\"deaths\":11,\"cured\":586},{\"date\":\"27.05.2020\",\"confirmed\":2741,\"deaths\":12,\"cured\":619},{\"date\":\"28.05.2020\",\"confirmed\":2892,\"deaths\":13,\"cured\":653}]},{\"country\":\"Республика Северная Осетия—Алания\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":0,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":55,\"deaths\":1,\"cured\":32},{\"date\":\"30.04.2020\",\"confirmed\":112,\"deaths\":2,\"cured\":66},{\"date\":\"01.05.2020\",\"confirmed\":171,\"deaths\":3,\"cured\":101},{\"date\":\"02.05.2020\",\"confirmed\":232,\"deaths\":4,\"cured\":137},{\"date\":\"03.05.2020\",\"confirmed\":295,\"deaths\":5,\"cured\":174},{\"date\":\"04.05.2020\",\"confirmed\":360,\"deaths\":6,\"cured\":212},{\"date\":\"05.05.2020\",\"confirmed\":427,\"deaths\":7,\"cured\":252},{\"date\":\"06.05.2020\",\"confirmed\":496,\"deaths\":8,\"cured\":293},{\"date\":\"07.05.2020\",\"confirmed\":568,\"deaths\":9,\"cured\":335},{\"date\":\"08.05.2020\",\"confirmed\":642,\"deaths\":10,\"cured\":379},{\"date\":\"09.05.2020\",\"confirmed\":719,\"deaths\":11,\"cured\":424},{\"date\":\"10.05.2020\",\"confirmed\":799,\"deaths\":12,\"cured\":471},{\"date\":\"11.05.2020\",\"confirmed\":881,\"deaths\":13,\"cured\":520},{\"date\":\"12.05.2020\",\"confirmed\":966,\"deaths\":14,\"cured\":570},{\"date\":\"13.05.2020\",\"confirmed\":1054,\"deaths\":15,\"cured\":622},{\"date\":\"14.05.2020\",\"confirmed\":1145,\"deaths\":16,\"cured\":676},{\"date\":\"15.05.2020\",\"confirmed\":1239,\"deaths\":17,\"cured\":732},{\"date\":\"16.05.2020\",\"confirmed\":1336,\"deaths\":18,\"cured\":790},{\"date\":\"17.05.2020\",\"confirmed\":1437,\"deaths\":19,\"cured\":850},{\"date\":\"18.05.2020\",\"confirmed\":1541,\"deaths\":20,\"cured\":912},{\"date\":\"19.05.2020\",\"confirmed\":1649,\"deaths\":21,\"cured\":976},{\"date\":\"20.05.2020\",\"confirmed\":1761,\"deaths\":22,\"cured\":1042},{\"date\":\"21.05.2020\",\"confirmed\":1877,\"deaths\":23,\"cured\":1110},{\"date\":\"22.05.2020\",\"confirmed\":1997,\"deaths\":25,\"cured\":1181},{\"date\":\"23.05.2020\",\"confirmed\":2121,\"deaths\":27,\"cured\":1254},{\"date\":\"24.05.2020\",\"confirmed\":2249,\"deaths\":29,\"cured\":1330},{\"date\":\"25.05.2020\",\"confirmed\":2381,\"deaths\":31,\"cured\":1408},{\"date\":\"26.05.2020\",\"confirmed\":2518,\"deaths\":33,\"cured\":1489},{\"date\":\"27.05.2020\",\"confirmed\":2660,\"deaths\":35,\"cured\":1573},{\"date\":\"28.05.2020\",\"confirmed\":2807,\"deaths\":37,\"cured\":1660}]},{\"country\":\"Курская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":3,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":57,\"deaths\":0,\"cured\":23},{\"date\":\"30.04.2020\",\"confirmed\":113,\"deaths\":0,\"cured\":47},{\"date\":\"01.05.2020\",\"confirmed\":171,\"deaths\":0,\"cured\":72},{\"date\":\"02.05.2020\",\"confirmed\":231,\"deaths\":0,\"cured\":98},{\"date\":\"03.05.2020\",\"confirmed\":293,\"deaths\":0,\"cured\":125},{\"date\":\"04.05.2020\",\"confirmed\":357,\"deaths\":0,\"cured\":153},{\"date\":\"05.05.2020\",\"confirmed\":424,\"deaths\":0,\"cured\":182},{\"date\":\"06.05.2020\",\"confirmed\":493,\"deaths\":0,\"cured\":212},{\"date\":\"07.05.2020\",\"confirmed\":564,\"deaths\":0,\"cured\":243},{\"date\":\"08.05.2020\",\"confirmed\":638,\"deaths\":0,\"cured\":275},{\"date\":\"09.05.2020\",\"confirmed\":714,\"deaths\":0,\"cured\":308},{\"date\":\"10.05.2020\",\"confirmed\":793,\"deaths\":0,\"cured\":342},{\"date\":\"11.05.2020\",\"confirmed\":875,\"deaths\":0,\"cured\":377},{\"date\":\"12.05.2020\",\"confirmed\":960,\"deaths\":0,\"cured\":414},{\"date\":\"13.05.2020\",\"confirmed\":1047,\"deaths\":0,\"cured\":452},{\"date\":\"14.05.2020\",\"confirmed\":1137,\"deaths\":0,\"cured\":491},{\"date\":\"15.05.2020\",\"confirmed\":1231,\"deaths\":0,\"cured\":531},{\"date\":\"16.05.2020\",\"confirmed\":1328,\"deaths\":0,\"cured\":573},{\"date\":\"17.05.2020\",\"confirmed\":1428,\"deaths\":0,\"cured\":616},{\"date\":\"18.05.2020\",\"confirmed\":1532,\"deaths\":0,\"cured\":661},{\"date\":\"19.05.2020\",\"confirmed\":1639,\"deaths\":1,\"cured\":707},{\"date\":\"20.05.2020\",\"confirmed\":1750,\"deaths\":2,\"cured\":755},{\"date\":\"21.05.2020\",\"confirmed\":1865,\"deaths\":3,\"cured\":805},{\"date\":\"22.05.2020\",\"confirmed\":1984,\"deaths\":4,\"cured\":856},{\"date\":\"23.05.2020\",\"confirmed\":2107,\"deaths\":5,\"cured\":909},{\"date\":\"24.05.2020\",\"confirmed\":2234,\"deaths\":6,\"cured\":964},{\"date\":\"25.05.2020\",\"confirmed\":2365,\"deaths\":7,\"cured\":1021},{\"date\":\"26.05.2020\",\"confirmed\":2501,\"deaths\":8,\"cured\":1080},{\"date\":\"27.05.2020\",\"confirmed\":2642,\"deaths\":9,\"cured\":1141},{\"date\":\"28.05.2020\",\"confirmed\":2787,\"deaths\":10,\"cured\":1204}]},{\"country\":\"Тамбовская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":2,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":56,\"deaths\":0,\"cured\":20},{\"date\":\"30.04.2020\",\"confirmed\":112,\"deaths\":0,\"cured\":40},{\"date\":\"01.05.2020\",\"confirmed\":170,\"deaths\":0,\"cured\":61},{\"date\":\"02.05.2020\",\"confirmed\":230,\"deaths\":0,\"cured\":82},{\"date\":\"03.05.2020\",\"confirmed\":292,\"deaths\":0,\"cured\":104},{\"date\":\"04.05.2020\",\"confirmed\":356,\"deaths\":0,\"cured\":127},{\"date\":\"05.05.2020\",\"confirmed\":422,\"deaths\":0,\"cured\":151},{\"date\":\"06.05.2020\",\"confirmed\":491,\"deaths\":0,\"cured\":176},{\"date\":\"07.05.2020\",\"confirmed\":562,\"deaths\":0,\"cured\":201},{\"date\":\"08.05.2020\",\"confirmed\":635,\"deaths\":0,\"cured\":227},{\"date\":\"09.05.2020\",\"confirmed\":711,\"deaths\":0,\"cured\":254},{\"date\":\"10.05.2020\",\"confirmed\":790,\"deaths\":0,\"cured\":282},{\"date\":\"11.05.2020\",\"confirmed\":871,\"deaths\":0,\"cured\":311},{\"date\":\"12.05.2020\",\"confirmed\":955,\"deaths\":0,\"cured\":341},{\"date\":\"13.05.2020\",\"confirmed\":1042,\"deaths\":0,\"cured\":372},{\"date\":\"14.05.2020\",\"confirmed\":1132,\"deaths\":0,\"cured\":404},{\"date\":\"15.05.2020\",\"confirmed\":1225,\"deaths\":0,\"cured\":437},{\"date\":\"16.05.2020\",\"confirmed\":1321,\"deaths\":0,\"cured\":471},{\"date\":\"17.05.2020\",\"confirmed\":1421,\"deaths\":0,\"cured\":507},{\"date\":\"18.05.2020\",\"confirmed\":1524,\"deaths\":0,\"cured\":544},{\"date\":\"19.05.2020\",\"confirmed\":1631,\"deaths\":0,\"cured\":582},{\"date\":\"20.05.2020\",\"confirmed\":1741,\"deaths\":0,\"cured\":621},{\"date\":\"21.05.2020\",\"confirmed\":1855,\"deaths\":0,\"cured\":662},{\"date\":\"22.05.2020\",\"confirmed\":1973,\"deaths\":0,\"cured\":704},{\"date\":\"23.05.2020\",\"confirmed\":2095,\"deaths\":0,\"cured\":748},{\"date\":\"24.05.2020\",\"confirmed\":2221,\"deaths\":0,\"cured\":793},{\"date\":\"25.05.2020\",\"confirmed\":2352,\"deaths\":0,\"cured\":840},{\"date\":\"26.05.2020\",\"confirmed\":2487,\"deaths\":2,\"cured\":888},{\"date\":\"27.05.2020\",\"confirmed\":2627,\"deaths\":4,\"cured\":938},{\"date\":\"28.05.2020\",\"confirmed\":2772,\"deaths\":7,\"cured\":990}]}]");

/***/ }),

/***/ "./src/app/ddf_world.json":
/*!********************************!*\
  !*** ./src/app/ddf_world.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"country\":\"США\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":591,\"deaths\":33,\"cured\":164},{\"date\":\"29.04.2020\",\"confirmed\":34726,\"deaths\":2029,\"cured\":9739},{\"date\":\"30.04.2020\",\"confirmed\":70038,\"deaths\":4094,\"cured\":19644},{\"date\":\"01.05.2020\",\"confirmed\":106567,\"deaths\":6230,\"cured\":29890},{\"date\":\"02.05.2020\",\"confirmed\":144356,\"deaths\":8440,\"cured\":40490},{\"date\":\"03.05.2020\",\"confirmed\":183448,\"deaths\":10726,\"cured\":51455},{\"date\":\"04.05.2020\",\"confirmed\":223888,\"deaths\":13091,\"cured\":62798},{\"date\":\"05.05.2020\",\"confirmed\":265722,\"deaths\":15537,\"cured\":74533},{\"date\":\"06.05.2020\",\"confirmed\":308999,\"deaths\":18068,\"cured\":86672},{\"date\":\"07.05.2020\",\"confirmed\":353768,\"deaths\":20686,\"cured\":99230},{\"date\":\"08.05.2020\",\"confirmed\":400081,\"deaths\":23394,\"cured\":112221},{\"date\":\"09.05.2020\",\"confirmed\":447991,\"deaths\":26195,\"cured\":125660},{\"date\":\"10.05.2020\",\"confirmed\":497553,\"deaths\":29093,\"cured\":139562},{\"date\":\"11.05.2020\",\"confirmed\":548824,\"deaths\":32091,\"cured\":153944},{\"date\":\"12.05.2020\",\"confirmed\":601863,\"deaths\":35192,\"cured\":168822},{\"date\":\"13.05.2020\",\"confirmed\":656731,\"deaths\":38400,\"cured\":184213},{\"date\":\"14.05.2020\",\"confirmed\":713491,\"deaths\":41719,\"cured\":200134},{\"date\":\"15.05.2020\",\"confirmed\":772208,\"deaths\":45152,\"cured\":216604},{\"date\":\"16.05.2020\",\"confirmed\":832950,\"deaths\":48704,\"cured\":233642},{\"date\":\"17.05.2020\",\"confirmed\":895787,\"deaths\":52378,\"cured\":251268},{\"date\":\"18.05.2020\",\"confirmed\":960790,\"deaths\":56179,\"cured\":269502},{\"date\":\"19.05.2020\",\"confirmed\":1028035,\"deaths\":60111,\"cured\":288364},{\"date\":\"20.05.2020\",\"confirmed\":1097599,\"deaths\":64179,\"cured\":307877},{\"date\":\"21.05.2020\",\"confirmed\":1169561,\"deaths\":68387,\"cured\":328063},{\"date\":\"22.05.2020\",\"confirmed\":1244005,\"deaths\":72740,\"cured\":348945},{\"date\":\"23.05.2020\",\"confirmed\":1321016,\"deaths\":77243,\"cured\":370547},{\"date\":\"24.05.2020\",\"confirmed\":1400682,\"deaths\":81901,\"cured\":392894},{\"date\":\"25.05.2020\",\"confirmed\":1483095,\"deaths\":86720,\"cured\":416011},{\"date\":\"26.05.2020\",\"confirmed\":1568350,\"deaths\":91705,\"cured\":439925},{\"date\":\"27.05.2020\",\"confirmed\":1656545,\"deaths\":96862,\"cured\":464664},{\"date\":\"28.05.2020\",\"confirmed\":1747781,\"deaths\":102197,\"cured\":490256}]},{\"country\":\"Бразилия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":140,\"deaths\":7,\"cured\":54},{\"date\":\"29.04.2020\",\"confirmed\":8238,\"deaths\":509,\"cured\":3309},{\"date\":\"30.04.2020\",\"confirmed\":16616,\"deaths\":1028,\"cured\":6676},{\"date\":\"01.05.2020\",\"confirmed\":25283,\"deaths\":1565,\"cured\":10159},{\"date\":\"02.05.2020\",\"confirmed\":34248,\"deaths\":2121,\"cured\":13762},{\"date\":\"03.05.2020\",\"confirmed\":43523,\"deaths\":2696,\"cured\":17489},{\"date\":\"04.05.2020\",\"confirmed\":53117,\"deaths\":3291,\"cured\":21345},{\"date\":\"05.05.2020\",\"confirmed\":63042,\"deaths\":3906,\"cured\":25334},{\"date\":\"06.05.2020\",\"confirmed\":73309,\"deaths\":4542,\"cured\":29460},{\"date\":\"07.05.2020\",\"confirmed\":83930,\"deaths\":5200,\"cured\":33729},{\"date\":\"08.05.2020\",\"confirmed\":94918,\"deaths\":5881,\"cured\":38145},{\"date\":\"09.05.2020\",\"confirmed\":106285,\"deaths\":6585,\"cured\":42713},{\"date\":\"10.05.2020\",\"confirmed\":118044,\"deaths\":7314,\"cured\":47439},{\"date\":\"11.05.2020\",\"confirmed\":130208,\"deaths\":8068,\"cured\":52328},{\"date\":\"12.05.2020\",\"confirmed\":142791,\"deaths\":8848,\"cured\":57385},{\"date\":\"13.05.2020\",\"confirmed\":155808,\"deaths\":9655,\"cured\":62617},{\"date\":\"14.05.2020\",\"confirmed\":169274,\"deaths\":10490,\"cured\":68029},{\"date\":\"15.05.2020\",\"confirmed\":183205,\"deaths\":11353,\"cured\":73628},{\"date\":\"16.05.2020\",\"confirmed\":197616,\"deaths\":12246,\"cured\":79420},{\"date\":\"17.05.2020\",\"confirmed\":212524,\"deaths\":13170,\"cured\":85411},{\"date\":\"18.05.2020\",\"confirmed\":227946,\"deaths\":14126,\"cured\":91609},{\"date\":\"19.05.2020\",\"confirmed\":243900,\"deaths\":15115,\"cured\":98021},{\"date\":\"20.05.2020\",\"confirmed\":260404,\"deaths\":16138,\"cured\":104654},{\"date\":\"21.05.2020\",\"confirmed\":277477,\"deaths\":17196,\"cured\":111515},{\"date\":\"22.05.2020\",\"confirmed\":295139,\"deaths\":18291,\"cured\":118613},{\"date\":\"23.05.2020\",\"confirmed\":313410,\"deaths\":19423,\"cured\":125956},{\"date\":\"24.05.2020\",\"confirmed\":332311,\"deaths\":20594,\"cured\":133552},{\"date\":\"25.05.2020\",\"confirmed\":351864,\"deaths\":21806,\"cured\":141410},{\"date\":\"26.05.2020\",\"confirmed\":372091,\"deaths\":23059,\"cured\":149539},{\"date\":\"27.05.2020\",\"confirmed\":393015,\"deaths\":24356,\"cured\":157948},{\"date\":\"28.05.2020\",\"confirmed\":414661,\"deaths\":25697,\"cured\":166647}]},{\"country\":\"Россия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":128,\"deaths\":0,\"cured\":52},{\"date\":\"29.04.2020\",\"confirmed\":7537,\"deaths\":80,\"cured\":3003},{\"date\":\"30.04.2020\",\"confirmed\":15202,\"deaths\":164,\"cured\":6056},{\"date\":\"01.05.2020\",\"confirmed\":23131,\"deaths\":251,\"cured\":9214},{\"date\":\"02.05.2020\",\"confirmed\":31333,\"deaths\":341,\"cured\":12481},{\"date\":\"03.05.2020\",\"confirmed\":39818,\"deaths\":434,\"cured\":15861},{\"date\":\"04.05.2020\",\"confirmed\":48596,\"deaths\":530,\"cured\":19357},{\"date\":\"05.05.2020\",\"confirmed\":57677,\"deaths\":629,\"cured\":22974},{\"date\":\"06.05.2020\",\"confirmed\":67071,\"deaths\":732,\"cured\":26716},{\"date\":\"07.05.2020\",\"confirmed\":76789,\"deaths\":838,\"cured\":30587},{\"date\":\"08.05.2020\",\"confirmed\":86842,\"deaths\":948,\"cured\":34591},{\"date\":\"09.05.2020\",\"confirmed\":97241,\"deaths\":1062,\"cured\":38733},{\"date\":\"10.05.2020\",\"confirmed\":107999,\"deaths\":1180,\"cured\":43018},{\"date\":\"11.05.2020\",\"confirmed\":119128,\"deaths\":1302,\"cured\":47451},{\"date\":\"12.05.2020\",\"confirmed\":130641,\"deaths\":1428,\"cured\":52037},{\"date\":\"13.05.2020\",\"confirmed\":142551,\"deaths\":1558,\"cured\":56781},{\"date\":\"14.05.2020\",\"confirmed\":154871,\"deaths\":1693,\"cured\":61688},{\"date\":\"15.05.2020\",\"confirmed\":167616,\"deaths\":1832,\"cured\":66765},{\"date\":\"16.05.2020\",\"confirmed\":180801,\"deaths\":1976,\"cured\":72017},{\"date\":\"17.05.2020\",\"confirmed\":194440,\"deaths\":2125,\"cured\":77450},{\"date\":\"18.05.2020\",\"confirmed\":208550,\"deaths\":2279,\"cured\":83070},{\"date\":\"19.05.2020\",\"confirmed\":223146,\"deaths\":2439,\"cured\":88884},{\"date\":\"20.05.2020\",\"confirmed\":238246,\"deaths\":2604,\"cured\":94898},{\"date\":\"21.05.2020\",\"confirmed\":253866,\"deaths\":2775,\"cured\":101120},{\"date\":\"22.05.2020\",\"confirmed\":270025,\"deaths\":2952,\"cured\":107556},{\"date\":\"23.05.2020\",\"confirmed\":286741,\"deaths\":3135,\"cured\":114214},{\"date\":\"24.05.2020\",\"confirmed\":304033,\"deaths\":3324,\"cured\":121102},{\"date\":\"25.05.2020\",\"confirmed\":321922,\"deaths\":3520,\"cured\":128227},{\"date\":\"26.05.2020\",\"confirmed\":340428,\"deaths\":3722,\"cured\":135598},{\"date\":\"27.05.2020\",\"confirmed\":359572,\"deaths\":3931,\"cured\":143223},{\"date\":\"28.05.2020\",\"confirmed\":379376,\"deaths\":4148,\"cured\":151111}]},{\"country\":\"Испания\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":95,\"deaths\":0,\"cured\":68},{\"date\":\"29.04.2020\",\"confirmed\":5639,\"deaths\":572,\"cured\":3915},{\"date\":\"30.04.2020\",\"confirmed\":11374,\"deaths\":1153,\"cured\":7894},{\"date\":\"01.05.2020\",\"confirmed\":17307,\"deaths\":1754,\"cured\":12011},{\"date\":\"02.05.2020\",\"confirmed\":23444,\"deaths\":2376,\"cured\":16270},{\"date\":\"03.05.2020\",\"confirmed\":29793,\"deaths\":3019,\"cured\":20675},{\"date\":\"04.05.2020\",\"confirmed\":36361,\"deaths\":3684,\"cured\":25232},{\"date\":\"05.05.2020\",\"confirmed\":43155,\"deaths\":4372,\"cured\":29946},{\"date\":\"06.05.2020\",\"confirmed\":50183,\"deaths\":5084,\"cured\":34823},{\"date\":\"07.05.2020\",\"confirmed\":57454,\"deaths\":5820,\"cured\":39868},{\"date\":\"08.05.2020\",\"confirmed\":64975,\"deaths\":6582,\"cured\":45087},{\"date\":\"09.05.2020\",\"confirmed\":72756,\"deaths\":7370,\"cured\":50486},{\"date\":\"10.05.2020\",\"confirmed\":80805,\"deaths\":8185,\"cured\":56071},{\"date\":\"11.05.2020\",\"confirmed\":89132,\"deaths\":9028,\"cured\":61849},{\"date\":\"12.05.2020\",\"confirmed\":97746,\"deaths\":9900,\"cured\":67826},{\"date\":\"13.05.2020\",\"confirmed\":106657,\"deaths\":10803,\"cured\":74009},{\"date\":\"14.05.2020\",\"confirmed\":115875,\"deaths\":11737,\"cured\":80405},{\"date\":\"15.05.2020\",\"confirmed\":125411,\"deaths\":12703,\"cured\":87022},{\"date\":\"16.05.2020\",\"confirmed\":135276,\"deaths\":13702,\"cured\":93867},{\"date\":\"17.05.2020\",\"confirmed\":145481,\"deaths\":14736,\"cured\":100948},{\"date\":\"18.05.2020\",\"confirmed\":156038,\"deaths\":15805,\"cured\":108273},{\"date\":\"19.05.2020\",\"confirmed\":166959,\"deaths\":16911,\"cured\":115851},{\"date\":\"20.05.2020\",\"confirmed\":178257,\"deaths\":18055,\"cured\":123690},{\"date\":\"21.05.2020\",\"confirmed\":189944,\"deaths\":19239,\"cured\":131799},{\"date\":\"22.05.2020\",\"confirmed\":202034,\"deaths\":20464,\"cured\":140188},{\"date\":\"23.05.2020\",\"confirmed\":214541,\"deaths\":21731,\"cured\":148866},{\"date\":\"24.05.2020\",\"confirmed\":227479,\"deaths\":23042,\"cured\":157844},{\"date\":\"25.05.2020\",\"confirmed\":240863,\"deaths\":24398,\"cured\":167131},{\"date\":\"26.05.2020\",\"confirmed\":254709,\"deaths\":25800,\"cured\":176738},{\"date\":\"27.05.2020\",\"confirmed\":269032,\"deaths\":27251,\"cured\":186677},{\"date\":\"28.05.2020\",\"confirmed\":283849,\"deaths\":28752,\"cured\":196958}]},{\"country\":\"Великобритания\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":93,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":5312,\"deaths\":742,\"cured\":16},{\"date\":\"30.04.2020\",\"confirmed\":10711,\"deaths\":1499,\"cured\":33},{\"date\":\"01.05.2020\",\"confirmed\":16296,\"deaths\":2282,\"cured\":51},{\"date\":\"02.05.2020\",\"confirmed\":22074,\"deaths\":3092,\"cured\":70},{\"date\":\"03.05.2020\",\"confirmed\":28051,\"deaths\":3930,\"cured\":89},{\"date\":\"04.05.2020\",\"confirmed\":34234,\"deaths\":4797,\"cured\":109},{\"date\":\"05.05.2020\",\"confirmed\":40631,\"deaths\":5694,\"cured\":130},{\"date\":\"06.05.2020\",\"confirmed\":47248,\"deaths\":6622,\"cured\":151},{\"date\":\"07.05.2020\",\"confirmed\":54093,\"deaths\":7582,\"cured\":173},{\"date\":\"08.05.2020\",\"confirmed\":61174,\"deaths\":8575,\"cured\":196},{\"date\":\"09.05.2020\",\"confirmed\":68500,\"deaths\":9602,\"cured\":219},{\"date\":\"10.05.2020\",\"confirmed\":76078,\"deaths\":10664,\"cured\":243},{\"date\":\"11.05.2020\",\"confirmed\":83917,\"deaths\":11763,\"cured\":268},{\"date\":\"12.05.2020\",\"confirmed\":92027,\"deaths\":12900,\"cured\":294},{\"date\":\"13.05.2020\",\"confirmed\":100416,\"deaths\":14076,\"cured\":321},{\"date\":\"14.05.2020\",\"confirmed\":109095,\"deaths\":15293,\"cured\":349},{\"date\":\"15.05.2020\",\"confirmed\":118073,\"deaths\":16551,\"cured\":378},{\"date\":\"16.05.2020\",\"confirmed\":127361,\"deaths\":17853,\"cured\":408},{\"date\":\"17.05.2020\",\"confirmed\":136969,\"deaths\":19200,\"cured\":439},{\"date\":\"18.05.2020\",\"confirmed\":146908,\"deaths\":20593,\"cured\":471},{\"date\":\"19.05.2020\",\"confirmed\":157190,\"deaths\":22034,\"cured\":504},{\"date\":\"20.05.2020\",\"confirmed\":167826,\"deaths\":23525,\"cured\":538},{\"date\":\"21.05.2020\",\"confirmed\":178829,\"deaths\":25067,\"cured\":573},{\"date\":\"22.05.2020\",\"confirmed\":190212,\"deaths\":26663,\"cured\":610},{\"date\":\"23.05.2020\",\"confirmed\":201987,\"deaths\":28314,\"cured\":648},{\"date\":\"24.05.2020\",\"confirmed\":214168,\"deaths\":30022,\"cured\":687},{\"date\":\"25.05.2020\",\"confirmed\":226769,\"deaths\":31788,\"cured\":727},{\"date\":\"26.05.2020\",\"confirmed\":239805,\"deaths\":33615,\"cured\":769},{\"date\":\"27.05.2020\",\"confirmed\":253290,\"deaths\":35505,\"cured\":812},{\"date\":\"28.05.2020\",\"confirmed\":267240,\"deaths\":37460,\"cured\":857}]},{\"country\":\"Италия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":79,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":4593,\"deaths\":659,\"cured\":2923},{\"date\":\"30.04.2020\",\"confirmed\":9263,\"deaths\":1327,\"cured\":5895},{\"date\":\"01.05.2020\",\"confirmed\":14094,\"deaths\":2018,\"cured\":8969},{\"date\":\"02.05.2020\",\"confirmed\":19091,\"deaths\":2733,\"cured\":12149},{\"date\":\"03.05.2020\",\"confirmed\":24261,\"deaths\":3473,\"cured\":15439},{\"date\":\"04.05.2020\",\"confirmed\":29609,\"deaths\":4238,\"cured\":18843},{\"date\":\"05.05.2020\",\"confirmed\":35141,\"deaths\":5030,\"cured\":22364},{\"date\":\"06.05.2020\",\"confirmed\":40864,\"deaths\":5849,\"cured\":26006},{\"date\":\"07.05.2020\",\"confirmed\":46785,\"deaths\":6696,\"cured\":29774},{\"date\":\"08.05.2020\",\"confirmed\":52910,\"deaths\":7572,\"cured\":33672},{\"date\":\"09.05.2020\",\"confirmed\":59246,\"deaths\":8479,\"cured\":37704},{\"date\":\"10.05.2020\",\"confirmed\":65800,\"deaths\":9417,\"cured\":41875},{\"date\":\"11.05.2020\",\"confirmed\":72580,\"deaths\":10387,\"cured\":46190},{\"date\":\"12.05.2020\",\"confirmed\":79594,\"deaths\":11391,\"cured\":50654},{\"date\":\"13.05.2020\",\"confirmed\":86850,\"deaths\":12429,\"cured\":55272},{\"date\":\"14.05.2020\",\"confirmed\":94356,\"deaths\":13503,\"cured\":60049},{\"date\":\"15.05.2020\",\"confirmed\":102121,\"deaths\":14614,\"cured\":64991},{\"date\":\"16.05.2020\",\"confirmed\":110154,\"deaths\":15763,\"cured\":70103},{\"date\":\"17.05.2020\",\"confirmed\":118464,\"deaths\":16952,\"cured\":75392},{\"date\":\"18.05.2020\",\"confirmed\":127060,\"deaths\":18182,\"cured\":80863},{\"date\":\"19.05.2020\",\"confirmed\":135953,\"deaths\":19454,\"cured\":86523},{\"date\":\"20.05.2020\",\"confirmed\":145153,\"deaths\":20770,\"cured\":92378},{\"date\":\"21.05.2020\",\"confirmed\":154670,\"deaths\":22132,\"cured\":98435},{\"date\":\"22.05.2020\",\"confirmed\":164515,\"deaths\":23541,\"cured\":104701},{\"date\":\"23.05.2020\",\"confirmed\":174699,\"deaths\":24998,\"cured\":111183},{\"date\":\"24.05.2020\",\"confirmed\":185235,\"deaths\":26505,\"cured\":117888},{\"date\":\"25.05.2020\",\"confirmed\":196134,\"deaths\":28064,\"cured\":124824},{\"date\":\"26.05.2020\",\"confirmed\":207409,\"deaths\":29677,\"cured\":131999},{\"date\":\"27.05.2020\",\"confirmed\":219073,\"deaths\":31346,\"cured\":139422},{\"date\":\"28.05.2020\",\"confirmed\":231139,\"deaths\":33072,\"cured\":147101}]},{\"country\":\"Франция\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":60,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":3633,\"deaths\":567,\"cured\":1322},{\"date\":\"30.04.2020\",\"confirmed\":7329,\"deaths\":1145,\"cured\":2667},{\"date\":\"01.05.2020\",\"confirmed\":11153,\"deaths\":1743,\"cured\":4059},{\"date\":\"02.05.2020\",\"confirmed\":15108,\"deaths\":2361,\"cured\":5499},{\"date\":\"03.05.2020\",\"confirmed\":19200,\"deaths\":3001,\"cured\":6988},{\"date\":\"04.05.2020\",\"confirmed\":23433,\"deaths\":3663,\"cured\":8529},{\"date\":\"05.05.2020\",\"confirmed\":27812,\"deaths\":4347,\"cured\":10123},{\"date\":\"06.05.2020\",\"confirmed\":32342,\"deaths\":5055,\"cured\":11772},{\"date\":\"07.05.2020\",\"confirmed\":37028,\"deaths\":5787,\"cured\":13478},{\"date\":\"08.05.2020\",\"confirmed\":41876,\"deaths\":6545,\"cured\":15242},{\"date\":\"09.05.2020\",\"confirmed\":46891,\"deaths\":7329,\"cured\":17067},{\"date\":\"10.05.2020\",\"confirmed\":52079,\"deaths\":8140,\"cured\":18955},{\"date\":\"11.05.2020\",\"confirmed\":57446,\"deaths\":8979,\"cured\":20908},{\"date\":\"12.05.2020\",\"confirmed\":62998,\"deaths\":9847,\"cured\":22929},{\"date\":\"13.05.2020\",\"confirmed\":68741,\"deaths\":10745,\"cured\":25019},{\"date\":\"14.05.2020\",\"confirmed\":74682,\"deaths\":11674,\"cured\":27181},{\"date\":\"15.05.2020\",\"confirmed\":80828,\"deaths\":12635,\"cured\":29418},{\"date\":\"16.05.2020\",\"confirmed\":87186,\"deaths\":13629,\"cured\":31732},{\"date\":\"17.05.2020\",\"confirmed\":93763,\"deaths\":14657,\"cured\":34126},{\"date\":\"18.05.2020\",\"confirmed\":100567,\"deaths\":15721,\"cured\":36602},{\"date\":\"19.05.2020\",\"confirmed\":107606,\"deaths\":16821,\"cured\":39164},{\"date\":\"20.05.2020\",\"confirmed\":114887,\"deaths\":17959,\"cured\":41814},{\"date\":\"21.05.2020\",\"confirmed\":122419,\"deaths\":19136,\"cured\":44555},{\"date\":\"22.05.2020\",\"confirmed\":130211,\"deaths\":20354,\"cured\":47391},{\"date\":\"23.05.2020\",\"confirmed\":138272,\"deaths\":21614,\"cured\":50325},{\"date\":\"24.05.2020\",\"confirmed\":146611,\"deaths\":22917,\"cured\":53360},{\"date\":\"25.05.2020\",\"confirmed\":155237,\"deaths\":24265,\"cured\":56500},{\"date\":\"26.05.2020\",\"confirmed\":164161,\"deaths\":25660,\"cured\":59748},{\"date\":\"27.05.2020\",\"confirmed\":173392,\"deaths\":27103,\"cured\":63108},{\"date\":\"28.05.2020\",\"confirmed\":182942,\"deaths\":28596,\"cured\":66584}]},{\"country\":\"Германия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":60,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":3612,\"deaths\":171,\"cured\":3243},{\"date\":\"30.04.2020\",\"confirmed\":7287,\"deaths\":343,\"cured\":6540},{\"date\":\"01.05.2020\",\"confirmed\":11089,\"deaths\":521,\"cured\":9951},{\"date\":\"02.05.2020\",\"confirmed\":15022,\"deaths\":706,\"cured\":13480},{\"date\":\"03.05.2020\",\"confirmed\":19090,\"deaths\":897,\"cured\":17130},{\"date\":\"04.05.2020\",\"confirmed\":23299,\"deaths\":1094,\"cured\":20906},{\"date\":\"05.05.2020\",\"confirmed\":27653,\"deaths\":1298,\"cured\":24812},{\"date\":\"06.05.2020\",\"confirmed\":32157,\"deaths\":1509,\"cured\":28853},{\"date\":\"07.05.2020\",\"confirmed\":36816,\"deaths\":1728,\"cured\":33033},{\"date\":\"08.05.2020\",\"confirmed\":41636,\"deaths\":1954,\"cured\":37357},{\"date\":\"09.05.2020\",\"confirmed\":46622,\"deaths\":2188,\"cured\":41831},{\"date\":\"10.05.2020\",\"confirmed\":51780,\"deaths\":2430,\"cured\":46459},{\"date\":\"11.05.2020\",\"confirmed\":57116,\"deaths\":2680,\"cured\":51246},{\"date\":\"12.05.2020\",\"confirmed\":62636,\"deaths\":2939,\"cured\":56199},{\"date\":\"13.05.2020\",\"confirmed\":68346,\"deaths\":3207,\"cured\":61322},{\"date\":\"14.05.2020\",\"confirmed\":74253,\"deaths\":3484,\"cured\":66622},{\"date\":\"15.05.2020\",\"confirmed\":80364,\"deaths\":3771,\"cured\":72105},{\"date\":\"16.05.2020\",\"confirmed\":86686,\"deaths\":4068,\"cured\":77777},{\"date\":\"17.05.2020\",\"confirmed\":93226,\"deaths\":4375,\"cured\":83644},{\"date\":\"18.05.2020\",\"confirmed\":99991,\"deaths\":4692,\"cured\":89714},{\"date\":\"19.05.2020\",\"confirmed\":106989,\"deaths\":5020,\"cured\":95993},{\"date\":\"20.05.2020\",\"confirmed\":114229,\"deaths\":5360,\"cured\":102489},{\"date\":\"21.05.2020\",\"confirmed\":121718,\"deaths\":5711,\"cured\":109209},{\"date\":\"22.05.2020\",\"confirmed\":129465,\"deaths\":6074,\"cured\":116160},{\"date\":\"23.05.2020\",\"confirmed\":137480,\"deaths\":6450,\"cured\":123351},{\"date\":\"24.05.2020\",\"confirmed\":145771,\"deaths\":6839,\"cured\":130790},{\"date\":\"25.05.2020\",\"confirmed\":154348,\"deaths\":7241,\"cured\":138485},{\"date\":\"26.05.2020\",\"confirmed\":163221,\"deaths\":7657,\"cured\":146446},{\"date\":\"27.05.2020\",\"confirmed\":172400,\"deaths\":8088,\"cured\":154681},{\"date\":\"28.05.2020\",\"confirmed\":181895,\"deaths\":8533,\"cured\":163200}]},{\"country\":\"Турция\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":54,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":3175,\"deaths\":87,\"cured\":2441},{\"date\":\"30.04.2020\",\"confirmed\":6404,\"deaths\":177,\"cured\":4922},{\"date\":\"01.05.2020\",\"confirmed\":9744,\"deaths\":270,\"cured\":7488},{\"date\":\"02.05.2020\",\"confirmed\":13199,\"deaths\":366,\"cured\":10143},{\"date\":\"03.05.2020\",\"confirmed\":16773,\"deaths\":465,\"cured\":12889},{\"date\":\"04.05.2020\",\"confirmed\":20470,\"deaths\":568,\"cured\":15730},{\"date\":\"05.05.2020\",\"confirmed\":24295,\"deaths\":674,\"cured\":18669},{\"date\":\"06.05.2020\",\"confirmed\":28252,\"deaths\":784,\"cured\":21709},{\"date\":\"07.05.2020\",\"confirmed\":32345,\"deaths\":898,\"cured\":24854},{\"date\":\"08.05.2020\",\"confirmed\":36579,\"deaths\":1015,\"cured\":28108},{\"date\":\"09.05.2020\",\"confirmed\":40959,\"deaths\":1136,\"cured\":31474},{\"date\":\"10.05.2020\",\"confirmed\":45490,\"deaths\":1262,\"cured\":34956},{\"date\":\"11.05.2020\",\"confirmed\":50178,\"deaths\":1392,\"cured\":38558},{\"date\":\"12.05.2020\",\"confirmed\":55027,\"deaths\":1526,\"cured\":42284},{\"date\":\"13.05.2020\",\"confirmed\":60044,\"deaths\":1665,\"cured\":46139},{\"date\":\"14.05.2020\",\"confirmed\":65233,\"deaths\":1809,\"cured\":50127},{\"date\":\"15.05.2020\",\"confirmed\":70601,\"deaths\":1958,\"cured\":54252},{\"date\":\"16.05.2020\",\"confirmed\":76155,\"deaths\":2112,\"cured\":58520},{\"date\":\"17.05.2020\",\"confirmed\":81900,\"deaths\":2271,\"cured\":62935},{\"date\":\"18.05.2020\",\"confirmed\":87843,\"deaths\":2436,\"cured\":67502},{\"date\":\"19.05.2020\",\"confirmed\":93991,\"deaths\":2607,\"cured\":72226},{\"date\":\"20.05.2020\",\"confirmed\":100351,\"deaths\":2783,\"cured\":77113},{\"date\":\"21.05.2020\",\"confirmed\":106930,\"deaths\":2965,\"cured\":82169},{\"date\":\"22.05.2020\",\"confirmed\":113736,\"deaths\":3154,\"cured\":87399},{\"date\":\"23.05.2020\",\"confirmed\":120777,\"deaths\":3349,\"cured\":92810},{\"date\":\"24.05.2020\",\"confirmed\":128061,\"deaths\":3551,\"cured\":98407},{\"date\":\"25.05.2020\",\"confirmed\":135596,\"deaths\":3760,\"cured\":104197},{\"date\":\"26.05.2020\",\"confirmed\":143391,\"deaths\":3976,\"cured\":110187},{\"date\":\"27.05.2020\",\"confirmed\":151455,\"deaths\":4200,\"cured\":116383},{\"date\":\"28.05.2020\",\"confirmed\":159797,\"deaths\":4431,\"cured\":122793}]},{\"country\":\"Индия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":55,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":3163,\"deaths\":91,\"cured\":1351},{\"date\":\"30.04.2020\",\"confirmed\":6378,\"deaths\":183,\"cured\":2724},{\"date\":\"01.05.2020\",\"confirmed\":9704,\"deaths\":278,\"cured\":4145},{\"date\":\"02.05.2020\",\"confirmed\":13145,\"deaths\":376,\"cured\":5615},{\"date\":\"03.05.2020\",\"confirmed\":16704,\"deaths\":478,\"cured\":7136},{\"date\":\"04.05.2020\",\"confirmed\":20386,\"deaths\":583,\"cured\":8709},{\"date\":\"05.05.2020\",\"confirmed\":24195,\"deaths\":692,\"cured\":10336},{\"date\":\"06.05.2020\",\"confirmed\":28135,\"deaths\":804,\"cured\":12019},{\"date\":\"07.05.2020\",\"confirmed\":32211,\"deaths\":920,\"cured\":13760},{\"date\":\"08.05.2020\",\"confirmed\":36428,\"deaths\":1040,\"cured\":15561},{\"date\":\"09.05.2020\",\"confirmed\":40790,\"deaths\":1164,\"cured\":17425},{\"date\":\"10.05.2020\",\"confirmed\":45303,\"deaths\":1293,\"cured\":19353},{\"date\":\"11.05.2020\",\"confirmed\":49971,\"deaths\":1426,\"cured\":21347},{\"date\":\"12.05.2020\",\"confirmed\":54800,\"deaths\":1564,\"cured\":23410},{\"date\":\"13.05.2020\",\"confirmed\":59796,\"deaths\":1707,\"cured\":25544},{\"date\":\"14.05.2020\",\"confirmed\":64964,\"deaths\":1854,\"cured\":27752},{\"date\":\"15.05.2020\",\"confirmed\":70310,\"deaths\":2007,\"cured\":30036},{\"date\":\"16.05.2020\",\"confirmed\":75841,\"deaths\":2165,\"cured\":32399},{\"date\":\"17.05.2020\",\"confirmed\":81562,\"deaths\":2328,\"cured\":34843},{\"date\":\"18.05.2020\",\"confirmed\":87481,\"deaths\":2497,\"cured\":37371},{\"date\":\"19.05.2020\",\"confirmed\":93604,\"deaths\":2672,\"cured\":39987},{\"date\":\"20.05.2020\",\"confirmed\":99938,\"deaths\":2853,\"cured\":42693},{\"date\":\"21.05.2020\",\"confirmed\":106490,\"deaths\":3040,\"cured\":45492},{\"date\":\"22.05.2020\",\"confirmed\":113268,\"deaths\":3233,\"cured\":48388},{\"date\":\"23.05.2020\",\"confirmed\":120280,\"deaths\":3433,\"cured\":51383},{\"date\":\"24.05.2020\",\"confirmed\":127534,\"deaths\":3640,\"cured\":54482},{\"date\":\"25.05.2020\",\"confirmed\":135038,\"deaths\":3854,\"cured\":57688},{\"date\":\"26.05.2020\",\"confirmed\":142801,\"deaths\":4076,\"cured\":61004},{\"date\":\"27.05.2020\",\"confirmed\":150831,\"deaths\":4305,\"cured\":64434},{\"date\":\"28.05.2020\",\"confirmed\":159138,\"deaths\":4542,\"cured\":67983}]},{\"country\":\"Иран\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":50,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":2859,\"deaths\":152,\"cured\":2245},{\"date\":\"30.04.2020\",\"confirmed\":5765,\"deaths\":306,\"cured\":4528},{\"date\":\"01.05.2020\",\"confirmed\":8771,\"deaths\":465,\"cured\":6890},{\"date\":\"02.05.2020\",\"confirmed\":11881,\"deaths\":630,\"cured\":9333},{\"date\":\"03.05.2020\",\"confirmed\":15098,\"deaths\":801,\"cured\":11860},{\"date\":\"04.05.2020\",\"confirmed\":18426,\"deaths\":977,\"cured\":14474},{\"date\":\"05.05.2020\",\"confirmed\":21869,\"deaths\":1160,\"cured\":17178},{\"date\":\"06.05.2020\",\"confirmed\":25431,\"deaths\":1349,\"cured\":19976},{\"date\":\"07.05.2020\",\"confirmed\":29116,\"deaths\":1544,\"cured\":22870},{\"date\":\"08.05.2020\",\"confirmed\":32928,\"deaths\":1746,\"cured\":25864},{\"date\":\"09.05.2020\",\"confirmed\":36871,\"deaths\":1955,\"cured\":28961},{\"date\":\"10.05.2020\",\"confirmed\":40950,\"deaths\":2171,\"cured\":32165},{\"date\":\"11.05.2020\",\"confirmed\":45170,\"deaths\":2395,\"cured\":35480},{\"date\":\"12.05.2020\",\"confirmed\":49535,\"deaths\":2626,\"cured\":38909},{\"date\":\"13.05.2020\",\"confirmed\":54051,\"deaths\":2865,\"cured\":42456},{\"date\":\"14.05.2020\",\"confirmed\":58723,\"deaths\":3113,\"cured\":46125},{\"date\":\"15.05.2020\",\"confirmed\":63556,\"deaths\":3369,\"cured\":49921},{\"date\":\"16.05.2020\",\"confirmed\":68555,\"deaths\":3634,\"cured\":53848},{\"date\":\"17.05.2020\",\"confirmed\":73727,\"deaths\":3908,\"cured\":57910},{\"date\":\"18.05.2020\",\"confirmed\":79077,\"deaths\":4192,\"cured\":62112},{\"date\":\"19.05.2020\",\"confirmed\":84611,\"deaths\":4485,\"cured\":66459},{\"date\":\"20.05.2020\",\"confirmed\":90336,\"deaths\":4789,\"cured\":70956},{\"date\":\"21.05.2020\",\"confirmed\":96259,\"deaths\":5103,\"cured\":75608},{\"date\":\"22.05.2020\",\"confirmed\":102386,\"deaths\":5428,\"cured\":80421},{\"date\":\"23.05.2020\",\"confirmed\":108724,\"deaths\":5764,\"cured\":85399},{\"date\":\"24.05.2020\",\"confirmed\":115281,\"deaths\":6112,\"cured\":90549},{\"date\":\"25.05.2020\",\"confirmed\":122064,\"deaths\":6472,\"cured\":95877},{\"date\":\"26.05.2020\",\"confirmed\":129081,\"deaths\":6844,\"cured\":101388},{\"date\":\"27.05.2020\",\"confirmed\":136340,\"deaths\":7229,\"cured\":107090},{\"date\":\"28.05.2020\",\"confirmed\":143849,\"deaths\":7627,\"cured\":112988}]},{\"country\":\"Перу\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":47,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":2701,\"deaths\":80,\"cured\":1116},{\"date\":\"30.04.2020\",\"confirmed\":5447,\"deaths\":160,\"cured\":2251},{\"date\":\"01.05.2020\",\"confirmed\":8287,\"deaths\":243,\"cured\":3425},{\"date\":\"02.05.2020\",\"confirmed\":11225,\"deaths\":329,\"cured\":4639},{\"date\":\"03.05.2020\",\"confirmed\":14265,\"deaths\":418,\"cured\":5895},{\"date\":\"04.05.2020\",\"confirmed\":17410,\"deaths\":510,\"cured\":7195},{\"date\":\"05.05.2020\",\"confirmed\":20663,\"deaths\":605,\"cured\":8539},{\"date\":\"06.05.2020\",\"confirmed\":24028,\"deaths\":704,\"cured\":9930},{\"date\":\"07.05.2020\",\"confirmed\":27509,\"deaths\":806,\"cured\":11369},{\"date\":\"08.05.2020\",\"confirmed\":31110,\"deaths\":912,\"cured\":12857},{\"date\":\"09.05.2020\",\"confirmed\":34835,\"deaths\":1021,\"cured\":14397},{\"date\":\"10.05.2020\",\"confirmed\":38689,\"deaths\":1134,\"cured\":15990},{\"date\":\"11.05.2020\",\"confirmed\":42676,\"deaths\":1251,\"cured\":17638},{\"date\":\"12.05.2020\",\"confirmed\":46800,\"deaths\":1372,\"cured\":19343},{\"date\":\"13.05.2020\",\"confirmed\":51066,\"deaths\":1497,\"cured\":21106},{\"date\":\"14.05.2020\",\"confirmed\":55480,\"deaths\":1626,\"cured\":22930},{\"date\":\"15.05.2020\",\"confirmed\":60046,\"deaths\":1760,\"cured\":24817},{\"date\":\"16.05.2020\",\"confirmed\":64769,\"deaths\":1898,\"cured\":26769},{\"date\":\"17.05.2020\",\"confirmed\":69655,\"deaths\":2041,\"cured\":28788},{\"date\":\"18.05.2020\",\"confirmed\":74710,\"deaths\":2189,\"cured\":30877},{\"date\":\"19.05.2020\",\"confirmed\":79939,\"deaths\":2342,\"cured\":33038},{\"date\":\"20.05.2020\",\"confirmed\":85348,\"deaths\":2501,\"cured\":35274},{\"date\":\"21.05.2020\",\"confirmed\":90944,\"deaths\":2665,\"cured\":37587},{\"date\":\"22.05.2020\",\"confirmed\":96733,\"deaths\":2835,\"cured\":39979},{\"date\":\"23.05.2020\",\"confirmed\":102721,\"deaths\":3010,\"cured\":42454},{\"date\":\"24.05.2020\",\"confirmed\":108916,\"deaths\":3192,\"cured\":45014},{\"date\":\"25.05.2020\",\"confirmed\":115324,\"deaths\":3380,\"cured\":47663},{\"date\":\"26.05.2020\",\"confirmed\":121953,\"deaths\":3574,\"cured\":50403},{\"date\":\"27.05.2020\",\"confirmed\":128811,\"deaths\":3775,\"cured\":53237},{\"date\":\"28.05.2020\",\"confirmed\":135905,\"deaths\":3983,\"cured\":56169}]},{\"country\":\"Канада\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":30,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1739,\"deaths\":136,\"cured\":918},{\"date\":\"30.04.2020\",\"confirmed\":3507,\"deaths\":273,\"cured\":1851},{\"date\":\"01.05.2020\",\"confirmed\":5336,\"deaths\":414,\"cured\":2816},{\"date\":\"02.05.2020\",\"confirmed\":7228,\"deaths\":560,\"cured\":3814},{\"date\":\"03.05.2020\",\"confirmed\":9186,\"deaths\":711,\"cured\":4847},{\"date\":\"04.05.2020\",\"confirmed\":11211,\"deaths\":868,\"cured\":5915},{\"date\":\"05.05.2020\",\"confirmed\":13306,\"deaths\":1030,\"cured\":7020},{\"date\":\"06.05.2020\",\"confirmed\":15473,\"deaths\":1198,\"cured\":8163},{\"date\":\"07.05.2020\",\"confirmed\":17715,\"deaths\":1371,\"cured\":9346},{\"date\":\"08.05.2020\",\"confirmed\":20034,\"deaths\":1550,\"cured\":10569},{\"date\":\"09.05.2020\",\"confirmed\":22433,\"deaths\":1735,\"cured\":11834},{\"date\":\"10.05.2020\",\"confirmed\":24915,\"deaths\":1927,\"cured\":13143},{\"date\":\"11.05.2020\",\"confirmed\":27482,\"deaths\":2126,\"cured\":14497},{\"date\":\"12.05.2020\",\"confirmed\":30138,\"deaths\":2331,\"cured\":15898},{\"date\":\"13.05.2020\",\"confirmed\":32886,\"deaths\":2543,\"cured\":17347},{\"date\":\"14.05.2020\",\"confirmed\":35728,\"deaths\":2763,\"cured\":18846},{\"date\":\"15.05.2020\",\"confirmed\":38668,\"deaths\":2990,\"cured\":20397},{\"date\":\"16.05.2020\",\"confirmed\":41710,\"deaths\":3225,\"cured\":22001},{\"date\":\"17.05.2020\",\"confirmed\":44857,\"deaths\":3468,\"cured\":23661},{\"date\":\"18.05.2020\",\"confirmed\":48112,\"deaths\":3720,\"cured\":25378},{\"date\":\"19.05.2020\",\"confirmed\":51479,\"deaths\":3980,\"cured\":27154},{\"date\":\"20.05.2020\",\"confirmed\":54962,\"deaths\":4249,\"cured\":28991},{\"date\":\"21.05.2020\",\"confirmed\":58565,\"deaths\":4528,\"cured\":30892},{\"date\":\"22.05.2020\",\"confirmed\":62293,\"deaths\":4816,\"cured\":32858},{\"date\":\"23.05.2020\",\"confirmed\":66149,\"deaths\":5114,\"cured\":34892},{\"date\":\"24.05.2020\",\"confirmed\":70138,\"deaths\":5422,\"cured\":36996},{\"date\":\"25.05.2020\",\"confirmed\":74265,\"deaths\":5741,\"cured\":39173},{\"date\":\"26.05.2020\",\"confirmed\":78534,\"deaths\":6071,\"cured\":41425},{\"date\":\"27.05.2020\",\"confirmed\":82950,\"deaths\":6412,\"cured\":43754},{\"date\":\"28.05.2020\",\"confirmed\":87519,\"deaths\":6765,\"cured\":46164}]},{\"country\":\"Китай\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":29,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1674,\"deaths\":91,\"cured\":1563},{\"date\":\"30.04.2020\",\"confirmed\":3376,\"deaths\":185,\"cured\":3151},{\"date\":\"01.05.2020\",\"confirmed\":5137,\"deaths\":282,\"cured\":4794},{\"date\":\"02.05.2020\",\"confirmed\":6958,\"deaths\":382,\"cured\":6493},{\"date\":\"03.05.2020\",\"confirmed\":8842,\"deaths\":486,\"cured\":8251},{\"date\":\"04.05.2020\",\"confirmed\":10791,\"deaths\":593,\"cured\":10070},{\"date\":\"05.05.2020\",\"confirmed\":12807,\"deaths\":704,\"cured\":11951},{\"date\":\"06.05.2020\",\"confirmed\":14893,\"deaths\":819,\"cured\":13897},{\"date\":\"07.05.2020\",\"confirmed\":17051,\"deaths\":938,\"cured\":15910},{\"date\":\"08.05.2020\",\"confirmed\":19283,\"deaths\":1061,\"cured\":17993},{\"date\":\"09.05.2020\",\"confirmed\":21592,\"deaths\":1188,\"cured\":20148},{\"date\":\"10.05.2020\",\"confirmed\":23981,\"deaths\":1320,\"cured\":22377},{\"date\":\"11.05.2020\",\"confirmed\":26452,\"deaths\":1456,\"cured\":24683},{\"date\":\"12.05.2020\",\"confirmed\":29008,\"deaths\":1597,\"cured\":27068},{\"date\":\"13.05.2020\",\"confirmed\":31652,\"deaths\":1743,\"cured\":29536},{\"date\":\"14.05.2020\",\"confirmed\":34388,\"deaths\":1894,\"cured\":32089},{\"date\":\"15.05.2020\",\"confirmed\":37218,\"deaths\":2050,\"cured\":34730},{\"date\":\"16.05.2020\",\"confirmed\":40146,\"deaths\":2211,\"cured\":37462},{\"date\":\"17.05.2020\",\"confirmed\":43175,\"deaths\":2378,\"cured\":40288},{\"date\":\"18.05.2020\",\"confirmed\":46308,\"deaths\":2551,\"cured\":43211},{\"date\":\"19.05.2020\",\"confirmed\":49549,\"deaths\":2730,\"cured\":46235},{\"date\":\"20.05.2020\",\"confirmed\":52902,\"deaths\":2915,\"cured\":49363},{\"date\":\"21.05.2020\",\"confirmed\":56370,\"deaths\":3106,\"cured\":52599},{\"date\":\"22.05.2020\",\"confirmed\":59958,\"deaths\":3304,\"cured\":55947},{\"date\":\"23.05.2020\",\"confirmed\":63670,\"deaths\":3509,\"cured\":59410},{\"date\":\"24.05.2020\",\"confirmed\":67510,\"deaths\":3721,\"cured\":62993},{\"date\":\"25.05.2020\",\"confirmed\":71482,\"deaths\":3940,\"cured\":66699},{\"date\":\"26.05.2020\",\"confirmed\":75591,\"deaths\":4166,\"cured\":70533},{\"date\":\"27.05.2020\",\"confirmed\":79842,\"deaths\":4400,\"cured\":74499},{\"date\":\"28.05.2020\",\"confirmed\":84239,\"deaths\":4642,\"cured\":78602}]},{\"country\":\"Чили\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":27,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1634,\"deaths\":17,\"cured\":666},{\"date\":\"30.04.2020\",\"confirmed\":3297,\"deaths\":34,\"cured\":1344},{\"date\":\"01.05.2020\",\"confirmed\":5017,\"deaths\":52,\"cured\":2045},{\"date\":\"02.05.2020\",\"confirmed\":6796,\"deaths\":70,\"cured\":2770},{\"date\":\"03.05.2020\",\"confirmed\":8636,\"deaths\":89,\"cured\":3520},{\"date\":\"04.05.2020\",\"confirmed\":10540,\"deaths\":109,\"cured\":4296},{\"date\":\"05.05.2020\",\"confirmed\":12510,\"deaths\":129,\"cured\":5099},{\"date\":\"06.05.2020\",\"confirmed\":14548,\"deaths\":150,\"cured\":5929},{\"date\":\"07.05.2020\",\"confirmed\":16656,\"deaths\":172,\"cured\":6788},{\"date\":\"08.05.2020\",\"confirmed\":18837,\"deaths\":194,\"cured\":7677},{\"date\":\"09.05.2020\",\"confirmed\":21093,\"deaths\":217,\"cured\":8596},{\"date\":\"10.05.2020\",\"confirmed\":23427,\"deaths\":241,\"cured\":9547},{\"date\":\"11.05.2020\",\"confirmed\":25841,\"deaths\":266,\"cured\":10531},{\"date\":\"12.05.2020\",\"confirmed\":28338,\"deaths\":292,\"cured\":11549},{\"date\":\"13.05.2020\",\"confirmed\":30921,\"deaths\":318,\"cured\":12602},{\"date\":\"14.05.2020\",\"confirmed\":33593,\"deaths\":345,\"cured\":13691},{\"date\":\"15.05.2020\",\"confirmed\":36358,\"deaths\":373,\"cured\":14818},{\"date\":\"16.05.2020\",\"confirmed\":39218,\"deaths\":402,\"cured\":15984},{\"date\":\"17.05.2020\",\"confirmed\":42176,\"deaths\":432,\"cured\":17190},{\"date\":\"18.05.2020\",\"confirmed\":45236,\"deaths\":463,\"cured\":18437},{\"date\":\"19.05.2020\",\"confirmed\":48402,\"deaths\":495,\"cured\":19727},{\"date\":\"20.05.2020\",\"confirmed\":51677,\"deaths\":528,\"cured\":21062},{\"date\":\"21.05.2020\",\"confirmed\":55065,\"deaths\":563,\"cured\":22443},{\"date\":\"22.05.2020\",\"confirmed\":58570,\"deaths\":599,\"cured\":23872},{\"date\":\"23.05.2020\",\"confirmed\":62196,\"deaths\":636,\"cured\":25350},{\"date\":\"24.05.2020\",\"confirmed\":65947,\"deaths\":674,\"cured\":26879},{\"date\":\"25.05.2020\",\"confirmed\":69827,\"deaths\":714,\"cured\":28461},{\"date\":\"26.05.2020\",\"confirmed\":73841,\"deaths\":755,\"cured\":30097},{\"date\":\"27.05.2020\",\"confirmed\":77993,\"deaths\":797,\"cured\":31789},{\"date\":\"28.05.2020\",\"confirmed\":82289,\"deaths\":841,\"cured\":33540}]},{\"country\":\"Саудовская Аравия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":28,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1594,\"deaths\":8,\"cured\":1084},{\"date\":\"30.04.2020\",\"confirmed\":3214,\"deaths\":17,\"cured\":2186},{\"date\":\"01.05.2020\",\"confirmed\":4890,\"deaths\":26,\"cured\":3326},{\"date\":\"02.05.2020\",\"confirmed\":6624,\"deaths\":36,\"cured\":4505},{\"date\":\"03.05.2020\",\"confirmed\":8418,\"deaths\":46,\"cured\":5725},{\"date\":\"04.05.2020\",\"confirmed\":10273,\"deaths\":56,\"cured\":6987},{\"date\":\"05.05.2020\",\"confirmed\":12192,\"deaths\":67,\"cured\":8293},{\"date\":\"06.05.2020\",\"confirmed\":14177,\"deaths\":78,\"cured\":9644},{\"date\":\"07.05.2020\",\"confirmed\":16231,\"deaths\":89,\"cured\":11041},{\"date\":\"08.05.2020\",\"confirmed\":18356,\"deaths\":101,\"cured\":12487},{\"date\":\"09.05.2020\",\"confirmed\":20554,\"deaths\":113,\"cured\":13982},{\"date\":\"10.05.2020\",\"confirmed\":22828,\"deaths\":126,\"cured\":15529},{\"date\":\"11.05.2020\",\"confirmed\":25180,\"deaths\":139,\"cured\":17129},{\"date\":\"12.05.2020\",\"confirmed\":27613,\"deaths\":152,\"cured\":18784},{\"date\":\"13.05.2020\",\"confirmed\":30130,\"deaths\":166,\"cured\":20497},{\"date\":\"14.05.2020\",\"confirmed\":32734,\"deaths\":180,\"cured\":22269},{\"date\":\"15.05.2020\",\"confirmed\":35428,\"deaths\":195,\"cured\":24102},{\"date\":\"16.05.2020\",\"confirmed\":38215,\"deaths\":210,\"cured\":25998},{\"date\":\"17.05.2020\",\"confirmed\":41098,\"deaths\":226,\"cured\":27959},{\"date\":\"18.05.2020\",\"confirmed\":44080,\"deaths\":242,\"cured\":29988},{\"date\":\"19.05.2020\",\"confirmed\":47165,\"deaths\":259,\"cured\":32087},{\"date\":\"20.05.2020\",\"confirmed\":50356,\"deaths\":277,\"cured\":34258},{\"date\":\"21.05.2020\",\"confirmed\":53658,\"deaths\":295,\"cured\":36504},{\"date\":\"22.05.2020\",\"confirmed\":57073,\"deaths\":314,\"cured\":38828},{\"date\":\"23.05.2020\",\"confirmed\":60606,\"deaths\":333,\"cured\":41232},{\"date\":\"24.05.2020\",\"confirmed\":64261,\"deaths\":353,\"cured\":43719},{\"date\":\"25.05.2020\",\"confirmed\":68042,\"deaths\":374,\"cured\":46291},{\"date\":\"26.05.2020\",\"confirmed\":71953,\"deaths\":396,\"cured\":48952},{\"date\":\"27.05.2020\",\"confirmed\":75999,\"deaths\":418,\"cured\":51705},{\"date\":\"28.05.2020\",\"confirmed\":80185,\"deaths\":441,\"cured\":54553}]},{\"country\":\"Мексика\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":26,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1550,\"deaths\":169,\"cured\":1081},{\"date\":\"30.04.2020\",\"confirmed\":3126,\"deaths\":343,\"cured\":2180},{\"date\":\"01.05.2020\",\"confirmed\":4757,\"deaths\":523,\"cured\":3317},{\"date\":\"02.05.2020\",\"confirmed\":6444,\"deaths\":709,\"cured\":4493},{\"date\":\"03.05.2020\",\"confirmed\":8189,\"deaths\":901,\"cured\":5709},{\"date\":\"04.05.2020\",\"confirmed\":9994,\"deaths\":1100,\"cured\":6967},{\"date\":\"05.05.2020\",\"confirmed\":11862,\"deaths\":1306,\"cured\":8269},{\"date\":\"06.05.2020\",\"confirmed\":13794,\"deaths\":1519,\"cured\":9616},{\"date\":\"07.05.2020\",\"confirmed\":15793,\"deaths\":1739,\"cured\":11009},{\"date\":\"08.05.2020\",\"confirmed\":17860,\"deaths\":1967,\"cured\":12450},{\"date\":\"09.05.2020\",\"confirmed\":19999,\"deaths\":2203,\"cured\":13941},{\"date\":\"10.05.2020\",\"confirmed\":22212,\"deaths\":2447,\"cured\":15483},{\"date\":\"11.05.2020\",\"confirmed\":24501,\"deaths\":2699,\"cured\":17078},{\"date\":\"12.05.2020\",\"confirmed\":26869,\"deaths\":2960,\"cured\":18728},{\"date\":\"13.05.2020\",\"confirmed\":29318,\"deaths\":3230,\"cured\":20435},{\"date\":\"14.05.2020\",\"confirmed\":31852,\"deaths\":3509,\"cured\":22201},{\"date\":\"15.05.2020\",\"confirmed\":34473,\"deaths\":3798,\"cured\":24028},{\"date\":\"16.05.2020\",\"confirmed\":37185,\"deaths\":4097,\"cured\":25918},{\"date\":\"17.05.2020\",\"confirmed\":39990,\"deaths\":4406,\"cured\":27873},{\"date\":\"18.05.2020\",\"confirmed\":42892,\"deaths\":4726,\"cured\":29896},{\"date\":\"19.05.2020\",\"confirmed\":45894,\"deaths\":5057,\"cured\":31988},{\"date\":\"20.05.2020\",\"confirmed\":48999,\"deaths\":5399,\"cured\":34153},{\"date\":\"21.05.2020\",\"confirmed\":52211,\"deaths\":5753,\"cured\":36392},{\"date\":\"22.05.2020\",\"confirmed\":55534,\"deaths\":6119,\"cured\":38708},{\"date\":\"23.05.2020\",\"confirmed\":58972,\"deaths\":6498,\"cured\":41104},{\"date\":\"24.05.2020\",\"confirmed\":62528,\"deaths\":6890,\"cured\":43583},{\"date\":\"25.05.2020\",\"confirmed\":66207,\"deaths\":7295,\"cured\":46147},{\"date\":\"26.05.2020\",\"confirmed\":70013,\"deaths\":7714,\"cured\":48800},{\"date\":\"27.05.2020\",\"confirmed\":73950,\"deaths\":8148,\"cured\":51544},{\"date\":\"28.05.2020\",\"confirmed\":78023,\"deaths\":8597,\"cured\":54383}]},{\"country\":\"Пакистан\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":20,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1216,\"deaths\":26,\"cured\":402},{\"date\":\"30.04.2020\",\"confirmed\":2453,\"deaths\":52,\"cured\":811},{\"date\":\"01.05.2020\",\"confirmed\":3733,\"deaths\":78,\"cured\":1234},{\"date\":\"02.05.2020\",\"confirmed\":5057,\"deaths\":105,\"cured\":1671},{\"date\":\"03.05.2020\",\"confirmed\":6426,\"deaths\":133,\"cured\":2124},{\"date\":\"04.05.2020\",\"confirmed\":7843,\"deaths\":162,\"cured\":2592},{\"date\":\"05.05.2020\",\"confirmed\":9309,\"deaths\":192,\"cured\":3076},{\"date\":\"06.05.2020\",\"confirmed\":10825,\"deaths\":223,\"cured\":3577},{\"date\":\"07.05.2020\",\"confirmed\":12393,\"deaths\":255,\"cured\":4095},{\"date\":\"08.05.2020\",\"confirmed\":14015,\"deaths\":288,\"cured\":4631},{\"date\":\"09.05.2020\",\"confirmed\":15693,\"deaths\":323,\"cured\":5186},{\"date\":\"10.05.2020\",\"confirmed\":17429,\"deaths\":359,\"cured\":5760},{\"date\":\"11.05.2020\",\"confirmed\":19225,\"deaths\":396,\"cured\":6354},{\"date\":\"12.05.2020\",\"confirmed\":21083,\"deaths\":434,\"cured\":6968},{\"date\":\"13.05.2020\",\"confirmed\":23005,\"deaths\":474,\"cured\":7603},{\"date\":\"14.05.2020\",\"confirmed\":24993,\"deaths\":515,\"cured\":8260},{\"date\":\"15.05.2020\",\"confirmed\":27050,\"deaths\":557,\"cured\":8940},{\"date\":\"16.05.2020\",\"confirmed\":29178,\"deaths\":601,\"cured\":9643},{\"date\":\"17.05.2020\",\"confirmed\":31379,\"deaths\":646,\"cured\":10370},{\"date\":\"18.05.2020\",\"confirmed\":33656,\"deaths\":693,\"cured\":11122},{\"date\":\"19.05.2020\",\"confirmed\":36012,\"deaths\":741,\"cured\":11900},{\"date\":\"20.05.2020\",\"confirmed\":38449,\"deaths\":791,\"cured\":12705},{\"date\":\"21.05.2020\",\"confirmed\":40970,\"deaths\":843,\"cured\":13538},{\"date\":\"22.05.2020\",\"confirmed\":43578,\"deaths\":897,\"cured\":14400},{\"date\":\"23.05.2020\",\"confirmed\":46276,\"deaths\":953,\"cured\":15291},{\"date\":\"24.05.2020\",\"confirmed\":49067,\"deaths\":1010,\"cured\":16213},{\"date\":\"25.05.2020\",\"confirmed\":51954,\"deaths\":1069,\"cured\":17167},{\"date\":\"26.05.2020\",\"confirmed\":54941,\"deaths\":1130,\"cured\":18154},{\"date\":\"27.05.2020\",\"confirmed\":58031,\"deaths\":1194,\"cured\":19175},{\"date\":\"28.05.2020\",\"confirmed\":61227,\"deaths\":1260,\"cured\":20231}]},{\"country\":\"Бельгия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":19,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1149,\"deaths\":188,\"cured\":307},{\"date\":\"30.04.2020\",\"confirmed\":2318,\"deaths\":378,\"cured\":622},{\"date\":\"01.05.2020\",\"confirmed\":3527,\"deaths\":574,\"cured\":947},{\"date\":\"02.05.2020\",\"confirmed\":4778,\"deaths\":777,\"cured\":1284},{\"date\":\"03.05.2020\",\"confirmed\":6072,\"deaths\":987,\"cured\":1632},{\"date\":\"04.05.2020\",\"confirmed\":7410,\"deaths\":1204,\"cured\":1992},{\"date\":\"05.05.2020\",\"confirmed\":8795,\"deaths\":1429,\"cured\":2365},{\"date\":\"06.05.2020\",\"confirmed\":10227,\"deaths\":1661,\"cured\":2751},{\"date\":\"07.05.2020\",\"confirmed\":11709,\"deaths\":1901,\"cured\":3150},{\"date\":\"08.05.2020\",\"confirmed\":13242,\"deaths\":2150,\"cured\":3563},{\"date\":\"09.05.2020\",\"confirmed\":14828,\"deaths\":2407,\"cured\":3990},{\"date\":\"10.05.2020\",\"confirmed\":16468,\"deaths\":2673,\"cured\":4432},{\"date\":\"11.05.2020\",\"confirmed\":18165,\"deaths\":2948,\"cured\":4889},{\"date\":\"12.05.2020\",\"confirmed\":19921,\"deaths\":3233,\"cured\":5362},{\"date\":\"13.05.2020\",\"confirmed\":21737,\"deaths\":3528,\"cured\":5851},{\"date\":\"14.05.2020\",\"confirmed\":23616,\"deaths\":3833,\"cured\":6357},{\"date\":\"15.05.2020\",\"confirmed\":25559,\"deaths\":4148,\"cured\":6880},{\"date\":\"16.05.2020\",\"confirmed\":27569,\"deaths\":4474,\"cured\":7421},{\"date\":\"17.05.2020\",\"confirmed\":29649,\"deaths\":4811,\"cured\":7981},{\"date\":\"18.05.2020\",\"confirmed\":31800,\"deaths\":5160,\"cured\":8560},{\"date\":\"19.05.2020\",\"confirmed\":34026,\"deaths\":5521,\"cured\":9159},{\"date\":\"20.05.2020\",\"confirmed\":36328,\"deaths\":5895,\"cured\":9779},{\"date\":\"21.05.2020\",\"confirmed\":38710,\"deaths\":6281,\"cured\":10420},{\"date\":\"22.05.2020\",\"confirmed\":41174,\"deaths\":6681,\"cured\":11083},{\"date\":\"23.05.2020\",\"confirmed\":43723,\"deaths\":7095,\"cured\":11769},{\"date\":\"24.05.2020\",\"confirmed\":46360,\"deaths\":7523,\"cured\":12479},{\"date\":\"25.05.2020\",\"confirmed\":49088,\"deaths\":7966,\"cured\":13213},{\"date\":\"26.05.2020\",\"confirmed\":51910,\"deaths\":8424,\"cured\":13973},{\"date\":\"27.05.2020\",\"confirmed\":54829,\"deaths\":8898,\"cured\":14759},{\"date\":\"28.05.2020\",\"confirmed\":57849,\"deaths\":9388,\"cured\":15572}]},{\"country\":\"Катар\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":17,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1011,\"deaths\":0,\"cured\":307},{\"date\":\"30.04.2020\",\"confirmed\":2040,\"deaths\":1,\"cured\":618},{\"date\":\"01.05.2020\",\"confirmed\":3104,\"deaths\":2,\"cured\":940},{\"date\":\"02.05.2020\",\"confirmed\":4205,\"deaths\":3,\"cured\":1273},{\"date\":\"03.05.2020\",\"confirmed\":5344,\"deaths\":4,\"cured\":1617},{\"date\":\"04.05.2020\",\"confirmed\":6522,\"deaths\":5,\"cured\":1973},{\"date\":\"05.05.2020\",\"confirmed\":7741,\"deaths\":6,\"cured\":2342},{\"date\":\"06.05.2020\",\"confirmed\":9002,\"deaths\":7,\"cured\":2723},{\"date\":\"07.05.2020\",\"confirmed\":10306,\"deaths\":8,\"cured\":3117},{\"date\":\"08.05.2020\",\"confirmed\":11655,\"deaths\":9,\"cured\":3525},{\"date\":\"09.05.2020\",\"confirmed\":13051,\"deaths\":10,\"cured\":3947},{\"date\":\"10.05.2020\",\"confirmed\":14495,\"deaths\":11,\"cured\":4384},{\"date\":\"11.05.2020\",\"confirmed\":15989,\"deaths\":12,\"cured\":4836},{\"date\":\"12.05.2020\",\"confirmed\":17534,\"deaths\":13,\"cured\":5303},{\"date\":\"13.05.2020\",\"confirmed\":19132,\"deaths\":14,\"cured\":5786},{\"date\":\"14.05.2020\",\"confirmed\":20785,\"deaths\":15,\"cured\":6286},{\"date\":\"15.05.2020\",\"confirmed\":22495,\"deaths\":16,\"cured\":6803},{\"date\":\"16.05.2020\",\"confirmed\":24264,\"deaths\":17,\"cured\":7338},{\"date\":\"17.05.2020\",\"confirmed\":26094,\"deaths\":18,\"cured\":7892},{\"date\":\"18.05.2020\",\"confirmed\":27988,\"deaths\":19,\"cured\":8465},{\"date\":\"19.05.2020\",\"confirmed\":29947,\"deaths\":20,\"cured\":9057},{\"date\":\"20.05.2020\",\"confirmed\":31973,\"deaths\":21,\"cured\":9670},{\"date\":\"21.05.2020\",\"confirmed\":34069,\"deaths\":22,\"cured\":10304},{\"date\":\"22.05.2020\",\"confirmed\":36238,\"deaths\":23,\"cured\":10960},{\"date\":\"23.05.2020\",\"confirmed\":38481,\"deaths\":24,\"cured\":11639},{\"date\":\"24.05.2020\",\"confirmed\":40802,\"deaths\":25,\"cured\":12341},{\"date\":\"25.05.2020\",\"confirmed\":43203,\"deaths\":27,\"cured\":13067},{\"date\":\"26.05.2020\",\"confirmed\":45687,\"deaths\":29,\"cured\":13818},{\"date\":\"27.05.2020\",\"confirmed\":48256,\"deaths\":31,\"cured\":14595},{\"date\":\"28.05.2020\",\"confirmed\":50914,\"deaths\":33,\"cured\":15399}]}]");

/***/ }),

/***/ "./src/app/df.json":
/*!*************************!*\
  !*** ./src/app/df.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"num\":1,\"country\":\"США\",\"confirmed\":1747781,\"deaths\":102197,\"cured\":490256,\"death_per\":5.84},{\"num\":2,\"country\":\"Бразилия\",\"confirmed\":414661,\"deaths\":25697,\"cured\":166647,\"death_per\":6.19},{\"num\":3,\"country\":\"Россия\",\"confirmed\":379376,\"deaths\":4148,\"cured\":151111,\"death_per\":1.09},{\"num\":4,\"country\":\"Испания\",\"confirmed\":283849,\"deaths\":28752,\"cured\":196958,\"death_per\":10.12},{\"num\":5,\"country\":\"Великобритания\",\"confirmed\":267240,\"deaths\":37460,\"cured\":857,\"death_per\":14.01},{\"num\":6,\"country\":\"Италия\",\"confirmed\":231139,\"deaths\":33072,\"cured\":147101,\"death_per\":14.3},{\"num\":7,\"country\":\"Франция\",\"confirmed\":182942,\"deaths\":28596,\"cured\":66584,\"death_per\":15.63},{\"num\":8,\"country\":\"Германия\",\"confirmed\":181895,\"deaths\":8533,\"cured\":163200,\"death_per\":4.69},{\"num\":9,\"country\":\"Турция\",\"confirmed\":159797,\"deaths\":4431,\"cured\":122793,\"death_per\":2.77},{\"num\":10,\"country\":\"Индия\",\"confirmed\":159138,\"deaths\":4542,\"cured\":67983,\"death_per\":2.85},{\"num\":11,\"country\":\"Иран\",\"confirmed\":143849,\"deaths\":7627,\"cured\":112988,\"death_per\":5.3},{\"num\":12,\"country\":\"Перу\",\"confirmed\":135905,\"deaths\":3983,\"cured\":56169,\"death_per\":2.93},{\"num\":13,\"country\":\"Канада\",\"confirmed\":87519,\"deaths\":6765,\"cured\":46164,\"death_per\":7.72},{\"num\":14,\"country\":\"Китай\",\"confirmed\":84239,\"deaths\":4642,\"cured\":78602,\"death_per\":5.51},{\"num\":15,\"country\":\"Чили\",\"confirmed\":82289,\"deaths\":841,\"cured\":33540,\"death_per\":1.02},{\"num\":16,\"country\":\"Саудовская Аравия\",\"confirmed\":80185,\"deaths\":441,\"cured\":54553,\"death_per\":0.54},{\"num\":17,\"country\":\"Мексика\",\"confirmed\":78023,\"deaths\":8597,\"cured\":54383,\"death_per\":11.01},{\"num\":18,\"country\":\"Пакистан\",\"confirmed\":61227,\"deaths\":1260,\"cured\":20231,\"death_per\":2.05},{\"num\":19,\"country\":\"Бельгия\",\"confirmed\":57849,\"deaths\":9388,\"cured\":15572,\"death_per\":16.22},{\"num\":20,\"country\":\"Катар\",\"confirmed\":50914,\"deaths\":33,\"cured\":15399,\"death_per\":0.06}]");

/***/ }),

/***/ "./src/app/df_r.json":
/*!***************************!*\
  !*** ./src/app/df_r.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"num\":1,\"country\":\"Москва\",\"confirmed\":173497,\"deaths\":2254,\"cured\":71251,\"death_per\":1.29},{\"num\":2,\"country\":\"Московская область\",\"confirmed\":36730,\"deaths\":380,\"cured\":6843,\"death_per\":1.03},{\"num\":3,\"country\":\"Санкт-Петербург\",\"confirmed\":14846,\"deaths\":167,\"cured\":4783,\"death_per\":1.12},{\"num\":4,\"country\":\"Нижегородская область\",\"confirmed\":8963,\"deaths\":84,\"cured\":3244,\"death_per\":0.93},{\"num\":5,\"country\":\"Свердловская область\",\"confirmed\":4693,\"deaths\":23,\"cured\":1827,\"death_per\":0.49},{\"num\":6,\"country\":\"Республика Дагестан\",\"confirmed\":4579,\"deaths\":151,\"cured\":4402,\"death_per\":3.29},{\"num\":7,\"country\":\"Ростовская область\",\"confirmed\":4287,\"deaths\":35,\"cured\":1529,\"death_per\":0.81},{\"num\":8,\"country\":\"Красноярский край\",\"confirmed\":3847,\"deaths\":29,\"cured\":834,\"death_per\":0.75},{\"num\":9,\"country\":\"Калужская область\",\"confirmed\":3653,\"deaths\":29,\"cured\":1237,\"death_per\":0.79},{\"num\":10,\"country\":\"Краснодарский край\",\"confirmed\":3582,\"deaths\":29,\"cured\":2393,\"death_per\":0.8},{\"num\":11,\"country\":\"Тульская область\",\"confirmed\":3532,\"deaths\":30,\"cured\":1564,\"death_per\":0.84},{\"num\":12,\"country\":\"Брянская область\",\"confirmed\":3363,\"deaths\":31,\"cured\":1893,\"death_per\":0.92},{\"num\":13,\"country\":\"Рязанская область\",\"confirmed\":3283,\"deaths\":7,\"cured\":848,\"death_per\":0.21},{\"num\":14,\"country\":\"Мурманская область\",\"confirmed\":3076,\"deaths\":7,\"cured\":1728,\"death_per\":0.22},{\"num\":15,\"country\":\"Республика Татарстан\",\"confirmed\":3026,\"deaths\":10,\"cured\":2350,\"death_per\":0.33},{\"num\":16,\"country\":\"Республика Башкортостан\",\"confirmed\":3021,\"deaths\":18,\"cured\":948,\"death_per\":0.59},{\"num\":17,\"country\":\"Ярославская область\",\"confirmed\":2892,\"deaths\":13,\"cured\":653,\"death_per\":0.44},{\"num\":18,\"country\":\"Республика Северная Осетия—Алания\",\"confirmed\":2807,\"deaths\":37,\"cured\":1660,\"death_per\":1.31},{\"num\":19,\"country\":\"Курская область\",\"confirmed\":2787,\"deaths\":10,\"cured\":1204,\"death_per\":0.35},{\"num\":20,\"country\":\"Тамбовская область\",\"confirmed\":2772,\"deaths\":7,\"cured\":990,\"death_per\":0.25}]");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 0, consts: [["color", "primary", 1, "header"], [1, "items"], ["src", "assets/img/logo.png", "routerLink", "/", 2, "cursor", "pointer"], [1, "tab"], [1, "tab-nav"], ["mat-button", "", "routerLink", "/main"], ["mat-button", "", "routerLink", "/news"], [1, "tab-slash"], [1, "tab-inform"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041D\u043E\u0432\u043E\u0441\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0442\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".header[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    \r\n    z-index: 10;\r\n}\r\n.mat-toolbar-row[_ngcontent-%COMP%] {\r\n}\r\n.items[_ngcontent-%COMP%] { \r\n    display: flex;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    max-width: 1350px;\r\n\r\n}\r\n.tab[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n.tab-nav[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    top: 7px;\r\n}\r\n.tab-slash[_ngcontent-%COMP%] {\r\n    margin: 0 20px;\r\n    width: 2px;\r\n    height: 50px;\r\n    background-color: rgba(255,255,255,0.9);   \r\n}\r\n.tab-inform[_ngcontent-%COMP%] {\r\n    margin-top: 7px;\r\n    position: relative;\r\n    width: 200px;\r\n    white-space: normal!important;\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n    color: rgba(255,255,255,0.9);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXOztJQUVYLFdBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7QUFDWjtBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4ubWF0LXRvb2xiYXItcm93IHtcclxufVxyXG4uaXRlbXMgeyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTM1MHB4O1xyXG5cclxufVxyXG4udGFiIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGFiLW5hdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRvcDogN3B4O1xyXG59XHJcblxyXG4udGFiLXNsYXNoIHtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTsgICBcclxufVxyXG4udGFiLWluZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");
/* harmony import */ var src_app_home_prevention_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home/prevention.json */ "./src/app/home/prevention.json");
var src_app_home_prevention_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/home/prevention.json */ "./src/app/home/prevention.json", 1);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






let scrollbarZ;
let preventionH;
let hrzel;
let targetel;
let clicked = false;
class HomeComponent {
    constructor() {
        this.items = src_app_home_prevention_json__WEBPACK_IMPORTED_MODULE_2__;
        this.currentPrevention = "";
        this.observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutationRecord) {
                if (!clicked) {
                    if (scrollbarZ.offset.y >= hrzel[0].offsetTop) {
                        if (scrollbarZ.offset.y >= (hrzel[1].offsetTop - 200)) {
                            if (scrollbarZ.offset.y >= (hrzel[2].offsetTop - 200)) {
                                targetel.setAttribute("id", "");
                                preventionH[2].setAttribute("id", "target");
                                targetel = preventionH[2];
                                return;
                            }
                            targetel.setAttribute("id", "");
                            preventionH[1].setAttribute("id", "target");
                            targetel = preventionH[1];
                            return;
                        }
                        targetel.setAttribute("id", "");
                        preventionH[0].setAttribute("id", "target");
                        targetel = preventionH[0];
                        return;
                    }
                }
            });
        });
    }
    ngAfterViewInit() {
        hrzel = document.querySelectorAll('.hidden-hr');
        scrollbarZ = smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"].init(document.querySelector('#my-home-scrollbar'));
        let prevention_card = document.querySelectorAll('.prevention-card');
        let popup = document.querySelector('.popup-prevention');
        prevention_card.forEach(element => {
            element.addEventListener('mouseover', () => {
                let res = "visibility:visible; opacity: 1";
                switch (element.getAttribute("id")) {
                    case "1":
                        popup.setAttribute("style", "left: 0; top: 210px;width: 60%;" + res);
                        break;
                    case "2":
                        popup.setAttribute("style", "left: 45%; top: 0;" + res);
                        break;
                    case "3":
                        popup.setAttribute("style", "right: 19%; top: 210px;" + res);
                        break;
                    case "4":
                        popup.setAttribute("style", "left: 20%; top: 210px;" + res);
                        break;
                    case "5":
                        popup.setAttribute("style", "left: 20%; bottom: 210px;" + res);
                        break;
                    case "6":
                        popup.setAttribute("style", "right: 0; bottom: 210px; width: 100%;" + res);
                        break;
                }
                for (let item of this.items) {
                    if (item.id == element.getAttribute("id"))
                        this.currentPrevention = item.text;
                }
            });
            element.addEventListener('mouseout', () => {
                popup.setAttribute("style", "visibility:hidden; opacity: 0; transition: 0s");
            });
        });
        preventionH = document.querySelectorAll('.nav-cont');
        preventionH.forEach(element => {
            if (element.getAttribute("id") == "target") {
                targetel = element;
            }
            element.addEventListener('click', () => {
                clicked = true;
                scrollbarZ.scrollIntoView(document.getElementById(element.getAttribute('data-href')));
                targetel.setAttribute("id", "");
                element.setAttribute("id", "target");
                targetel = element;
                setTimeout(() => { clicked = false; }, 1000);
            });
        });
        let target = document.querySelector('#my-home-scrollbar .scroll-content');
        this.observer.observe(target, { attributes: true, attributeFilter: ['style'] });
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 109, vars: 1, consts: [[1, "main"], [1, "main-content"], [1, "nav"], [1, "nav-conainer"], ["id", "target", "data-href", "main", 1, "nav-cont"], ["id", "", "data-href", "history", 1, "nav-cont"], ["id", "", "data-href", "prevention", 1, "nav-cont"], ["id", "my-home-scrollbar"], ["id", "main", 1, "hidden-hr"], [1, "first-wallpaper"], [1, "wallpaper-mask"], [1, "header"], [1, "main-h1"], [1, "content"], [1, "concept-content"], [1, "concept-header"], [1, "content-h1"], [1, "hr"], [1, "concept-main-body"], [1, "concept-main-body-text"], [1, "content-p"], [1, "concept-main-body-img"], [1, "cov-img"], ["id", "history", 1, "hidden-hr"], [1, "history-content"], [1, "history-header"], [1, "history-main-body"], [1, "history-main-body-text"], [1, "content-h2"], ["id", "prevention", 1, "hidden-hr"], [1, "prevention-content"], [1, "prevention-header"], [1, "cards"], [1, "prevention-cards-content"], [1, "popup-prevention"], [1, "popup-prevention-p"], [1, "cards-board"], ["id", "1", 1, "prevention-card"], ["src", "assets/img/wash-hands.png"], ["id", "2", 1, "prevention-card"], ["src", "assets/img/social-distance.png"], ["id", "3", 1, "prevention-card"], ["src", "assets/img/cant-touch-this.png"], ["id", "4", 1, "prevention-card"], ["src", "assets/img/cough.png"], ["id", "5", 1, "prevention-card"], ["src", "assets/img/call.png"], ["id", "6", 1, "prevention-card"], ["src", "assets/img/read-news.png"], [1, "hotline-conteiner"], [1, "hotline-header"], [1, "hotline-content"], [1, "hotline-card-container"], [1, "hotline-card"], [1, "hotline-card-header"], [1, "hotline-card-text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u0440\u043E\u0444\u0438\u043B\u0430\u043A\u0442\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u043D\u0430\u044F \u0438\u043D\u0444\u0435\u043A\u0446\u0438\u044F COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441 - \u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u043E \u0432\u0438\u0440\u0443\u0441\u043E\u0432, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0435\u0435 \u043D\u0430 \u043C\u0430\u0439 2020 \u0433\u043E\u0434\u0430 43 \u0432\u0438\u0434\u0430 \u0420\u041D\u041A-\u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0432\u0438\u0440\u0443\u0441\u043E\u0432, \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u044B\u0445 \u0432 \u0434\u0432\u0430 \u043F\u043E\u0434\u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0440\u0430\u0436\u0430\u044E\u0442 \u043C\u043B\u0435\u043A\u043E\u043F\u0438\u0442\u0430\u044E\u0449\u0438\u0445, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u043F\u0442\u0438\u0446 \u0438 \u0437\u0435\u043C\u043D\u043E\u0432\u043E\u0434\u043D\u044B\u0445. \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043E \u0441\u043E \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435\u043C \u0432\u0438\u0440\u0443\u0441\u0430, \u0448\u0438\u043F\u043E\u0432\u0438\u0434\u043D\u044B\u0435 \u043E\u0442\u0440\u043E\u0441\u0442\u043A\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u044E\u0442 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0443\u044E \u043A\u043E\u0440\u043E\u043D\u0443. \u0418\u0437\u0432\u0435\u0441\u0442\u043D\u043E 7 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u043E\u0432, \u043F\u043E\u0440\u0430\u0436\u0430\u044E\u0449\u0438\u0445 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430: HCoV-229E \u2014 Alphacoronavirus, \u0432\u043F\u0435\u0440\u0432\u044B\u0435 \u0432\u044B\u044F\u0432\u043B\u0435\u043D \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435 1960\u0445 \u0433\u043E\u0434\u043E\u0432; HCoV-NL63 \u2014 Alphacoronavirus, \u0432\u043E\u0437\u0431\u0443\u0434\u0438\u0442\u0435\u043B\u044C \u0431\u044B\u043B \u0432\u044B\u044F\u0432\u043B\u0435\u043D \u0432 \u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u0430\u0445 \u0432 2004 \u0433\u043E\u0434\u0443; HCoV-OC43[en] \u2014 Betacoronavirus A, \u0432\u043E\u0437\u0431\u0443\u0434\u0438\u0442\u0435\u043B\u044C \u0432\u044B\u044F\u0432\u043B\u0435\u043D \u0432 1967 \u0433\u043E\u0434\u0443; HCoV-HKU1[en] \u2014 Betacoronavirus A, \u0432\u043E\u0437\u0431\u0443\u0434\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D \u0432 \u0413\u043E\u043D\u043A\u043E\u043D\u0433\u0435 \u0432 2005 \u0433\u043E\u0434\u0443; SARS-CoV \u2014 Betacoronavirus B, \u0432\u043E\u0437\u0431\u0443\u0434\u0438\u0442\u0435\u043B\u044C \u0442\u044F\u0436\u0451\u043B\u043E\u0433\u043E \u043E\u0441\u0442\u0440\u043E\u0433\u043E \u0440\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0441\u0438\u043D\u0434\u0440\u043E\u043C\u0430, \u043F\u0435\u0440\u0432\u044B\u0439 \u0441\u043B\u0443\u0447\u0430\u0439 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0431\u044B\u043B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D \u0432 2002 \u0433\u043E\u0434\u0443; MERS-CoV \u2014 Betacoronavirus C, \u0432\u043E\u0437\u0431\u0443\u0434\u0438\u0442\u0435\u043B\u044C \u0431\u043B\u0438\u0436\u043D\u0435\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0441\u0438\u043D\u0434\u0440\u043E\u043C\u0430, \u0432\u0441\u043F\u044B\u0448\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u0432 2015 \u0433\u043E\u0434\u0443; SARS-CoV-2 \u2014 Betacoronavirus B, \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0435 2019 \u0438 \u0432\u044B\u0437\u0432\u0430\u0432\u0448\u0438\u0439 \u043F\u0430\u043D\u0434\u0435\u043C\u0438\u044E \u043F\u043D\u0435\u0432\u043C\u043E\u043D\u0438\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0442\u0438\u043F\u0430 COVID-19.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u044B \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0442 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u043C\u043B\u0435\u043A\u043E\u043F\u0438\u0442\u0430\u044E\u0449\u0438\u0445 (\u043B\u044E\u0434\u0435\u0439, \u043B\u0435\u0442\u0443\u0447\u0438\u0445 \u043C\u044B\u0448\u0435\u0439, \u043A\u043E\u0448\u0435\u043A, \u0441\u043E\u0431\u0430\u043A, \u0441\u0432\u0438\u043D\u0435\u0439, \u043A\u0440\u0443\u043F\u043D\u043E\u0433\u043E \u0440\u043E\u0433\u0430\u0442\u043E\u0433\u043E \u0441\u043A\u043E\u0442\u0430) \u0438 \u043F\u0442\u0438\u0446. \u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C\u0438 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u043D\u044B\u0445 \u0438\u043D\u0444\u0435\u043A\u0446\u0438\u0439 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u043D\u043E\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A, \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438: \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u043E-\u043A\u0430\u043F\u0435\u043B\u044C\u043D\u044B\u0439, \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u043E-\u043F\u044B\u043B\u0435\u0432\u043E\u0439, \u0444\u0435\u043A\u0430\u043B\u044C\u043D\u043E-\u043E\u0440\u0430\u043B\u044C\u043D\u044B\u0439, \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439. \u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u0435\u043C\u043E\u0441\u0442\u044C \u0440\u0430\u0441\u0442\u0451\u0442 \u0437\u0438\u043C\u043E\u0439 \u0438 \u0440\u0430\u043D\u043D\u0435\u0439 \u0432\u0435\u0441\u043D\u043E\u0439. \u0412 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435 \u041E\u0420\u0412\u0418 \u0433\u043E\u0441\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0431\u043E\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u043D\u0430\u044F \u0438\u043D\u0444\u0435\u043A\u0446\u0438\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0432 \u0441\u0440\u0435\u0434\u043D\u0435\u043C 12 %. \u0418\u043C\u043C\u0443\u043D\u0438\u0442\u0435\u0442 \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0451\u043D\u043D\u043E\u0439 \u0431\u043E\u043B\u0435\u0437\u043D\u0438 \u043D\u0435\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u043D\u0435 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043E\u0442 \u0440\u0435\u0438\u043D\u0444\u0435\u043A\u0446\u0438\u0438. \u041E \u0448\u0438\u0440\u043E\u043A\u043E\u0439 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u043E\u0432 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u043D\u044B\u0435 \u0430\u043D\u0442\u0438\u0442\u0435\u043B\u0430, \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0443 80 % \u043B\u044E\u0434\u0435\u0439. \u041A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u0432\u043F\u0435\u0440\u0432\u044B\u0435 \u0431\u044B\u043B \u0432\u044B\u0434\u0435\u043B\u0435\u043D \u0432 1965 \u0433\u043E\u0434\u0443 \u043E\u0442 \u0431\u043E\u043B\u044C\u043D\u044B\u0445 \u041E\u0420\u0412\u0418 \u0414. \u0422\u0438\u0440\u0440\u0435\u043B\u043E\u043C \u0438\u0437 \u043D\u043E\u0441\u043E\u0433\u043B\u043E\u0442\u043A\u0438 \u043F\u0440\u0438 \u043E\u0441\u0442\u0440\u043E\u043C \u0440\u0438\u043D\u0438\u0442\u0435, \u043F\u043E\u0437\u0436\u0435 \u0432 1975 \u0433\u043E\u0434\u0443 \u042D. \u041A\u0430\u0443\u043B \u0438 \u0421. \u041A\u043B\u0430\u0440\u043A \u0432\u044B\u0434\u0435\u043B\u0438\u043B\u0438 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441 \u0438\u0437 \u0438\u0441\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0439 \u043F\u0440\u0438 \u0434\u0435\u0442\u0441\u043A\u043E\u043C \u044D\u043D\u0442\u0435\u0440\u043E\u043A\u043E\u043B\u0438\u0442\u0435. \u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u044B \u043F\u043E\u0447\u0442\u0438 \u043D\u0435 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u043B\u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u043F\u043E\u043A\u0430 \u0432 \u041A\u0438\u0442\u0430\u0435 \u0432 2002\u20142003 \u0433\u043E\u0434\u0430\u0445 \u043D\u0435 \u0431\u044B\u043B\u0430 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0432\u0441\u043F\u044B\u0448\u043A\u0430 \u0430\u0442\u0438\u043F\u0438\u0447\u043D\u043E\u0439 \u043F\u043D\u0435\u0432\u043C\u043E\u043D\u0438\u0438, \u0438\u043B\u0438 \u0442\u044F\u0436\u0451\u043B\u043E\u0433\u043E \u043E\u0441\u0442\u0440\u043E\u0433\u043E \u0440\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0441\u0438\u043D\u0434\u0440\u043E\u043C\u0430 (\u0422\u041E\u0420\u0421, SARS). \u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435 \u0431\u044B\u043B\u043E \u0432\u044B\u0437\u0432\u0430\u043D\u043E \u0432\u0438\u0440\u0443\u0441\u043E\u043C SARS-CoV. \u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0431\u043E\u043B\u0435\u0437\u043D\u044C \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u043B\u0430\u0441\u044C \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u044B, \u0432\u0441\u0435\u0433\u043E \u0437\u0430\u0431\u043E\u043B\u0435\u043B\u043E 8273 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, 775 \u0443\u043C\u0435\u0440\u043B\u043E (\u043B\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C 9,6 %). \u0412\u0438\u0440\u0443\u0441 MERS-CoV \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u043E\u0437\u0431\u0443\u0434\u0438\u0442\u0435\u043B\u0435\u043C \u0431\u043B\u0438\u0436\u043D\u0435\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0441\u0438\u043D\u0434\u0440\u043E\u043C\u0430 (MERS), \u043F\u0435\u0440\u0432\u044B\u0435 \u0441\u043B\u0443\u0447\u0430\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0431\u044B\u043B\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0432 2012 \u0433\u043E\u0434\u0443. \u0412 2015 \u0433\u043E\u0434\u0443 \u0432 \u042E\u0436\u043D\u043E\u0439 \u041A\u043E\u0440\u0435\u0435 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u0432\u0441\u043F\u044B\u0448\u043A\u0430 \u0431\u043B\u0438\u0436\u043D\u0435\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0441\u0438\u043D\u0434\u0440\u043E\u043C\u0430, \u0432 \u0445\u043E\u0434\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0437\u0430\u0431\u043E\u043B\u0435\u043B\u043E 183 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0443\u043C\u0435\u0440\u043B\u043E 33. \u0412 \u0434\u0435\u043A\u0430\u0431\u0440\u0435 2019 \u0433\u043E\u0434\u0430 \u0432 \u041A\u0438\u0442\u0430\u0435 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u0432\u0441\u043F\u044B\u0448\u043A\u0430 \u043F\u043D\u0435\u0432\u043C\u043E\u043D\u0438\u0438, \u0432\u044B\u0437\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0432\u0435\u0436\u0435\u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u043C \u0432\u0438\u0440\u0443\u0441\u043E\u043C SARS-CoV-2. \u0412\u0441\u043A\u043E\u0440\u0435 \u043E\u043D\u0430 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u043B\u0430\u0441\u044C \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0438\u0440\u0443\u0441\u0430: \u043A\u043E\u0433\u0434\u0430 \u043B\u044E\u0434\u0438 \u043D\u0430\u0447\u0430\u043B\u0438 \u0431\u043E\u043B\u0435\u0442\u044C COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0412\u0441\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043D\u0435\u0437\u0430\u043C\u0435\u0442\u043D\u043E. \u042D\u0442\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442 \u0432 \u043F\u043E\u043B\u044C\u0437\u0443 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u0436\u0435\u0441\u0442\u043A\u0438\u0445 \u043C\u0435\u0440 \u0434\u0430\u0436\u0435 \u043F\u0440\u0438 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u0435\u0434\u0438\u043D\u0438\u0447\u043D\u044B\u0445 \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0423\u0447\u0435\u043D\u044B\u0435 \u041A\u0438\u0442\u0430\u044F, \u0418\u0442\u0430\u043B\u0438\u0438 \u0438 \u0418\u0441\u043F\u0430\u043D\u0438\u0438 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u0434\u0440\u0443\u0433 \u043E\u0442 \u0434\u0440\u0443\u0433\u0430 \u043F\u0440\u0438\u0448\u043B\u0438 \u043A \u0432\u044B\u0432\u043E\u0434\u0443 \u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u0430 \u0432 \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u044F\u0445 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0430\u043D\u044C\u0448\u0435 \u043F\u0435\u0440\u0432\u044B\u0445 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u043B\u0443\u0447\u0430\u0435\u0432. \u0418 \u0435\u0441\u043B\u0438 \u041A\u0438\u0442\u0430\u0439 \u0438 \u0418\u0442\u0430\u043B\u0438\u044F \u0434\u0430\u044E\u0442 \u043A\u043E\u0441\u0432\u0435\u043D\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0430\u043D\u043E\u043C\u0430\u043B\u044C\u043D\u044B\u0445 \u0432\u0441\u043F\u044B\u0448\u043A\u0430\u0445 \u043F\u043D\u0435\u0432\u043C\u043E\u043D\u0438\u0438, \u0442\u043E \u0432 \u0418\u0441\u043F\u0430\u043D\u0438\u0438 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043F\u0440\u044F\u043C\u043E\u0435 \u2014 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u044D\u043A\u0441\u0433\u0443\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0420\u0430\u043D\u043D\u044F\u044F \u0446\u0438\u0440\u043A\u0443\u043B\u044F\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "3 \u043C\u0430\u0440\u0442\u0430 2020 \u0433\u043E\u0434\u0430 \u0438\u0437 \u0418\u0441\u043F\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u0448\u043B\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u044C, \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043D\u043E\u0433\u0438\u0435 \u043D\u0435 \u043F\u0440\u0438\u0434\u0430\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F. \u0421\u043E\u043E\u0431\u0449\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E \u0432 \u0441\u0442\u0440\u0430\u043D\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u043D\u0430 \u043F\u0435\u0440\u0432\u0430\u044F \u0441\u043C\u0435\u0440\u0442\u044C \u043E\u0442 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u0430, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u043C\u0435\u0442\u043E\u0434\u043E\u043C \u0440\u0435\u0442\u0440\u043E\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u0412\u043B\u0430\u0441\u0442\u0438 \u0412\u0430\u043B\u0435\u043D\u0441\u0438\u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043B\u0438, \u0447\u0442\u043E \u0435\u0449\u0435 13 \u0444\u0435\u0432\u0440\u0430\u043B\u044F \u043E\u0442 \u0442\u044F\u0436\u0435\u043B\u043E\u0439 \u043F\u043D\u0435\u0432\u043C\u043E\u043D\u0438\u0438 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u043C\u0435\u0440 \u043C\u0443\u0436\u0447\u0438\u043D\u0430 69 \u043B\u0435\u0442, \u0432\u0435\u0440\u043D\u0443\u0432\u0448\u0438\u0439\u0441\u044F \u0438\u0437 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u0432 \u041D\u0435\u043F\u0430\u043B. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0435 \u0432\u0441\u043A\u0440\u044B\u0442\u0438\u0435, \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u0441\u043B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u041C\u0438\u043D\u0437\u0434\u0440\u0430\u0432\u043E\u043C \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0435\u0432 \u043F\u043E\u0438\u0441\u043A\u0430 \u0437\u0430\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0445 27 \u0444\u0435\u0432\u0440\u0430\u043B\u044F, \u0434\u0430\u043B\u043E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043D\u0430 COVID-19. \u041A \u044D\u0442\u043E\u043C\u0443 \u043C\u043E\u043C\u0435\u043D\u0442\u0443 \u0432 \u0440\u0435\u0433\u0438\u043E\u043D\u0435 \u0412\u0430\u043B\u0435\u043D\u0441\u0438\u044F \u0447\u0438\u0441\u043B\u0438\u043B\u0438\u0441\u044C 19 \u0431\u043E\u043B\u044C\u043D\u044B\u0445. \u041D\u0430 27 \u043C\u0430\u0440\u0442\u0430 \u0438\u0445 \u0431\u044B\u043B\u043E \u0443\u0436\u0435 3,2 \u0442\u044B\u0441., 167 \u0443\u043C\u0435\u0440\u043B\u0438. \u0412 \u0418\u0442\u0430\u043B\u0438\u0438, \u0433\u0434\u0435 \u0442\u0430\u043A \u0438 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C, \u043E\u0442 \u043A\u043E\u0433\u043E \u0436\u0435 \u0437\u0430\u0440\u0430\u0437\u0438\u043B\u0441\u044F \u0441\u0430\u043C\u044B\u0439 \u043F\u0435\u0440\u0432\u044B\u0439 \u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0437\u043D\u043E\u0439 \u043F\u0430\u0446\u0438\u0435\u043D\u0442, 38-\u043B\u0435\u0442\u043D\u0438\u0439 \u041C\u0430\u0442\u0442\u0438\u0430 \u0438\u0437 \u041A\u043E\u0434\u043E\u043D\u044C\u043E, \u0441\u0430\u043C\u044B\u0435 \u0440\u0430\u0437\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u043D\u0430 \u0431\u043E\u043B\u0435\u0435 \u0440\u0430\u043D\u043D\u044E\u044E \u0446\u0438\u0440\u043A\u0443\u043B\u044F\u0446\u0438\u044E \u0432\u0438\u0440\u0443\u0441\u0430. \u0412\u0438\u0440\u0443\u0441\u043E\u043B\u043E\u0433\u0438 \u0438\u0437 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u041C\u0438\u043B\u0430\u043D\u0430 \u0438 \u043C\u0438\u043B\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0433\u043E\u0441\u043F\u0438\u0442\u0430\u043B\u044F \u0421\u0430\u043A\u043A\u043E \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0442, \u0447\u0442\u043E \u043A\u0430\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0435\u043D\u043E\u043C\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0421OVID-2019 \u0432 \u0418\u0442\u0430\u043B\u0438\u0438 \u0443\u0436\u0435 \u0432 \u043D\u043E\u044F\u0431\u0440\u0435. \u0421 \u044D\u0442\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u044E\u0442\u0441\u044F \u0434\u0430\u043D\u043D\u044B\u0435 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438: \u043D\u0435\u0442\u0438\u043F\u0438\u0447\u043D\u044B\u0435 \u0432\u0441\u043F\u044B\u0448\u043A\u0438 \u0442\u044F\u0436\u0435\u043B\u043E\u0439 \u043F\u043D\u0435\u0432\u043C\u043E\u043D\u0438\u0438 \u0432\u0440\u0430\u0447\u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u043B\u0438 \u0435\u0449\u0435 \u0432 \u043E\u043A\u0442\u044F\u0431\u0440\u0435. \u041D\u0430\u043A\u043E\u043D\u0435\u0446, \u0441\u0432\u0435\u0436\u0435\u0435 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u0432 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0438 \u0441 \u043E\u043F\u0440\u043E\u0441\u043E\u043C \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u0432 \u043D\u0430\u0434\u0435\u0436\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0443\u0436\u0435 20 \u0444\u0435\u0432\u0440\u0430\u043B\u044F, \u0432 \u0434\u0435\u043D\u044C \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0434\u0438\u0430\u0433\u043D\u043E\u0437\u0430 \u043F\u0435\u0440\u0432\u043E\u043C\u0443 \u0431\u043E\u043B\u044C\u043D\u043E\u043C\u0443, \u0432\u0438\u0440\u0443\u0441 \u0446\u0438\u0440\u043A\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043B \u0432 \u042E\u0436\u043D\u043E\u0439 \u041B\u043E\u043C\u0431\u0430\u0440\u0434\u0438\u0438. \u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u0435\u0437\u043D\u0438 \u0441\u0430\u043C\u043E\u0433\u043E \u041C\u0430\u0442\u0442\u0438\u0430 \u0438\u0437\u0443\u0447\u0430\u043B\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0444\u0438\u043B\u043E\u0433\u0435\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0438\u0440\u0443\u0441\u043D\u043E\u0433\u043E \u0433\u0435\u043D\u043E\u043C\u0430. \u0414\u0435\u043B\u043E \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0432\u0438\u0440\u0443\u0441 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043C\u0443\u0442\u0438\u0440\u0443\u0435\u0442 \u0438, \u0438\u0437\u0443\u0447\u0430\u044F \u0433\u0435\u043D\u043E\u043C \u0432\u0438\u0440\u0443\u0441\u043E\u0432, \u0432\u0437\u044F\u0442\u044B\u0445 \u0443 \u0440\u0430\u0437\u043D\u044B\u0445 \u0431\u043E\u043B\u044C\u043D\u044B\u0445 \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0430\u0445, \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0441\u043B\u0435\u0434\u0438\u0442\u044C \u0435\u0433\u043E \u044D\u0432\u043E\u043B\u044E\u0446\u0438\u044E \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0442\u0430\u043A, \u043A\u0430\u043A \u043B\u0438\u043D\u0433\u0432\u0438\u0441\u0442\u044B \u0438\u0437\u0443\u0447\u0430\u044E\u0442 \u044D\u0432\u043E\u043B\u044E\u0446\u0438\u044E \u044F\u0437\u044B\u043A\u043E\u0432. \u0421\u0443\u0434\u044F \u043F\u043E \u0432\u0441\u0435\u043C\u0443, \u0438\u043D\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u0432\u0448\u0438\u0439 \u041C\u0430\u0442\u0442\u0438\u0430 \u0432\u0438\u0440\u0443\u0441 \u0441\u0432\u044F\u0437\u0430\u043D \u0441 \u043F\u0435\u0440\u0432\u043E\u0439 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0432\u0441\u043F\u044B\u0448\u043A\u043E\u0439 \u044D\u0442\u043E\u0439 \u0438\u043D\u0444\u0435\u043A\u0446\u0438\u0438 \u0432 \u0415\u0432\u0440\u043E\u043F\u0435, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 19 \u044F\u043D\u0432\u0430\u0440\u044F \u0432 \u041C\u044E\u043D\u0445\u0435\u043D\u0435, \u043E\u0434\u043D\u0430\u043A\u043E \u0446\u0435\u043F\u043E\u0447\u043A\u0443 \u0437\u0430\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u043A \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0443 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0412 \u041A\u0438\u0442\u0430\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043B \u0432\u0441\u043F\u044B\u0448\u043A\u0443 \u0442\u043E\u0433\u0434\u0430 \u0435\u0449\u0435 \u043D\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0439 \u0431\u043E\u043B\u0435\u0437\u043D\u0438 \u043F\u0435\u0440\u0432\u044B\u043C, \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0430\u0442\u043E\u0439 \u043D\u0430\u0447\u0430\u043B\u0430 \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u0438 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F 1 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2019 \u0433\u043E\u0434\u0430, \u043A\u043E\u0433\u0434\u0430 \u0431\u044B\u043B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u043F\u0435\u0440\u0432\u044B\u0439 \u043F\u0430\u0446\u0438\u0435\u043D\u0442 \u0441 \u043D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u043C\u0438 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u0430\u043C\u0438. \u041F\u0440\u0430\u0432\u0434\u0430, South China Morning Post \u043F\u0438\u0441\u0430\u043B\u0430, \u0447\u0442\u043E \u043F\u0435\u0440\u0432\u044B\u0439 \u043F\u0430\u0446\u0438\u0435\u043D\u0442 \u0431\u044B\u043B \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D \u0435\u0449\u0435 17 \u043D\u043E\u044F\u0431\u0440\u044F, \u043F\u0440\u0438\u0447\u0435\u043C \u043E\u043D \u043D\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u00AB\u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u043C 0\u00BB \u2014 \u0442\u0435\u043C, \u043A\u0442\u043E \u0437\u0430\u0440\u0430\u0437\u0438\u043B\u0441\u044F \u0432\u0438\u0440\u0443\u0441\u043E\u043C \u043E\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0435\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0445\u043E\u0437\u044F\u0438\u043D\u043E\u043C. \u042D\u043F\u0438\u0434\u0435\u043C\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u041A\u0438\u0442\u0430\u044F \u043D\u0435 \u0441\u0442\u043E\u043B\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044B, \u043A\u0430\u043A \u0432 \u0415\u0432\u0440\u043E\u043F\u0435, \u0430 \u0434\u043E\u0432\u0435\u0440\u0438\u0435 \u043A \u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u043C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C \u043F\u043E\u0434\u0440\u044B\u0432\u0430\u0435\u0442 \u0442\u043E\u0442 \u0444\u0430\u043A\u0442, \u0447\u0442\u043E \u043C\u0435\u0441\u0442\u043D\u044B\u0435 \u0432\u043B\u0430\u0441\u0442\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 \u043E\u0442\u0440\u0438\u0446\u0430\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0432\u0438\u0440\u0443\u0441\u0430 \u043E\u0442 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u043A \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0443: \u043C\u043E\u043B, \u0432\u0441\u0435 \u0441\u043B\u0443\u0447\u0430\u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u044B \u0441 \u0437\u0430\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u0438\u0437 \u0440\u044B\u043D\u043A\u043E\u0432 \u0423\u0445\u0430\u043D\u044F. \u041E\u0434\u043D\u0430\u043A\u043E \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0438\u0437 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u041C\u0438\u043B\u0430\u043D\u0430, \u043E\u0441\u043D\u043E\u0432\u044B\u0432\u0430\u044F\u0441\u044C \u043D\u0430 \u0432\u0441\u0435 \u0442\u043E\u043C \u0436\u0435 \u043A\u0430\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0432\u0438\u0440\u0443\u0441\u043D\u043E\u0433\u043E \u0433\u0435\u043D\u043E\u043C\u0430, \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0442 \u0432 \u0441\u0432\u043E\u0435\u0439 \u0441\u0442\u0430\u0442\u044C\u0435 \u0432 Journal of Medical Virology, \u0447\u0442\u043E \u0432\u0438\u0440\u0443\u0441 \u0441\u0442\u0430\u0440\u0448\u0435 \u043D\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u0434\u0435\u043B\u044C. \u0418 \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u043A \u0432\u044B\u0432\u043E\u0434\u0443, \u0447\u0442\u043E \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0435 \u043E\u043A\u0442\u044F\u0431\u0440\u044F \u0438\u043B\u0438 \u043F\u0435\u0440\u0432\u043E\u0439 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0435 \u043D\u043E\u044F\u0431\u0440\u044F. \u0412\u0441\u0435 \u044D\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443\u044E\u0442, \u0447\u0442\u043E \u0432\u0438\u0440\u0443\u0441 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u044E \u0437\u0430\u0434\u043E\u043B\u0433\u043E \u0434\u043E \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u0432\u0438\u0434\u0438\u043C\u044B\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F. \u0412\u0441\u0435 \u0441\u0442\u0440\u0430\u043D\u044B, \u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044F \u041A\u0438\u0442\u0430\u0439, \u043C\u043E\u0433\u043B\u0438 \u0431\u044B \u0441\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u044E, \u0435\u0441\u043B\u0438 \u0431\u044B \u0437\u043D\u0430\u043B\u0438 \u043E\u0431 \u044D\u0442\u043E\u0439 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438. \u0426\u0438\u0440\u043A\u0443\u043B\u044F\u0446\u0438\u044E \u0432\u0438\u0440\u0443\u0441\u0430 \u0432 \u0418\u0441\u043F\u0430\u043D\u0438\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0442\u044C, \u0435\u0441\u043B\u0438 \u0441\u0447\u0438\u0442\u0430\u0442\u044C, \u0447\u0442\u043E \u0441\u043C\u0435\u0440\u0442\u044C \u043C\u0443\u0436\u0447\u0438\u043D\u044B \u0432 \u0412\u0430\u043B\u0435\u043D\u0441\u0438\u0438 13 \u0444\u0435\u0432\u0440\u0430\u043B\u044F \u0431\u044B\u043B\u0430 \u043F\u0435\u0440\u0432\u043E\u0439. \u041F\u043E \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0435 \u043B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u0441\u0445\u043E\u0434\u043E\u0432, \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435 \u043E\u0442 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043E\u0432 \u0434\u043E \u0441\u043C\u0435\u0440\u0442\u0438 \u0434\u043B\u0438\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0432\u043E\u0441\u0435\u043C\u044C \u0434\u043D\u0435\u0439, \u0438\u043D\u043A\u0443\u0431\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 \u2014 \u0434\u043E 14 \u0434\u043D\u0435\u0439, \u043F\u0440\u0438\u0447\u0435\u043C \u0437\u0430\u0440\u0430\u0436\u0430\u0442\u044C \u043C\u043E\u0433\u0443\u0442 \u0438 \u0431\u0435\u0441\u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043D\u044B\u0435 \u0431\u043E\u043B\u044C\u043D\u044B\u0435. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0438\u0441\u043F\u0430\u043D\u0441\u043A\u0438\u0439 \u043F\u0430\u0446\u0438\u0435\u043D\u0442 \u2116 1 \u043C\u043E\u0433 \u0437\u0430\u0440\u0430\u0437\u0438\u0442\u044C\u0441\u044F \u0435\u0449\u0435 \u0432 \u043A\u043E\u043D\u0446\u0435 \u044F\u043D\u0432\u0430\u0440\u044F. \u0412\u0441\u044E \u043F\u0435\u0440\u0432\u0443\u044E \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443 \u0444\u0435\u0432\u0440\u0430\u043B\u044F \u043E\u043D \u043C\u043E\u0433 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0442\u044C \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435, \u0442\u0430\u043A \u043A\u0430\u043A \u043D\u0435 \u0431\u044B\u043B \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u0438 \u0434\u0430\u0436\u0435 \u043F\u0440\u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0438 \u0435\u0433\u043E \u0432 \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0435 \u043D\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u043B\u0438\u0441\u044C \u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u043E\u0440\u043E\u0436\u043D\u043E\u0441\u0442\u0438, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 COVID-\u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430\u043C\u0438. \u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043F\u0435\u0440\u0432\u044B\u0439 \u0441\u043B\u0443\u0447\u0430\u0439 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u0430 \u0432 \u0418\u0441\u043F\u0430\u043D\u0438\u0438 \u0431\u044B\u043B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D 9 \u0444\u0435\u0432\u0440\u0430\u043B\u044F \u043D\u0430 \u041A\u0430\u043D\u0430\u0440\u0441\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445, \u0430 \u0432\u0442\u043E\u0440\u043E\u0439 \u2014 25 \u0444\u0435\u0432\u0440\u0430\u043B\u044F \u0432 \u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0435, \u043D\u043E \u043E\u0431\u0430 \u043A\u0430\u0441\u0430\u043B\u0438\u0441\u044C \u0442\u0435\u0445, \u043A\u0442\u043E \u043F\u0440\u0438\u0431\u044B\u043B \u0438\u0437-\u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u0430, \u0438\u0437 \u0418\u0442\u0430\u043B\u0438\u0438 \u0438 \u0424\u0440\u0430\u043D\u0446\u0438\u0438. \u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0447\u0438\u043A\u0430\u0445 \u0438\u0437-\u0437\u0430 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u0446\u0438\u0440\u043A\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0444\u0435\u0432\u0440\u0430\u043B\u044F, \u0445\u043E\u0442\u044F \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u043E\u043D\u044F\u0442\u043D\u043E, \u0447\u0442\u043E \u0443\u0436\u0435 \u0441 \u043D\u0430\u0447\u0430\u043B\u0430 \u044F\u043D\u0432\u0430\u0440\u044F \u0432 \u0441\u0442\u0440\u0430\u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u043B\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u0435\u0437\u043D\u0438. \u0421\u0445\u043E\u0434\u043D\u044B\u0439 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u043A \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C, \u043E\u0442\u0441\u043B\u0435\u0434\u0438\u0432 \u043F\u0443\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u0433\u043E, \u043A \u0441\u0447\u0430\u0441\u0442\u044C\u044E \u0432\u044B\u0436\u0438\u0432\u0448\u0435\u0433\u043E, \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u043E\u0433\u043E \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430. \u041E\u043D \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0441\u044F \u043A \u0432\u0440\u0430\u0447\u0443 14 \u0444\u0435\u0432\u0440\u0430\u043B\u044F, \u0437\u043D\u0430\u0447\u0438\u0442 \u043C\u043E\u0433 \u0437\u0430\u0440\u0430\u0437\u0438\u0442\u044C\u0441\u044F \u0432 \u0441\u0430\u043C\u043E\u043C \u043D\u0430\u0447\u0430\u043B\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 \u0438 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0442\u044C \u0438\u043D\u0444\u0435\u043A\u0446\u0438\u044E \u0435\u0449\u0435 \u0434\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043E\u0432. \u0414\u0438\u0430\u0433\u043D\u043E\u0437 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0443 \u0431\u044B\u043B \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E 20 \u0444\u0435\u0432\u0440\u0430\u043B\u044F, \u0438 \u0437\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043E\u043D \u0437\u0430\u0440\u0430\u0437\u0438\u043B \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432, \u0436\u0435\u043D\u0443 \u0438 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0441\u043E\u0441\u0435\u0434\u0435\u0439. \u0423\u0436\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043F\u0435\u0440\u0435\u0431\u043E\u043B\u0435\u043B\u0438 \u0432 \u044D\u0442\u043E \u0436\u0435 \u0432\u0440\u0435\u043C\u044F \u0431\u0435\u0441\u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043D\u043E, \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0432 \u0432\u0441\u043F\u044B\u0448\u043A\u0443. \u041E\u0448\u0438\u0431\u043A\u043E\u0439 \u0418\u0442\u0430\u043B\u0438\u0438 \u0441\u0442\u0430\u043B\u043E \u0442\u043E, \u0447\u0442\u043E \u0434\u043E \u0434\u0438\u0430\u0433\u043D\u043E\u0437\u0430 \u041C\u0430\u0442\u0442\u0438\u0430 \u0442\u0430\u043C \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438\u0431\u044B\u0432\u0430\u044E\u0449\u0438\u0445 \u0438\u0437-\u0437\u0430 \u0433\u0440\u0430\u043D\u0438\u0446\u044B. \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u043F\u0435\u0440\u0432\u043E\u0439, \u0435\u0449\u0435 31 \u044F\u043D\u0432\u0430\u0440\u044F, \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0430 \u0430\u0432\u0438\u0430\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441 \u041A\u0438\u0442\u0430\u0435\u043C, \u043D\u043E \u044D\u0442\u043E \u043C\u0435\u0440\u0430, \u043A\u0430\u043A \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u043E, \u043D\u0435 \u043E\u043A\u0430\u0437\u0430\u043B\u0430 \u043D\u0430 \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u044E \u043D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F: \u0432\u0438\u0440\u0443\u0441 \u0443\u0436\u0435 \u0431\u044B\u043B \u0432 \u0415\u0432\u0440\u043E\u043F\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u041F\u043E\u0438\u0441\u043A \u0438\u043C\u043C\u0443\u043D\u0438\u0442\u0435\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u0430\u0436\u043D\u044B \u044D\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0435? \u041E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0442\u0430\u043C, \u0433\u0434\u0435 \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u043F\u043E\u043A\u0430 \u043C\u0430\u043B\u043E\u0437\u0430\u043C\u0435\u0442\u043D\u0430 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0441\u0442\u0440\u0430\u043D\u0430\u0445 \u0410\u0437\u0438\u0438 \u0438 \u0410\u0444\u0440\u0438\u043A\u0438 \u0438\u043B\u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u0445 \u0420\u043E\u0441\u0441\u0438\u0438). \u0421\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0440\u0435\u0430\u043A\u0446\u0438\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u043D\u0435 \u043F\u043E\u0439\u0442\u0438 \u043F\u043E \u043F\u0443\u0442\u0438 \u0418\u0442\u0430\u043B\u0438\u0438, \u0418\u0441\u043F\u0430\u043D\u0438\u0438 \u0438 \u0421\u0428\u0410, \u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0441\u0442\u0435\u043F\u0435\u043D\u044C \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445, \u043A\u0430\u043A \u0432 \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u0438, \u0447\u0442\u043E\u0431\u044B \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0433\u043E\u0441\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u0445, \u043A\u0442\u043E \u0432 \u044D\u0442\u043E\u043C \u043D\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044F. \u041D\u043E \u0435\u0449\u0435 \u0432\u0430\u0436\u043D\u0435\u0435 \u0434\u0440\u0443\u0433\u043E\u0435. \u0424\u0430\u043A\u0442 \u043D\u0435\u0437\u0430\u043C\u0435\u0442\u043D\u043E\u0433\u043E \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0431\u0435\u0441\u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043D\u044B\u043C\u0438 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0447\u0438\u0441\u043B\u043E \u043F\u0435\u0440\u0435\u0431\u043E\u043B\u0435\u0432\u0448\u0438\u0445 \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u0442\u0440\u0430\u043D\u044B, \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0448\u0438\u0435 \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u044E, \u043C\u043E\u0433\u0443\u0442 \u043E\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u0431\u043B\u0438\u0436\u0435 \u043A \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u0438\u043C\u043C\u0443\u043D\u0438\u0442\u0435\u0442\u0443, \u0447\u0435\u043C \u043C\u044B \u0434\u0443\u043C\u0430\u0435\u043C. 16 \u043C\u0430\u0440\u0442\u0430 \u0432 \u0436\u0443\u0440\u043D\u0430\u043B\u0435 Science \u0432\u044B\u0448\u043B\u0430 \u0441\u0442\u0430\u0442\u044C\u044F \u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0445 \u0443\u0447\u0435\u043D\u044B\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u043E\u0432\u0435\u043B\u0438 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u043D\u043E\u0439 \u0438\u043D\u0444\u0435\u043A\u0446\u0438\u0438 \u0432 \u041A\u041D\u0420 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0445 \u043F\u043E\u0442\u043E\u043A\u0430\u0445. \u041E\u043D\u0438 \u0441\u0440\u0430\u0432\u043D\u0438\u043B\u0438 \u0434\u0432\u0430 \u0434\u043D\u044F \u0442\u0435\u0447\u0435\u043D\u0438\u044F \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u0438, \u0434\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439 \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0438 \u0441\u0442\u0440\u0430\u043D\u044B \u0438 \u043F\u043E\u0441\u043B\u0435, \u0438 \u0437\u0430\u043A\u043B\u044E\u0447\u0438\u043B\u0438, \u0447\u0442\u043E 86% \u0432\u0441\u0435\u0445 \u0437\u0430\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B\u0438 \u043D\u0435\u0437\u0430\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0438\u0437-\u0437\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0438\u043B\u0438 \u043E\u0447\u0435\u043D\u044C \u0441\u043B\u0430\u0431\u043E\u0439 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043E\u0432. \u041F\u0440\u0438\u0447\u0435\u043C \u0431\u043E\u043B\u044C\u043D\u043E\u0439 \u0431\u0435\u0437 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043E\u0432 \u0431\u044B\u043B \u0432\u0441\u0435\u0433\u043E \u043B\u0438\u0448\u044C \u0432\u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443 \u043C\u0435\u043D\u0435\u0435 \u0437\u0430\u0440\u0430\u0437\u043D\u044B\u043C. \u0421 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u044D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0431\u0435\u0437 \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u044E \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C. \u0421 \u0434\u0440\u0443\u0433\u043E\u0439 \u2014 \u0447\u0442\u043E \u043B\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0438\u0440\u0443\u0441\u0430 \u0432\u0441\u0435-\u0442\u0430\u043A\u0438 \u043D\u0435 9%, \u043A\u0430\u043A \u0432 \u0418\u0442\u0430\u043B\u0438\u0438, \u0430 \u043E\u043A\u043E\u043B\u043E 0,4%, \u043A\u0430\u043A \u0431\u044B\u043B\u0430 \u0432 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043C\u043E\u043C\u0435\u043D\u0442 \u0432 \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u0438 (\u0447\u0442\u043E \u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0432 \u0434\u0435\u0441\u044F\u0442\u044C \u0440\u0430\u0437 \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u043F\u0440\u0438 \u043E\u0431\u044B\u0447\u043D\u043E\u043C \u0433\u0440\u0438\u043F\u043F\u0435). \u0422\u0443 \u0436\u0435 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u043B \u0432 \u0441\u0432\u043E\u0435\u043C \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0438 \u0438 \u0431\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0438\u0439 \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u043E\u043B\u043E\u0433 \u041D\u0438\u043B \u0424\u0435\u0440\u0433\u044E\u0441\u043E\u043D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0410 \u0435\u0441\u043B\u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435 \u043F\u0435\u0440\u0435\u0431\u043E\u043B\u0435\u0432\u0448\u0438\u0445 \u0432\u0435\u0440\u043D\u043E, \u0442\u043E \u0438\u0445 \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u044F\u0432\u0438\u0442\u044C \u043F\u043E \u043D\u0430\u043B\u0438\u0447\u0438\u044E \u0430\u043D\u0442\u0438\u0442\u0435\u043B \u0432 \u043A\u0440\u043E\u0432\u0438. \u041F\u043E\u043A\u0430 \u0442\u0430\u043A\u043E\u0433\u043E \u0442\u0435\u0441\u0442\u0430 \u043D\u0435\u0442 (\u0445\u043E\u0442\u044F, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0435\u0433\u043E \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \u0432\u043E\u0442-\u0432\u043E\u0442 \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0432 \u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u0438), \u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u0435\u0433\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F, \u043F\u0435\u0440\u0435\u0431\u043E\u043B\u0435\u0432\u0448\u0438\u043C, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u043A\u0430\u0440\u0430\u043D\u0442\u0438\u043D. \u0415\u0441\u043B\u0438, \u043A\u043E\u043D\u0435\u0447\u043D\u043E, \u0438\u043C\u043C\u0443\u043D\u0438\u0442\u0435\u0442 \u043A \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u0443 \u043E\u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u044B\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u041F\u0440\u043E\u0444\u0438\u043B\u0430\u043A\u0442\u0438\u043A\u0430 \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043C\u043E\u0439\u0442\u0435 \u0440\u0443\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u0421\u043E\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044E \u0432 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043C\u0435\u0441\u0442\u0430\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-card", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u041F\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438, \u043D\u0435 \u0442\u0440\u043E\u0433\u0430\u0439\u0442\u0435 \u0440\u0443\u043A\u0430\u043C\u0438 \u0433\u043B\u0430\u0437\u0430, \u043D\u043E\u0441 \u0438 \u0440\u043E\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u0421\u043E\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0440\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0439 \u0433\u0438\u0433\u0438\u0435\u043D\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u041F\u0440\u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B, \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u043A\u0430\u0448\u043B\u044F \u0438 \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0435\u043D\u0438\u0438 \u0434\u044B\u0445\u0430\u043D\u0438\u044F \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u0437\u0430 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043E\u043C\u043E\u0449\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-card", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u0421\u043B\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043D\u043E\u0432\u0435\u0439\u0448\u0435\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0439\u0442\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u043B\u0438\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u0414\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0441 \u043D\u043E\u0432\u043E\u0441\u0442\u044F\u043C\u0438 \u043E \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442\u0430\u0445 \u041C\u0438\u043D\u0437\u0434\u0440\u0430\u0432\u0430 \u0420\u043E\u0441\u0441\u0438\u0438, \u0420\u043E\u0441\u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0430\u0434\u0437\u043E\u0440\u0430 \u0438 \u0412\u0441\u0435\u043C\u0438\u0440\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0434\u0440\u0430\u0432\u043E\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F. \u041D\u0435 \u0434\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u043D\u0435\u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C \u0438 \u043D\u0435 \u043F\u043E\u0434\u0434\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u0430\u043D\u0438\u043A\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-card", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u043B\u0438\u043D\u0438\u044F COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "8 800 555 3 535");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-card", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u043B\u0438\u043D\u0438\u044F \u041C\u0438\u043D\u0437\u0434\u0440\u0430\u0432\u0430 \u0420\u043E\u0441\u0441\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "8 800 200 0 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentPrevention);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"]], styles: [".main[_ngcontent-%COMP%] {\r\n    padding-top: 64px;\r\n    height: 100vh;\r\n}\r\n.nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0; \r\n    width: 50px;\r\n    min-width: 24px;\r\n    z-index: 4;   \r\n}\r\n@media screen and (min-width: 1500px) {\r\n    .nav[_ngcontent-%COMP%] {\r\n        width: 7%;\r\n    }\r\n    .nav[_ngcontent-%COMP%]   .nav-cont[_ngcontent-%COMP%] {\r\n        padding: 10px 5px 0 5px;\r\n        writing-mode: horizontal-tb;\r\n        margin-top: 10%;\r\n        margin-bottom: 20%;\r\n        text-align: center;\r\n    }\r\n    \r\n}\r\n.nav-conainer[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n    margin: auto 0;\r\n}\r\n.nav-cont[_ngcontent-%COMP%] {\r\n    padding: 10px 0 0 5px;\r\n    margin-top: 10%;\r\n    margin-bottom: 20%;\r\n    display: block;\r\n    width: 100%;\r\n    height: 25%;\r\n    background-color: white;\r\n    writing-mode: vertical-lr;\r\n    -webkit-text-orientation: upright;\r\n            text-orientation: upright;\r\n    font-size: 1.7vh;\r\n    border-radius: 0 8px 8px 0;\r\n    box-shadow: 2px 4px 2px -2px rgba(0, 0, 0, 0.2),2px 2px 2px 2px rgba(0, 0, 0, 0.14),2px 2px 6px 2px rgba(0, 0, 0, 0.12);\r\n    transition: 0.2s background-color;\r\n}\r\n#target[_ngcontent-%COMP%] {\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    \r\n}\r\n.hidden-hr[_ngcontent-%COMP%] {\r\n        border: none;\r\n        margin: 0;\r\n        padding: 0;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    max-width: 1350px;\r\n    height: 100%;\r\n    align-items: flex-end;\r\n}\r\n.main-h1[_ngcontent-%COMP%] {\r\n    padding-bottom: 64px;\r\n    font-size: 84px;\r\n    line-height: 90px;\r\n    text-align: center;\r\n    color: #fff;    \r\n}\r\n#my-home-scrollbar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n.main-content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-color: #d6dbfd;\r\n}\r\n.content[_ngcontent-%COMP%] { \r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    max-width: 1350px;\r\n    background-color: #fafafa;\r\n}\r\n.first-wallpaper[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-image: url('covid19.jpg');\r\n    background-size: cover;\r\n}\r\n.wallpaper-mask[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(359.68deg,rgba(78,56,117,.6) -.82%,rgba(79,57,118,0) 77.66%);\r\n}\r\n.concept-content[_ngcontent-%COMP%] {\r\n    margin: 0 30px;\r\n}\r\n.concept-header[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n}\r\n.content-h1[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 24px;\r\n    line-height: 52px;\r\n    font-size: 48px;\r\n}\r\n.content-h2[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 24px;\r\n}\r\n.content-p[_ngcontent-%COMP%] {\r\n    margin-right: 20%;\r\n    padding: 24px 0 24px 24px;\r\n    font-size: 18px;\r\n    line-height: 32px;\r\n}\r\n.concept-content[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.concept-main-body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.concept-main-body-text[_ngcontent-%COMP%] {\r\n    \r\n    width: 70%\r\n}\r\n.concept-main-body-img[_ngcontent-%COMP%] {\r\n    \r\n    width: 30%\r\n}\r\n.cov-img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-image: url('2019-nCoV.png');\r\n    background-size: cover;\r\n}\r\n.history-content[_ngcontent-%COMP%] {\r\n    margin: 0 30px;\r\n}\r\n.history-header[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n}\r\n.history-main-body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.history-main-body-text[_ngcontent-%COMP%] {\r\n    width: 70%\r\n}\r\n.prevention-content[_ngcontent-%COMP%] {\r\n    margin: 0 30px;\r\n}\r\n.hr[_ngcontent-%COMP%] {\r\n    margin: 0 0 50px 0;\r\n}\r\n.prevention-header[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n}\r\n.cards[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.prevention-cards-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.cards-board[_ngcontent-%COMP%]  {\r\n    \r\n    padding-bottom: 30px;\r\n    position: relative;\r\n    display: grid;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));\r\n    grid-template-rows: minmax(150px, 200px);\r\n    grid-auto-flow: dense;\r\n    grid-gap: 10px;\r\n}\r\n.prevention-card[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    place-items: center;\r\n    text-align: center;\r\n    transition: 0.5s;\r\n    font-family: inherit;\r\n    font-size: 16px;\r\n}\r\n.popup-prevention[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 30%;\r\n    background: white;\r\n    box-shadow: 2px 4px 2px -2px rgba(0, 0, 0, 0.2),2px 2px 2px 2px rgba(0, 0, 0, 0.24),2px 2px 6px 2px rgba(0, 0, 0, 0.32);\r\n    border-radius: 10px;\r\n    z-index: 3;\r\n    opacity: 0;\r\n    visibility: visible;\r\n    transition: 0.8s opacity, 0.8s visibility;\r\n}\r\n.popup-prevention-p[_ngcontent-%COMP%] {\r\n    padding: 32px;\r\n    \r\n    font-size: 18px;\r\n    line-height: 20px\r\n}\r\n@media screen and (min-width: 1600px) {\r\n    .popup-prevention-p[_ngcontent-%COMP%] {    \r\n        font-size: 24px;\r\n        line-height: 28px;\r\n    }\r\n    .nav[_ngcontent-%COMP%] {\r\n        width: 7%;\r\n    }\r\n}\r\n.hotline-conteiner[_ngcontent-%COMP%] {\r\n    padding-bottom: 100px;\r\n}\r\n.hotline-header[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n}\r\n.hotline-content[_ngcontent-%COMP%] {\r\n    padding-bottom: 20px;\r\n}\r\n.hotline-card-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.hotline-card[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n    width: 40%;\r\n}\r\n.hotline-card-header[_ngcontent-%COMP%] {\r\n    color: rgba(0, 0, 0, 0.7);\r\n    font-size: 12px;\r\n    margin-bottom: 5px;\r\n}\r\n.hotline-card-text[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    \r\n}\r\n.prevention-card[_ngcontent-%COMP%]:hover {\r\n    background-color: #3f51b5;\r\n}\r\n.prevention-card[_ngcontent-%COMP%]:nth-child(1) {\r\n    grid-column: span 2;\r\n    grid-row: span 1;\r\n}\r\n.prevention-card[_ngcontent-%COMP%]:nth-child(2) {\r\n    grid-column: span 1;\r\n    grid-row: span 2;\r\n}\r\n.prevention-card[_ngcontent-%COMP%]:nth-child(3) {\r\n    grid-column: span 1;\r\n    grid-row: span 2;\r\n}\r\n.prevention-card[_ngcontent-%COMP%]:nth-child(5) {\r\n    grid-column: span 2;\r\n    grid-row: span 1;\r\n}\r\n.prevention-card[_ngcontent-%COMP%]:nth-child(6) {\r\n    grid-column: span 3;\r\n    grid-row: span 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QiwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O0FBRUo7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQix1SEFBdUg7SUFDdkgsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTs7QUFFaEI7QUFDQTtRQUNRLFlBQVk7UUFDWixTQUFTO1FBQ1QsVUFBVTtBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixvQ0FBaUQ7SUFDakQsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdGQUF3RjtBQUM1RjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7O0lBRUk7QUFDSjtBQUNBOztJQUVJO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWixzQ0FBbUQ7SUFDbkQsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWiwwREFBMEQ7SUFDMUQsd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHVIQUF1SDtJQUN2SCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDO0FBRUE7SUFDSSxhQUFhOztJQUViLGVBQWU7SUFDZjtBQUNKO0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ubmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI0cHg7XHJcbiAgICB6LWluZGV4OiA0OyAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgLm5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDclO1xyXG4gICAgfVxyXG4gICAgLm5hdiAubmF2LWNvbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDAgNXB4O1xyXG4gICAgICAgIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5uYXYtY29uYWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogYXV0byAwO1xyXG59XHJcbi5uYXYtY29udCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxLjd2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMnB4IDJweCA2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuI3RhcmdldCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuLmhpZGRlbi1ociB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLm1haW4taDEge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XHJcbiAgICBmb250LXNpemU6IDg0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogOTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmOyAgICBcclxufVxyXG4jbXktaG9tZS1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkYmZkO1xyXG59XHJcbi5jb250ZW50IHsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG4uZmlyc3Qtd2FsbHBhcGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1nL2NvdmlkMTkuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLndhbGxwYXBlci1tYXNrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM1OS42OGRlZyxyZ2JhKDc4LDU2LDExNywuNikgLS44MiUscmdiYSg3OSw1NywxMTgsMCkgNzcuNjYlKTtcclxufVxyXG4uY29uY2VwdC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCAzMHB4O1xyXG59XHJcbi5jb25jZXB0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuLmNvbnRlbnQtaDEge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcbi5jb250ZW50LWgyIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDI0cHg7XHJcbn1cclxuLmNvbnRlbnQtcCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgIHBhZGRpbmc6IDI0cHggMCAyNHB4IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxufVxyXG4uY29uY2VwdC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbmNlcHQtbWFpbi1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNvbmNlcHQtbWFpbi1ib2R5LXRleHQge1xyXG4gICAgXHJcbiAgICB3aWR0aDogNzAlXHJcbn1cclxuLmNvbmNlcHQtbWFpbi1ib2R5LWltZyB7XHJcbiAgICBcclxuICAgIHdpZHRoOiAzMCVcclxufVxyXG4uY292LWltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pbWcvMjAxOS1uQ29WLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5oaXN0b3J5LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIDMwcHg7XHJcbn1cclxuLmhpc3RvcnktaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG4uaGlzdG9yeS1tYWluLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaGlzdG9yeS1tYWluLWJvZHktdGV4dCB7XHJcbiAgICB3aWR0aDogNzAlXHJcbn1cclxuLnByZXZlbnRpb24tY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxufVxyXG4uaHIge1xyXG4gICAgbWFyZ2luOiAwIDAgNTBweCAwO1xyXG59XHJcbi5wcmV2ZW50aW9uLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuLmNhcmRzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJldmVudGlvbi1jYXJkcy1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2FyZHMtYm9hcmQgIHtcclxuICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNTAlLCAxZnIpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDE1MHB4LCAyMDBweCk7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxufVxyXG4ucHJldmVudGlvbi1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wb3B1cC1wcmV2ZW50aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDJweCAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpLDJweCAycHggNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRyYW5zaXRpb246IDAuOHMgb3BhY2l0eSwgMC44cyB2aXNpYmlsaXR5O1xyXG59XHJcblxyXG4ucG9wdXAtcHJldmVudGlvbi1wIHtcclxuICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgLnBvcHVwLXByZXZlbnRpb24tcCB7ICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIH1cclxuICAgIC5uYXYge1xyXG4gICAgICAgIHdpZHRoOiA3JTtcclxuICAgIH1cclxufVxyXG4uaG90bGluZS1jb250ZWluZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5ob3RsaW5lLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuLmhvdGxpbmUtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uaG90bGluZS1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmhvdGxpbmUtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcbi5ob3RsaW5lLWNhcmQtaGVhZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmhvdGxpbmUtY2FyZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIFxyXG59XHJcbi5wcmV2ZW50aW9uLWNhcmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxufVxyXG4ucHJldmVudGlvbi1jYXJkOm50aC1jaGlsZCgxKSB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gMTtcclxufVxyXG4ucHJldmVudGlvbi1jYXJkOm50aC1jaGlsZCgyKSB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcclxufVxyXG4ucHJldmVudGlvbi1jYXJkOm50aC1jaGlsZCgzKSB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcclxufVxyXG4ucHJldmVudGlvbi1jYXJkOm50aC1jaGlsZCg1KSB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gMTtcclxufVxyXG4ucHJldmVudGlvbi1jYXJkOm50aC1jaGlsZCg2KSB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gMTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/prevention.json":
/*!**************************************!*\
  !*** ./src/app/home/prevention.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"text\":\"Всегда мойте руки: когда приходите на работу или возвращаетесь домой. Для профилактики также подойдут влажные салфетки или дезинфицирующие растворы.\"},{\"id\":\"2\",\"text\":\"Держитесь от людей на расстоянии как минимум 1.5 метра, особенно если у них кашель, насморк и повышенная температура. Избегайте ненужных поездок и не ходите в места массового скопления людей.\"},{\"id\":\"3\",\"text\":\"Не подносите руки к носу и глазам. Быстрее всего вирус попадает в организм через слизистую оболочку. Когда чихаете всегда прикрывайтесь платком.\"},{\"id\":\"4\",\"text\":\"При кашле и чихании прикрывайте рот и нос салфеткой или сгибом локтя; сразу выкидывайте салфетку в контейнер для мусора с крышкой и обрабатывайте руки спиртосодержащим антисептиком или мойте их водой с мылом.\"},{\"id\":\"5\",\"text\":\"Если вы посещали районы Китая, где регистрируется 2019-nCoV, или тесно общались с кем-то, у кого после поездки из Китая наблюдаются симптомы респираторного заболевания, сообщите об этом медицинскому работнику.\"},{\"id\":\"6\",\"text\":\"Следите за новейшей информацией о COVID-19. Выполняйте рекомендации специалистов, центральных и местных органов общественного здравоохранения, а также организации, в которой вы работаете, по защите себя и окружающих от COVID-19.\"}]");

/***/ }),

/***/ "./src/app/main-content/main-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-content/main-content.component.ts ***!
  \********************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_df_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/df.json */ "./src/app/df.json");
var src_app_df_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/df.json */ "./src/app/df.json", 1);
/* harmony import */ var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/df_r.json */ "./src/app/df_r.json");
var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/df_r.json */ "./src/app/df_r.json", 1);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");
/* harmony import */ var src_app_prem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/prem */ "./src/app/prem.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../out-graph/out-graph.component */ "./src/app/out-graph/out-graph.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

















function MainContentComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContentComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return [ctx_r15.selectedCountry = "", ctx_r15.update()]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainContentComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041C\u0435\u0441\u0442\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainContentComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r17.num, " ");
} }
function MainContentComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0442\u0440\u0430\u043D\u0430, \u0433\u043E\u0440\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainContentComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r18.country, " ");
} }
function MainContentComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0445");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainContentComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r19.confirmed, " ");
} }
function MainContentComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u043C\u0435\u0440\u0442\u0435\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainContentComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.deaths, " ");
} }
function MainContentComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0432\u0448\u0438\u0445");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainContentComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r21.cured, " ");
} }
function MainContentComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u0441\u043C\u0435\u0440\u0442\u043D\u043E\u0441\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainContentComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22.death_per, " ");
} }
function MainContentComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContentComponent_tr_37_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const row_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return row_r23 === ctx_r24.chosenitem ? [ctx_r24.chosenitem = null, ctx_r24.params.setParams(ctx_r24.chosenitem)] : [ctx_r24.chosenitem = row_r23, ctx_r24.params.setParams(ctx_r24.chosenitem), ctx_r24.scroll()]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-expanded-row", ctx_r13.chosenitem === row_r23)("active", row_r23 === ctx_r13.chosenitem);
} }
function MainContentComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 42);
} }
class item {
}
class MainContentComponent {
    constructor(params) {
        this.params = params;
        this.displayedColumns = ['num', 'country', 'confirmed', 'deaths', 'cured', 'death_per'];
        this.items = src_app_df_json__WEBPACK_IMPORTED_MODULE_1__;
        this.items_w = this.items;
        this.chosenitem = this.items[0];
    }
    ngAfterViewInit() {
        smooth_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"].init(document.querySelector('#my-scrollbar'));
        this.scrollbarM = smooth_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"].init(document.querySelector('#main-content-scrollbar'));
        this.hrel = document.getElementById('graphs');
    }
    ;
    sortData(sort) {
        console.log("sortData");
        const s_data = this.items.slice();
        if (!sort.active || sort.direction === '') {
            this.items = s_data;
            return;
        }
        this.items_w = s_data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'num': return compare(a.num, b.num, isAsc);
                case 'country': return compare(a.country, b.country, isAsc);
                case 'confirmed': return compare(a.confirmed, b.confirmed, isAsc);
                case 'deaths': return compare(a.deaths, b.deaths, isAsc);
                case 'cured': return compare(a.cured, b.cured, isAsc);
                case 'death_per': return compare(a.death_per, b.death_per, isAsc);
                default: return 0;
            }
        });
    }
    switchtor() {
        console.log("switchtor");
        this.items = src_app_df_r_json__WEBPACK_IMPORTED_MODULE_2__;
        this.items_w = this.items;
        this.chosenitem = this.items[0];
        this.params.setParams(this.chosenitem);
    }
    switchtow() {
        console.log("stirchtow");
        this.items = src_app_df_json__WEBPACK_IMPORTED_MODULE_1__;
        this.items_w = this.items;
        this.chosenitem = this.items[0];
        this.params.setParams(this.chosenitem);
    }
    update() {
        console.log("update");
        if (this.selectedCountry != '') {
            this.items_w = [];
            for (let dat of this.items) {
                let cont = dat.country;
                if (cont.match(this.selectedCountry)) {
                    this.items_w.push(dat);
                }
            }
        }
        else {
            this.items_w = [];
            this.items_w = this.items;
        }
    }
    scroll() {
        this.scrollbarM.scrollIntoView(this.hrel);
    }
}
MainContentComponent.ɵfac = function MainContentComponent_Factory(t) { return new (t || MainContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_prem__WEBPACK_IMPORTED_MODULE_4__["ParamsModel"])); };
MainContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainContentComponent, selectors: [["app-main-content"]], decls: 42, vars: 7, consts: [[1, "main"], [1, "main-content-stat"], ["id", "main-content-scrollbar"], [1, "main-content"], [1, "mat-drawer-header"], [1, "search-bar"], [1, "search-bar-border"], [1, "example-full-width"], ["matInput", "", "color", "basic", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["value", "world", 1, "dashboard_buttons"], ["value", "world", "id", "but_ch", 3, "click"], ["value", "russia", "id", "but_ch", 3, "click"], ["id", "my-scrollbar"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 3, "dataSource", "matSortChange"], ["matColumnDef", "num"], ["mat-header-cell", "", "mat-sort-header", "num", 4, "matHeaderCellDef"], ["class", "example-element-", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "country"], ["mat-header-cell", "", "mat-sort-header", "country", "style", "text-align: center", 4, "matHeaderCellDef"], ["matColumnDef", "confirmed"], ["mat-header-cell", "", "mat-sort-header", "confirmed", 4, "matHeaderCellDef"], ["matColumnDef", "deaths"], ["mat-header-cell", "", "mat-sort-header", "deaths", 4, "matHeaderCellDef"], ["matColumnDef", "cured"], ["mat-header-cell", "", "mat-sort-header", "cured", 4, "matHeaderCellDef"], ["matColumnDef", "death_per"], ["mat-header-cell", "", "mat-sort-header", "death_per", 4, "matHeaderCellDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "active", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["id", "graphs", 1, "hidden-hr-main"], [1, "graphs-content"], [3, "parentData"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "num"], ["mat-cell", "", 1, "example-element-"], ["mat-header-cell", "", "mat-sort-header", "country", 2, "text-align", "center"], ["mat-header-cell", "", "mat-sort-header", "confirmed"], ["mat-header-cell", "", "mat-sort-header", "deaths"], ["mat-header-cell", "", "mat-sort-header", "cured"], ["mat-header-cell", "", "mat-sort-header", "death_per"], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-header-row", ""]], template: function MainContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u043E\u0438\u0441\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainContentComponent_Template_input_ngModelChange_10_listener($event) { return ctx.selectedCountry = $event; })("ngModelChange", function MainContentComponent_Template_input_ngModelChange_10_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainContentComponent_button_11_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-button-toggle-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-button-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContentComponent_Template_mat_button_toggle_click_13_listener() { return ctx.switchtow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041C\u0438\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-button-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContentComponent_Template_mat_button_toggle_click_15_listener() { return ctx.switchtor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0420\u0424");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function MainContentComponent_Template_table_matSortChange_18_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainContentComponent_th_20_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MainContentComponent_td_21_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MainContentComponent_th_23_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MainContentComponent_td_24_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MainContentComponent_th_26_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MainContentComponent_td_27_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MainContentComponent_th_29_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MainContentComponent_td_30_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainContentComponent_th_32_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainContentComponent_td_33_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MainContentComponent_th_35_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MainContentComponent_td_36_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MainContentComponent_tr_37_Template, 1, 4, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MainContentComponent_tr_38_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-out-graph", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.items_w);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.params.getParams());
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_13__["OutGraphComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"]], styles: [".main[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    \r\n    padding-top: 64px;\r\n    background-color: #d6dbfd;\r\n}\r\n.main-content-stat[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n[_nghost-%COMP%]     .mat-drawer-backdrop {\r\n    position: relative !important; \r\n}\r\n.main-content[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 1350px;\r\n}\r\n#my-scrollbar[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  overflow: auto;\r\n  border-bottom-right-radius: 10px;\r\n  border-bottom-left-radius: 10px;\r\n  box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n#main-content-scrollbar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\nmat-drawer-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    display: block;\r\n}\r\nmat-drawer-conten[_ngcontent-%COMP%] {\r\n   min-width: 500px;\r\n   height: 100%;\r\n}\r\n.mat-drawer-header[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    height: 100%;\r\n    width: 95%;\r\n    border-radius: 15px;\r\n    box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n.graphs-content[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    height: 100%;\r\n    width: 95%;\r\n}\r\n[_nghost-%COMP%]     .mat-drawer-inner-container {   \r\n    overflow: hidden !important;\r\n}\r\n.search-bar[_ngcontent-%COMP%] {\r\n    width: 98%;\r\n    padding: 1%;\r\n    \r\n}\r\n.example-full-width[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    bottom: 0;\r\n}\r\n.search-bar-border[_ngcontent-%COMP%] {\r\n    background-color: #e0e0e0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    vertical-align: bottom;\r\n    \r\n    height: 50px;\r\n}\r\n.dashboard_buttons[_ngcontent-%COMP%] {\r\n    border-left: 0!important;\r\n    border-right: 0!important;\r\n    height: 80px; \r\n    display: flex;\r\n}\r\n#but_ch[_ngcontent-%COMP%] {\r\n    width: 100%; \r\n    height: 100%; \r\n    font-size: 22px;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\nmat-button-toggle-group[_ngcontent-%COMP%] {\r\n    border-radius: 0!important;\r\n}\r\nth.mat-header-cell[_ngcontent-%COMP%] {\r\n    font-size: .8vw;\r\n    line-height: 2vh;\r\n    cursor: pointer;\r\n\r\n}\r\n.mat-cell[_ngcontent-%COMP%] {\r\n    font-size: .8vw;\r\n    line-height: 2vh;\r\n    cursor:default;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: left;\r\n  \r\n}\r\ntable[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\r\n\r\n}\r\ntr.mat-row[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(0,0,0,.07);\r\n}\r\ntr.mat-row[_ngcontent-%COMP%]:active {\r\n    background-color: rgba(0,0,0,.38)!important;\r\n}\r\ntr.mat-row.active[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #e0e0e0;\r\n}\r\n.hidden-hr-main[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n    border: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTs7SUFFYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixzSEFBc0g7QUFDeEg7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLFlBQVk7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHNIQUFzSDtBQUMxSDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7O0lBRXRCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlOztBQUVuQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDJDQUEyQztBQUMvQztBQUNBOztJQUVJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmRiZmQ7XHJcbn1cclxuLm1haW4tY29udGVudC1zdGF0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG46aG9zdCAvZGVlcC8gLm1hdC1kcmF3ZXItYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEzNTBweDtcclxufVxyXG4jbXktc2Nyb2xsYmFyIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzowcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuI21haW4tY29udGVudC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbm1hdC1kcmF3ZXItY29udGVuIHtcclxuICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5tYXQtZHJhd2VyLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzowcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4uZ3JhcGhzLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHsgICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLWJhciB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG4uc2VhcmNoLWJhci1ib3JkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5kYXNoYm9hcmRfYnV0dG9ucyB7XHJcbiAgICBib3JkZXItbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA4MHB4OyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuI2J1dF9jaCB7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgZm9udC1zaXplOiAuOHZ3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJ2aDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgICBmb250LXNpemU6IC44dnc7XHJcbiAgICBsaW5lLWhlaWdodDogMnZoO1xyXG4gICAgY3Vyc29yOmRlZmF1bHQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBcclxufVxyXG50YWJsZSB0ci5tYXQtcm93IHtcclxuXHJcbn1cclxudHIubWF0LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNyk7XHJcbn1cclxudHIubWF0LXJvdzphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMzgpIWltcG9ydGFudDtcclxufVxyXG50ci5tYXQtcm93LmFjdGl2ZSB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuLmhpZGRlbi1oci1tYWluIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGJvcmRlcjogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-content',
                templateUrl: './main-content.component.html',
                styleUrls: ['./main-content.component.css']
            }]
    }], function () { return [{ type: src_app_prem__WEBPACK_IMPORTED_MODULE_4__["ParamsModel"] }]; }, null); })();
function compare(a, b, isAsc) {
    console.log("update");
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");
/* harmony import */ var src_app_news_news_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/news/news.json */ "./src/app/news/news.json");
var src_app_news_news_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/news/news.json */ "./src/app/news/news.json", 1);
/* harmony import */ var src_app_df_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/df.json */ "./src/app/df.json");
var src_app_df_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/df.json */ "./src/app/df.json", 1);
/* harmony import */ var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/df_r.json */ "./src/app/df_r.json");
var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/df_r.json */ "./src/app/df_r.json", 1);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");



//let card = document.getElementsByClassName("news-card");







let scrollbarnews;
class NewsComponent {
    constructor(http) {
        this.http = http;
        this.world_sum_cured = 0;
        this.world_sum_deaths = 0;
        this.world_sum_confirmed = 0;
        this.world_per_deaths = 0;
        this.world_per_cured = 0;
        this.russia_sum_cured = 0;
        this.russia_sum_deaths = 0;
        this.russia_sum_confirmed = 0;
        this.russia_per_deaths = 0;
        this.russia_per_cured = 0;
        this.world_items = src_app_df_json__WEBPACK_IMPORTED_MODULE_3__;
        this.russia_items = src_app_df_r_json__WEBPACK_IMPORTED_MODULE_4__;
        this.textNews = "";
        this.isCurrent = false;
        this.isOpened = false;
        this.items = src_app_news_news_json__WEBPACK_IMPORTED_MODULE_2__;
        this.selectedNews = this.items[0];
        this.dataArray = [];
        this.arrayOfValute = {
            EUR: 0,
            USD: 0
        };
    }
    ngAfterViewInit() {
        smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"].init(document.querySelector('#my-news-scrollbar'));
        scrollbarnews = smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"].init(document.querySelector('#c-scrollbar'));
        let card = document.querySelectorAll(".news-card");
        let change_button = document.querySelectorAll(".material-icons");
        let open_button = document.querySelectorAll("#open-side-content");
        let side_menu = document.querySelector(".side-statistics-container");
        open_button.forEach(element => {
            element.addEventListener('click', () => {
                if (this.isOpened) {
                    side_menu.setAttribute("style", "width: 0%");
                    this.isOpened = false;
                }
                else {
                    side_menu.setAttribute("style", "width: 10%");
                    this.isOpened = true;
                }
            });
        });
        card.forEach(element => {
            element.addEventListener('click', () => {
                for (let item of this.items) {
                    if (element.getAttribute("title") == item.title) {
                        this.selectedNews = item;
                        this.http.get(this.selectedNews.text, { responseType: 'text' }).subscribe(dat => { this.textNews = dat; });
                        this.isCurrent = true;
                    }
                }
            });
        });
        change_button.forEach(element => {
            element.addEventListener('click', () => {
                if (element.getAttribute("id") == "forward-but") {
                    for (let [index, item] of this.items.entries()) {
                        if (item.title === this.selectedNews.title) {
                            if (index === (this.items.length - 1)) {
                                this.selectedNews = this.items[0];
                            }
                            else {
                                this.selectedNews = this.items[index + 1];
                            }
                            this.http.get(this.selectedNews.text, { responseType: 'text' }).subscribe(dat => { this.textNews = dat; });
                            scrollbarnews.scrollTo(0, 0);
                            break;
                        }
                    }
                    ;
                }
                if (element.getAttribute("id") == "backward-but") {
                    for (let [index, item] of this.items.entries()) {
                        if (item.title === this.selectedNews.title) {
                            if (index == 0) {
                                this.selectedNews = this.items[this.items.length - 1];
                            }
                            else {
                                this.selectedNews = this.items[index - 1];
                            }
                            this.http.get(this.selectedNews.text, { responseType: 'text' }).subscribe(dat => { this.textNews = dat; });
                            scrollbarnews.scrollTo(0, 0);
                            break;
                        }
                    }
                }
            });
        });
    }
    ngOnInit() {
        this.http.get("https://www.cbr-xml-daily.ru/daily_json.js").subscribe(data => { this.dataArray = data; this.arrayOfValute.USD = this.dataArray.Valute.USD.Previous; this.arrayOfValute.EUR = this.dataArray.Valute.EUR.Previous; });
        for (let [index, item] of this.world_items.entries()) {
            this.world_sum_confirmed += item.confirmed;
            this.world_sum_deaths += item.deaths;
            this.world_sum_cured += item.cured;
        }
        for (let [index, item] of this.russia_items.entries()) {
            this.russia_sum_confirmed += item.confirmed;
            this.russia_sum_deaths += item.deaths;
            this.russia_sum_cured += item.cured;
        }
        this.world_per_deaths = Number((this.world_sum_deaths / this.world_sum_confirmed).toFixed(2));
        this.world_per_cured = Number((this.world_sum_cured / this.world_sum_confirmed).toFixed(2));
        this.russia_per_cured = Number((this.russia_sum_cured / this.russia_sum_confirmed).toFixed(2));
        this.russia_per_deaths = Number((this.russia_sum_deaths / this.russia_sum_confirmed).toFixed(2));
    }
    calculateDiff(dateSent) {
        let currentDate = new Date();
        dateSent = new Date(dateSent);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    }
    calculateDiffDate(dateSent) {
        let currentDate = new Date();
        dateSent = new Date(dateSent);
        return (dateSent.toLocaleDateString());
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 215, vars: 67, consts: [[1, "main"], [1, "main-content"], [1, "current-news"], [1, "curerent-news-space"], ["mat-button", "", "id", "backward"], ["id", "backward-but", 1, "material-icons"], ["mat-button", "", "id", "forward"], ["id", "forward-but", 1, "material-icons"], ["mat-button", "", "id", "exit"], [1, "material-icons", 3, "click"], [1, "current-news-card"], ["id", "c-scrollbar"], [1, "content-current-card"], [1, "current-tag"], [1, "current-title"], [1, "current-date"], ["datetime", "YYYY-MM-DDThh:mm:ssTZD"], [1, "current-image"], [1, "current-picture"], [3, "src"], [1, "current-text"], ["id", "overlay", 3, "click"], ["id", "my-news-scrollbar"], [1, "side-statistics-container"], [1, "statistics-card"], [1, "econonmy-panel"], [1, "info-header"], [1, "info-body"], [1, "econonmy-vid"], [1, "vid-header"], [1, "vid-body"], [1, "c19-statistics"], [1, "c19-statistics-vid"], ["id", "pointer", 2, "background-color", "rgb(212, 37, 51)"], [1, "world-stat"], [1, "russia-stat"], ["id", "pointer", 2, "background-color", "rgb(41, 27, 28)"], ["id", "pointer", 2, "background-color", "rgb(202, 235, 55)"], [1, "content"], [1, "news-container"], [1, "header-statistics"], [1, "cards-board"], [1, "section-to-3"], [1, "news-card", 3, "title"], [1, "image-card"], [1, "card-picture"], [1, "content-card"], [1, "tag"], [1, "title"], [1, "date"], [1, "section-to-1"], [1, "section-to-2"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_Template_i_click_11_listener() { return ctx.isCurrent = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "time", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "picture", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_Template_div_click_30_listener() { return ctx.isCurrent = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u041A\u0443\u0440\u0441 \u0434\u043E\u043B\u043B\u0430\u0440\u0430 \u0421\u0428\u0410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u041A\u0443\u0440\u0441 \u0435\u0432\u0440\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0417\u0430\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u0423\u043C\u0435\u0440\u0448\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u0412\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0432\u0448\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "picture", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "picture", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "picture", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "picture", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "picture", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "picture", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "picture", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "picture", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "mat-card", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "picture", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.isCurrent ? "visible" : "hidden")("opacity", ctx.isCurrent ? "1" : "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedNews.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedNews.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedNews.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.selectedNews.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430 \u043D\u0430 ", ctx.calculateDiffDate(ctx.dataArray.PreviousDate), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.arrayOfValute.USD, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20AC ", ctx.arrayOfValute.EUR, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041C\u0438\u0440: ", ctx.world_sum_confirmed, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0420\u043E\u0441\u0441\u0438\u044F: ", ctx.russia_sum_confirmed, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u041C\u0438\u0440: ", ctx.world_sum_deaths, " (", ctx.world_per_deaths, "%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0420\u043E\u0441\u0441\u0438\u044F: ", ctx.russia_sum_deaths, " (", ctx.russia_per_deaths, "%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u041C\u0438\u0440: ", ctx.world_sum_cured, " (", ctx.world_per_cured, "%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0420\u043E\u0441\u0441\u0438\u044F: ", ctx.russia_sum_cured, " (", ctx.russia_per_cured, "%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.items[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.items[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[0].tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateDiff(ctx.items[0].date), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.items[1].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.items[1].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[1].tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[1].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateDiff(ctx.items[1].date), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.items[2].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.items[2].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[2].tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[2].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateDiff(ctx.items[2].date), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.items[3].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.items[3].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[3].tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[3].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateDiff(ctx.items[3].date), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.items[4].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.items[4].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[4].tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[4].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateDiff(ctx.items[4].date), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.items[5].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.items[5].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[5].tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[5].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateDiff(ctx.items[5].date), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.items[6].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.items[6].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[6].tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[6].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateDiff(ctx.items[6].date), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.items[7].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.items[7].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[7].tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[7].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateDiff(ctx.items[7].date), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.items[8].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.items[8].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[8].tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items[8].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateDiff(ctx.items[8].date), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"]], styles: [".main[_ngcontent-%COMP%] {\r\n    padding-top: 64px;\r\n    height: 100%;\r\n}\r\n#my-news-scrollbar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: auto;  \r\n}\r\n#c-scrollbar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: auto;\r\n    border-radius: 0 10px 10px 0;  \r\n}\r\n.main-content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-color: #d6dbfd;\r\n}\r\n.side-statistics-container[_ngcontent-%COMP%] {\r\n    font-size: 2.4vh;\r\n    width: 100%;\r\n    margin: 10px 0 10px 0;\r\n    \r\n}\r\n@media screen and (min-width: 1600px) {\r\n    .side-statistics-container[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .info-header[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n    }\r\n}\r\n.statistics-card[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: flex;\r\n    z-index: inherit;\r\n    max-width: 1350px;\r\n    padding: 0px 20px;\r\n    min-height: 80px;\r\n    max-height: 120px;\r\n    border-radius: 15px;\r\n    text-align: left;\r\n}\r\n.vid-header[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    margin-bottom: 5px;\r\n}\r\n.econonmy-panel[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 50%;\r\n}\r\n.info-header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 5px 5px 0 5px;\r\n    color: rgba(0, 0, 0, 0.6);\r\n    \r\n}\r\n.info-body[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n.econonmy-vid[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    margin:5px;\r\n}\r\n.c19-statistics[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n    width: 50%;\r\n}\r\n.c19-statistics-vid[_ngcontent-%COMP%] {\r\n    padding-right: 20px;\r\n    width:30%;\r\n    word-wrap: break-word;\r\n    margin: 5px 0 5px 0;\r\n}\r\n#pointer[_ngcontent-%COMP%] {\r\n    margin: auto 5px;\r\n    height: 12px;\r\n    width: 12px;\r\n    border-radius: 6px;\r\n    \r\n    \r\n    \r\n}\r\n.content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    border-radius: 16px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    max-width: 1350px;\r\n    padding: 20px;\r\n    background-color: #fafafa;\r\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n.cards-board[_ngcontent-%COMP%]  {\r\n    margin: 0 10px;\r\n    position: relative;\r\n    display: grid;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    grid-auto-flow: dense;\r\n    grid-gap: 10px 0 ;\r\n}\r\n.news-card[_ngcontent-%COMP%] {\r\n    transition: 0.5s;\r\n    font-family: inherit;\r\n    font-size: 16px;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n.news-card[_ngcontent-%COMP%]:hover {\r\n    opacity: .8;\r\n}\r\n.image-card[_ngcontent-%COMP%] {\r\n    border-radius: 4px 4px 0px 0px;\r\n    -o-object-position: center;\r\n       object-position: center;\r\n    position: relative;\r\n    height: 50%;\r\n}\r\n.card-picture[_ngcontent-%COMP%] {\r\n    -o-object-position: inherit;\r\n       object-position: inherit;\r\n    border-radius: inherit;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n   \r\n}\r\nimg[_ngcontent-%COMP%] {\r\n    border-radius: inherit;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    height: 100%;\r\n    width: 100%;\r\n    -o-object-position: inherit;\r\n       object-position: inherit;\r\n}\r\n.content-card[_ngcontent-%COMP%] {\r\n    height: 50%;\r\n    text-align: left;\r\n    width: 100%;\r\n}\r\n.tag[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    font-size: 12px;\r\n    color: #3f51b5;\r\n\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n}\r\n.date[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #3f51b5;\r\n    opacity: 0.7;\r\n    position:absolute;\r\n    bottom: 0;\r\n    padding: 10px 10px;\r\n}\r\n.section-to-3[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));\r\n    grid-template-rows: 400px;\r\n    grid-gap: 0 10px;\r\n    position: relative;\r\n    display: grid;\r\n}\r\n.section-to-3[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n    background: linear-gradient(180deg, #000, rgba(255,255,255, 0));\r\n}\r\n.section-to-2[_ngcontent-%COMP%] {\r\n    grid-template-columns: 0.5fr 0.5fr;\r\n    grid-template-rows: 350px;\r\n    grid-gap: 0 10px;\r\n    position: relative;\r\n    display: grid;\r\n    z-index: 0;\r\n}\r\n.section-to-2[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 4px 4px 4px 4px;\r\n}\r\n.section-to-2[_ngcontent-%COMP%]   .content-card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n    color: white;\r\n    background: linear-gradient(180deg, #000, rgba(255,255,255, 0));\r\n    height: 100%;\r\n    border-radius: 4px 4px 4px 4px;\r\n}\r\n.section-to-2[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.section-to-2[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.section-to-1[_ngcontent-%COMP%] {\r\n    grid-template-columns: 100%;\r\n    grid-template-rows: 400px;\r\n    position: static;\r\n    display: grid;\r\n    \r\n}\r\n.section-to-1[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%]{\r\n    -o-object-position: center top;\r\n       object-position: center top;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 4px 4px 4px 4px;\r\n}\r\n.section-to-1[_ngcontent-%COMP%]   .content-card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n    color: white;\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.684), rgba(255,255,255, 0));\r\n    height: 100%;\r\n    border-radius: 4px 4px 4px 4px;\r\n}\r\n.section-to-1[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.section-to-1[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n#overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top:0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0,0,0, 0.5);\r\n    z-index: 2;\r\n}\r\n.current-news[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 3;\r\n    transition: 0.8s opacity, 0.8s visibility;\r\n}\r\n.curerent-news-space[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15%;\r\n    left: 20%;\r\n    width: 60%;\r\n    height: 80%;\r\n    z-index: 3;\r\n}\r\n.material-icons[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.mat-button[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    min-width: 0;\r\n}\r\n#exit[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n#forward[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n}\r\n#backward[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n}\r\n.current-news-card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 5%;\r\n    left: 5%;\r\n    height: 95%;\r\n    width: 90%;\r\n    z-index: 3;\r\n    text-align: left;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 20px 15px -1px rgba(0, 0, 0, 0.2),0px 10px 10px 0px rgba(0, 0, 0, 0.14),0px 10px 30px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n.content-current-card[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n}\r\n.current-tag[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #3f51b5;\r\n    margin-bottom: 20px;\r\n}\r\n.current-title[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    margin-bottom: 20px;\r\n}\r\n.current-date[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 20px;\r\n    color: rgba(0,0,0, 0.6)\r\n}\r\n.current-text[_ngcontent-%COMP%] {\r\n    margin-right: 15%;\r\n    font-size: 18px;\r\n    white-space: pre-line;\r\n}\r\n.current-image[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    margin-bottom: 25px;\r\n}\r\n.current-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQix5QkFBeUI7O0FBRTdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCOzs7O0FBSXRCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsdUhBQXVIO0FBQzNIO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QiwwQkFBdUI7T0FBdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUF3QjtPQUF4Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPOztBQUVYO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUF3QjtPQUF4Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBEQUEwRDtJQUMxRCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwrREFBK0Q7QUFDbkU7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLCtEQUErRDtJQUMvRCxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksOEJBQTJCO09BQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLCtFQUErRTtJQUMvRSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGtDQUFrQztJQUNsQyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7QUFDWjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0FBQ1o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztBQUNYO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZIQUE2SDtBQUNqSTtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVzs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI215LW5ld3Mtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvOyAgXHJcbn1cclxuI2Mtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDsgIFxyXG59XHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGJmZDtcclxufVxyXG4uc2lkZS1zdGF0aXN0aWNzLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDIuNHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIC5zaWRlLXN0YXRpc3RpY3MtY29udGFpbmVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuaW5mby1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG4uc3RhdGlzdGljcy1jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB6LWluZGV4OiBpbmhlcml0O1xyXG4gICAgbWF4LXdpZHRoOiAxMzUwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi52aWQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5lY29ub25teS1wYW5lbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5pbmZvLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IDVweCAwIDVweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBcclxufVxyXG4uaW5mby1ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZWNvbm9ubXktdmlkIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46NXB4O1xyXG59XHJcblxyXG4uYzE5LXN0YXRpc3RpY3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLmMxOS1zdGF0aXN0aWNzLXZpZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxufVxyXG4jcG9pbnRlciB7XHJcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMzUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2FyZHMtYm9hcmQgIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcclxuICAgIGdyaWQtZ2FwOiAxMHB4IDAgO1xyXG59XHJcbi5uZXdzLWNhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLm5ld3MtY2FyZDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAuODtcclxufVxyXG4uaW1hZ2UtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcbi5jYXJkLXBpY3R1cmUge1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgXHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdDtcclxufVxyXG4uY29udGVudC1jYXJkIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50YWcge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjM2Y1MWI1O1xyXG5cclxufVxyXG4udGl0bGUge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG4uc2VjdGlvbi10by0zIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwJSwgMWZyKSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwMHB4O1xyXG4gICAgZ3JpZC1nYXA6IDAgMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuLnNlY3Rpb24tdG8tMyAuaW1nIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDAsIHJnYmEoMjU1LDI1NSwyNTUsIDApKTtcclxufVxyXG4uc2VjdGlvbi10by0yIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMC41ZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1MHB4O1xyXG4gICAgZ3JpZC1nYXA6IDAgMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbi5zZWN0aW9uLXRvLTIgLmltYWdlLWNhcmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcclxufVxyXG4uc2VjdGlvbi10by0yIC5jb250ZW50LWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDAsIHJnYmEoMjU1LDI1NSwyNTUsIDApKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcclxufVxyXG4uc2VjdGlvbi10by0yIC50YWcge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWN0aW9uLXRvLTIgLmRhdGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWN0aW9uLXRvLTEge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MDBweDtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgXHJcbn1cclxuLnNlY3Rpb24tdG8tMSAuaW1hZ2UtY2FyZHtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xyXG59XHJcbi5zZWN0aW9uLXRvLTEgLmNvbnRlbnQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjY4NCksIHJnYmEoMjU1LDI1NSwyNTUsIDApKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcclxufVxyXG4uc2VjdGlvbi10by0xIC50YWcge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWN0aW9uLXRvLTEgLmRhdGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNvdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC41KTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmN1cnJlbnQtbmV3cyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgdHJhbnNpdGlvbjogMC44cyBvcGFjaXR5LCAwLjhzIHZpc2liaWxpdHk7XHJcbn1cclxuLmN1cmVyZW50LW5ld3Mtc3BhY2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi13aWR0aDogMDtcclxufVxyXG4jZXhpdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4jZm9yd2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbiNiYWNrd2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLmN1cnJlbnQtbmV3cy1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDE1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMTBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbi5jb250ZW50LWN1cnJlbnQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbi5jdXJyZW50LXRhZyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmN1cnJlbnQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jdXJyZW50LWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLCAwLjYpXHJcbn1cclxuLmN1cnJlbnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4uY3VycmVudC1pbWFnZXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5jdXJyZW50LXBpY3R1cmUgaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/news/news.json":
/*!********************************!*\
  !*** ./src/app/news/news.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"date\":\"2020-05-28 10:00:00\",\"tag\":\"Новости\",\"img\":\"assets/img/putyourvoicein.jpg\",\"title\":\"Путин напомнил, как республики «тащили» из СССР «подарки» русского народа»\",\"text\":\"assets/news/putin.txt\"},{\"date\":\"2020-05-25 13:00:00\",\"tag\":\"Новости\",\"img\":\"assets/img/plane.jpg\",\"title\":\"Самолет взлетел! Восьмое чудо света «Это невероятное чудо, такое можно встретить только в сказках»\",\"text\":\"assets/news/plane.txt\"},{\"date\":\"2020-05-12 12:00:00\",\"tag\":\"Новости\",\"img\":\"assets/img/trap.jpg\",\"title\":\"Трамп придумал новое название для коронавируса и снова обидел Китай...\",\"text\":\"assets/news/trap.txt\"},{\"date\":\"2020-04-28 10:00:00\",\"tag\":\"Архив\",\"img\":\"assets/img/ChuckN.png\",\"title\":\"Его боялись даже чеченцы...\",\"text\":\"assets/news/chuck.txt\"},{\"date\":\"2020-04-23 10:00:00\",\"tag\":\"Новости\",\"img\":\"assets/img/rpl.jpg\",\"title\":\"В РПЛ подтвердили случаи заболевания коронавирусом в «Оренбурге»\",\"text\":\"assets/news/rpl.txt\"},{\"date\":\"2020-04-22 10:00:00\",\"tag\":\"Новости\",\"img\":\"assets/img/robbery.jpg\",\"title\":\"Полиция предупредила жителей Карелии о новой схеме обмана с выплатами\",\"text\":\"assets/news/robbery.txt\"},{\"date\":\"2020-03-21 10:00:00\",\"tag\":\"Новости\",\"img\":\"assets/img/karelia.jpg\",\"title\":\"24 человека заразились коронавирусом в Карелии за сутки\",\"text\":\"assets/news/karelia.txt\"},{\"date\":\"2020-03-23 10:00:00\",\"tag\":\"Новости\",\"img\":\"assets/img/gender.jpg\",\"title\":\"Гендерная боль: коронавирус опаснее для мужчин\",\"text\":\"assets/news/gender.txt\"},{\"date\":\"2020-03-23 09:00:00\",\"tag\":\"Новости\",\"img\":\"assets/img/oloyork.jpg\",\"title\":\"Какие-то там новости про Олонец\",\"text\":\"assets/news/olonec.txt\"}]");

/***/ }),

/***/ "./src/app/out-graph/out-graph.component.ts":
/*!**************************************************!*\
  !*** ./src/app/out-graph/out-graph.component.ts ***!
  \**************************************************/
/*! exports provided: OutGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutGraphComponent", function() { return OutGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_ddf_russia_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ddf_russia.json */ "./src/app/ddf_russia.json");
var src_app_ddf_russia_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/ddf_russia.json */ "./src/app/ddf_russia.json", 1);
/* harmony import */ var src_app_ddf_world_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ddf_world.json */ "./src/app/ddf_world.json");
var src_app_ddf_world_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/ddf_world.json */ "./src/app/ddf_world.json", 1);
/* harmony import */ var src_app_df_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/df.json */ "./src/app/df.json");
var src_app_df_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/df.json */ "./src/app/df.json", 1);
/* harmony import */ var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/df_r.json */ "./src/app/df_r.json");
var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/df_r.json */ "./src/app/df_r.json", 1);
/* harmony import */ var src_app_prem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/prem */ "./src/app/prem.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














function OutGraphComponent_mat_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.country);
} }
function OutGraphComponent_mat_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.country);
} }
let dataArray;
highcharts__WEBPACK_IMPORTED_MODULE_1__["setOptions"]({
    colors: ['#058DC7', '#50B432', '#ED561B']
});
class OutGraphComponent {
    constructor(params) {
        this.params = params;
        this.comp_colorConf = '#058DC7';
        this.comp_colorCured = '#50B432';
        this.comp_colorDeaths = '#ED561B';
        this.line_colorConf = '#058DC7';
        this.line_colorCured = '#50B432';
        this.line_colorDeaths = '#ED561B';
        this.selectedType = 'line';
        this.selectedpoint = null;
        this.isInit = false;
        this.isDestroyed = false;
        this.isButton = false;
        this.items_w = src_app_df_json__WEBPACK_IMPORTED_MODULE_4__;
        this.items_r = src_app_df_r_json__WEBPACK_IMPORTED_MODULE_5__;
        this.line_options = {
            chart: {
                type: this.selectedType,
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer'
                }
            },
            subtitle: {
                text: 'Статистика с 28.04.2020 по 28.05.2020'
            },
            yAxis: {
                title: {
                    text: "Количество"
                }
            },
            xAxis: {
                labels: {
                    enabled: false
                }
            },
            series: [{
                    data: 0
                },
                {
                    data: 0
                },
                {
                    data: 0
                }
            ],
            credits: {
                enabled: false
            },
        };
        this.column_options = {
            subtitle: {
                text: 'Число зараженных на момент 28.05.2020 с учетом количества выздоровевших и умерших'
            },
            chart: {
                type: 'column',
            },
            title: {
                text: "Графики сравнения"
            },
            yAxis: {
                title: {
                    text: "Количество"
                }
            },
            xAxis: {
                categories: ['Зараженные (актуальные данные)', 'Выздоровевшие', 'Умершие'],
                showEmpty: true
            },
            series: [{
                    colorByPoint: true,
                    data: 0
                },
                {
                    name: "Выберите страну",
                    colorByPoint: true,
                    data: 0,
                    visible: false
                }
            ],
            credits: {
                enabled: false
            }
        };
    }
    ngAfterViewInit() {
        this.comparechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('comparecharts', this.column_options);
        this.linechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container', this.line_options);
        update_line(this.linechart, this.params.getParams(), true, null);
        update_column(this.comparechart, this.params.getParams(), this.compare_data);
        this.isInit = true;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (this.isInit) {
            if (this.parentData != null) {
                this.isButton = false;
                if (this.isDestroyed) {
                    this.comparechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('comparecharts', this.column_options);
                    this.linechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container', this.line_options);
                    this.isDestroyed = false;
                }
                this.linechart.destroy();
                this.comparechart.destroy();
                this.comparechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('comparecharts', this.column_options);
                this.linechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container', this.line_options);
                update_column(this.comparechart, this.params.getParams(), this.compare_data);
                update_line(this.linechart, this.params.getParams(), true, null);
                this.swap_type(this.selectedType);
                this.linechart.update({ subtitle: { text: 'Статистика с 28.04.2020 по 28.05.2020' } });
            }
            else {
                if (!this.isDestroyed) {
                    this.linechart.destroy();
                    this.comparechart.destroy();
                    this.isDestroyed = true;
                }
            }
        }
    }
    updateselected() {
        this.compare_data = initselected(this.selectedValue, this.items_w, this.items_r);
        console.log(this.compare_data);
        update_column(this.comparechart, this.params.getParams(), this.compare_data);
    }
    change_data() {
        this.selectedpoint = this.linechart.getSelectedPoints();
        if (this.selectedpoint != 0) {
            if (this.isButton) {
                this.linechart.update({ subtitle: { text: 'Статистика с 28.04.2020 по 28.05.2020' } });
                update_line(this.linechart, this.params.getParams(), true, null);
                this.swap_type(this.selectedType);
                this.isButton = false;
            }
            else {
                let x = this.selectedpoint[0].options.name;
                this.linechart.update({ subtitle: { text: 'Статистика за ' + x } });
                update_line(this.linechart, this.params.getParams(), false, x);
                this.swap_type('column');
                this.isButton = true;
            }
        }
    }
    swap_type(type) {
        this.linechart.update({ chart: { type: type } });
    }
    updatecolor() {
        this.comparechart.update({ colors: [this.comp_colorConf, this.comp_colorCured, this.comp_colorDeaths] });
    }
    updatecolorline() {
        this.linechart.update({ colors: [this.line_colorConf, this.line_colorCured, this.line_colorDeaths] });
    }
    updateType() {
        if (!this.isButton) {
            this.swap_type(this.selectedType);
        }
    }
}
OutGraphComponent.ɵfac = function OutGraphComponent_Factory(t) { return new (t || OutGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_prem__WEBPACK_IMPORTED_MODULE_6__["ParamsModel"])); };
OutGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutGraphComponent, selectors: [["app-out-graph"]], inputs: { parentData: "parentData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 79, vars: 62, consts: [[1, "charts-main-container"], [1, "charts-h1"], [1, "line-highcharts", 2, "width", "100%"], [1, "line-card", 3, "click"], ["id", "container"], [1, "side-menu-line-chart"], [2, "width", "100%"], [3, "ngModel", "ngModelChange"], ["value", "line"], ["value", "column"], ["value", "area"], [1, "select-color"], [1, "selector-color"], ["value", "#058DC7"], ["value", "#DDDF00"], ["value", "#FF9655"], ["value", "#50B432"], ["value", "#24CBE5"], ["value", "#FFF263"], ["value", "#ED561B"], ["value", "#64E572"], ["value", "#6AF9C4"], [1, "compare-highcharts"], [1, "board-container"], [1, "compare-card"], ["id", "comparecharts", 2, "width", "100%"], [1, "side-menu"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function OutGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0414\u0430\u043D\u043D\u044B\u0435, \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C 28.05.2020 \u0433\u043E\u0434\u0430, \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0438 \u0431\u044B\u043B\u0438 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0444\u043E\u0440\u043C\u0443\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutGraphComponent_Template_mat_card_click_5_listener() { return ctx.change_data(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0422\u0438\u043F \u0433\u0440\u0430\u0444\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_11_listener($event) { return ctx.selectedType = $event; })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_11_listener() { return ctx.updateType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041B\u0438\u043D\u0435\u0439\u043D\u044B\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0421\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u044B\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041B\u0438\u043D\u0435\u0439\u043D\u044B\u0439 \u0441 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0426\u0432\u0435\u0442\u0430 \u0441\u0435\u0440\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0417\u0430\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_24_listener($event) { return ctx.line_colorConf = $event; })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_24_listener() { return ctx.updatecolorline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0412\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0432\u0448\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_31_listener($event) { return ctx.line_colorCured = $event; })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_31_listener() { return ctx.updatecolorline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0423\u043C\u0435\u0440\u0448\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_38_listener($event) { return ctx.line_colorDeaths = $event; })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_38_listener() { return ctx.updatecolorline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "mat-card-content", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0421\u0442\u0440\u0430\u043D\u0430/\u0433\u043E\u0440\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_50_listener($event) { return ctx.selectedValue = $event; })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_50_listener() { return ctx.updateselected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, OutGraphComponent_mat_option_53_Template, 2, 2, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, OutGraphComponent_mat_option_54_Template, 2, 2, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0426\u0432\u0435\u0442\u0430 \u0441\u0435\u0440\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0417\u0430\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_61_listener($event) { return ctx.comp_colorConf = $event; })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_61_listener() { return ctx.updatecolor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0412\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0432\u0448\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_68_listener($event) { return ctx.comp_colorCured = $event; })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_68_listener() { return ctx.updatecolor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u0423\u043C\u0435\u0440\u0448\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_75_listener($event) { return ctx.comp_colorDeaths = $event; })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_75_listener() { return ctx.updatecolor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.isDestroyed ? "hidden" : "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.line_colorConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line_colorConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#058DC7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#DDDF00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#FF9655");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.line_colorCured);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line_colorCured);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#50B432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#24CBE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#FFF263");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.line_colorDeaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line_colorDeaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#ED561B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#64E572");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#6AF9C4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.isDestroyed ? "hidden" : "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items_w);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items_r);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.comp_colorConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comp_colorConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#058DC7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#DDDF00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#FF9655");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.comp_colorCured);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comp_colorCured);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#50B432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#24CBE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#FFF263");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.comp_colorDeaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comp_colorDeaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#ED561B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#64E572");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#6AF9C4");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]], styles: [".charts-main-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.header-content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    margin: 15px 15px\r\n}\r\n.charts-h1[_ngcontent-%COMP%] {\r\n    margin: 35px 10px;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n}\r\n.all-highcharts[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n.compare-highcharts[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    display:flex; \r\n    justify-content: space-between  ;\r\n    height: 500px;\r\n}\r\n[_nghost-%COMP%]     .mat-drawer-content {\r\n    overflow: hidden !important;\r\n}\r\nmat-drawer-container[_ngcontent-%COMP%] {\r\n    width: 70vw;\r\n}\r\n#container[_ngcontent-%COMP%] { \r\n    width: 87%;\r\n}\r\n#comparehighcharts[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n.side-menu[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    padding-right: 5px;\r\n    width: 20%;\r\n    height: 400px;\r\n}\r\n.side-menu-line-chart[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    padding-right: 5px;\r\n    width: 13%;\r\n    height: 400px;\r\n    overflow: hidden;\r\n}\r\n.round-highchart[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    width: 50%;\r\n    \r\n}\r\n.round-highcharts[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    display: flex;\r\n    width: 100%;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n.board-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.first-donut[_ngcontent-%COMP%], .second-donut[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n.compare-card[_ngcontent-%COMP%] {\r\n    display: flex; \r\n    height: 500px;\r\n    width: 100%;\r\n}\r\n.line-card[_ngcontent-%COMP%] {\r\n    \r\n    height: 500px;\r\n    display: flex;\r\n}\r\n#container-f[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n#container-s[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.select-color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 5%;\r\n    width: 90%;\r\n    color: rgba(0,0,0,.42);\r\n}\r\n.selector-color[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    border: solid 1px #e0e0e0;\r\n    border-radius: 3px;\r\n    display: grid;\r\n    justify-items: end;\r\n}\r\n.mat-select[_ngcontent-%COMP%] {\r\n    font-size: 1.2vmin;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    font-size: 1.2vmin;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    font: inherit;\r\n    font-size: 1.4vmin;\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0LWdyYXBoL291dC1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWjtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7O0FBRWQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBOztJQUVJLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9vdXQtZ3JhcGgvb3V0LWdyYXBoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnRzLW1haW4tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDE1cHggMTVweFxyXG59XHJcbi5jaGFydHMtaDEge1xyXG4gICAgbWFyZ2luOiAzNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxufVxyXG4uYWxsLWhpZ2hjaGFydHMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb21wYXJlLWhpZ2hjaGFydHMge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICA7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzB2dztcclxufVxyXG4jY29udGFpbmVyIHsgXHJcbiAgICB3aWR0aDogODclO1xyXG59XHJcbiNjb21wYXJlaGlnaGNoYXJ0cyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNpZGUtbWVudSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuLnNpZGUtbWVudS1saW5lLWNoYXJ0IHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTMlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnJvdW5kLWhpZ2hjaGFydCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIFxyXG59XHJcbi5yb3VuZC1oaWdoY2hhcnRzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4uYm9hcmQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5maXJzdC1kb251dCwgLnNlY29uZC1kb251dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb21wYXJlLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxpbmUtY2FyZCB7XHJcbiAgICBcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNjb250YWluZXItZntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNjb250YWluZXItcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2VsZWN0LWNvbG9yIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC40Mik7XHJcbn1cclxuLnNlbGVjdG9yLWNvbG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNlMGUwZTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xyXG59XHJcbi5tYXQtc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4ydm1pbjtcclxufVxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuMnZtaW47XHJcbn1cclxuaDIge1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMS40dm1pbjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-out-graph',
                templateUrl: './out-graph.component.html',
                styleUrls: ['./out-graph.component.css']
            }]
    }], function () { return [{ type: src_app_prem__WEBPACK_IMPORTED_MODULE_6__["ParamsModel"] }]; }, { parentData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
function initselected(country, items_1, items_2) {
    console.log(country);
    for (let dat of items_1) {
        let cont = dat.country;
        console.log(cont);
        if (cont == country) {
            return dat;
        }
    }
    for (let dat of items_2) {
        let cont = dat.country;
        console.log(cont);
        if (cont == country) {
            return dat;
        }
    }
    return null;
}
function update_line(hichart, param, flag, datepoint) {
    const a = Object.values(src_app_ddf_russia_json__WEBPACK_IMPORTED_MODULE_2___namespace);
    const b = a[0];
    for (let dat of Object.values(b)) {
        let cont = Object.values(dat)[0];
        if (cont == param.country) {
            if (flag) {
                dataArray = dat;
            }
            else {
                for (let item of Object.values(dat)[1]) {
                    if (Object.values(item)[0] == datepoint) {
                        dataArray = item;
                    }
                }
            }
        }
    }
    ;
    let c = Object.values(src_app_ddf_world_json__WEBPACK_IMPORTED_MODULE_3___namespace);
    let d = c[0];
    for (let dat of Object.values(d)) {
        let cont = Object.values(dat)[0];
        if (cont == param.country) {
            if (flag) {
                dataArray = dat;
            }
            else {
                for (let item of Object.values(dat)[1]) {
                    if (Object.values(item)[0] == datepoint) {
                        dataArray = item;
                    }
                }
            }
        }
    }
    ;
    let dataconfirmed = [];
    let datadeaths = [];
    let datacured = [];
    if (flag) {
        dataArray.data.forEach(function (value) {
            dataconfirmed.push([value.date, value.confirmed]);
            datadeaths.push([value.date, value.deaths]);
            datacured.push([value.date, value.cured]);
        });
    }
    else {
        dataconfirmed.push([dataArray.date, dataArray.confirmed]);
        datadeaths.push([dataArray.date, dataArray.deaths]);
        datacured.push([dataArray.date, dataArray.cured]);
    }
    hichart.update({ chart: { type: 'line' } });
    hichart.title.update({ text: param.country });
    hichart.series[0].update({
        name: "Зараженные",
        data: dataconfirmed
    });
    hichart.series[1].update({
        name: "Вылечившиеся",
        data: datacured
    });
    hichart.series[2].update({
        name: "Умершие",
        data: datadeaths
    });
}
function update_column(hichart, param, secparam) {
    hichart.series[0].update({
        name: param.country,
        data: [
            { name: 'Зараженные (актуальные данные)', y: (param.confirmed - (param.deaths + param.cured)) },
            { name: 'Выздоровевшие', y: param.cured },
            { name: 'Умершие', y: param.deaths }
        ]
    });
    if (secparam != null) {
        hichart.series[1].update({
            name: secparam.country,
            data: [
                { name: 'Зараженные (актуальные данные)', y: (secparam.confirmed - (secparam.deaths + secparam.cured)) },
                { name: 'Выздоровевшие', y: secparam.cured },
                { name: 'Умершие', y: secparam.deaths }
            ],
            visible: true
        });
    }
    else {
        hichart.series[1].update({
            name: "Выберите страну",
            data: [0, 0, 0],
            visible: false
        });
    }
}


/***/ }),

/***/ "./src/app/prem.ts":
/*!*************************!*\
  !*** ./src/app/prem.ts ***!
  \*************************/
/*! exports provided: ParamsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsModel", function() { return ParamsModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_df_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/df.json */ "./src/app/df.json");
var src_app_df_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/df.json */ "./src/app/df.json", 1);



class item {
}
class ParamsModel {
    constructor() {
        this.items = src_app_df_json__WEBPACK_IMPORTED_MODULE_1__;
        this.chosenitmf = this.items[0];
        this.chosenitms = this.items[1];
    }
    setParams(param) {
        this.chosenitmf = param;
    }
    getParams() {
        return this.chosenitmf;
    }
}
ParamsModel.ɵfac = function ParamsModel_Factory(t) { return new (t || ParamsModel)(); };
ParamsModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ParamsModel, factory: ParamsModel.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParamsModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\test\testAPP\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map