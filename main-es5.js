function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'testAPP';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./out-graph/out-graph.component */
    "./src/app/out-graph/out-graph.component.ts");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./main-content/main-content.component */
    "./src/app/main-content/main-content.component.ts");
    /* harmony import */


    var src_app_prem__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! src/app/prem */
    "./src/app/prem.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _foot_foot_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./foot/foot.component */
    "./src/app/foot/foot.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");

    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_47__["HomeComponent"]
    }, {
      path: 'main',
      component: _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_45__["MainContentComponent"]
    }, {
      path: 'news',
      component: _news_news_component__WEBPACK_IMPORTED_MODULE_49__["NewsComponent"]
    }, {
      path: '**',
      redirectTo: '/'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [src_app_prem__WEBPACK_IMPORTED_MODULE_46__["ParamsModel"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__["ScrollingModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_43__["HighchartsChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_42__["OutGraphComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_44__["HeaderComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_45__["MainContentComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_47__["HomeComponent"], _foot_foot_component__WEBPACK_IMPORTED_MODULE_48__["FootComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_49__["NewsComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__["ScrollingModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_43__["HighchartsChartModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_42__["OutGraphComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_44__["HeaderComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_45__["MainContentComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_47__["HomeComponent"], _foot_foot_component__WEBPACK_IMPORTED_MODULE_48__["FootComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_49__["NewsComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__["ScrollingModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_43__["HighchartsChartModule"]],
          providers: [src_app_prem__WEBPACK_IMPORTED_MODULE_46__["ParamsModel"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ddf_russia.json":
  /*!*********************************!*\
    !*** ./src/app/ddf_russia.json ***!
    \*********************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */

  /***/
  function srcAppDdf_russiaJson(module) {
    module.exports = JSON.parse("[{\"country\":\"Москва\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":59,\"deaths\":0,\"cured\":23},{\"date\":\"29.04.2020\",\"confirmed\":3447,\"deaths\":44,\"cured\":1415},{\"date\":\"30.04.2020\",\"confirmed\":6952,\"deaths\":89,\"cured\":2855},{\"date\":\"01.05.2020\",\"confirmed\":10578,\"deaths\":136,\"cured\":4344},{\"date\":\"02.05.2020\",\"confirmed\":14329,\"deaths\":185,\"cured\":5885},{\"date\":\"03.05.2020\",\"confirmed\":18210,\"deaths\":235,\"cured\":7479},{\"date\":\"04.05.2020\",\"confirmed\":22224,\"deaths\":287,\"cured\":9128},{\"date\":\"05.05.2020\",\"confirmed\":26377,\"deaths\":341,\"cured\":10833},{\"date\":\"06.05.2020\",\"confirmed\":30673,\"deaths\":397,\"cured\":12597},{\"date\":\"07.05.2020\",\"confirmed\":35117,\"deaths\":455,\"cured\":14422},{\"date\":\"08.05.2020\",\"confirmed\":39714,\"deaths\":515,\"cured\":16310},{\"date\":\"09.05.2020\",\"confirmed\":44470,\"deaths\":577,\"cured\":18263},{\"date\":\"10.05.2020\",\"confirmed\":49390,\"deaths\":641,\"cured\":20283},{\"date\":\"11.05.2020\",\"confirmed\":54479,\"deaths\":707,\"cured\":22373},{\"date\":\"12.05.2020\",\"confirmed\":59744,\"deaths\":775,\"cured\":24535},{\"date\":\"13.05.2020\",\"confirmed\":65191,\"deaths\":846,\"cured\":26772},{\"date\":\"14.05.2020\",\"confirmed\":70825,\"deaths\":919,\"cured\":29086},{\"date\":\"15.05.2020\",\"confirmed\":76654,\"deaths\":995,\"cured\":31480},{\"date\":\"16.05.2020\",\"confirmed\":82684,\"deaths\":1073,\"cured\":33956},{\"date\":\"17.05.2020\",\"confirmed\":88922,\"deaths\":1154,\"cured\":36518},{\"date\":\"18.05.2020\",\"confirmed\":95375,\"deaths\":1238,\"cured\":39168},{\"date\":\"19.05.2020\",\"confirmed\":102050,\"deaths\":1325,\"cured\":41909},{\"date\":\"20.05.2020\",\"confirmed\":108955,\"deaths\":1415,\"cured\":44745},{\"date\":\"21.05.2020\",\"confirmed\":116098,\"deaths\":1508,\"cured\":47679},{\"date\":\"22.05.2020\",\"confirmed\":123488,\"deaths\":1604,\"cured\":50714},{\"date\":\"23.05.2020\",\"confirmed\":131133,\"deaths\":1703,\"cured\":53853},{\"date\":\"24.05.2020\",\"confirmed\":139041,\"deaths\":1806,\"cured\":57101},{\"date\":\"25.05.2020\",\"confirmed\":147222,\"deaths\":1912,\"cured\":60461},{\"date\":\"26.05.2020\",\"confirmed\":155685,\"deaths\":2022,\"cured\":63937},{\"date\":\"27.05.2020\",\"confirmed\":164440,\"deaths\":2136,\"cured\":67532},{\"date\":\"28.05.2020\",\"confirmed\":173497,\"deaths\":2254,\"cured\":71251}]},{\"country\":\"Московская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":13,\"deaths\":0,\"cured\":2},{\"date\":\"29.04.2020\",\"confirmed\":730,\"deaths\":7,\"cured\":136},{\"date\":\"30.04.2020\",\"confirmed\":1472,\"deaths\":15,\"cured\":274},{\"date\":\"01.05.2020\",\"confirmed\":2240,\"deaths\":23,\"cured\":417},{\"date\":\"02.05.2020\",\"confirmed\":3034,\"deaths\":31,\"cured\":565},{\"date\":\"03.05.2020\",\"confirmed\":3856,\"deaths\":39,\"cured\":718},{\"date\":\"04.05.2020\",\"confirmed\":4706,\"deaths\":48,\"cured\":876},{\"date\":\"05.05.2020\",\"confirmed\":5585,\"deaths\":57,\"cured\":1040},{\"date\":\"06.05.2020\",\"confirmed\":6494,\"deaths\":66,\"cured\":1209},{\"date\":\"07.05.2020\",\"confirmed\":7435,\"deaths\":76,\"cured\":1384},{\"date\":\"08.05.2020\",\"confirmed\":8408,\"deaths\":86,\"cured\":1565},{\"date\":\"09.05.2020\",\"confirmed\":9415,\"deaths\":96,\"cured\":1753},{\"date\":\"10.05.2020\",\"confirmed\":10457,\"deaths\":107,\"cured\":1947},{\"date\":\"11.05.2020\",\"confirmed\":11534,\"deaths\":118,\"cured\":2148},{\"date\":\"12.05.2020\",\"confirmed\":12649,\"deaths\":130,\"cured\":2356},{\"date\":\"13.05.2020\",\"confirmed\":13802,\"deaths\":142,\"cured\":2571},{\"date\":\"14.05.2020\",\"confirmed\":14995,\"deaths\":154,\"cured\":2793},{\"date\":\"15.05.2020\",\"confirmed\":16229,\"deaths\":167,\"cured\":3023},{\"date\":\"16.05.2020\",\"confirmed\":17506,\"deaths\":180,\"cured\":3261},{\"date\":\"17.05.2020\",\"confirmed\":18827,\"deaths\":194,\"cured\":3507},{\"date\":\"18.05.2020\",\"confirmed\":20193,\"deaths\":208,\"cured\":3762},{\"date\":\"19.05.2020\",\"confirmed\":21606,\"deaths\":223,\"cured\":4025},{\"date\":\"20.05.2020\",\"confirmed\":23068,\"deaths\":238,\"cured\":4297},{\"date\":\"21.05.2020\",\"confirmed\":24580,\"deaths\":254,\"cured\":4579},{\"date\":\"22.05.2020\",\"confirmed\":26144,\"deaths\":270,\"cured\":4870},{\"date\":\"23.05.2020\",\"confirmed\":27762,\"deaths\":287,\"cured\":5172},{\"date\":\"24.05.2020\",\"confirmed\":29436,\"deaths\":304,\"cured\":5484},{\"date\":\"25.05.2020\",\"confirmed\":31168,\"deaths\":322,\"cured\":5807},{\"date\":\"26.05.2020\",\"confirmed\":32960,\"deaths\":341,\"cured\":6141},{\"date\":\"27.05.2020\",\"confirmed\":34813,\"deaths\":360,\"cured\":6486},{\"date\":\"28.05.2020\",\"confirmed\":36730,\"deaths\":380,\"cured\":6843}]},{\"country\":\"Санкт-Петербург\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":5,\"deaths\":0,\"cured\":2},{\"date\":\"29.04.2020\",\"confirmed\":295,\"deaths\":4,\"cured\":95},{\"date\":\"30.04.2020\",\"confirmed\":595,\"deaths\":7,\"cured\":192},{\"date\":\"01.05.2020\",\"confirmed\":905,\"deaths\":10,\"cured\":292},{\"date\":\"02.05.2020\",\"confirmed\":1226,\"deaths\":14,\"cured\":395},{\"date\":\"03.05.2020\",\"confirmed\":1558,\"deaths\":18,\"cured\":502},{\"date\":\"04.05.2020\",\"confirmed\":1902,\"deaths\":22,\"cured\":613},{\"date\":\"05.05.2020\",\"confirmed\":2257,\"deaths\":26,\"cured\":727},{\"date\":\"06.05.2020\",\"confirmed\":2625,\"deaths\":30,\"cured\":845},{\"date\":\"07.05.2020\",\"confirmed\":3005,\"deaths\":34,\"cured\":968},{\"date\":\"08.05.2020\",\"confirmed\":3398,\"deaths\":38,\"cured\":1095},{\"date\":\"09.05.2020\",\"confirmed\":3805,\"deaths\":43,\"cured\":1226},{\"date\":\"10.05.2020\",\"confirmed\":4226,\"deaths\":48,\"cured\":1362},{\"date\":\"11.05.2020\",\"confirmed\":4662,\"deaths\":53,\"cured\":1502},{\"date\":\"12.05.2020\",\"confirmed\":5113,\"deaths\":58,\"cured\":1647},{\"date\":\"13.05.2020\",\"confirmed\":5579,\"deaths\":63,\"cured\":1797},{\"date\":\"14.05.2020\",\"confirmed\":6061,\"deaths\":68,\"cured\":1952},{\"date\":\"15.05.2020\",\"confirmed\":6560,\"deaths\":74,\"cured\":2113},{\"date\":\"16.05.2020\",\"confirmed\":7076,\"deaths\":80,\"cured\":2279},{\"date\":\"17.05.2020\",\"confirmed\":7610,\"deaths\":86,\"cured\":2451},{\"date\":\"18.05.2020\",\"confirmed\":8162,\"deaths\":92,\"cured\":2629},{\"date\":\"19.05.2020\",\"confirmed\":8733,\"deaths\":98,\"cured\":2813},{\"date\":\"20.05.2020\",\"confirmed\":9324,\"deaths\":105,\"cured\":3003},{\"date\":\"21.05.2020\",\"confirmed\":9935,\"deaths\":112,\"cured\":3200},{\"date\":\"22.05.2020\",\"confirmed\":10567,\"deaths\":119,\"cured\":3404},{\"date\":\"23.05.2020\",\"confirmed\":11221,\"deaths\":126,\"cured\":3615},{\"date\":\"24.05.2020\",\"confirmed\":11898,\"deaths\":134,\"cured\":3833},{\"date\":\"25.05.2020\",\"confirmed\":12598,\"deaths\":142,\"cured\":4059},{\"date\":\"26.05.2020\",\"confirmed\":13322,\"deaths\":150,\"cured\":4292},{\"date\":\"27.05.2020\",\"confirmed\":14071,\"deaths\":158,\"cured\":4533},{\"date\":\"28.05.2020\",\"confirmed\":14846,\"deaths\":167,\"cured\":4783}]},{\"country\":\"Нижегородская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":3,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":178,\"deaths\":2,\"cured\":63},{\"date\":\"30.04.2020\",\"confirmed\":359,\"deaths\":4,\"cured\":129},{\"date\":\"01.05.2020\",\"confirmed\":546,\"deaths\":6,\"cured\":197},{\"date\":\"02.05.2020\",\"confirmed\":740,\"deaths\":8,\"cured\":267},{\"date\":\"03.05.2020\",\"confirmed\":940,\"deaths\":10,\"cured\":340},{\"date\":\"04.05.2020\",\"confirmed\":1147,\"deaths\":12,\"cured\":415},{\"date\":\"05.05.2020\",\"confirmed\":1362,\"deaths\":14,\"cured\":493},{\"date\":\"06.05.2020\",\"confirmed\":1584,\"deaths\":16,\"cured\":573},{\"date\":\"07.05.2020\",\"confirmed\":1814,\"deaths\":18,\"cured\":656},{\"date\":\"08.05.2020\",\"confirmed\":2052,\"deaths\":20,\"cured\":742},{\"date\":\"09.05.2020\",\"confirmed\":2298,\"deaths\":22,\"cured\":831},{\"date\":\"10.05.2020\",\"confirmed\":2552,\"deaths\":24,\"cured\":923},{\"date\":\"11.05.2020\",\"confirmed\":2815,\"deaths\":26,\"cured\":1018},{\"date\":\"12.05.2020\",\"confirmed\":3087,\"deaths\":29,\"cured\":1116},{\"date\":\"13.05.2020\",\"confirmed\":3368,\"deaths\":32,\"cured\":1218},{\"date\":\"14.05.2020\",\"confirmed\":3659,\"deaths\":35,\"cured\":1323},{\"date\":\"15.05.2020\",\"confirmed\":3960,\"deaths\":38,\"cured\":1432},{\"date\":\"16.05.2020\",\"confirmed\":4271,\"deaths\":41,\"cured\":1545},{\"date\":\"17.05.2020\",\"confirmed\":4593,\"deaths\":44,\"cured\":1662},{\"date\":\"18.05.2020\",\"confirmed\":4926,\"deaths\":47,\"cured\":1783},{\"date\":\"19.05.2020\",\"confirmed\":5271,\"deaths\":50,\"cured\":1908},{\"date\":\"20.05.2020\",\"confirmed\":5628,\"deaths\":53,\"cured\":2037},{\"date\":\"21.05.2020\",\"confirmed\":5997,\"deaths\":56,\"cured\":2171},{\"date\":\"22.05.2020\",\"confirmed\":6379,\"deaths\":60,\"cured\":2309},{\"date\":\"23.05.2020\",\"confirmed\":6774,\"deaths\":64,\"cured\":2452},{\"date\":\"24.05.2020\",\"confirmed\":7183,\"deaths\":68,\"cured\":2600},{\"date\":\"25.05.2020\",\"confirmed\":7606,\"deaths\":72,\"cured\":2753},{\"date\":\"26.05.2020\",\"confirmed\":8043,\"deaths\":76,\"cured\":2911},{\"date\":\"27.05.2020\",\"confirmed\":8495,\"deaths\":80,\"cured\":3075},{\"date\":\"28.05.2020\",\"confirmed\":8963,\"deaths\":84,\"cured\":3244}]},{\"country\":\"Свердловская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":93,\"deaths\":1,\"cured\":37},{\"date\":\"30.04.2020\",\"confirmed\":188,\"deaths\":1,\"cured\":74},{\"date\":\"01.05.2020\",\"confirmed\":286,\"deaths\":1,\"cured\":112},{\"date\":\"02.05.2020\",\"confirmed\":387,\"deaths\":1,\"cured\":152},{\"date\":\"03.05.2020\",\"confirmed\":492,\"deaths\":1,\"cured\":193},{\"date\":\"04.05.2020\",\"confirmed\":601,\"deaths\":1,\"cured\":235},{\"date\":\"05.05.2020\",\"confirmed\":713,\"deaths\":1,\"cured\":279},{\"date\":\"06.05.2020\",\"confirmed\":829,\"deaths\":1,\"cured\":324},{\"date\":\"07.05.2020\",\"confirmed\":949,\"deaths\":2,\"cured\":371},{\"date\":\"08.05.2020\",\"confirmed\":1073,\"deaths\":3,\"cured\":419},{\"date\":\"09.05.2020\",\"confirmed\":1202,\"deaths\":4,\"cured\":469},{\"date\":\"10.05.2020\",\"confirmed\":1335,\"deaths\":5,\"cured\":521},{\"date\":\"11.05.2020\",\"confirmed\":1473,\"deaths\":6,\"cured\":575},{\"date\":\"12.05.2020\",\"confirmed\":1615,\"deaths\":7,\"cured\":630},{\"date\":\"13.05.2020\",\"confirmed\":1762,\"deaths\":8,\"cured\":687},{\"date\":\"14.05.2020\",\"confirmed\":1914,\"deaths\":9,\"cured\":746},{\"date\":\"15.05.2020\",\"confirmed\":2072,\"deaths\":10,\"cured\":807},{\"date\":\"16.05.2020\",\"confirmed\":2235,\"deaths\":11,\"cured\":871},{\"date\":\"17.05.2020\",\"confirmed\":2404,\"deaths\":12,\"cured\":937},{\"date\":\"18.05.2020\",\"confirmed\":2579,\"deaths\":13,\"cured\":1005},{\"date\":\"19.05.2020\",\"confirmed\":2760,\"deaths\":14,\"cured\":1075},{\"date\":\"20.05.2020\",\"confirmed\":2947,\"deaths\":15,\"cured\":1148},{\"date\":\"21.05.2020\",\"confirmed\":3140,\"deaths\":16,\"cured\":1223},{\"date\":\"22.05.2020\",\"confirmed\":3340,\"deaths\":17,\"cured\":1301},{\"date\":\"23.05.2020\",\"confirmed\":3547,\"deaths\":18,\"cured\":1382},{\"date\":\"24.05.2020\",\"confirmed\":3761,\"deaths\":19,\"cured\":1465},{\"date\":\"25.05.2020\",\"confirmed\":3982,\"deaths\":20,\"cured\":1551},{\"date\":\"26.05.2020\",\"confirmed\":4211,\"deaths\":21,\"cured\":1640},{\"date\":\"27.05.2020\",\"confirmed\":4448,\"deaths\":22,\"cured\":1732},{\"date\":\"28.05.2020\",\"confirmed\":4693,\"deaths\":23,\"cured\":1827}]},{\"country\":\"Республика Дагестан\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":2,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":91,\"deaths\":4,\"cured\":87},{\"date\":\"30.04.2020\",\"confirmed\":184,\"deaths\":7,\"cured\":176},{\"date\":\"01.05.2020\",\"confirmed\":280,\"deaths\":10,\"cured\":268},{\"date\":\"02.05.2020\",\"confirmed\":379,\"deaths\":13,\"cured\":363},{\"date\":\"03.05.2020\",\"confirmed\":481,\"deaths\":16,\"cured\":461},{\"date\":\"04.05.2020\",\"confirmed\":587,\"deaths\":19,\"cured\":563},{\"date\":\"05.05.2020\",\"confirmed\":697,\"deaths\":23,\"cured\":668},{\"date\":\"06.05.2020\",\"confirmed\":810,\"deaths\":27,\"cured\":777},{\"date\":\"07.05.2020\",\"confirmed\":927,\"deaths\":31,\"cured\":890},{\"date\":\"08.05.2020\",\"confirmed\":1048,\"deaths\":35,\"cured\":1007},{\"date\":\"09.05.2020\",\"confirmed\":1173,\"deaths\":39,\"cured\":1128},{\"date\":\"10.05.2020\",\"confirmed\":1303,\"deaths\":43,\"cured\":1253},{\"date\":\"11.05.2020\",\"confirmed\":1437,\"deaths\":47,\"cured\":1382},{\"date\":\"12.05.2020\",\"confirmed\":1576,\"deaths\":52,\"cured\":1516},{\"date\":\"13.05.2020\",\"confirmed\":1720,\"deaths\":57,\"cured\":1654},{\"date\":\"14.05.2020\",\"confirmed\":1869,\"deaths\":62,\"cured\":1797},{\"date\":\"15.05.2020\",\"confirmed\":2023,\"deaths\":67,\"cured\":1945},{\"date\":\"16.05.2020\",\"confirmed\":2182,\"deaths\":72,\"cured\":2098},{\"date\":\"17.05.2020\",\"confirmed\":2347,\"deaths\":77,\"cured\":2256},{\"date\":\"18.05.2020\",\"confirmed\":2517,\"deaths\":83,\"cured\":2420},{\"date\":\"19.05.2020\",\"confirmed\":2693,\"deaths\":89,\"cured\":2589},{\"date\":\"20.05.2020\",\"confirmed\":2875,\"deaths\":95,\"cured\":2764},{\"date\":\"21.05.2020\",\"confirmed\":3064,\"deaths\":101,\"cured\":2945},{\"date\":\"22.05.2020\",\"confirmed\":3259,\"deaths\":107,\"cured\":3132},{\"date\":\"23.05.2020\",\"confirmed\":3461,\"deaths\":114,\"cured\":3326},{\"date\":\"24.05.2020\",\"confirmed\":3670,\"deaths\":121,\"cured\":3527},{\"date\":\"25.05.2020\",\"confirmed\":3886,\"deaths\":128,\"cured\":3735},{\"date\":\"26.05.2020\",\"confirmed\":4109,\"deaths\":135,\"cured\":3950},{\"date\":\"27.05.2020\",\"confirmed\":4340,\"deaths\":143,\"cured\":4172},{\"date\":\"28.05.2020\",\"confirmed\":4579,\"deaths\":151,\"cured\":4402}]},{\"country\":\"Ростовская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":0,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":83,\"deaths\":1,\"cured\":30},{\"date\":\"30.04.2020\",\"confirmed\":170,\"deaths\":2,\"cured\":61},{\"date\":\"01.05.2020\",\"confirmed\":260,\"deaths\":3,\"cured\":93},{\"date\":\"02.05.2020\",\"confirmed\":353,\"deaths\":4,\"cured\":126},{\"date\":\"03.05.2020\",\"confirmed\":449,\"deaths\":5,\"cured\":160},{\"date\":\"04.05.2020\",\"confirmed\":548,\"deaths\":6,\"cured\":195},{\"date\":\"05.05.2020\",\"confirmed\":651,\"deaths\":7,\"cured\":232},{\"date\":\"06.05.2020\",\"confirmed\":757,\"deaths\":8,\"cured\":270},{\"date\":\"07.05.2020\",\"confirmed\":867,\"deaths\":9,\"cured\":309},{\"date\":\"08.05.2020\",\"confirmed\":981,\"deaths\":10,\"cured\":350},{\"date\":\"09.05.2020\",\"confirmed\":1098,\"deaths\":11,\"cured\":392},{\"date\":\"10.05.2020\",\"confirmed\":1220,\"deaths\":12,\"cured\":435},{\"date\":\"11.05.2020\",\"confirmed\":1346,\"deaths\":13,\"cured\":480},{\"date\":\"12.05.2020\",\"confirmed\":1476,\"deaths\":14,\"cured\":526},{\"date\":\"13.05.2020\",\"confirmed\":1611,\"deaths\":15,\"cured\":574},{\"date\":\"14.05.2020\",\"confirmed\":1750,\"deaths\":16,\"cured\":624},{\"date\":\"15.05.2020\",\"confirmed\":1894,\"deaths\":17,\"cured\":675},{\"date\":\"16.05.2020\",\"confirmed\":2043,\"deaths\":18,\"cured\":728},{\"date\":\"17.05.2020\",\"confirmed\":2197,\"deaths\":19,\"cured\":783},{\"date\":\"18.05.2020\",\"confirmed\":2356,\"deaths\":20,\"cured\":840},{\"date\":\"19.05.2020\",\"confirmed\":2521,\"deaths\":21,\"cured\":899},{\"date\":\"20.05.2020\",\"confirmed\":2692,\"deaths\":22,\"cured\":960},{\"date\":\"21.05.2020\",\"confirmed\":2869,\"deaths\":23,\"cured\":1023},{\"date\":\"22.05.2020\",\"confirmed\":3052,\"deaths\":24,\"cured\":1088},{\"date\":\"23.05.2020\",\"confirmed\":3241,\"deaths\":25,\"cured\":1155},{\"date\":\"24.05.2020\",\"confirmed\":3436,\"deaths\":27,\"cured\":1225},{\"date\":\"25.05.2020\",\"confirmed\":3638,\"deaths\":29,\"cured\":1297},{\"date\":\"26.05.2020\",\"confirmed\":3847,\"deaths\":31,\"cured\":1372},{\"date\":\"27.05.2020\",\"confirmed\":4063,\"deaths\":33,\"cured\":1449},{\"date\":\"28.05.2020\",\"confirmed\":4287,\"deaths\":35,\"cured\":1529}]},{\"country\":\"Красноярский край\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":2,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":77,\"deaths\":0,\"cured\":17},{\"date\":\"30.04.2020\",\"confirmed\":155,\"deaths\":0,\"cured\":34},{\"date\":\"01.05.2020\",\"confirmed\":235,\"deaths\":1,\"cured\":51},{\"date\":\"02.05.2020\",\"confirmed\":318,\"deaths\":2,\"cured\":69},{\"date\":\"03.05.2020\",\"confirmed\":404,\"deaths\":3,\"cured\":88},{\"date\":\"04.05.2020\",\"confirmed\":493,\"deaths\":4,\"cured\":107},{\"date\":\"05.05.2020\",\"confirmed\":585,\"deaths\":5,\"cured\":127},{\"date\":\"06.05.2020\",\"confirmed\":680,\"deaths\":6,\"cured\":148},{\"date\":\"07.05.2020\",\"confirmed\":779,\"deaths\":7,\"cured\":169},{\"date\":\"08.05.2020\",\"confirmed\":881,\"deaths\":8,\"cured\":191},{\"date\":\"09.05.2020\",\"confirmed\":986,\"deaths\":9,\"cured\":214},{\"date\":\"10.05.2020\",\"confirmed\":1095,\"deaths\":10,\"cured\":238},{\"date\":\"11.05.2020\",\"confirmed\":1208,\"deaths\":11,\"cured\":262},{\"date\":\"12.05.2020\",\"confirmed\":1325,\"deaths\":12,\"cured\":287},{\"date\":\"13.05.2020\",\"confirmed\":1446,\"deaths\":13,\"cured\":313},{\"date\":\"14.05.2020\",\"confirmed\":1571,\"deaths\":14,\"cured\":340},{\"date\":\"15.05.2020\",\"confirmed\":1700,\"deaths\":15,\"cured\":368},{\"date\":\"16.05.2020\",\"confirmed\":1834,\"deaths\":16,\"cured\":397},{\"date\":\"17.05.2020\",\"confirmed\":1972,\"deaths\":17,\"cured\":427},{\"date\":\"18.05.2020\",\"confirmed\":2115,\"deaths\":18,\"cured\":458},{\"date\":\"19.05.2020\",\"confirmed\":2263,\"deaths\":19,\"cured\":490},{\"date\":\"20.05.2020\",\"confirmed\":2416,\"deaths\":20,\"cured\":523},{\"date\":\"21.05.2020\",\"confirmed\":2574,\"deaths\":21,\"cured\":557},{\"date\":\"22.05.2020\",\"confirmed\":2738,\"deaths\":22,\"cured\":593},{\"date\":\"23.05.2020\",\"confirmed\":2908,\"deaths\":23,\"cured\":630},{\"date\":\"24.05.2020\",\"confirmed\":3083,\"deaths\":24,\"cured\":668},{\"date\":\"25.05.2020\",\"confirmed\":3264,\"deaths\":25,\"cured\":707},{\"date\":\"26.05.2020\",\"confirmed\":3452,\"deaths\":26,\"cured\":748},{\"date\":\"27.05.2020\",\"confirmed\":3646,\"deaths\":27,\"cured\":790},{\"date\":\"28.05.2020\",\"confirmed\":3847,\"deaths\":29,\"cured\":834}]},{\"country\":\"Калужская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":72,\"deaths\":0,\"cured\":22},{\"date\":\"30.04.2020\",\"confirmed\":146,\"deaths\":0,\"cured\":47},{\"date\":\"01.05.2020\",\"confirmed\":222,\"deaths\":1,\"cured\":73},{\"date\":\"02.05.2020\",\"confirmed\":301,\"deaths\":2,\"cured\":100},{\"date\":\"03.05.2020\",\"confirmed\":383,\"deaths\":3,\"cured\":128},{\"date\":\"04.05.2020\",\"confirmed\":467,\"deaths\":4,\"cured\":157},{\"date\":\"05.05.2020\",\"confirmed\":554,\"deaths\":5,\"cured\":187},{\"date\":\"06.05.2020\",\"confirmed\":644,\"deaths\":6,\"cured\":218},{\"date\":\"07.05.2020\",\"confirmed\":738,\"deaths\":7,\"cured\":250},{\"date\":\"08.05.2020\",\"confirmed\":835,\"deaths\":8,\"cured\":283},{\"date\":\"09.05.2020\",\"confirmed\":935,\"deaths\":9,\"cured\":317},{\"date\":\"10.05.2020\",\"confirmed\":1039,\"deaths\":10,\"cured\":352},{\"date\":\"11.05.2020\",\"confirmed\":1146,\"deaths\":11,\"cured\":388},{\"date\":\"12.05.2020\",\"confirmed\":1257,\"deaths\":12,\"cured\":426},{\"date\":\"13.05.2020\",\"confirmed\":1372,\"deaths\":13,\"cured\":465},{\"date\":\"14.05.2020\",\"confirmed\":1491,\"deaths\":14,\"cured\":505},{\"date\":\"15.05.2020\",\"confirmed\":1614,\"deaths\":15,\"cured\":547},{\"date\":\"16.05.2020\",\"confirmed\":1741,\"deaths\":16,\"cured\":590},{\"date\":\"17.05.2020\",\"confirmed\":1872,\"deaths\":17,\"cured\":634},{\"date\":\"18.05.2020\",\"confirmed\":2008,\"deaths\":18,\"cured\":680},{\"date\":\"19.05.2020\",\"confirmed\":2149,\"deaths\":19,\"cured\":728},{\"date\":\"20.05.2020\",\"confirmed\":2294,\"deaths\":20,\"cured\":777},{\"date\":\"21.05.2020\",\"confirmed\":2444,\"deaths\":21,\"cured\":828},{\"date\":\"22.05.2020\",\"confirmed\":2600,\"deaths\":22,\"cured\":881},{\"date\":\"23.05.2020\",\"confirmed\":2761,\"deaths\":23,\"cured\":936},{\"date\":\"24.05.2020\",\"confirmed\":2928,\"deaths\":24,\"cured\":992},{\"date\":\"25.05.2020\",\"confirmed\":3100,\"deaths\":25,\"cured\":1050},{\"date\":\"26.05.2020\",\"confirmed\":3278,\"deaths\":26,\"cured\":1110},{\"date\":\"27.05.2020\",\"confirmed\":3462,\"deaths\":27,\"cured\":1172},{\"date\":\"28.05.2020\",\"confirmed\":3653,\"deaths\":29,\"cured\":1237}]},{\"country\":\"Краснодарский край\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":71,\"deaths\":0,\"cured\":48},{\"date\":\"30.04.2020\",\"confirmed\":143,\"deaths\":0,\"cured\":96},{\"date\":\"01.05.2020\",\"confirmed\":218,\"deaths\":1,\"cured\":146},{\"date\":\"02.05.2020\",\"confirmed\":295,\"deaths\":2,\"cured\":198},{\"date\":\"03.05.2020\",\"confirmed\":375,\"deaths\":3,\"cured\":252},{\"date\":\"04.05.2020\",\"confirmed\":458,\"deaths\":4,\"cured\":307},{\"date\":\"05.05.2020\",\"confirmed\":544,\"deaths\":5,\"cured\":364},{\"date\":\"06.05.2020\",\"confirmed\":633,\"deaths\":6,\"cured\":423},{\"date\":\"07.05.2020\",\"confirmed\":725,\"deaths\":7,\"cured\":484},{\"date\":\"08.05.2020\",\"confirmed\":820,\"deaths\":8,\"cured\":547},{\"date\":\"09.05.2020\",\"confirmed\":918,\"deaths\":9,\"cured\":613},{\"date\":\"10.05.2020\",\"confirmed\":1020,\"deaths\":10,\"cured\":681},{\"date\":\"11.05.2020\",\"confirmed\":1125,\"deaths\":11,\"cured\":751},{\"date\":\"12.05.2020\",\"confirmed\":1234,\"deaths\":12,\"cured\":824},{\"date\":\"13.05.2020\",\"confirmed\":1346,\"deaths\":13,\"cured\":899},{\"date\":\"14.05.2020\",\"confirmed\":1462,\"deaths\":14,\"cured\":977},{\"date\":\"15.05.2020\",\"confirmed\":1582,\"deaths\":15,\"cured\":1057},{\"date\":\"16.05.2020\",\"confirmed\":1706,\"deaths\":16,\"cured\":1140},{\"date\":\"17.05.2020\",\"confirmed\":1835,\"deaths\":17,\"cured\":1226},{\"date\":\"18.05.2020\",\"confirmed\":1968,\"deaths\":18,\"cured\":1315},{\"date\":\"19.05.2020\",\"confirmed\":2106,\"deaths\":19,\"cured\":1407},{\"date\":\"20.05.2020\",\"confirmed\":2249,\"deaths\":20,\"cured\":1502},{\"date\":\"21.05.2020\",\"confirmed\":2396,\"deaths\":21,\"cured\":1601},{\"date\":\"22.05.2020\",\"confirmed\":2549,\"deaths\":22,\"cured\":1703},{\"date\":\"23.05.2020\",\"confirmed\":2707,\"deaths\":23,\"cured\":1808},{\"date\":\"24.05.2020\",\"confirmed\":2870,\"deaths\":24,\"cured\":1917},{\"date\":\"25.05.2020\",\"confirmed\":3039,\"deaths\":25,\"cured\":2030},{\"date\":\"26.05.2020\",\"confirmed\":3214,\"deaths\":26,\"cured\":2147},{\"date\":\"27.05.2020\",\"confirmed\":3395,\"deaths\":27,\"cured\":2268},{\"date\":\"28.05.2020\",\"confirmed\":3582,\"deaths\":29,\"cured\":2393}]},{\"country\":\"Тульская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":70,\"deaths\":0,\"cured\":32},{\"date\":\"30.04.2020\",\"confirmed\":141,\"deaths\":1,\"cured\":64},{\"date\":\"01.05.2020\",\"confirmed\":215,\"deaths\":2,\"cured\":97},{\"date\":\"02.05.2020\",\"confirmed\":291,\"deaths\":3,\"cured\":131},{\"date\":\"03.05.2020\",\"confirmed\":370,\"deaths\":4,\"cured\":166},{\"date\":\"04.05.2020\",\"confirmed\":452,\"deaths\":5,\"cured\":202},{\"date\":\"05.05.2020\",\"confirmed\":537,\"deaths\":6,\"cured\":239},{\"date\":\"06.05.2020\",\"confirmed\":624,\"deaths\":7,\"cured\":278},{\"date\":\"07.05.2020\",\"confirmed\":714,\"deaths\":8,\"cured\":318},{\"date\":\"08.05.2020\",\"confirmed\":808,\"deaths\":9,\"cured\":359},{\"date\":\"09.05.2020\",\"confirmed\":905,\"deaths\":10,\"cured\":402},{\"date\":\"10.05.2020\",\"confirmed\":1005,\"deaths\":11,\"cured\":446},{\"date\":\"11.05.2020\",\"confirmed\":1109,\"deaths\":12,\"cured\":492},{\"date\":\"12.05.2020\",\"confirmed\":1216,\"deaths\":13,\"cured\":539},{\"date\":\"13.05.2020\",\"confirmed\":1327,\"deaths\":14,\"cured\":588},{\"date\":\"14.05.2020\",\"confirmed\":1442,\"deaths\":15,\"cured\":639},{\"date\":\"15.05.2020\",\"confirmed\":1561,\"deaths\":16,\"cured\":692},{\"date\":\"16.05.2020\",\"confirmed\":1684,\"deaths\":17,\"cured\":746},{\"date\":\"17.05.2020\",\"confirmed\":1811,\"deaths\":18,\"cured\":802},{\"date\":\"18.05.2020\",\"confirmed\":1942,\"deaths\":19,\"cured\":860},{\"date\":\"19.05.2020\",\"confirmed\":2078,\"deaths\":20,\"cured\":920},{\"date\":\"20.05.2020\",\"confirmed\":2219,\"deaths\":21,\"cured\":982},{\"date\":\"21.05.2020\",\"confirmed\":2364,\"deaths\":22,\"cured\":1046},{\"date\":\"22.05.2020\",\"confirmed\":2514,\"deaths\":23,\"cured\":1113},{\"date\":\"23.05.2020\",\"confirmed\":2670,\"deaths\":24,\"cured\":1182},{\"date\":\"24.05.2020\",\"confirmed\":2831,\"deaths\":25,\"cured\":1253},{\"date\":\"25.05.2020\",\"confirmed\":2998,\"deaths\":26,\"cured\":1327},{\"date\":\"26.05.2020\",\"confirmed\":3170,\"deaths\":27,\"cured\":1403},{\"date\":\"27.05.2020\",\"confirmed\":3348,\"deaths\":28,\"cured\":1482},{\"date\":\"28.05.2020\",\"confirmed\":3532,\"deaths\":30,\"cured\":1564}]},{\"country\":\"Брянская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":67,\"deaths\":0,\"cured\":38},{\"date\":\"30.04.2020\",\"confirmed\":135,\"deaths\":1,\"cured\":76},{\"date\":\"01.05.2020\",\"confirmed\":205,\"deaths\":2,\"cured\":116},{\"date\":\"02.05.2020\",\"confirmed\":278,\"deaths\":3,\"cured\":157},{\"date\":\"03.05.2020\",\"confirmed\":353,\"deaths\":4,\"cured\":199},{\"date\":\"04.05.2020\",\"confirmed\":431,\"deaths\":5,\"cured\":243},{\"date\":\"05.05.2020\",\"confirmed\":512,\"deaths\":6,\"cured\":288},{\"date\":\"06.05.2020\",\"confirmed\":595,\"deaths\":7,\"cured\":335},{\"date\":\"07.05.2020\",\"confirmed\":681,\"deaths\":8,\"cured\":384},{\"date\":\"08.05.2020\",\"confirmed\":770,\"deaths\":9,\"cured\":434},{\"date\":\"09.05.2020\",\"confirmed\":862,\"deaths\":10,\"cured\":486},{\"date\":\"10.05.2020\",\"confirmed\":957,\"deaths\":11,\"cured\":540},{\"date\":\"11.05.2020\",\"confirmed\":1056,\"deaths\":12,\"cured\":596},{\"date\":\"12.05.2020\",\"confirmed\":1158,\"deaths\":13,\"cured\":653},{\"date\":\"13.05.2020\",\"confirmed\":1264,\"deaths\":14,\"cured\":712},{\"date\":\"14.05.2020\",\"confirmed\":1373,\"deaths\":15,\"cured\":773},{\"date\":\"15.05.2020\",\"confirmed\":1486,\"deaths\":16,\"cured\":837},{\"date\":\"16.05.2020\",\"confirmed\":1603,\"deaths\":17,\"cured\":903},{\"date\":\"17.05.2020\",\"confirmed\":1724,\"deaths\":18,\"cured\":971},{\"date\":\"18.05.2020\",\"confirmed\":1849,\"deaths\":19,\"cured\":1041},{\"date\":\"19.05.2020\",\"confirmed\":1978,\"deaths\":20,\"cured\":1114},{\"date\":\"20.05.2020\",\"confirmed\":2112,\"deaths\":21,\"cured\":1189},{\"date\":\"21.05.2020\",\"confirmed\":2250,\"deaths\":22,\"cured\":1267},{\"date\":\"22.05.2020\",\"confirmed\":2393,\"deaths\":23,\"cured\":1348},{\"date\":\"23.05.2020\",\"confirmed\":2541,\"deaths\":24,\"cured\":1431},{\"date\":\"24.05.2020\",\"confirmed\":2694,\"deaths\":25,\"cured\":1517},{\"date\":\"25.05.2020\",\"confirmed\":2853,\"deaths\":26,\"cured\":1606},{\"date\":\"26.05.2020\",\"confirmed\":3017,\"deaths\":27,\"cured\":1698},{\"date\":\"27.05.2020\",\"confirmed\":3187,\"deaths\":29,\"cured\":1794},{\"date\":\"28.05.2020\",\"confirmed\":3363,\"deaths\":31,\"cured\":1893}]},{\"country\":\"Рязанская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":65,\"deaths\":0,\"cured\":17},{\"date\":\"30.04.2020\",\"confirmed\":131,\"deaths\":0,\"cured\":34},{\"date\":\"01.05.2020\",\"confirmed\":200,\"deaths\":0,\"cured\":52},{\"date\":\"02.05.2020\",\"confirmed\":271,\"deaths\":0,\"cured\":70},{\"date\":\"03.05.2020\",\"confirmed\":344,\"deaths\":0,\"cured\":89},{\"date\":\"04.05.2020\",\"confirmed\":420,\"deaths\":0,\"cured\":109},{\"date\":\"05.05.2020\",\"confirmed\":499,\"deaths\":0,\"cured\":129},{\"date\":\"06.05.2020\",\"confirmed\":580,\"deaths\":0,\"cured\":150},{\"date\":\"07.05.2020\",\"confirmed\":664,\"deaths\":0,\"cured\":172},{\"date\":\"08.05.2020\",\"confirmed\":751,\"deaths\":0,\"cured\":194},{\"date\":\"09.05.2020\",\"confirmed\":841,\"deaths\":0,\"cured\":217},{\"date\":\"10.05.2020\",\"confirmed\":934,\"deaths\":0,\"cured\":241},{\"date\":\"11.05.2020\",\"confirmed\":1030,\"deaths\":0,\"cured\":266},{\"date\":\"12.05.2020\",\"confirmed\":1130,\"deaths\":0,\"cured\":292},{\"date\":\"13.05.2020\",\"confirmed\":1233,\"deaths\":0,\"cured\":319},{\"date\":\"14.05.2020\",\"confirmed\":1340,\"deaths\":0,\"cured\":347},{\"date\":\"15.05.2020\",\"confirmed\":1450,\"deaths\":0,\"cured\":375},{\"date\":\"16.05.2020\",\"confirmed\":1564,\"deaths\":0,\"cured\":404},{\"date\":\"17.05.2020\",\"confirmed\":1682,\"deaths\":0,\"cured\":434},{\"date\":\"18.05.2020\",\"confirmed\":1804,\"deaths\":0,\"cured\":466},{\"date\":\"19.05.2020\",\"confirmed\":1930,\"deaths\":0,\"cured\":499},{\"date\":\"20.05.2020\",\"confirmed\":2061,\"deaths\":0,\"cured\":533},{\"date\":\"21.05.2020\",\"confirmed\":2196,\"deaths\":0,\"cured\":568},{\"date\":\"22.05.2020\",\"confirmed\":2336,\"deaths\":1,\"cured\":604},{\"date\":\"23.05.2020\",\"confirmed\":2481,\"deaths\":2,\"cured\":641},{\"date\":\"24.05.2020\",\"confirmed\":2631,\"deaths\":3,\"cured\":680},{\"date\":\"25.05.2020\",\"confirmed\":2786,\"deaths\":4,\"cured\":720},{\"date\":\"26.05.2020\",\"confirmed\":2946,\"deaths\":5,\"cured\":761},{\"date\":\"27.05.2020\",\"confirmed\":3112,\"deaths\":6,\"cured\":804},{\"date\":\"28.05.2020\",\"confirmed\":3283,\"deaths\":7,\"cured\":848}]},{\"country\":\"Мурманская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":61,\"deaths\":2,\"cured\":36},{\"date\":\"30.04.2020\",\"confirmed\":123,\"deaths\":5,\"cured\":71},{\"date\":\"01.05.2020\",\"confirmed\":187,\"deaths\":5,\"cured\":107},{\"date\":\"02.05.2020\",\"confirmed\":254,\"deaths\":5,\"cured\":144},{\"date\":\"03.05.2020\",\"confirmed\":323,\"deaths\":5,\"cured\":183},{\"date\":\"04.05.2020\",\"confirmed\":394,\"deaths\":5,\"cured\":223},{\"date\":\"05.05.2020\",\"confirmed\":468,\"deaths\":5,\"cured\":264},{\"date\":\"06.05.2020\",\"confirmed\":544,\"deaths\":5,\"cured\":307},{\"date\":\"07.05.2020\",\"confirmed\":623,\"deaths\":5,\"cured\":351},{\"date\":\"08.05.2020\",\"confirmed\":705,\"deaths\":5,\"cured\":397},{\"date\":\"09.05.2020\",\"confirmed\":789,\"deaths\":5,\"cured\":444},{\"date\":\"10.05.2020\",\"confirmed\":876,\"deaths\":5,\"cured\":493},{\"date\":\"11.05.2020\",\"confirmed\":966,\"deaths\":5,\"cured\":544},{\"date\":\"12.05.2020\",\"confirmed\":1059,\"deaths\":5,\"cured\":596},{\"date\":\"13.05.2020\",\"confirmed\":1156,\"deaths\":5,\"cured\":650},{\"date\":\"14.05.2020\",\"confirmed\":1256,\"deaths\":5,\"cured\":706},{\"date\":\"15.05.2020\",\"confirmed\":1359,\"deaths\":5,\"cured\":764},{\"date\":\"16.05.2020\",\"confirmed\":1466,\"deaths\":5,\"cured\":824},{\"date\":\"17.05.2020\",\"confirmed\":1577,\"deaths\":5,\"cured\":886},{\"date\":\"18.05.2020\",\"confirmed\":1691,\"deaths\":5,\"cured\":950},{\"date\":\"19.05.2020\",\"confirmed\":1809,\"deaths\":5,\"cured\":1016},{\"date\":\"20.05.2020\",\"confirmed\":1931,\"deaths\":5,\"cured\":1085},{\"date\":\"21.05.2020\",\"confirmed\":2058,\"deaths\":5,\"cured\":1156},{\"date\":\"22.05.2020\",\"confirmed\":2189,\"deaths\":5,\"cured\":1230},{\"date\":\"23.05.2020\",\"confirmed\":2325,\"deaths\":5,\"cured\":1306},{\"date\":\"24.05.2020\",\"confirmed\":2465,\"deaths\":5,\"cured\":1385},{\"date\":\"25.05.2020\",\"confirmed\":2610,\"deaths\":5,\"cured\":1467},{\"date\":\"26.05.2020\",\"confirmed\":2760,\"deaths\":5,\"cured\":1551},{\"date\":\"27.05.2020\",\"confirmed\":2915,\"deaths\":6,\"cured\":1638},{\"date\":\"28.05.2020\",\"confirmed\":3076,\"deaths\":7,\"cured\":1728}]},{\"country\":\"Республика Татарстан\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":60,\"deaths\":0,\"cured\":47},{\"date\":\"30.04.2020\",\"confirmed\":121,\"deaths\":0,\"cured\":95},{\"date\":\"01.05.2020\",\"confirmed\":184,\"deaths\":0,\"cured\":144},{\"date\":\"02.05.2020\",\"confirmed\":249,\"deaths\":0,\"cured\":195},{\"date\":\"03.05.2020\",\"confirmed\":317,\"deaths\":0,\"cured\":248},{\"date\":\"04.05.2020\",\"confirmed\":387,\"deaths\":1,\"cured\":302},{\"date\":\"05.05.2020\",\"confirmed\":459,\"deaths\":1,\"cured\":358},{\"date\":\"06.05.2020\",\"confirmed\":534,\"deaths\":1,\"cured\":416},{\"date\":\"07.05.2020\",\"confirmed\":611,\"deaths\":1,\"cured\":476},{\"date\":\"08.05.2020\",\"confirmed\":691,\"deaths\":1,\"cured\":538},{\"date\":\"09.05.2020\",\"confirmed\":774,\"deaths\":1,\"cured\":602},{\"date\":\"10.05.2020\",\"confirmed\":860,\"deaths\":1,\"cured\":669},{\"date\":\"11.05.2020\",\"confirmed\":949,\"deaths\":1,\"cured\":738},{\"date\":\"12.05.2020\",\"confirmed\":1041,\"deaths\":1,\"cured\":809},{\"date\":\"13.05.2020\",\"confirmed\":1136,\"deaths\":1,\"cured\":883},{\"date\":\"14.05.2020\",\"confirmed\":1234,\"deaths\":1,\"cured\":959},{\"date\":\"15.05.2020\",\"confirmed\":1336,\"deaths\":1,\"cured\":1038},{\"date\":\"16.05.2020\",\"confirmed\":1441,\"deaths\":1,\"cured\":1120},{\"date\":\"17.05.2020\",\"confirmed\":1550,\"deaths\":1,\"cured\":1204},{\"date\":\"18.05.2020\",\"confirmed\":1663,\"deaths\":1,\"cured\":1291},{\"date\":\"19.05.2020\",\"confirmed\":1779,\"deaths\":1,\"cured\":1381},{\"date\":\"20.05.2020\",\"confirmed\":1899,\"deaths\":2,\"cured\":1474},{\"date\":\"21.05.2020\",\"confirmed\":2024,\"deaths\":3,\"cured\":1571},{\"date\":\"22.05.2020\",\"confirmed\":2153,\"deaths\":4,\"cured\":1671},{\"date\":\"23.05.2020\",\"confirmed\":2286,\"deaths\":5,\"cured\":1775},{\"date\":\"24.05.2020\",\"confirmed\":2424,\"deaths\":6,\"cured\":1882},{\"date\":\"25.05.2020\",\"confirmed\":2567,\"deaths\":7,\"cured\":1993},{\"date\":\"26.05.2020\",\"confirmed\":2715,\"deaths\":8,\"cured\":2108},{\"date\":\"27.05.2020\",\"confirmed\":2868,\"deaths\":9,\"cured\":2227},{\"date\":\"28.05.2020\",\"confirmed\":3026,\"deaths\":10,\"cured\":2350}]},{\"country\":\"Республика Башкортостан\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":1,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":60,\"deaths\":4,\"cured\":19},{\"date\":\"30.04.2020\",\"confirmed\":121,\"deaths\":4,\"cured\":38},{\"date\":\"01.05.2020\",\"confirmed\":184,\"deaths\":4,\"cured\":58},{\"date\":\"02.05.2020\",\"confirmed\":249,\"deaths\":4,\"cured\":79},{\"date\":\"03.05.2020\",\"confirmed\":317,\"deaths\":4,\"cured\":100},{\"date\":\"04.05.2020\",\"confirmed\":387,\"deaths\":4,\"cured\":122},{\"date\":\"05.05.2020\",\"confirmed\":459,\"deaths\":4,\"cured\":145},{\"date\":\"06.05.2020\",\"confirmed\":534,\"deaths\":4,\"cured\":168},{\"date\":\"07.05.2020\",\"confirmed\":611,\"deaths\":4,\"cured\":192},{\"date\":\"08.05.2020\",\"confirmed\":691,\"deaths\":4,\"cured\":217},{\"date\":\"09.05.2020\",\"confirmed\":774,\"deaths\":4,\"cured\":243},{\"date\":\"10.05.2020\",\"confirmed\":860,\"deaths\":4,\"cured\":270},{\"date\":\"11.05.2020\",\"confirmed\":949,\"deaths\":4,\"cured\":298},{\"date\":\"12.05.2020\",\"confirmed\":1041,\"deaths\":4,\"cured\":327},{\"date\":\"13.05.2020\",\"confirmed\":1136,\"deaths\":4,\"cured\":357},{\"date\":\"14.05.2020\",\"confirmed\":1234,\"deaths\":4,\"cured\":388},{\"date\":\"15.05.2020\",\"confirmed\":1336,\"deaths\":5,\"cured\":420},{\"date\":\"16.05.2020\",\"confirmed\":1441,\"deaths\":6,\"cured\":453},{\"date\":\"17.05.2020\",\"confirmed\":1550,\"deaths\":7,\"cured\":487},{\"date\":\"18.05.2020\",\"confirmed\":1662,\"deaths\":8,\"cured\":522},{\"date\":\"19.05.2020\",\"confirmed\":1778,\"deaths\":9,\"cured\":558},{\"date\":\"20.05.2020\",\"confirmed\":1898,\"deaths\":10,\"cured\":596},{\"date\":\"21.05.2020\",\"confirmed\":2022,\"deaths\":11,\"cured\":635},{\"date\":\"22.05.2020\",\"confirmed\":2151,\"deaths\":12,\"cured\":675},{\"date\":\"23.05.2020\",\"confirmed\":2284,\"deaths\":13,\"cured\":717},{\"date\":\"24.05.2020\",\"confirmed\":2422,\"deaths\":14,\"cured\":760},{\"date\":\"25.05.2020\",\"confirmed\":2564,\"deaths\":15,\"cured\":805},{\"date\":\"26.05.2020\",\"confirmed\":2711,\"deaths\":16,\"cured\":851},{\"date\":\"27.05.2020\",\"confirmed\":2863,\"deaths\":17,\"cured\":899},{\"date\":\"28.05.2020\",\"confirmed\":3021,\"deaths\":18,\"cured\":948}]},{\"country\":\"Ярославская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":2,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":58,\"deaths\":0,\"cured\":12},{\"date\":\"30.04.2020\",\"confirmed\":116,\"deaths\":0,\"cured\":25},{\"date\":\"01.05.2020\",\"confirmed\":176,\"deaths\":0,\"cured\":39},{\"date\":\"02.05.2020\",\"confirmed\":238,\"deaths\":0,\"cured\":53},{\"date\":\"03.05.2020\",\"confirmed\":303,\"deaths\":0,\"cured\":68},{\"date\":\"04.05.2020\",\"confirmed\":370,\"deaths\":0,\"cured\":83},{\"date\":\"05.05.2020\",\"confirmed\":439,\"deaths\":0,\"cured\":99},{\"date\":\"06.05.2020\",\"confirmed\":511,\"deaths\":0,\"cured\":115},{\"date\":\"07.05.2020\",\"confirmed\":585,\"deaths\":0,\"cured\":132},{\"date\":\"08.05.2020\",\"confirmed\":662,\"deaths\":0,\"cured\":149},{\"date\":\"09.05.2020\",\"confirmed\":741,\"deaths\":0,\"cured\":167},{\"date\":\"10.05.2020\",\"confirmed\":823,\"deaths\":0,\"cured\":186},{\"date\":\"11.05.2020\",\"confirmed\":908,\"deaths\":0,\"cured\":205},{\"date\":\"12.05.2020\",\"confirmed\":996,\"deaths\":0,\"cured\":225},{\"date\":\"13.05.2020\",\"confirmed\":1087,\"deaths\":0,\"cured\":245},{\"date\":\"14.05.2020\",\"confirmed\":1181,\"deaths\":0,\"cured\":266},{\"date\":\"15.05.2020\",\"confirmed\":1278,\"deaths\":0,\"cured\":288},{\"date\":\"16.05.2020\",\"confirmed\":1379,\"deaths\":1,\"cured\":311},{\"date\":\"17.05.2020\",\"confirmed\":1483,\"deaths\":2,\"cured\":334},{\"date\":\"18.05.2020\",\"confirmed\":1591,\"deaths\":3,\"cured\":358},{\"date\":\"19.05.2020\",\"confirmed\":1702,\"deaths\":4,\"cured\":383},{\"date\":\"20.05.2020\",\"confirmed\":1817,\"deaths\":5,\"cured\":409},{\"date\":\"21.05.2020\",\"confirmed\":1936,\"deaths\":6,\"cured\":436},{\"date\":\"22.05.2020\",\"confirmed\":2059,\"deaths\":7,\"cured\":464},{\"date\":\"23.05.2020\",\"confirmed\":2186,\"deaths\":8,\"cured\":493},{\"date\":\"24.05.2020\",\"confirmed\":2318,\"deaths\":9,\"cured\":523},{\"date\":\"25.05.2020\",\"confirmed\":2454,\"deaths\":10,\"cured\":554},{\"date\":\"26.05.2020\",\"confirmed\":2595,\"deaths\":11,\"cured\":586},{\"date\":\"27.05.2020\",\"confirmed\":2741,\"deaths\":12,\"cured\":619},{\"date\":\"28.05.2020\",\"confirmed\":2892,\"deaths\":13,\"cured\":653}]},{\"country\":\"Республика Северная Осетия—Алания\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":0,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":55,\"deaths\":1,\"cured\":32},{\"date\":\"30.04.2020\",\"confirmed\":112,\"deaths\":2,\"cured\":66},{\"date\":\"01.05.2020\",\"confirmed\":171,\"deaths\":3,\"cured\":101},{\"date\":\"02.05.2020\",\"confirmed\":232,\"deaths\":4,\"cured\":137},{\"date\":\"03.05.2020\",\"confirmed\":295,\"deaths\":5,\"cured\":174},{\"date\":\"04.05.2020\",\"confirmed\":360,\"deaths\":6,\"cured\":212},{\"date\":\"05.05.2020\",\"confirmed\":427,\"deaths\":7,\"cured\":252},{\"date\":\"06.05.2020\",\"confirmed\":496,\"deaths\":8,\"cured\":293},{\"date\":\"07.05.2020\",\"confirmed\":568,\"deaths\":9,\"cured\":335},{\"date\":\"08.05.2020\",\"confirmed\":642,\"deaths\":10,\"cured\":379},{\"date\":\"09.05.2020\",\"confirmed\":719,\"deaths\":11,\"cured\":424},{\"date\":\"10.05.2020\",\"confirmed\":799,\"deaths\":12,\"cured\":471},{\"date\":\"11.05.2020\",\"confirmed\":881,\"deaths\":13,\"cured\":520},{\"date\":\"12.05.2020\",\"confirmed\":966,\"deaths\":14,\"cured\":570},{\"date\":\"13.05.2020\",\"confirmed\":1054,\"deaths\":15,\"cured\":622},{\"date\":\"14.05.2020\",\"confirmed\":1145,\"deaths\":16,\"cured\":676},{\"date\":\"15.05.2020\",\"confirmed\":1239,\"deaths\":17,\"cured\":732},{\"date\":\"16.05.2020\",\"confirmed\":1336,\"deaths\":18,\"cured\":790},{\"date\":\"17.05.2020\",\"confirmed\":1437,\"deaths\":19,\"cured\":850},{\"date\":\"18.05.2020\",\"confirmed\":1541,\"deaths\":20,\"cured\":912},{\"date\":\"19.05.2020\",\"confirmed\":1649,\"deaths\":21,\"cured\":976},{\"date\":\"20.05.2020\",\"confirmed\":1761,\"deaths\":22,\"cured\":1042},{\"date\":\"21.05.2020\",\"confirmed\":1877,\"deaths\":23,\"cured\":1110},{\"date\":\"22.05.2020\",\"confirmed\":1997,\"deaths\":25,\"cured\":1181},{\"date\":\"23.05.2020\",\"confirmed\":2121,\"deaths\":27,\"cured\":1254},{\"date\":\"24.05.2020\",\"confirmed\":2249,\"deaths\":29,\"cured\":1330},{\"date\":\"25.05.2020\",\"confirmed\":2381,\"deaths\":31,\"cured\":1408},{\"date\":\"26.05.2020\",\"confirmed\":2518,\"deaths\":33,\"cured\":1489},{\"date\":\"27.05.2020\",\"confirmed\":2660,\"deaths\":35,\"cured\":1573},{\"date\":\"28.05.2020\",\"confirmed\":2807,\"deaths\":37,\"cured\":1660}]},{\"country\":\"Курская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":3,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":57,\"deaths\":0,\"cured\":23},{\"date\":\"30.04.2020\",\"confirmed\":113,\"deaths\":0,\"cured\":47},{\"date\":\"01.05.2020\",\"confirmed\":171,\"deaths\":0,\"cured\":72},{\"date\":\"02.05.2020\",\"confirmed\":231,\"deaths\":0,\"cured\":98},{\"date\":\"03.05.2020\",\"confirmed\":293,\"deaths\":0,\"cured\":125},{\"date\":\"04.05.2020\",\"confirmed\":357,\"deaths\":0,\"cured\":153},{\"date\":\"05.05.2020\",\"confirmed\":424,\"deaths\":0,\"cured\":182},{\"date\":\"06.05.2020\",\"confirmed\":493,\"deaths\":0,\"cured\":212},{\"date\":\"07.05.2020\",\"confirmed\":564,\"deaths\":0,\"cured\":243},{\"date\":\"08.05.2020\",\"confirmed\":638,\"deaths\":0,\"cured\":275},{\"date\":\"09.05.2020\",\"confirmed\":714,\"deaths\":0,\"cured\":308},{\"date\":\"10.05.2020\",\"confirmed\":793,\"deaths\":0,\"cured\":342},{\"date\":\"11.05.2020\",\"confirmed\":875,\"deaths\":0,\"cured\":377},{\"date\":\"12.05.2020\",\"confirmed\":960,\"deaths\":0,\"cured\":414},{\"date\":\"13.05.2020\",\"confirmed\":1047,\"deaths\":0,\"cured\":452},{\"date\":\"14.05.2020\",\"confirmed\":1137,\"deaths\":0,\"cured\":491},{\"date\":\"15.05.2020\",\"confirmed\":1231,\"deaths\":0,\"cured\":531},{\"date\":\"16.05.2020\",\"confirmed\":1328,\"deaths\":0,\"cured\":573},{\"date\":\"17.05.2020\",\"confirmed\":1428,\"deaths\":0,\"cured\":616},{\"date\":\"18.05.2020\",\"confirmed\":1532,\"deaths\":0,\"cured\":661},{\"date\":\"19.05.2020\",\"confirmed\":1639,\"deaths\":1,\"cured\":707},{\"date\":\"20.05.2020\",\"confirmed\":1750,\"deaths\":2,\"cured\":755},{\"date\":\"21.05.2020\",\"confirmed\":1865,\"deaths\":3,\"cured\":805},{\"date\":\"22.05.2020\",\"confirmed\":1984,\"deaths\":4,\"cured\":856},{\"date\":\"23.05.2020\",\"confirmed\":2107,\"deaths\":5,\"cured\":909},{\"date\":\"24.05.2020\",\"confirmed\":2234,\"deaths\":6,\"cured\":964},{\"date\":\"25.05.2020\",\"confirmed\":2365,\"deaths\":7,\"cured\":1021},{\"date\":\"26.05.2020\",\"confirmed\":2501,\"deaths\":8,\"cured\":1080},{\"date\":\"27.05.2020\",\"confirmed\":2642,\"deaths\":9,\"cured\":1141},{\"date\":\"28.05.2020\",\"confirmed\":2787,\"deaths\":10,\"cured\":1204}]},{\"country\":\"Тамбовская область\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":2,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":56,\"deaths\":0,\"cured\":20},{\"date\":\"30.04.2020\",\"confirmed\":112,\"deaths\":0,\"cured\":40},{\"date\":\"01.05.2020\",\"confirmed\":170,\"deaths\":0,\"cured\":61},{\"date\":\"02.05.2020\",\"confirmed\":230,\"deaths\":0,\"cured\":82},{\"date\":\"03.05.2020\",\"confirmed\":292,\"deaths\":0,\"cured\":104},{\"date\":\"04.05.2020\",\"confirmed\":356,\"deaths\":0,\"cured\":127},{\"date\":\"05.05.2020\",\"confirmed\":422,\"deaths\":0,\"cured\":151},{\"date\":\"06.05.2020\",\"confirmed\":491,\"deaths\":0,\"cured\":176},{\"date\":\"07.05.2020\",\"confirmed\":562,\"deaths\":0,\"cured\":201},{\"date\":\"08.05.2020\",\"confirmed\":635,\"deaths\":0,\"cured\":227},{\"date\":\"09.05.2020\",\"confirmed\":711,\"deaths\":0,\"cured\":254},{\"date\":\"10.05.2020\",\"confirmed\":790,\"deaths\":0,\"cured\":282},{\"date\":\"11.05.2020\",\"confirmed\":871,\"deaths\":0,\"cured\":311},{\"date\":\"12.05.2020\",\"confirmed\":955,\"deaths\":0,\"cured\":341},{\"date\":\"13.05.2020\",\"confirmed\":1042,\"deaths\":0,\"cured\":372},{\"date\":\"14.05.2020\",\"confirmed\":1132,\"deaths\":0,\"cured\":404},{\"date\":\"15.05.2020\",\"confirmed\":1225,\"deaths\":0,\"cured\":437},{\"date\":\"16.05.2020\",\"confirmed\":1321,\"deaths\":0,\"cured\":471},{\"date\":\"17.05.2020\",\"confirmed\":1421,\"deaths\":0,\"cured\":507},{\"date\":\"18.05.2020\",\"confirmed\":1524,\"deaths\":0,\"cured\":544},{\"date\":\"19.05.2020\",\"confirmed\":1631,\"deaths\":0,\"cured\":582},{\"date\":\"20.05.2020\",\"confirmed\":1741,\"deaths\":0,\"cured\":621},{\"date\":\"21.05.2020\",\"confirmed\":1855,\"deaths\":0,\"cured\":662},{\"date\":\"22.05.2020\",\"confirmed\":1973,\"deaths\":0,\"cured\":704},{\"date\":\"23.05.2020\",\"confirmed\":2095,\"deaths\":0,\"cured\":748},{\"date\":\"24.05.2020\",\"confirmed\":2221,\"deaths\":0,\"cured\":793},{\"date\":\"25.05.2020\",\"confirmed\":2352,\"deaths\":0,\"cured\":840},{\"date\":\"26.05.2020\",\"confirmed\":2487,\"deaths\":2,\"cured\":888},{\"date\":\"27.05.2020\",\"confirmed\":2627,\"deaths\":4,\"cured\":938},{\"date\":\"28.05.2020\",\"confirmed\":2772,\"deaths\":7,\"cured\":990}]}]");
    /***/
  },

  /***/
  "./src/app/ddf_world.json":
  /*!********************************!*\
    !*** ./src/app/ddf_world.json ***!
    \********************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */

  /***/
  function srcAppDdf_worldJson(module) {
    module.exports = JSON.parse("[{\"country\":\"США\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":591,\"deaths\":33,\"cured\":164},{\"date\":\"29.04.2020\",\"confirmed\":34726,\"deaths\":2029,\"cured\":9739},{\"date\":\"30.04.2020\",\"confirmed\":70038,\"deaths\":4094,\"cured\":19644},{\"date\":\"01.05.2020\",\"confirmed\":106567,\"deaths\":6230,\"cured\":29890},{\"date\":\"02.05.2020\",\"confirmed\":144356,\"deaths\":8440,\"cured\":40490},{\"date\":\"03.05.2020\",\"confirmed\":183448,\"deaths\":10726,\"cured\":51455},{\"date\":\"04.05.2020\",\"confirmed\":223888,\"deaths\":13091,\"cured\":62798},{\"date\":\"05.05.2020\",\"confirmed\":265722,\"deaths\":15537,\"cured\":74533},{\"date\":\"06.05.2020\",\"confirmed\":308999,\"deaths\":18068,\"cured\":86672},{\"date\":\"07.05.2020\",\"confirmed\":353768,\"deaths\":20686,\"cured\":99230},{\"date\":\"08.05.2020\",\"confirmed\":400081,\"deaths\":23394,\"cured\":112221},{\"date\":\"09.05.2020\",\"confirmed\":447991,\"deaths\":26195,\"cured\":125660},{\"date\":\"10.05.2020\",\"confirmed\":497553,\"deaths\":29093,\"cured\":139562},{\"date\":\"11.05.2020\",\"confirmed\":548824,\"deaths\":32091,\"cured\":153944},{\"date\":\"12.05.2020\",\"confirmed\":601863,\"deaths\":35192,\"cured\":168822},{\"date\":\"13.05.2020\",\"confirmed\":656731,\"deaths\":38400,\"cured\":184213},{\"date\":\"14.05.2020\",\"confirmed\":713491,\"deaths\":41719,\"cured\":200134},{\"date\":\"15.05.2020\",\"confirmed\":772208,\"deaths\":45152,\"cured\":216604},{\"date\":\"16.05.2020\",\"confirmed\":832950,\"deaths\":48704,\"cured\":233642},{\"date\":\"17.05.2020\",\"confirmed\":895787,\"deaths\":52378,\"cured\":251268},{\"date\":\"18.05.2020\",\"confirmed\":960790,\"deaths\":56179,\"cured\":269502},{\"date\":\"19.05.2020\",\"confirmed\":1028035,\"deaths\":60111,\"cured\":288364},{\"date\":\"20.05.2020\",\"confirmed\":1097599,\"deaths\":64179,\"cured\":307877},{\"date\":\"21.05.2020\",\"confirmed\":1169561,\"deaths\":68387,\"cured\":328063},{\"date\":\"22.05.2020\",\"confirmed\":1244005,\"deaths\":72740,\"cured\":348945},{\"date\":\"23.05.2020\",\"confirmed\":1321016,\"deaths\":77243,\"cured\":370547},{\"date\":\"24.05.2020\",\"confirmed\":1400682,\"deaths\":81901,\"cured\":392894},{\"date\":\"25.05.2020\",\"confirmed\":1483095,\"deaths\":86720,\"cured\":416011},{\"date\":\"26.05.2020\",\"confirmed\":1568350,\"deaths\":91705,\"cured\":439925},{\"date\":\"27.05.2020\",\"confirmed\":1656545,\"deaths\":96862,\"cured\":464664},{\"date\":\"28.05.2020\",\"confirmed\":1747781,\"deaths\":102197,\"cured\":490256}]},{\"country\":\"Бразилия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":140,\"deaths\":7,\"cured\":54},{\"date\":\"29.04.2020\",\"confirmed\":8238,\"deaths\":509,\"cured\":3309},{\"date\":\"30.04.2020\",\"confirmed\":16616,\"deaths\":1028,\"cured\":6676},{\"date\":\"01.05.2020\",\"confirmed\":25283,\"deaths\":1565,\"cured\":10159},{\"date\":\"02.05.2020\",\"confirmed\":34248,\"deaths\":2121,\"cured\":13762},{\"date\":\"03.05.2020\",\"confirmed\":43523,\"deaths\":2696,\"cured\":17489},{\"date\":\"04.05.2020\",\"confirmed\":53117,\"deaths\":3291,\"cured\":21345},{\"date\":\"05.05.2020\",\"confirmed\":63042,\"deaths\":3906,\"cured\":25334},{\"date\":\"06.05.2020\",\"confirmed\":73309,\"deaths\":4542,\"cured\":29460},{\"date\":\"07.05.2020\",\"confirmed\":83930,\"deaths\":5200,\"cured\":33729},{\"date\":\"08.05.2020\",\"confirmed\":94918,\"deaths\":5881,\"cured\":38145},{\"date\":\"09.05.2020\",\"confirmed\":106285,\"deaths\":6585,\"cured\":42713},{\"date\":\"10.05.2020\",\"confirmed\":118044,\"deaths\":7314,\"cured\":47439},{\"date\":\"11.05.2020\",\"confirmed\":130208,\"deaths\":8068,\"cured\":52328},{\"date\":\"12.05.2020\",\"confirmed\":142791,\"deaths\":8848,\"cured\":57385},{\"date\":\"13.05.2020\",\"confirmed\":155808,\"deaths\":9655,\"cured\":62617},{\"date\":\"14.05.2020\",\"confirmed\":169274,\"deaths\":10490,\"cured\":68029},{\"date\":\"15.05.2020\",\"confirmed\":183205,\"deaths\":11353,\"cured\":73628},{\"date\":\"16.05.2020\",\"confirmed\":197616,\"deaths\":12246,\"cured\":79420},{\"date\":\"17.05.2020\",\"confirmed\":212524,\"deaths\":13170,\"cured\":85411},{\"date\":\"18.05.2020\",\"confirmed\":227946,\"deaths\":14126,\"cured\":91609},{\"date\":\"19.05.2020\",\"confirmed\":243900,\"deaths\":15115,\"cured\":98021},{\"date\":\"20.05.2020\",\"confirmed\":260404,\"deaths\":16138,\"cured\":104654},{\"date\":\"21.05.2020\",\"confirmed\":277477,\"deaths\":17196,\"cured\":111515},{\"date\":\"22.05.2020\",\"confirmed\":295139,\"deaths\":18291,\"cured\":118613},{\"date\":\"23.05.2020\",\"confirmed\":313410,\"deaths\":19423,\"cured\":125956},{\"date\":\"24.05.2020\",\"confirmed\":332311,\"deaths\":20594,\"cured\":133552},{\"date\":\"25.05.2020\",\"confirmed\":351864,\"deaths\":21806,\"cured\":141410},{\"date\":\"26.05.2020\",\"confirmed\":372091,\"deaths\":23059,\"cured\":149539},{\"date\":\"27.05.2020\",\"confirmed\":393015,\"deaths\":24356,\"cured\":157948},{\"date\":\"28.05.2020\",\"confirmed\":414661,\"deaths\":25697,\"cured\":166647}]},{\"country\":\"Россия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":128,\"deaths\":0,\"cured\":52},{\"date\":\"29.04.2020\",\"confirmed\":7537,\"deaths\":80,\"cured\":3003},{\"date\":\"30.04.2020\",\"confirmed\":15202,\"deaths\":164,\"cured\":6056},{\"date\":\"01.05.2020\",\"confirmed\":23131,\"deaths\":251,\"cured\":9214},{\"date\":\"02.05.2020\",\"confirmed\":31333,\"deaths\":341,\"cured\":12481},{\"date\":\"03.05.2020\",\"confirmed\":39818,\"deaths\":434,\"cured\":15861},{\"date\":\"04.05.2020\",\"confirmed\":48596,\"deaths\":530,\"cured\":19357},{\"date\":\"05.05.2020\",\"confirmed\":57677,\"deaths\":629,\"cured\":22974},{\"date\":\"06.05.2020\",\"confirmed\":67071,\"deaths\":732,\"cured\":26716},{\"date\":\"07.05.2020\",\"confirmed\":76789,\"deaths\":838,\"cured\":30587},{\"date\":\"08.05.2020\",\"confirmed\":86842,\"deaths\":948,\"cured\":34591},{\"date\":\"09.05.2020\",\"confirmed\":97241,\"deaths\":1062,\"cured\":38733},{\"date\":\"10.05.2020\",\"confirmed\":107999,\"deaths\":1180,\"cured\":43018},{\"date\":\"11.05.2020\",\"confirmed\":119128,\"deaths\":1302,\"cured\":47451},{\"date\":\"12.05.2020\",\"confirmed\":130641,\"deaths\":1428,\"cured\":52037},{\"date\":\"13.05.2020\",\"confirmed\":142551,\"deaths\":1558,\"cured\":56781},{\"date\":\"14.05.2020\",\"confirmed\":154871,\"deaths\":1693,\"cured\":61688},{\"date\":\"15.05.2020\",\"confirmed\":167616,\"deaths\":1832,\"cured\":66765},{\"date\":\"16.05.2020\",\"confirmed\":180801,\"deaths\":1976,\"cured\":72017},{\"date\":\"17.05.2020\",\"confirmed\":194440,\"deaths\":2125,\"cured\":77450},{\"date\":\"18.05.2020\",\"confirmed\":208550,\"deaths\":2279,\"cured\":83070},{\"date\":\"19.05.2020\",\"confirmed\":223146,\"deaths\":2439,\"cured\":88884},{\"date\":\"20.05.2020\",\"confirmed\":238246,\"deaths\":2604,\"cured\":94898},{\"date\":\"21.05.2020\",\"confirmed\":253866,\"deaths\":2775,\"cured\":101120},{\"date\":\"22.05.2020\",\"confirmed\":270025,\"deaths\":2952,\"cured\":107556},{\"date\":\"23.05.2020\",\"confirmed\":286741,\"deaths\":3135,\"cured\":114214},{\"date\":\"24.05.2020\",\"confirmed\":304033,\"deaths\":3324,\"cured\":121102},{\"date\":\"25.05.2020\",\"confirmed\":321922,\"deaths\":3520,\"cured\":128227},{\"date\":\"26.05.2020\",\"confirmed\":340428,\"deaths\":3722,\"cured\":135598},{\"date\":\"27.05.2020\",\"confirmed\":359572,\"deaths\":3931,\"cured\":143223},{\"date\":\"28.05.2020\",\"confirmed\":379376,\"deaths\":4148,\"cured\":151111}]},{\"country\":\"Испания\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":95,\"deaths\":0,\"cured\":68},{\"date\":\"29.04.2020\",\"confirmed\":5639,\"deaths\":572,\"cured\":3915},{\"date\":\"30.04.2020\",\"confirmed\":11374,\"deaths\":1153,\"cured\":7894},{\"date\":\"01.05.2020\",\"confirmed\":17307,\"deaths\":1754,\"cured\":12011},{\"date\":\"02.05.2020\",\"confirmed\":23444,\"deaths\":2376,\"cured\":16270},{\"date\":\"03.05.2020\",\"confirmed\":29793,\"deaths\":3019,\"cured\":20675},{\"date\":\"04.05.2020\",\"confirmed\":36361,\"deaths\":3684,\"cured\":25232},{\"date\":\"05.05.2020\",\"confirmed\":43155,\"deaths\":4372,\"cured\":29946},{\"date\":\"06.05.2020\",\"confirmed\":50183,\"deaths\":5084,\"cured\":34823},{\"date\":\"07.05.2020\",\"confirmed\":57454,\"deaths\":5820,\"cured\":39868},{\"date\":\"08.05.2020\",\"confirmed\":64975,\"deaths\":6582,\"cured\":45087},{\"date\":\"09.05.2020\",\"confirmed\":72756,\"deaths\":7370,\"cured\":50486},{\"date\":\"10.05.2020\",\"confirmed\":80805,\"deaths\":8185,\"cured\":56071},{\"date\":\"11.05.2020\",\"confirmed\":89132,\"deaths\":9028,\"cured\":61849},{\"date\":\"12.05.2020\",\"confirmed\":97746,\"deaths\":9900,\"cured\":67826},{\"date\":\"13.05.2020\",\"confirmed\":106657,\"deaths\":10803,\"cured\":74009},{\"date\":\"14.05.2020\",\"confirmed\":115875,\"deaths\":11737,\"cured\":80405},{\"date\":\"15.05.2020\",\"confirmed\":125411,\"deaths\":12703,\"cured\":87022},{\"date\":\"16.05.2020\",\"confirmed\":135276,\"deaths\":13702,\"cured\":93867},{\"date\":\"17.05.2020\",\"confirmed\":145481,\"deaths\":14736,\"cured\":100948},{\"date\":\"18.05.2020\",\"confirmed\":156038,\"deaths\":15805,\"cured\":108273},{\"date\":\"19.05.2020\",\"confirmed\":166959,\"deaths\":16911,\"cured\":115851},{\"date\":\"20.05.2020\",\"confirmed\":178257,\"deaths\":18055,\"cured\":123690},{\"date\":\"21.05.2020\",\"confirmed\":189944,\"deaths\":19239,\"cured\":131799},{\"date\":\"22.05.2020\",\"confirmed\":202034,\"deaths\":20464,\"cured\":140188},{\"date\":\"23.05.2020\",\"confirmed\":214541,\"deaths\":21731,\"cured\":148866},{\"date\":\"24.05.2020\",\"confirmed\":227479,\"deaths\":23042,\"cured\":157844},{\"date\":\"25.05.2020\",\"confirmed\":240863,\"deaths\":24398,\"cured\":167131},{\"date\":\"26.05.2020\",\"confirmed\":254709,\"deaths\":25800,\"cured\":176738},{\"date\":\"27.05.2020\",\"confirmed\":269032,\"deaths\":27251,\"cured\":186677},{\"date\":\"28.05.2020\",\"confirmed\":283849,\"deaths\":28752,\"cured\":196958}]},{\"country\":\"Великобритания\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":93,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":5312,\"deaths\":742,\"cured\":16},{\"date\":\"30.04.2020\",\"confirmed\":10711,\"deaths\":1499,\"cured\":33},{\"date\":\"01.05.2020\",\"confirmed\":16296,\"deaths\":2282,\"cured\":51},{\"date\":\"02.05.2020\",\"confirmed\":22074,\"deaths\":3092,\"cured\":70},{\"date\":\"03.05.2020\",\"confirmed\":28051,\"deaths\":3930,\"cured\":89},{\"date\":\"04.05.2020\",\"confirmed\":34234,\"deaths\":4797,\"cured\":109},{\"date\":\"05.05.2020\",\"confirmed\":40631,\"deaths\":5694,\"cured\":130},{\"date\":\"06.05.2020\",\"confirmed\":47248,\"deaths\":6622,\"cured\":151},{\"date\":\"07.05.2020\",\"confirmed\":54093,\"deaths\":7582,\"cured\":173},{\"date\":\"08.05.2020\",\"confirmed\":61174,\"deaths\":8575,\"cured\":196},{\"date\":\"09.05.2020\",\"confirmed\":68500,\"deaths\":9602,\"cured\":219},{\"date\":\"10.05.2020\",\"confirmed\":76078,\"deaths\":10664,\"cured\":243},{\"date\":\"11.05.2020\",\"confirmed\":83917,\"deaths\":11763,\"cured\":268},{\"date\":\"12.05.2020\",\"confirmed\":92027,\"deaths\":12900,\"cured\":294},{\"date\":\"13.05.2020\",\"confirmed\":100416,\"deaths\":14076,\"cured\":321},{\"date\":\"14.05.2020\",\"confirmed\":109095,\"deaths\":15293,\"cured\":349},{\"date\":\"15.05.2020\",\"confirmed\":118073,\"deaths\":16551,\"cured\":378},{\"date\":\"16.05.2020\",\"confirmed\":127361,\"deaths\":17853,\"cured\":408},{\"date\":\"17.05.2020\",\"confirmed\":136969,\"deaths\":19200,\"cured\":439},{\"date\":\"18.05.2020\",\"confirmed\":146908,\"deaths\":20593,\"cured\":471},{\"date\":\"19.05.2020\",\"confirmed\":157190,\"deaths\":22034,\"cured\":504},{\"date\":\"20.05.2020\",\"confirmed\":167826,\"deaths\":23525,\"cured\":538},{\"date\":\"21.05.2020\",\"confirmed\":178829,\"deaths\":25067,\"cured\":573},{\"date\":\"22.05.2020\",\"confirmed\":190212,\"deaths\":26663,\"cured\":610},{\"date\":\"23.05.2020\",\"confirmed\":201987,\"deaths\":28314,\"cured\":648},{\"date\":\"24.05.2020\",\"confirmed\":214168,\"deaths\":30022,\"cured\":687},{\"date\":\"25.05.2020\",\"confirmed\":226769,\"deaths\":31788,\"cured\":727},{\"date\":\"26.05.2020\",\"confirmed\":239805,\"deaths\":33615,\"cured\":769},{\"date\":\"27.05.2020\",\"confirmed\":253290,\"deaths\":35505,\"cured\":812},{\"date\":\"28.05.2020\",\"confirmed\":267240,\"deaths\":37460,\"cured\":857}]},{\"country\":\"Италия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":79,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":4593,\"deaths\":659,\"cured\":2923},{\"date\":\"30.04.2020\",\"confirmed\":9263,\"deaths\":1327,\"cured\":5895},{\"date\":\"01.05.2020\",\"confirmed\":14094,\"deaths\":2018,\"cured\":8969},{\"date\":\"02.05.2020\",\"confirmed\":19091,\"deaths\":2733,\"cured\":12149},{\"date\":\"03.05.2020\",\"confirmed\":24261,\"deaths\":3473,\"cured\":15439},{\"date\":\"04.05.2020\",\"confirmed\":29609,\"deaths\":4238,\"cured\":18843},{\"date\":\"05.05.2020\",\"confirmed\":35141,\"deaths\":5030,\"cured\":22364},{\"date\":\"06.05.2020\",\"confirmed\":40864,\"deaths\":5849,\"cured\":26006},{\"date\":\"07.05.2020\",\"confirmed\":46785,\"deaths\":6696,\"cured\":29774},{\"date\":\"08.05.2020\",\"confirmed\":52910,\"deaths\":7572,\"cured\":33672},{\"date\":\"09.05.2020\",\"confirmed\":59246,\"deaths\":8479,\"cured\":37704},{\"date\":\"10.05.2020\",\"confirmed\":65800,\"deaths\":9417,\"cured\":41875},{\"date\":\"11.05.2020\",\"confirmed\":72580,\"deaths\":10387,\"cured\":46190},{\"date\":\"12.05.2020\",\"confirmed\":79594,\"deaths\":11391,\"cured\":50654},{\"date\":\"13.05.2020\",\"confirmed\":86850,\"deaths\":12429,\"cured\":55272},{\"date\":\"14.05.2020\",\"confirmed\":94356,\"deaths\":13503,\"cured\":60049},{\"date\":\"15.05.2020\",\"confirmed\":102121,\"deaths\":14614,\"cured\":64991},{\"date\":\"16.05.2020\",\"confirmed\":110154,\"deaths\":15763,\"cured\":70103},{\"date\":\"17.05.2020\",\"confirmed\":118464,\"deaths\":16952,\"cured\":75392},{\"date\":\"18.05.2020\",\"confirmed\":127060,\"deaths\":18182,\"cured\":80863},{\"date\":\"19.05.2020\",\"confirmed\":135953,\"deaths\":19454,\"cured\":86523},{\"date\":\"20.05.2020\",\"confirmed\":145153,\"deaths\":20770,\"cured\":92378},{\"date\":\"21.05.2020\",\"confirmed\":154670,\"deaths\":22132,\"cured\":98435},{\"date\":\"22.05.2020\",\"confirmed\":164515,\"deaths\":23541,\"cured\":104701},{\"date\":\"23.05.2020\",\"confirmed\":174699,\"deaths\":24998,\"cured\":111183},{\"date\":\"24.05.2020\",\"confirmed\":185235,\"deaths\":26505,\"cured\":117888},{\"date\":\"25.05.2020\",\"confirmed\":196134,\"deaths\":28064,\"cured\":124824},{\"date\":\"26.05.2020\",\"confirmed\":207409,\"deaths\":29677,\"cured\":131999},{\"date\":\"27.05.2020\",\"confirmed\":219073,\"deaths\":31346,\"cured\":139422},{\"date\":\"28.05.2020\",\"confirmed\":231139,\"deaths\":33072,\"cured\":147101}]},{\"country\":\"Франция\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":60,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":3633,\"deaths\":567,\"cured\":1322},{\"date\":\"30.04.2020\",\"confirmed\":7329,\"deaths\":1145,\"cured\":2667},{\"date\":\"01.05.2020\",\"confirmed\":11153,\"deaths\":1743,\"cured\":4059},{\"date\":\"02.05.2020\",\"confirmed\":15108,\"deaths\":2361,\"cured\":5499},{\"date\":\"03.05.2020\",\"confirmed\":19200,\"deaths\":3001,\"cured\":6988},{\"date\":\"04.05.2020\",\"confirmed\":23433,\"deaths\":3663,\"cured\":8529},{\"date\":\"05.05.2020\",\"confirmed\":27812,\"deaths\":4347,\"cured\":10123},{\"date\":\"06.05.2020\",\"confirmed\":32342,\"deaths\":5055,\"cured\":11772},{\"date\":\"07.05.2020\",\"confirmed\":37028,\"deaths\":5787,\"cured\":13478},{\"date\":\"08.05.2020\",\"confirmed\":41876,\"deaths\":6545,\"cured\":15242},{\"date\":\"09.05.2020\",\"confirmed\":46891,\"deaths\":7329,\"cured\":17067},{\"date\":\"10.05.2020\",\"confirmed\":52079,\"deaths\":8140,\"cured\":18955},{\"date\":\"11.05.2020\",\"confirmed\":57446,\"deaths\":8979,\"cured\":20908},{\"date\":\"12.05.2020\",\"confirmed\":62998,\"deaths\":9847,\"cured\":22929},{\"date\":\"13.05.2020\",\"confirmed\":68741,\"deaths\":10745,\"cured\":25019},{\"date\":\"14.05.2020\",\"confirmed\":74682,\"deaths\":11674,\"cured\":27181},{\"date\":\"15.05.2020\",\"confirmed\":80828,\"deaths\":12635,\"cured\":29418},{\"date\":\"16.05.2020\",\"confirmed\":87186,\"deaths\":13629,\"cured\":31732},{\"date\":\"17.05.2020\",\"confirmed\":93763,\"deaths\":14657,\"cured\":34126},{\"date\":\"18.05.2020\",\"confirmed\":100567,\"deaths\":15721,\"cured\":36602},{\"date\":\"19.05.2020\",\"confirmed\":107606,\"deaths\":16821,\"cured\":39164},{\"date\":\"20.05.2020\",\"confirmed\":114887,\"deaths\":17959,\"cured\":41814},{\"date\":\"21.05.2020\",\"confirmed\":122419,\"deaths\":19136,\"cured\":44555},{\"date\":\"22.05.2020\",\"confirmed\":130211,\"deaths\":20354,\"cured\":47391},{\"date\":\"23.05.2020\",\"confirmed\":138272,\"deaths\":21614,\"cured\":50325},{\"date\":\"24.05.2020\",\"confirmed\":146611,\"deaths\":22917,\"cured\":53360},{\"date\":\"25.05.2020\",\"confirmed\":155237,\"deaths\":24265,\"cured\":56500},{\"date\":\"26.05.2020\",\"confirmed\":164161,\"deaths\":25660,\"cured\":59748},{\"date\":\"27.05.2020\",\"confirmed\":173392,\"deaths\":27103,\"cured\":63108},{\"date\":\"28.05.2020\",\"confirmed\":182942,\"deaths\":28596,\"cured\":66584}]},{\"country\":\"Германия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":60,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":3612,\"deaths\":171,\"cured\":3243},{\"date\":\"30.04.2020\",\"confirmed\":7287,\"deaths\":343,\"cured\":6540},{\"date\":\"01.05.2020\",\"confirmed\":11089,\"deaths\":521,\"cured\":9951},{\"date\":\"02.05.2020\",\"confirmed\":15022,\"deaths\":706,\"cured\":13480},{\"date\":\"03.05.2020\",\"confirmed\":19090,\"deaths\":897,\"cured\":17130},{\"date\":\"04.05.2020\",\"confirmed\":23299,\"deaths\":1094,\"cured\":20906},{\"date\":\"05.05.2020\",\"confirmed\":27653,\"deaths\":1298,\"cured\":24812},{\"date\":\"06.05.2020\",\"confirmed\":32157,\"deaths\":1509,\"cured\":28853},{\"date\":\"07.05.2020\",\"confirmed\":36816,\"deaths\":1728,\"cured\":33033},{\"date\":\"08.05.2020\",\"confirmed\":41636,\"deaths\":1954,\"cured\":37357},{\"date\":\"09.05.2020\",\"confirmed\":46622,\"deaths\":2188,\"cured\":41831},{\"date\":\"10.05.2020\",\"confirmed\":51780,\"deaths\":2430,\"cured\":46459},{\"date\":\"11.05.2020\",\"confirmed\":57116,\"deaths\":2680,\"cured\":51246},{\"date\":\"12.05.2020\",\"confirmed\":62636,\"deaths\":2939,\"cured\":56199},{\"date\":\"13.05.2020\",\"confirmed\":68346,\"deaths\":3207,\"cured\":61322},{\"date\":\"14.05.2020\",\"confirmed\":74253,\"deaths\":3484,\"cured\":66622},{\"date\":\"15.05.2020\",\"confirmed\":80364,\"deaths\":3771,\"cured\":72105},{\"date\":\"16.05.2020\",\"confirmed\":86686,\"deaths\":4068,\"cured\":77777},{\"date\":\"17.05.2020\",\"confirmed\":93226,\"deaths\":4375,\"cured\":83644},{\"date\":\"18.05.2020\",\"confirmed\":99991,\"deaths\":4692,\"cured\":89714},{\"date\":\"19.05.2020\",\"confirmed\":106989,\"deaths\":5020,\"cured\":95993},{\"date\":\"20.05.2020\",\"confirmed\":114229,\"deaths\":5360,\"cured\":102489},{\"date\":\"21.05.2020\",\"confirmed\":121718,\"deaths\":5711,\"cured\":109209},{\"date\":\"22.05.2020\",\"confirmed\":129465,\"deaths\":6074,\"cured\":116160},{\"date\":\"23.05.2020\",\"confirmed\":137480,\"deaths\":6450,\"cured\":123351},{\"date\":\"24.05.2020\",\"confirmed\":145771,\"deaths\":6839,\"cured\":130790},{\"date\":\"25.05.2020\",\"confirmed\":154348,\"deaths\":7241,\"cured\":138485},{\"date\":\"26.05.2020\",\"confirmed\":163221,\"deaths\":7657,\"cured\":146446},{\"date\":\"27.05.2020\",\"confirmed\":172400,\"deaths\":8088,\"cured\":154681},{\"date\":\"28.05.2020\",\"confirmed\":181895,\"deaths\":8533,\"cured\":163200}]},{\"country\":\"Турция\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":54,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":3175,\"deaths\":87,\"cured\":2441},{\"date\":\"30.04.2020\",\"confirmed\":6404,\"deaths\":177,\"cured\":4922},{\"date\":\"01.05.2020\",\"confirmed\":9744,\"deaths\":270,\"cured\":7488},{\"date\":\"02.05.2020\",\"confirmed\":13199,\"deaths\":366,\"cured\":10143},{\"date\":\"03.05.2020\",\"confirmed\":16773,\"deaths\":465,\"cured\":12889},{\"date\":\"04.05.2020\",\"confirmed\":20470,\"deaths\":568,\"cured\":15730},{\"date\":\"05.05.2020\",\"confirmed\":24295,\"deaths\":674,\"cured\":18669},{\"date\":\"06.05.2020\",\"confirmed\":28252,\"deaths\":784,\"cured\":21709},{\"date\":\"07.05.2020\",\"confirmed\":32345,\"deaths\":898,\"cured\":24854},{\"date\":\"08.05.2020\",\"confirmed\":36579,\"deaths\":1015,\"cured\":28108},{\"date\":\"09.05.2020\",\"confirmed\":40959,\"deaths\":1136,\"cured\":31474},{\"date\":\"10.05.2020\",\"confirmed\":45490,\"deaths\":1262,\"cured\":34956},{\"date\":\"11.05.2020\",\"confirmed\":50178,\"deaths\":1392,\"cured\":38558},{\"date\":\"12.05.2020\",\"confirmed\":55027,\"deaths\":1526,\"cured\":42284},{\"date\":\"13.05.2020\",\"confirmed\":60044,\"deaths\":1665,\"cured\":46139},{\"date\":\"14.05.2020\",\"confirmed\":65233,\"deaths\":1809,\"cured\":50127},{\"date\":\"15.05.2020\",\"confirmed\":70601,\"deaths\":1958,\"cured\":54252},{\"date\":\"16.05.2020\",\"confirmed\":76155,\"deaths\":2112,\"cured\":58520},{\"date\":\"17.05.2020\",\"confirmed\":81900,\"deaths\":2271,\"cured\":62935},{\"date\":\"18.05.2020\",\"confirmed\":87843,\"deaths\":2436,\"cured\":67502},{\"date\":\"19.05.2020\",\"confirmed\":93991,\"deaths\":2607,\"cured\":72226},{\"date\":\"20.05.2020\",\"confirmed\":100351,\"deaths\":2783,\"cured\":77113},{\"date\":\"21.05.2020\",\"confirmed\":106930,\"deaths\":2965,\"cured\":82169},{\"date\":\"22.05.2020\",\"confirmed\":113736,\"deaths\":3154,\"cured\":87399},{\"date\":\"23.05.2020\",\"confirmed\":120777,\"deaths\":3349,\"cured\":92810},{\"date\":\"24.05.2020\",\"confirmed\":128061,\"deaths\":3551,\"cured\":98407},{\"date\":\"25.05.2020\",\"confirmed\":135596,\"deaths\":3760,\"cured\":104197},{\"date\":\"26.05.2020\",\"confirmed\":143391,\"deaths\":3976,\"cured\":110187},{\"date\":\"27.05.2020\",\"confirmed\":151455,\"deaths\":4200,\"cured\":116383},{\"date\":\"28.05.2020\",\"confirmed\":159797,\"deaths\":4431,\"cured\":122793}]},{\"country\":\"Индия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":55,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":3163,\"deaths\":91,\"cured\":1351},{\"date\":\"30.04.2020\",\"confirmed\":6378,\"deaths\":183,\"cured\":2724},{\"date\":\"01.05.2020\",\"confirmed\":9704,\"deaths\":278,\"cured\":4145},{\"date\":\"02.05.2020\",\"confirmed\":13145,\"deaths\":376,\"cured\":5615},{\"date\":\"03.05.2020\",\"confirmed\":16704,\"deaths\":478,\"cured\":7136},{\"date\":\"04.05.2020\",\"confirmed\":20386,\"deaths\":583,\"cured\":8709},{\"date\":\"05.05.2020\",\"confirmed\":24195,\"deaths\":692,\"cured\":10336},{\"date\":\"06.05.2020\",\"confirmed\":28135,\"deaths\":804,\"cured\":12019},{\"date\":\"07.05.2020\",\"confirmed\":32211,\"deaths\":920,\"cured\":13760},{\"date\":\"08.05.2020\",\"confirmed\":36428,\"deaths\":1040,\"cured\":15561},{\"date\":\"09.05.2020\",\"confirmed\":40790,\"deaths\":1164,\"cured\":17425},{\"date\":\"10.05.2020\",\"confirmed\":45303,\"deaths\":1293,\"cured\":19353},{\"date\":\"11.05.2020\",\"confirmed\":49971,\"deaths\":1426,\"cured\":21347},{\"date\":\"12.05.2020\",\"confirmed\":54800,\"deaths\":1564,\"cured\":23410},{\"date\":\"13.05.2020\",\"confirmed\":59796,\"deaths\":1707,\"cured\":25544},{\"date\":\"14.05.2020\",\"confirmed\":64964,\"deaths\":1854,\"cured\":27752},{\"date\":\"15.05.2020\",\"confirmed\":70310,\"deaths\":2007,\"cured\":30036},{\"date\":\"16.05.2020\",\"confirmed\":75841,\"deaths\":2165,\"cured\":32399},{\"date\":\"17.05.2020\",\"confirmed\":81562,\"deaths\":2328,\"cured\":34843},{\"date\":\"18.05.2020\",\"confirmed\":87481,\"deaths\":2497,\"cured\":37371},{\"date\":\"19.05.2020\",\"confirmed\":93604,\"deaths\":2672,\"cured\":39987},{\"date\":\"20.05.2020\",\"confirmed\":99938,\"deaths\":2853,\"cured\":42693},{\"date\":\"21.05.2020\",\"confirmed\":106490,\"deaths\":3040,\"cured\":45492},{\"date\":\"22.05.2020\",\"confirmed\":113268,\"deaths\":3233,\"cured\":48388},{\"date\":\"23.05.2020\",\"confirmed\":120280,\"deaths\":3433,\"cured\":51383},{\"date\":\"24.05.2020\",\"confirmed\":127534,\"deaths\":3640,\"cured\":54482},{\"date\":\"25.05.2020\",\"confirmed\":135038,\"deaths\":3854,\"cured\":57688},{\"date\":\"26.05.2020\",\"confirmed\":142801,\"deaths\":4076,\"cured\":61004},{\"date\":\"27.05.2020\",\"confirmed\":150831,\"deaths\":4305,\"cured\":64434},{\"date\":\"28.05.2020\",\"confirmed\":159138,\"deaths\":4542,\"cured\":67983}]},{\"country\":\"Иран\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":50,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":2859,\"deaths\":152,\"cured\":2245},{\"date\":\"30.04.2020\",\"confirmed\":5765,\"deaths\":306,\"cured\":4528},{\"date\":\"01.05.2020\",\"confirmed\":8771,\"deaths\":465,\"cured\":6890},{\"date\":\"02.05.2020\",\"confirmed\":11881,\"deaths\":630,\"cured\":9333},{\"date\":\"03.05.2020\",\"confirmed\":15098,\"deaths\":801,\"cured\":11860},{\"date\":\"04.05.2020\",\"confirmed\":18426,\"deaths\":977,\"cured\":14474},{\"date\":\"05.05.2020\",\"confirmed\":21869,\"deaths\":1160,\"cured\":17178},{\"date\":\"06.05.2020\",\"confirmed\":25431,\"deaths\":1349,\"cured\":19976},{\"date\":\"07.05.2020\",\"confirmed\":29116,\"deaths\":1544,\"cured\":22870},{\"date\":\"08.05.2020\",\"confirmed\":32928,\"deaths\":1746,\"cured\":25864},{\"date\":\"09.05.2020\",\"confirmed\":36871,\"deaths\":1955,\"cured\":28961},{\"date\":\"10.05.2020\",\"confirmed\":40950,\"deaths\":2171,\"cured\":32165},{\"date\":\"11.05.2020\",\"confirmed\":45170,\"deaths\":2395,\"cured\":35480},{\"date\":\"12.05.2020\",\"confirmed\":49535,\"deaths\":2626,\"cured\":38909},{\"date\":\"13.05.2020\",\"confirmed\":54051,\"deaths\":2865,\"cured\":42456},{\"date\":\"14.05.2020\",\"confirmed\":58723,\"deaths\":3113,\"cured\":46125},{\"date\":\"15.05.2020\",\"confirmed\":63556,\"deaths\":3369,\"cured\":49921},{\"date\":\"16.05.2020\",\"confirmed\":68555,\"deaths\":3634,\"cured\":53848},{\"date\":\"17.05.2020\",\"confirmed\":73727,\"deaths\":3908,\"cured\":57910},{\"date\":\"18.05.2020\",\"confirmed\":79077,\"deaths\":4192,\"cured\":62112},{\"date\":\"19.05.2020\",\"confirmed\":84611,\"deaths\":4485,\"cured\":66459},{\"date\":\"20.05.2020\",\"confirmed\":90336,\"deaths\":4789,\"cured\":70956},{\"date\":\"21.05.2020\",\"confirmed\":96259,\"deaths\":5103,\"cured\":75608},{\"date\":\"22.05.2020\",\"confirmed\":102386,\"deaths\":5428,\"cured\":80421},{\"date\":\"23.05.2020\",\"confirmed\":108724,\"deaths\":5764,\"cured\":85399},{\"date\":\"24.05.2020\",\"confirmed\":115281,\"deaths\":6112,\"cured\":90549},{\"date\":\"25.05.2020\",\"confirmed\":122064,\"deaths\":6472,\"cured\":95877},{\"date\":\"26.05.2020\",\"confirmed\":129081,\"deaths\":6844,\"cured\":101388},{\"date\":\"27.05.2020\",\"confirmed\":136340,\"deaths\":7229,\"cured\":107090},{\"date\":\"28.05.2020\",\"confirmed\":143849,\"deaths\":7627,\"cured\":112988}]},{\"country\":\"Перу\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":47,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":2701,\"deaths\":80,\"cured\":1116},{\"date\":\"30.04.2020\",\"confirmed\":5447,\"deaths\":160,\"cured\":2251},{\"date\":\"01.05.2020\",\"confirmed\":8287,\"deaths\":243,\"cured\":3425},{\"date\":\"02.05.2020\",\"confirmed\":11225,\"deaths\":329,\"cured\":4639},{\"date\":\"03.05.2020\",\"confirmed\":14265,\"deaths\":418,\"cured\":5895},{\"date\":\"04.05.2020\",\"confirmed\":17410,\"deaths\":510,\"cured\":7195},{\"date\":\"05.05.2020\",\"confirmed\":20663,\"deaths\":605,\"cured\":8539},{\"date\":\"06.05.2020\",\"confirmed\":24028,\"deaths\":704,\"cured\":9930},{\"date\":\"07.05.2020\",\"confirmed\":27509,\"deaths\":806,\"cured\":11369},{\"date\":\"08.05.2020\",\"confirmed\":31110,\"deaths\":912,\"cured\":12857},{\"date\":\"09.05.2020\",\"confirmed\":34835,\"deaths\":1021,\"cured\":14397},{\"date\":\"10.05.2020\",\"confirmed\":38689,\"deaths\":1134,\"cured\":15990},{\"date\":\"11.05.2020\",\"confirmed\":42676,\"deaths\":1251,\"cured\":17638},{\"date\":\"12.05.2020\",\"confirmed\":46800,\"deaths\":1372,\"cured\":19343},{\"date\":\"13.05.2020\",\"confirmed\":51066,\"deaths\":1497,\"cured\":21106},{\"date\":\"14.05.2020\",\"confirmed\":55480,\"deaths\":1626,\"cured\":22930},{\"date\":\"15.05.2020\",\"confirmed\":60046,\"deaths\":1760,\"cured\":24817},{\"date\":\"16.05.2020\",\"confirmed\":64769,\"deaths\":1898,\"cured\":26769},{\"date\":\"17.05.2020\",\"confirmed\":69655,\"deaths\":2041,\"cured\":28788},{\"date\":\"18.05.2020\",\"confirmed\":74710,\"deaths\":2189,\"cured\":30877},{\"date\":\"19.05.2020\",\"confirmed\":79939,\"deaths\":2342,\"cured\":33038},{\"date\":\"20.05.2020\",\"confirmed\":85348,\"deaths\":2501,\"cured\":35274},{\"date\":\"21.05.2020\",\"confirmed\":90944,\"deaths\":2665,\"cured\":37587},{\"date\":\"22.05.2020\",\"confirmed\":96733,\"deaths\":2835,\"cured\":39979},{\"date\":\"23.05.2020\",\"confirmed\":102721,\"deaths\":3010,\"cured\":42454},{\"date\":\"24.05.2020\",\"confirmed\":108916,\"deaths\":3192,\"cured\":45014},{\"date\":\"25.05.2020\",\"confirmed\":115324,\"deaths\":3380,\"cured\":47663},{\"date\":\"26.05.2020\",\"confirmed\":121953,\"deaths\":3574,\"cured\":50403},{\"date\":\"27.05.2020\",\"confirmed\":128811,\"deaths\":3775,\"cured\":53237},{\"date\":\"28.05.2020\",\"confirmed\":135905,\"deaths\":3983,\"cured\":56169}]},{\"country\":\"Канада\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":30,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1739,\"deaths\":136,\"cured\":918},{\"date\":\"30.04.2020\",\"confirmed\":3507,\"deaths\":273,\"cured\":1851},{\"date\":\"01.05.2020\",\"confirmed\":5336,\"deaths\":414,\"cured\":2816},{\"date\":\"02.05.2020\",\"confirmed\":7228,\"deaths\":560,\"cured\":3814},{\"date\":\"03.05.2020\",\"confirmed\":9186,\"deaths\":711,\"cured\":4847},{\"date\":\"04.05.2020\",\"confirmed\":11211,\"deaths\":868,\"cured\":5915},{\"date\":\"05.05.2020\",\"confirmed\":13306,\"deaths\":1030,\"cured\":7020},{\"date\":\"06.05.2020\",\"confirmed\":15473,\"deaths\":1198,\"cured\":8163},{\"date\":\"07.05.2020\",\"confirmed\":17715,\"deaths\":1371,\"cured\":9346},{\"date\":\"08.05.2020\",\"confirmed\":20034,\"deaths\":1550,\"cured\":10569},{\"date\":\"09.05.2020\",\"confirmed\":22433,\"deaths\":1735,\"cured\":11834},{\"date\":\"10.05.2020\",\"confirmed\":24915,\"deaths\":1927,\"cured\":13143},{\"date\":\"11.05.2020\",\"confirmed\":27482,\"deaths\":2126,\"cured\":14497},{\"date\":\"12.05.2020\",\"confirmed\":30138,\"deaths\":2331,\"cured\":15898},{\"date\":\"13.05.2020\",\"confirmed\":32886,\"deaths\":2543,\"cured\":17347},{\"date\":\"14.05.2020\",\"confirmed\":35728,\"deaths\":2763,\"cured\":18846},{\"date\":\"15.05.2020\",\"confirmed\":38668,\"deaths\":2990,\"cured\":20397},{\"date\":\"16.05.2020\",\"confirmed\":41710,\"deaths\":3225,\"cured\":22001},{\"date\":\"17.05.2020\",\"confirmed\":44857,\"deaths\":3468,\"cured\":23661},{\"date\":\"18.05.2020\",\"confirmed\":48112,\"deaths\":3720,\"cured\":25378},{\"date\":\"19.05.2020\",\"confirmed\":51479,\"deaths\":3980,\"cured\":27154},{\"date\":\"20.05.2020\",\"confirmed\":54962,\"deaths\":4249,\"cured\":28991},{\"date\":\"21.05.2020\",\"confirmed\":58565,\"deaths\":4528,\"cured\":30892},{\"date\":\"22.05.2020\",\"confirmed\":62293,\"deaths\":4816,\"cured\":32858},{\"date\":\"23.05.2020\",\"confirmed\":66149,\"deaths\":5114,\"cured\":34892},{\"date\":\"24.05.2020\",\"confirmed\":70138,\"deaths\":5422,\"cured\":36996},{\"date\":\"25.05.2020\",\"confirmed\":74265,\"deaths\":5741,\"cured\":39173},{\"date\":\"26.05.2020\",\"confirmed\":78534,\"deaths\":6071,\"cured\":41425},{\"date\":\"27.05.2020\",\"confirmed\":82950,\"deaths\":6412,\"cured\":43754},{\"date\":\"28.05.2020\",\"confirmed\":87519,\"deaths\":6765,\"cured\":46164}]},{\"country\":\"Китай\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":29,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1674,\"deaths\":91,\"cured\":1563},{\"date\":\"30.04.2020\",\"confirmed\":3376,\"deaths\":185,\"cured\":3151},{\"date\":\"01.05.2020\",\"confirmed\":5137,\"deaths\":282,\"cured\":4794},{\"date\":\"02.05.2020\",\"confirmed\":6958,\"deaths\":382,\"cured\":6493},{\"date\":\"03.05.2020\",\"confirmed\":8842,\"deaths\":486,\"cured\":8251},{\"date\":\"04.05.2020\",\"confirmed\":10791,\"deaths\":593,\"cured\":10070},{\"date\":\"05.05.2020\",\"confirmed\":12807,\"deaths\":704,\"cured\":11951},{\"date\":\"06.05.2020\",\"confirmed\":14893,\"deaths\":819,\"cured\":13897},{\"date\":\"07.05.2020\",\"confirmed\":17051,\"deaths\":938,\"cured\":15910},{\"date\":\"08.05.2020\",\"confirmed\":19283,\"deaths\":1061,\"cured\":17993},{\"date\":\"09.05.2020\",\"confirmed\":21592,\"deaths\":1188,\"cured\":20148},{\"date\":\"10.05.2020\",\"confirmed\":23981,\"deaths\":1320,\"cured\":22377},{\"date\":\"11.05.2020\",\"confirmed\":26452,\"deaths\":1456,\"cured\":24683},{\"date\":\"12.05.2020\",\"confirmed\":29008,\"deaths\":1597,\"cured\":27068},{\"date\":\"13.05.2020\",\"confirmed\":31652,\"deaths\":1743,\"cured\":29536},{\"date\":\"14.05.2020\",\"confirmed\":34388,\"deaths\":1894,\"cured\":32089},{\"date\":\"15.05.2020\",\"confirmed\":37218,\"deaths\":2050,\"cured\":34730},{\"date\":\"16.05.2020\",\"confirmed\":40146,\"deaths\":2211,\"cured\":37462},{\"date\":\"17.05.2020\",\"confirmed\":43175,\"deaths\":2378,\"cured\":40288},{\"date\":\"18.05.2020\",\"confirmed\":46308,\"deaths\":2551,\"cured\":43211},{\"date\":\"19.05.2020\",\"confirmed\":49549,\"deaths\":2730,\"cured\":46235},{\"date\":\"20.05.2020\",\"confirmed\":52902,\"deaths\":2915,\"cured\":49363},{\"date\":\"21.05.2020\",\"confirmed\":56370,\"deaths\":3106,\"cured\":52599},{\"date\":\"22.05.2020\",\"confirmed\":59958,\"deaths\":3304,\"cured\":55947},{\"date\":\"23.05.2020\",\"confirmed\":63670,\"deaths\":3509,\"cured\":59410},{\"date\":\"24.05.2020\",\"confirmed\":67510,\"deaths\":3721,\"cured\":62993},{\"date\":\"25.05.2020\",\"confirmed\":71482,\"deaths\":3940,\"cured\":66699},{\"date\":\"26.05.2020\",\"confirmed\":75591,\"deaths\":4166,\"cured\":70533},{\"date\":\"27.05.2020\",\"confirmed\":79842,\"deaths\":4400,\"cured\":74499},{\"date\":\"28.05.2020\",\"confirmed\":84239,\"deaths\":4642,\"cured\":78602}]},{\"country\":\"Чили\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":27,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1634,\"deaths\":17,\"cured\":666},{\"date\":\"30.04.2020\",\"confirmed\":3297,\"deaths\":34,\"cured\":1344},{\"date\":\"01.05.2020\",\"confirmed\":5017,\"deaths\":52,\"cured\":2045},{\"date\":\"02.05.2020\",\"confirmed\":6796,\"deaths\":70,\"cured\":2770},{\"date\":\"03.05.2020\",\"confirmed\":8636,\"deaths\":89,\"cured\":3520},{\"date\":\"04.05.2020\",\"confirmed\":10540,\"deaths\":109,\"cured\":4296},{\"date\":\"05.05.2020\",\"confirmed\":12510,\"deaths\":129,\"cured\":5099},{\"date\":\"06.05.2020\",\"confirmed\":14548,\"deaths\":150,\"cured\":5929},{\"date\":\"07.05.2020\",\"confirmed\":16656,\"deaths\":172,\"cured\":6788},{\"date\":\"08.05.2020\",\"confirmed\":18837,\"deaths\":194,\"cured\":7677},{\"date\":\"09.05.2020\",\"confirmed\":21093,\"deaths\":217,\"cured\":8596},{\"date\":\"10.05.2020\",\"confirmed\":23427,\"deaths\":241,\"cured\":9547},{\"date\":\"11.05.2020\",\"confirmed\":25841,\"deaths\":266,\"cured\":10531},{\"date\":\"12.05.2020\",\"confirmed\":28338,\"deaths\":292,\"cured\":11549},{\"date\":\"13.05.2020\",\"confirmed\":30921,\"deaths\":318,\"cured\":12602},{\"date\":\"14.05.2020\",\"confirmed\":33593,\"deaths\":345,\"cured\":13691},{\"date\":\"15.05.2020\",\"confirmed\":36358,\"deaths\":373,\"cured\":14818},{\"date\":\"16.05.2020\",\"confirmed\":39218,\"deaths\":402,\"cured\":15984},{\"date\":\"17.05.2020\",\"confirmed\":42176,\"deaths\":432,\"cured\":17190},{\"date\":\"18.05.2020\",\"confirmed\":45236,\"deaths\":463,\"cured\":18437},{\"date\":\"19.05.2020\",\"confirmed\":48402,\"deaths\":495,\"cured\":19727},{\"date\":\"20.05.2020\",\"confirmed\":51677,\"deaths\":528,\"cured\":21062},{\"date\":\"21.05.2020\",\"confirmed\":55065,\"deaths\":563,\"cured\":22443},{\"date\":\"22.05.2020\",\"confirmed\":58570,\"deaths\":599,\"cured\":23872},{\"date\":\"23.05.2020\",\"confirmed\":62196,\"deaths\":636,\"cured\":25350},{\"date\":\"24.05.2020\",\"confirmed\":65947,\"deaths\":674,\"cured\":26879},{\"date\":\"25.05.2020\",\"confirmed\":69827,\"deaths\":714,\"cured\":28461},{\"date\":\"26.05.2020\",\"confirmed\":73841,\"deaths\":755,\"cured\":30097},{\"date\":\"27.05.2020\",\"confirmed\":77993,\"deaths\":797,\"cured\":31789},{\"date\":\"28.05.2020\",\"confirmed\":82289,\"deaths\":841,\"cured\":33540}]},{\"country\":\"Саудовская Аравия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":28,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1594,\"deaths\":8,\"cured\":1084},{\"date\":\"30.04.2020\",\"confirmed\":3214,\"deaths\":17,\"cured\":2186},{\"date\":\"01.05.2020\",\"confirmed\":4890,\"deaths\":26,\"cured\":3326},{\"date\":\"02.05.2020\",\"confirmed\":6624,\"deaths\":36,\"cured\":4505},{\"date\":\"03.05.2020\",\"confirmed\":8418,\"deaths\":46,\"cured\":5725},{\"date\":\"04.05.2020\",\"confirmed\":10273,\"deaths\":56,\"cured\":6987},{\"date\":\"05.05.2020\",\"confirmed\":12192,\"deaths\":67,\"cured\":8293},{\"date\":\"06.05.2020\",\"confirmed\":14177,\"deaths\":78,\"cured\":9644},{\"date\":\"07.05.2020\",\"confirmed\":16231,\"deaths\":89,\"cured\":11041},{\"date\":\"08.05.2020\",\"confirmed\":18356,\"deaths\":101,\"cured\":12487},{\"date\":\"09.05.2020\",\"confirmed\":20554,\"deaths\":113,\"cured\":13982},{\"date\":\"10.05.2020\",\"confirmed\":22828,\"deaths\":126,\"cured\":15529},{\"date\":\"11.05.2020\",\"confirmed\":25180,\"deaths\":139,\"cured\":17129},{\"date\":\"12.05.2020\",\"confirmed\":27613,\"deaths\":152,\"cured\":18784},{\"date\":\"13.05.2020\",\"confirmed\":30130,\"deaths\":166,\"cured\":20497},{\"date\":\"14.05.2020\",\"confirmed\":32734,\"deaths\":180,\"cured\":22269},{\"date\":\"15.05.2020\",\"confirmed\":35428,\"deaths\":195,\"cured\":24102},{\"date\":\"16.05.2020\",\"confirmed\":38215,\"deaths\":210,\"cured\":25998},{\"date\":\"17.05.2020\",\"confirmed\":41098,\"deaths\":226,\"cured\":27959},{\"date\":\"18.05.2020\",\"confirmed\":44080,\"deaths\":242,\"cured\":29988},{\"date\":\"19.05.2020\",\"confirmed\":47165,\"deaths\":259,\"cured\":32087},{\"date\":\"20.05.2020\",\"confirmed\":50356,\"deaths\":277,\"cured\":34258},{\"date\":\"21.05.2020\",\"confirmed\":53658,\"deaths\":295,\"cured\":36504},{\"date\":\"22.05.2020\",\"confirmed\":57073,\"deaths\":314,\"cured\":38828},{\"date\":\"23.05.2020\",\"confirmed\":60606,\"deaths\":333,\"cured\":41232},{\"date\":\"24.05.2020\",\"confirmed\":64261,\"deaths\":353,\"cured\":43719},{\"date\":\"25.05.2020\",\"confirmed\":68042,\"deaths\":374,\"cured\":46291},{\"date\":\"26.05.2020\",\"confirmed\":71953,\"deaths\":396,\"cured\":48952},{\"date\":\"27.05.2020\",\"confirmed\":75999,\"deaths\":418,\"cured\":51705},{\"date\":\"28.05.2020\",\"confirmed\":80185,\"deaths\":441,\"cured\":54553}]},{\"country\":\"Мексика\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":26,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1550,\"deaths\":169,\"cured\":1081},{\"date\":\"30.04.2020\",\"confirmed\":3126,\"deaths\":343,\"cured\":2180},{\"date\":\"01.05.2020\",\"confirmed\":4757,\"deaths\":523,\"cured\":3317},{\"date\":\"02.05.2020\",\"confirmed\":6444,\"deaths\":709,\"cured\":4493},{\"date\":\"03.05.2020\",\"confirmed\":8189,\"deaths\":901,\"cured\":5709},{\"date\":\"04.05.2020\",\"confirmed\":9994,\"deaths\":1100,\"cured\":6967},{\"date\":\"05.05.2020\",\"confirmed\":11862,\"deaths\":1306,\"cured\":8269},{\"date\":\"06.05.2020\",\"confirmed\":13794,\"deaths\":1519,\"cured\":9616},{\"date\":\"07.05.2020\",\"confirmed\":15793,\"deaths\":1739,\"cured\":11009},{\"date\":\"08.05.2020\",\"confirmed\":17860,\"deaths\":1967,\"cured\":12450},{\"date\":\"09.05.2020\",\"confirmed\":19999,\"deaths\":2203,\"cured\":13941},{\"date\":\"10.05.2020\",\"confirmed\":22212,\"deaths\":2447,\"cured\":15483},{\"date\":\"11.05.2020\",\"confirmed\":24501,\"deaths\":2699,\"cured\":17078},{\"date\":\"12.05.2020\",\"confirmed\":26869,\"deaths\":2960,\"cured\":18728},{\"date\":\"13.05.2020\",\"confirmed\":29318,\"deaths\":3230,\"cured\":20435},{\"date\":\"14.05.2020\",\"confirmed\":31852,\"deaths\":3509,\"cured\":22201},{\"date\":\"15.05.2020\",\"confirmed\":34473,\"deaths\":3798,\"cured\":24028},{\"date\":\"16.05.2020\",\"confirmed\":37185,\"deaths\":4097,\"cured\":25918},{\"date\":\"17.05.2020\",\"confirmed\":39990,\"deaths\":4406,\"cured\":27873},{\"date\":\"18.05.2020\",\"confirmed\":42892,\"deaths\":4726,\"cured\":29896},{\"date\":\"19.05.2020\",\"confirmed\":45894,\"deaths\":5057,\"cured\":31988},{\"date\":\"20.05.2020\",\"confirmed\":48999,\"deaths\":5399,\"cured\":34153},{\"date\":\"21.05.2020\",\"confirmed\":52211,\"deaths\":5753,\"cured\":36392},{\"date\":\"22.05.2020\",\"confirmed\":55534,\"deaths\":6119,\"cured\":38708},{\"date\":\"23.05.2020\",\"confirmed\":58972,\"deaths\":6498,\"cured\":41104},{\"date\":\"24.05.2020\",\"confirmed\":62528,\"deaths\":6890,\"cured\":43583},{\"date\":\"25.05.2020\",\"confirmed\":66207,\"deaths\":7295,\"cured\":46147},{\"date\":\"26.05.2020\",\"confirmed\":70013,\"deaths\":7714,\"cured\":48800},{\"date\":\"27.05.2020\",\"confirmed\":73950,\"deaths\":8148,\"cured\":51544},{\"date\":\"28.05.2020\",\"confirmed\":78023,\"deaths\":8597,\"cured\":54383}]},{\"country\":\"Пакистан\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":20,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1216,\"deaths\":26,\"cured\":402},{\"date\":\"30.04.2020\",\"confirmed\":2453,\"deaths\":52,\"cured\":811},{\"date\":\"01.05.2020\",\"confirmed\":3733,\"deaths\":78,\"cured\":1234},{\"date\":\"02.05.2020\",\"confirmed\":5057,\"deaths\":105,\"cured\":1671},{\"date\":\"03.05.2020\",\"confirmed\":6426,\"deaths\":133,\"cured\":2124},{\"date\":\"04.05.2020\",\"confirmed\":7843,\"deaths\":162,\"cured\":2592},{\"date\":\"05.05.2020\",\"confirmed\":9309,\"deaths\":192,\"cured\":3076},{\"date\":\"06.05.2020\",\"confirmed\":10825,\"deaths\":223,\"cured\":3577},{\"date\":\"07.05.2020\",\"confirmed\":12393,\"deaths\":255,\"cured\":4095},{\"date\":\"08.05.2020\",\"confirmed\":14015,\"deaths\":288,\"cured\":4631},{\"date\":\"09.05.2020\",\"confirmed\":15693,\"deaths\":323,\"cured\":5186},{\"date\":\"10.05.2020\",\"confirmed\":17429,\"deaths\":359,\"cured\":5760},{\"date\":\"11.05.2020\",\"confirmed\":19225,\"deaths\":396,\"cured\":6354},{\"date\":\"12.05.2020\",\"confirmed\":21083,\"deaths\":434,\"cured\":6968},{\"date\":\"13.05.2020\",\"confirmed\":23005,\"deaths\":474,\"cured\":7603},{\"date\":\"14.05.2020\",\"confirmed\":24993,\"deaths\":515,\"cured\":8260},{\"date\":\"15.05.2020\",\"confirmed\":27050,\"deaths\":557,\"cured\":8940},{\"date\":\"16.05.2020\",\"confirmed\":29178,\"deaths\":601,\"cured\":9643},{\"date\":\"17.05.2020\",\"confirmed\":31379,\"deaths\":646,\"cured\":10370},{\"date\":\"18.05.2020\",\"confirmed\":33656,\"deaths\":693,\"cured\":11122},{\"date\":\"19.05.2020\",\"confirmed\":36012,\"deaths\":741,\"cured\":11900},{\"date\":\"20.05.2020\",\"confirmed\":38449,\"deaths\":791,\"cured\":12705},{\"date\":\"21.05.2020\",\"confirmed\":40970,\"deaths\":843,\"cured\":13538},{\"date\":\"22.05.2020\",\"confirmed\":43578,\"deaths\":897,\"cured\":14400},{\"date\":\"23.05.2020\",\"confirmed\":46276,\"deaths\":953,\"cured\":15291},{\"date\":\"24.05.2020\",\"confirmed\":49067,\"deaths\":1010,\"cured\":16213},{\"date\":\"25.05.2020\",\"confirmed\":51954,\"deaths\":1069,\"cured\":17167},{\"date\":\"26.05.2020\",\"confirmed\":54941,\"deaths\":1130,\"cured\":18154},{\"date\":\"27.05.2020\",\"confirmed\":58031,\"deaths\":1194,\"cured\":19175},{\"date\":\"28.05.2020\",\"confirmed\":61227,\"deaths\":1260,\"cured\":20231}]},{\"country\":\"Бельгия\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":19,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1149,\"deaths\":188,\"cured\":307},{\"date\":\"30.04.2020\",\"confirmed\":2318,\"deaths\":378,\"cured\":622},{\"date\":\"01.05.2020\",\"confirmed\":3527,\"deaths\":574,\"cured\":947},{\"date\":\"02.05.2020\",\"confirmed\":4778,\"deaths\":777,\"cured\":1284},{\"date\":\"03.05.2020\",\"confirmed\":6072,\"deaths\":987,\"cured\":1632},{\"date\":\"04.05.2020\",\"confirmed\":7410,\"deaths\":1204,\"cured\":1992},{\"date\":\"05.05.2020\",\"confirmed\":8795,\"deaths\":1429,\"cured\":2365},{\"date\":\"06.05.2020\",\"confirmed\":10227,\"deaths\":1661,\"cured\":2751},{\"date\":\"07.05.2020\",\"confirmed\":11709,\"deaths\":1901,\"cured\":3150},{\"date\":\"08.05.2020\",\"confirmed\":13242,\"deaths\":2150,\"cured\":3563},{\"date\":\"09.05.2020\",\"confirmed\":14828,\"deaths\":2407,\"cured\":3990},{\"date\":\"10.05.2020\",\"confirmed\":16468,\"deaths\":2673,\"cured\":4432},{\"date\":\"11.05.2020\",\"confirmed\":18165,\"deaths\":2948,\"cured\":4889},{\"date\":\"12.05.2020\",\"confirmed\":19921,\"deaths\":3233,\"cured\":5362},{\"date\":\"13.05.2020\",\"confirmed\":21737,\"deaths\":3528,\"cured\":5851},{\"date\":\"14.05.2020\",\"confirmed\":23616,\"deaths\":3833,\"cured\":6357},{\"date\":\"15.05.2020\",\"confirmed\":25559,\"deaths\":4148,\"cured\":6880},{\"date\":\"16.05.2020\",\"confirmed\":27569,\"deaths\":4474,\"cured\":7421},{\"date\":\"17.05.2020\",\"confirmed\":29649,\"deaths\":4811,\"cured\":7981},{\"date\":\"18.05.2020\",\"confirmed\":31800,\"deaths\":5160,\"cured\":8560},{\"date\":\"19.05.2020\",\"confirmed\":34026,\"deaths\":5521,\"cured\":9159},{\"date\":\"20.05.2020\",\"confirmed\":36328,\"deaths\":5895,\"cured\":9779},{\"date\":\"21.05.2020\",\"confirmed\":38710,\"deaths\":6281,\"cured\":10420},{\"date\":\"22.05.2020\",\"confirmed\":41174,\"deaths\":6681,\"cured\":11083},{\"date\":\"23.05.2020\",\"confirmed\":43723,\"deaths\":7095,\"cured\":11769},{\"date\":\"24.05.2020\",\"confirmed\":46360,\"deaths\":7523,\"cured\":12479},{\"date\":\"25.05.2020\",\"confirmed\":49088,\"deaths\":7966,\"cured\":13213},{\"date\":\"26.05.2020\",\"confirmed\":51910,\"deaths\":8424,\"cured\":13973},{\"date\":\"27.05.2020\",\"confirmed\":54829,\"deaths\":8898,\"cured\":14759},{\"date\":\"28.05.2020\",\"confirmed\":57849,\"deaths\":9388,\"cured\":15572}]},{\"country\":\"Катар\",\"data\":[{\"date\":\"28.04.2020\",\"confirmed\":17,\"deaths\":0,\"cured\":0},{\"date\":\"29.04.2020\",\"confirmed\":1011,\"deaths\":0,\"cured\":307},{\"date\":\"30.04.2020\",\"confirmed\":2040,\"deaths\":1,\"cured\":618},{\"date\":\"01.05.2020\",\"confirmed\":3104,\"deaths\":2,\"cured\":940},{\"date\":\"02.05.2020\",\"confirmed\":4205,\"deaths\":3,\"cured\":1273},{\"date\":\"03.05.2020\",\"confirmed\":5344,\"deaths\":4,\"cured\":1617},{\"date\":\"04.05.2020\",\"confirmed\":6522,\"deaths\":5,\"cured\":1973},{\"date\":\"05.05.2020\",\"confirmed\":7741,\"deaths\":6,\"cured\":2342},{\"date\":\"06.05.2020\",\"confirmed\":9002,\"deaths\":7,\"cured\":2723},{\"date\":\"07.05.2020\",\"confirmed\":10306,\"deaths\":8,\"cured\":3117},{\"date\":\"08.05.2020\",\"confirmed\":11655,\"deaths\":9,\"cured\":3525},{\"date\":\"09.05.2020\",\"confirmed\":13051,\"deaths\":10,\"cured\":3947},{\"date\":\"10.05.2020\",\"confirmed\":14495,\"deaths\":11,\"cured\":4384},{\"date\":\"11.05.2020\",\"confirmed\":15989,\"deaths\":12,\"cured\":4836},{\"date\":\"12.05.2020\",\"confirmed\":17534,\"deaths\":13,\"cured\":5303},{\"date\":\"13.05.2020\",\"confirmed\":19132,\"deaths\":14,\"cured\":5786},{\"date\":\"14.05.2020\",\"confirmed\":20785,\"deaths\":15,\"cured\":6286},{\"date\":\"15.05.2020\",\"confirmed\":22495,\"deaths\":16,\"cured\":6803},{\"date\":\"16.05.2020\",\"confirmed\":24264,\"deaths\":17,\"cured\":7338},{\"date\":\"17.05.2020\",\"confirmed\":26094,\"deaths\":18,\"cured\":7892},{\"date\":\"18.05.2020\",\"confirmed\":27988,\"deaths\":19,\"cured\":8465},{\"date\":\"19.05.2020\",\"confirmed\":29947,\"deaths\":20,\"cured\":9057},{\"date\":\"20.05.2020\",\"confirmed\":31973,\"deaths\":21,\"cured\":9670},{\"date\":\"21.05.2020\",\"confirmed\":34069,\"deaths\":22,\"cured\":10304},{\"date\":\"22.05.2020\",\"confirmed\":36238,\"deaths\":23,\"cured\":10960},{\"date\":\"23.05.2020\",\"confirmed\":38481,\"deaths\":24,\"cured\":11639},{\"date\":\"24.05.2020\",\"confirmed\":40802,\"deaths\":25,\"cured\":12341},{\"date\":\"25.05.2020\",\"confirmed\":43203,\"deaths\":27,\"cured\":13067},{\"date\":\"26.05.2020\",\"confirmed\":45687,\"deaths\":29,\"cured\":13818},{\"date\":\"27.05.2020\",\"confirmed\":48256,\"deaths\":31,\"cured\":14595},{\"date\":\"28.05.2020\",\"confirmed\":50914,\"deaths\":33,\"cured\":15399}]}]");
    /***/
  },

  /***/
  "./src/app/df.json":
  /*!*************************!*\
    !*** ./src/app/df.json ***!
    \*************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */

  /***/
  function srcAppDfJson(module) {
    module.exports = JSON.parse("[{\"num\":1,\"country\":\"США\",\"confirmed\":1747781,\"deaths\":102197,\"cured\":490256,\"death_per\":5.84},{\"num\":2,\"country\":\"Бразилия\",\"confirmed\":414661,\"deaths\":25697,\"cured\":166647,\"death_per\":6.19},{\"num\":3,\"country\":\"Россия\",\"confirmed\":379376,\"deaths\":4148,\"cured\":151111,\"death_per\":1.09},{\"num\":4,\"country\":\"Испания\",\"confirmed\":283849,\"deaths\":28752,\"cured\":196958,\"death_per\":10.12},{\"num\":5,\"country\":\"Великобритания\",\"confirmed\":267240,\"deaths\":37460,\"cured\":857,\"death_per\":14.01},{\"num\":6,\"country\":\"Италия\",\"confirmed\":231139,\"deaths\":33072,\"cured\":147101,\"death_per\":14.3},{\"num\":7,\"country\":\"Франция\",\"confirmed\":182942,\"deaths\":28596,\"cured\":66584,\"death_per\":15.63},{\"num\":8,\"country\":\"Германия\",\"confirmed\":181895,\"deaths\":8533,\"cured\":163200,\"death_per\":4.69},{\"num\":9,\"country\":\"Турция\",\"confirmed\":159797,\"deaths\":4431,\"cured\":122793,\"death_per\":2.77},{\"num\":10,\"country\":\"Индия\",\"confirmed\":159138,\"deaths\":4542,\"cured\":67983,\"death_per\":2.85},{\"num\":11,\"country\":\"Иран\",\"confirmed\":143849,\"deaths\":7627,\"cured\":112988,\"death_per\":5.3},{\"num\":12,\"country\":\"Перу\",\"confirmed\":135905,\"deaths\":3983,\"cured\":56169,\"death_per\":2.93},{\"num\":13,\"country\":\"Канада\",\"confirmed\":87519,\"deaths\":6765,\"cured\":46164,\"death_per\":7.72},{\"num\":14,\"country\":\"Китай\",\"confirmed\":84239,\"deaths\":4642,\"cured\":78602,\"death_per\":5.51},{\"num\":15,\"country\":\"Чили\",\"confirmed\":82289,\"deaths\":841,\"cured\":33540,\"death_per\":1.02},{\"num\":16,\"country\":\"Саудовская Аравия\",\"confirmed\":80185,\"deaths\":441,\"cured\":54553,\"death_per\":0.54},{\"num\":17,\"country\":\"Мексика\",\"confirmed\":78023,\"deaths\":8597,\"cured\":54383,\"death_per\":11.01},{\"num\":18,\"country\":\"Пакистан\",\"confirmed\":61227,\"deaths\":1260,\"cured\":20231,\"death_per\":2.05},{\"num\":19,\"country\":\"Бельгия\",\"confirmed\":57849,\"deaths\":9388,\"cured\":15572,\"death_per\":16.22},{\"num\":20,\"country\":\"Катар\",\"confirmed\":50914,\"deaths\":33,\"cured\":15399,\"death_per\":0.06}]");
    /***/
  },

  /***/
  "./src/app/df_r.json":
  /*!***************************!*\
    !*** ./src/app/df_r.json ***!
    \***************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */

  /***/
  function srcAppDf_rJson(module) {
    module.exports = JSON.parse("[{\"num\":1,\"country\":\"Москва\",\"confirmed\":173497,\"deaths\":2254,\"cured\":71251,\"death_per\":1.29},{\"num\":2,\"country\":\"Московская область\",\"confirmed\":36730,\"deaths\":380,\"cured\":6843,\"death_per\":1.03},{\"num\":3,\"country\":\"Санкт-Петербург\",\"confirmed\":14846,\"deaths\":167,\"cured\":4783,\"death_per\":1.12},{\"num\":4,\"country\":\"Нижегородская область\",\"confirmed\":8963,\"deaths\":84,\"cured\":3244,\"death_per\":0.93},{\"num\":5,\"country\":\"Свердловская область\",\"confirmed\":4693,\"deaths\":23,\"cured\":1827,\"death_per\":0.49},{\"num\":6,\"country\":\"Республика Дагестан\",\"confirmed\":4579,\"deaths\":151,\"cured\":4402,\"death_per\":3.29},{\"num\":7,\"country\":\"Ростовская область\",\"confirmed\":4287,\"deaths\":35,\"cured\":1529,\"death_per\":0.81},{\"num\":8,\"country\":\"Красноярский край\",\"confirmed\":3847,\"deaths\":29,\"cured\":834,\"death_per\":0.75},{\"num\":9,\"country\":\"Калужская область\",\"confirmed\":3653,\"deaths\":29,\"cured\":1237,\"death_per\":0.79},{\"num\":10,\"country\":\"Краснодарский край\",\"confirmed\":3582,\"deaths\":29,\"cured\":2393,\"death_per\":0.8},{\"num\":11,\"country\":\"Тульская область\",\"confirmed\":3532,\"deaths\":30,\"cured\":1564,\"death_per\":0.84},{\"num\":12,\"country\":\"Брянская область\",\"confirmed\":3363,\"deaths\":31,\"cured\":1893,\"death_per\":0.92},{\"num\":13,\"country\":\"Рязанская область\",\"confirmed\":3283,\"deaths\":7,\"cured\":848,\"death_per\":0.21},{\"num\":14,\"country\":\"Мурманская область\",\"confirmed\":3076,\"deaths\":7,\"cured\":1728,\"death_per\":0.22},{\"num\":15,\"country\":\"Республика Татарстан\",\"confirmed\":3026,\"deaths\":10,\"cured\":2350,\"death_per\":0.33},{\"num\":16,\"country\":\"Республика Башкортостан\",\"confirmed\":3021,\"deaths\":18,\"cured\":948,\"death_per\":0.59},{\"num\":17,\"country\":\"Ярославская область\",\"confirmed\":2892,\"deaths\":13,\"cured\":653,\"death_per\":0.44},{\"num\":18,\"country\":\"Республика Северная Осетия—Алания\",\"confirmed\":2807,\"deaths\":37,\"cured\":1660,\"death_per\":1.31},{\"num\":19,\"country\":\"Курская область\",\"confirmed\":2787,\"deaths\":10,\"cured\":1204,\"death_per\":0.35},{\"num\":20,\"country\":\"Тамбовская область\",\"confirmed\":2772,\"deaths\":7,\"cured\":990,\"death_per\":0.25}]");
    /***/
  },

  /***/
  "./src/app/foot/foot.component.ts":
  /*!****************************************!*\
    !*** ./src/app/foot/foot.component.ts ***!
    \****************************************/

  /*! exports provided: FootComponent */

  /***/
  function srcAppFootFootComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FootComponent", function () {
      return FootComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FootComponent = /*#__PURE__*/function () {
      function FootComponent() {
        _classCallCheck(this, FootComponent);
      }

      _createClass(FootComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FootComponent;
    }();

    FootComponent.ɵfac = function FootComponent_Factory(t) {
      return new (t || FootComponent)();
    };

    FootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FootComponent,
      selectors: [["app-foot"]],
      decls: 0,
      vars: 0,
      template: function FootComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3QvZm9vdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-foot',
          templateUrl: './foot.component.html',
          styleUrls: ['./foot.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 8,
      vars: 0,
      consts: [["color", "primary", 1, "header"], ["mat-button", "", "routerLink", "/main"], ["mat-button", "", "routerLink", "/news"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u041E\u0420\u041E\u041D\u0410\u0412\u0418\u0420\u0423\u0421");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041D\u043E\u0432\u043E\u0441\u0442\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%]{font:400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.05em;margin:0 0 56px}.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.02em;margin:0 0 64px}.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.005em;margin:0 0 64px}.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-button-toggle[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-card[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{font-size:14px}.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%]{font-size:18px}.mat-table[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(0.75);width:133.3333333333%}.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(0.75);width:133.3333433333%}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-0.84375em;padding-top:.84375em}.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);-ms-transform:translateY(-1.28125em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);-ms-transform:translateY(-1.28124em) scale(0.75);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);-ms-transform:translateY(-1.28123em) scale(0.75);width:133.3333533333%}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(0.75)}}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-0.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59375em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59374em) scale(0.75);width:133.3333433333%}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0 1em 0}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-0.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(0.75);width:133.3333433333%}.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]{font-size:14px}.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}input.mat-input-element[_ngcontent-%COMP%]{margin-top:-0.0625em}.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:400}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px}.mat-radio-button[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-select[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}.mat-slide-toggle-content[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:normal}.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-tab-group[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0}.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-list-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}.mat-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:16px}.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px}.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(0)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-start{}@-webkit-keyframes cdk-text-field-autofill-end{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}.mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}.mat-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#673ab7}.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#ffd740}.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox[_ngcontent-%COMP%]::after{color:#fafafa}.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{color:#b0b0b0}.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#673ab7}.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#ffd740}.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{background:#b0b0b0}.mat-elevation-z0[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z1[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z2[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z3[_ngcontent-%COMP%]{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z4[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z5[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z6[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z7[_ngcontent-%COMP%]{box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mat-elevation-z9[_ngcontent-%COMP%]{box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)}.mat-elevation-z10[_ngcontent-%COMP%]{box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)}.mat-elevation-z11[_ngcontent-%COMP%]{box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)}.mat-elevation-z12[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z13[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z14[_ngcontent-%COMP%]{box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z15[_ngcontent-%COMP%]{box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z16[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z17[_ngcontent-%COMP%]{box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z18[_ngcontent-%COMP%]{box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)}.mat-elevation-z19[_ngcontent-%COMP%]{box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)}.mat-elevation-z20[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z21[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z22[_ngcontent-%COMP%]{box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z23[_ngcontent-%COMP%]{box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)}.mat-elevation-z24[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)}.mat-app-background[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker[_ngcontent-%COMP%]{display:none}.mat-autocomplete-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#673ab7}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{outline:solid 1px;border-radius:0}.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#f44336}.mat-badge[_ngcontent-%COMP%]{position:relative}.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{display:none}.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content[_ngcontent-%COMP%]{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%]{transition:none}.mat-badge-content.mat-badge-active[_ngcontent-%COMP%]{transform:none}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-8px}.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-8px}.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-16px}.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-8px}.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-11px}.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-11px}.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-22px}.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-11px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-14px}.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-14px}.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-28px}.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-14px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{color:inherit;background:transparent}.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]{color:#673ab7}.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]{color:#ffd740}.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-button[disabled][disabled][_ngcontent-%COMP%], .mat-icon-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-icon-button[disabled][disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-stroked-button[disabled][disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#673ab7}.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#ffd740}.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#f44336}.mat-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:transparent}.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{opacity:.1;background-color:currentColor}.mat-button-focus-overlay[_ngcontent-%COMP%]{background:#000}.mat-stroked-button[_ngcontent-%COMP%]:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background-color:#fff}.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{background-color:#673ab7}.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{background-color:#ffd740}.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mat-raised-button[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mat-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{box-shadow:none}.mat-button-toggle[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:#000}.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#bdbdbd}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12)}.mat-card[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-card-subtitle[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-checkbox-frame[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark[_ngcontent-%COMP%]{fill:#fafafa}.mat-checkbox-checkmark-path[_ngcontent-%COMP%]{stroke:#fafafa !important}.mat-checkbox-mixedmark[_ngcontent-%COMP%]{background-color:#fafafa}.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#673ab7}.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#ffd740}.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#b0b0b0}.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%]{border-color:#b0b0b0}.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%]{background:#673ab7}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%]{background:#ffd740}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%]{background:#f44336}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%]{opacity:.4}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}.mat-table[_ngcontent-%COMP%]{background:#fff}.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%]{background:inherit}mat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-calendar-arrow[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-calendar-table-header[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-datepicker-toggle-active[_ngcontent-%COMP%]{color:#673ab7}.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%]{color:#ffd740}.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-dialog-container[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical[_ngcontent-%COMP%]{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-action-row[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]){background:rgba(0,0,0,.04)}@media(hover: none){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#fff}}.mat-expansion-panel-header-title[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:inherit}.mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#673ab7}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%]{color:#ffd740}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#ffd740}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#673ab7}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#ffd740}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#673ab7}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#ffd740}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#f44336}.mat-error[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:transparent}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.06)}.mat-icon.mat-primary[_ngcontent-%COMP%]{color:#673ab7}.mat-icon.mat-accent[_ngcontent-%COMP%]{color:#ffd740}.mat-icon.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}.mat-input-element[_ngcontent-%COMP%]{caret-color:#673ab7}.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#ffd740}.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-list-item-disabled[_ngcontent-%COMP%]{background-color:#eee}.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.04)}.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.12)}.mat-menu-panel[_ngcontent-%COMP%]{background:#fff}.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-menu-item[_ngcontent-%COMP%]{background:transparent;color:rgba(0,0,0,.87)}.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator[_ngcontent-%COMP%]{background:#fff}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background[_ngcontent-%COMP%]{fill:#d1c4e9}.mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#d1c4e9}.mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#673ab7}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffe57f}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffe57f}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#ffd740}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffcdd2}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffcdd2}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#f44336}.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#673ab7}.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#ffd740}.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f44336}.mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#673ab7}.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#673ab7}.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#ffd740}.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#ffd740}.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#f44336}.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#f44336}.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-select-placeholder[_ngcontent-%COMP%]{color:rgba(0,0,0,.42)}.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-select-panel[_ngcontent-%COMP%]{background:#fff}.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#673ab7}.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#ffd740}.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-drawer-container[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push[_ngcontent-%COMP%]{background-color:#fff}.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side){box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}.mat-drawer-side[_ngcontent-%COMP%]{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#ffd740}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(255,215,64,.54)}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#ffd740}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(103,58,183,.54)}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#673ab7}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#f44336}.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-slide-toggle-thumb[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);background-color:#fafafa}.mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#673ab7}.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#ffd740}.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#f44336}.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(255,215,64,.2)}.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.04)}@media(hover: none){.mat-step-header[_ngcontent-%COMP%]:hover{background:none}}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%]{background-color:transparent;color:#f44336}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%]{color:#f44336}.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{background-color:#fff}.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow[_ngcontent-%COMP%]{color:#757575}.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#673ab7}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#ffd740}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#f44336}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-toolbar[_ngcontent-%COMP%]{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#673ab7;color:#fff}.mat-toolbar.mat-accent[_ngcontent-%COMP%]{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn[_ngcontent-%COMP%]{background:#f44336;color:#fff}.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:currentColor}.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:inherit}.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:currentColor}.mat-tooltip[_ngcontent-%COMP%]{background:rgba(97,97,97,.9)}.mat-tree[_ngcontent-%COMP%]{background:#fff}.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-snack-bar-container[_ngcontent-%COMP%]{color:rgba(255,255,255,.7);background:#323232;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#ffd740}.header[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n\r\n    z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvZGVlcHB1cnBsZS1hbWJlci5jc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnREFBZ0QsQ0FBQyxvQ0FBb0MsYUFBYSxDQUFDLG9DQUFvQyxjQUFjLENBQUMseUNBQXlDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxzQ0FBc0MsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLDZDQUE2Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsNkNBQTZDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQywyQkFBMkIsb0VBQW9FLENBQUMsZUFBZSxDQUFDLDJCQUEyQixvRUFBb0UsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLHNDQUFzQyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyw0Q0FBNEMsZUFBZSxDQUFDLHdCQUF3Qix1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyw4Q0FBOEMseURBQXlELENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLDhDQUE4Qyx1REFBdUQsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsOENBQThDLHVEQUF1RCxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyw4Q0FBOEMsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLDRCQUE0Qix1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyw0R0FBNEcsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsZ0RBQWdELENBQUMsVUFBVSxnREFBZ0QsQ0FBQyxnQkFBZ0IsY0FBYyxDQUFDLGVBQWUsQ0FBQyxpQ0FBaUMsY0FBYyxDQUFDLHFDQUFxQyxjQUFjLENBQUMsY0FBYyxnREFBZ0QsQ0FBQyx5Q0FBeUMsZ0JBQWdCLENBQUMsVUFBVSxjQUFjLENBQUMsZUFBZSxDQUFDLCtFQUErRSxjQUFjLENBQUMsV0FBVyxnREFBZ0QsQ0FBQyxpQkFBaUIsY0FBYyxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsY0FBYyxDQUFDLGNBQWMsZ0RBQWdELENBQUMsbUJBQW1CLGNBQWMsQ0FBQyxxREFBcUQsY0FBYyxDQUFDLGVBQWUsQ0FBQyw4QkFBOEIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsdURBQXVELENBQUMscUJBQXFCLENBQUMsNEJBQTRCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsZ0RBQWdELENBQUMscUJBQXFCLENBQUMsd0JBQXdCLHdCQUF3QixDQUFDLGtFQUFrRSxjQUFjLENBQUMsaUJBQWlCLENBQUMsZ0ZBQWdGLFlBQVksQ0FBQyxXQUFXLENBQUMsb0dBQW9HLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsY0FBYyxDQUFDLHFDQUFxQyxDQUFDLGtMQUFrTCw0Q0FBNEMsQ0FBQyxxQkFBcUIsQ0FBQyx5SEFBeUgsNENBQTRDLENBQUMscUJBQXFCLENBQUMsOEJBQThCLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsYUFBYSxDQUFDLDBCQUEwQixnQkFBZ0IsQ0FBQyxrQ0FBa0MsYUFBYSxDQUFDLHdCQUF3QixDQUFDLCtCQUErQixDQUFDLDBEQUEwRCxxQkFBcUIsQ0FBQyx3REFBd0QsaUJBQWlCLENBQUMsb1BBQW9QLG1GQUFtRixDQUFDLGdEQUFnRCxDQUFDLHFCQUFxQixDQUFDLGlLQUFpSyxxRkFBcUYsQ0FBQyxnREFBZ0QsQ0FBQyxxQkFBcUIsQ0FBQywwSkFBMEoscUZBQXFGLENBQUMsZ0RBQWdELENBQUMscUJBQXFCLENBQUMsd0RBQXdELGFBQWEsQ0FBQyw0REFBNEQsYUFBYSxDQUFDLG9FQUFvRSx3QkFBd0IsQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLG9QQUFvUCw0Q0FBNEMsQ0FBQyxpS0FBaUssNENBQTRDLENBQUMsMEpBQTBKLDJDQUEyQyxDQUFDLENBQUMsc0RBQXNELHVCQUF1QixDQUFDLHNEQUFzRCxhQUFhLENBQUMsaUJBQWlCLENBQUMsZ1BBQWdQLDRDQUE0QyxDQUFDLHFCQUFxQixDQUFDLHdKQUF3Siw0Q0FBNEMsQ0FBQyxxQkFBcUIsQ0FBQyx5REFBeUQsbUJBQW1CLENBQUMseURBQXlELGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxzUEFBc1AsNENBQTRDLENBQUMscUJBQXFCLENBQUMsMkpBQTJKLDRDQUE0QyxDQUFDLHFCQUFxQixDQUFDLDRDQUE0QyxjQUFjLENBQUMsZ0VBQWdFLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsOEZBQThGLGNBQWMsQ0FBQyx3QkFBd0Isb0JBQW9CLENBQUMsZUFBZSxnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDREQUE0RCxnREFBZ0QsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLGdEQUFnRCxDQUFDLFlBQVksZ0RBQWdELENBQUMsb0JBQW9CLGNBQWMsQ0FBQywwQkFBMEIsZ0RBQWdELENBQUMsNkJBQTZCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsOENBQThDLGdEQUFnRCxDQUFDLGdCQUFnQixjQUFjLENBQUMsZUFBZSxDQUFDLDBCQUEwQixrQkFBa0IsQ0FBQyxzQkFBc0IsY0FBYyxDQUFDLHlCQUF5QixjQUFjLENBQUMsZUFBZSxDQUFDLGVBQWUsZ0RBQWdELENBQUMsNkJBQTZCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsNkdBQTZHLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsZUFBZSxnREFBZ0QsQ0FBQyxpQkFBaUIsZ0RBQWdELENBQUMsOEJBQThCLGNBQWMsQ0FBQyx3Q0FBd0Msa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyx1REFBdUQsY0FBYyxDQUFDLGdDQUFnQyxjQUFjLENBQUMsMENBQTBDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMseURBQXlELGNBQWMsQ0FBQyw4QkFBOEIsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxxQ0FBcUMsY0FBYyxDQUFDLCtDQUErQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLDhEQUE4RCxjQUFjLENBQUMsdUNBQXVDLGNBQWMsQ0FBQyxpREFBaUQsa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxnRUFBZ0UsY0FBYyxDQUFDLHFDQUFxQyxnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFlBQVksZ0RBQWdELENBQUMsY0FBYyxDQUFDLG9CQUFvQix1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsZ0RBQWdELENBQUMsY0FBYyxDQUFDLDRCQUE0QixhQUFhLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFVBQVUsZ0RBQWdELENBQUMscUNBQXFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsWUFBWSxlQUFlLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLHVCQUF1QixDQUFDLGlDQUFpQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsMkRBQTJELENBQUMsa0JBQWtCLENBQUMsOENBQThDLFlBQVksQ0FBQyxxQkFBcUIsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLG1EQUFtRCxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLGNBQWMsQ0FBQyxZQUFZLENBQUMsNkJBQTZCLFlBQVksQ0FBQyw0QkFBNEIsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLHNCQUFzQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLHlEQUF5RCxDQUFDLFNBQVMsQ0FBQyxtREFBbUQsU0FBUyxDQUFDLDhDQUE4QyxtREFBbUQsVUFBVSxDQUFDLENBQUMsMkJBQTJCLDBCQUEwQixDQUFDLGlHQUFpRyxTQUFTLENBQUMsNkNBQTZDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxpREFBeUMsSUFBSSxDQUFDLENBQTlDLHlDQUF5QyxJQUFJLENBQUMsQ0FBQywrQ0FBdUMsSUFBSSxDQUFDLENBQTVDLHVDQUF1QyxJQUFJLENBQUMsQ0FBQyxvREFBb0Qsc0RBQTZDLENBQTdDLDhDQUE4QyxDQUFDLDBEQUEwRCxvREFBMkMsQ0FBM0MsNENBQTRDLENBQUMsK0JBQStCLFdBQVcsQ0FBQyx5Q0FBeUMsd0JBQXdCLENBQUMsaUNBQWlDLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLENBQUMsaURBQWlELHdCQUF3QixDQUFDLGlDQUFpQyxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQiwrQkFBK0IsQ0FBQyxZQUFZLHFCQUFxQixDQUFDLHdGQUF3RiwwQkFBMEIsQ0FBQyw2RUFBNkUsMEJBQTBCLENBQUMsdUJBQXVCLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLGdDQUFnQyxxQkFBcUIsQ0FBQyxnRUFBZ0UsYUFBYSxDQUFDLCtEQUErRCxhQUFhLENBQUMsNkRBQTZELGFBQWEsQ0FBQyxvQkFBb0IscUJBQXFCLENBQUMsMkNBQTJDLHFCQUFxQixDQUFDLHFCQUFxQixxQkFBcUIsQ0FBQyw0QkFBNEIsYUFBYSxDQUFDLDhCQUE4QixhQUFhLENBQUMsMEZBQTBGLGtCQUFrQixDQUFDLHdKQUF3SixrQkFBa0IsQ0FBQyxvRkFBb0Ysa0JBQWtCLENBQUMsMEhBQTBILGtCQUFrQixDQUFDLGtCQUFrQixxSEFBcUgsQ0FBQyxrQkFBa0Isc0hBQXNILENBQUMsa0JBQWtCLHNIQUFzSCxDQUFDLGtCQUFrQixzSEFBc0gsQ0FBQyxrQkFBa0IsdUhBQXVILENBQUMsa0JBQWtCLHVIQUF1SCxDQUFDLGtCQUFrQix3SEFBd0gsQ0FBQyxrQkFBa0Isd0hBQXdILENBQUMsa0JBQWtCLHdIQUF3SCxDQUFDLGtCQUFrQix3SEFBd0gsQ0FBQyxtQkFBbUIseUhBQXlILENBQUMsbUJBQW1CLHlIQUF5SCxDQUFDLG1CQUFtQix5SEFBeUgsQ0FBQyxtQkFBbUIseUhBQXlILENBQUMsbUJBQW1CLHlIQUF5SCxDQUFDLG1CQUFtQix5SEFBeUgsQ0FBQyxtQkFBbUIsMEhBQTBILENBQUMsbUJBQW1CLDBIQUEwSCxDQUFDLG1CQUFtQiwwSEFBMEgsQ0FBQyxtQkFBbUIsMEhBQTBILENBQUMsbUJBQW1CLDJIQUEySCxDQUFDLG1CQUFtQiwySEFBMkgsQ0FBQyxtQkFBbUIsMkhBQTJILENBQUMsbUJBQW1CLDJIQUEySCxDQUFDLG1CQUFtQiwySEFBMkgsQ0FBQyxvQkFBb0Isd0JBQXdCLENBQUMscUJBQXFCLENBQUMseUJBQXlCLFlBQVksQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHFCQUFxQixDQUFDLHNEQUFzRCx1SEFBdUgsQ0FBQyw4RUFBOEUsZUFBZSxDQUFDLHdHQUF3RyxxQkFBcUIsQ0FBQyxtQkFBbUIsVUFBVSxDQUFDLGtCQUFrQixDQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMscUNBQXFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLG1DQUFtQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsV0FBVyxpQkFBaUIsQ0FBQyxxQ0FBcUMsWUFBWSxDQUFDLHVDQUF1QyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsc0NBQXNDLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLG1GQUFtRixlQUFlLENBQUMsb0NBQW9DLGNBQWMsQ0FBQyxvQ0FBb0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvREFBb0QsUUFBUSxDQUFDLG9EQUFvRCxXQUFXLENBQUMscURBQXFELFVBQVUsQ0FBQywrREFBK0QsU0FBUyxDQUFDLFdBQVcsQ0FBQyxvREFBb0QsV0FBVyxDQUFDLDhEQUE4RCxVQUFVLENBQUMsVUFBVSxDQUFDLHVFQUF1RSxTQUFTLENBQUMsaUZBQWlGLFNBQVMsQ0FBQyxVQUFVLENBQUMsc0VBQXNFLFVBQVUsQ0FBQyxnRkFBZ0YsVUFBVSxDQUFDLFNBQVMsQ0FBQyxxQ0FBcUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxxREFBcUQsU0FBUyxDQUFDLHFEQUFxRCxZQUFZLENBQUMsc0RBQXNELFVBQVUsQ0FBQyxnRUFBZ0UsU0FBUyxDQUFDLFdBQVcsQ0FBQyxxREFBcUQsV0FBVyxDQUFDLCtEQUErRCxVQUFVLENBQUMsVUFBVSxDQUFDLHdFQUF3RSxVQUFVLENBQUMsa0ZBQWtGLFNBQVMsQ0FBQyxXQUFXLENBQUMsdUVBQXVFLFdBQVcsQ0FBQyxpRkFBaUYsVUFBVSxDQUFDLFVBQVUsQ0FBQyxvQ0FBb0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvREFBb0QsU0FBUyxDQUFDLG9EQUFvRCxZQUFZLENBQUMscURBQXFELFVBQVUsQ0FBQywrREFBK0QsU0FBUyxDQUFDLFdBQVcsQ0FBQyxvREFBb0QsV0FBVyxDQUFDLDhEQUE4RCxVQUFVLENBQUMsVUFBVSxDQUFDLHVFQUF1RSxVQUFVLENBQUMsaUZBQWlGLFNBQVMsQ0FBQyxXQUFXLENBQUMsc0VBQXNFLFdBQVcsQ0FBQyxnRkFBZ0YsVUFBVSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsMEhBQTBILENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLGlEQUFpRCxhQUFhLENBQUMsc0JBQXNCLENBQUMscUZBQXFGLGFBQWEsQ0FBQyxrRkFBa0YsYUFBYSxDQUFDLDRFQUE0RSxhQUFhLENBQUMsMGJBQTBiLHFCQUFxQixDQUFDLG1LQUFtSyx3QkFBd0IsQ0FBQyxnS0FBZ0ssd0JBQXdCLENBQUMsMEpBQTBKLHdCQUF3QixDQUFDLDZKQUE2Siw0QkFBNEIsQ0FBQyw2R0FBNkcsVUFBVSxDQUFDLDZCQUE2QixDQUFDLDBCQUEwQixlQUFlLENBQUMsb0NBQW9DLDRCQUE0QixDQUFDLDJEQUEyRCxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQywyR0FBMkcsVUFBVSxDQUFDLHVHQUF1RyxxQkFBcUIsQ0FBQywrRkFBK0YsVUFBVSxDQUFDLG9qQkFBb2pCLHFCQUFxQixDQUFDLDJHQUEyRyx3QkFBd0IsQ0FBQyx1R0FBdUcsd0JBQXdCLENBQUMsK0ZBQStGLHdCQUF3QixDQUFDLG9qQkFBb2pCLGdDQUFnQyxDQUFDLDJMQUEyTCxxQ0FBcUMsQ0FBQyx1TEFBdUwsK0JBQStCLENBQUMsK0tBQStLLHFDQUFxQyxDQUFDLGlHQUFpRyxxSEFBcUgsQ0FBQyxpREFBaUQsc0hBQXNILENBQUMsd0VBQXdFLHdIQUF3SCxDQUFDLDJEQUEyRCxxSEFBcUgsQ0FBQyxtRkFBbUYsd0hBQXdILENBQUMsaUlBQWlJLHlIQUF5SCxDQUFDLHVHQUF1RyxxSEFBcUgsQ0FBQyx1REFBdUQsc0hBQXNILENBQUMsaUhBQWlILGVBQWUsQ0FBQyxtQkFBbUIscUJBQXFCLENBQUMsb0RBQW9ELGdDQUFnQyxDQUFDLHVDQUF1QyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsd0VBQXdFLHFCQUFxQixDQUFDLG1GQUFtRixxQ0FBcUMsQ0FBQyw2RkFBNkYsZ0JBQWdCLENBQUMsc0NBQXNDLENBQUMsOEdBQThHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLG9DQUFvQyxDQUFDLDJCQUEyQix3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxpRUFBaUUscUJBQXFCLENBQUMsNEJBQTRCLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLGtFQUFrRSxlQUFlLENBQUMsc0RBQXNELHdCQUF3QixDQUFDLGlIQUFpSCxnQ0FBZ0MsQ0FBQyxVQUFVLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyx3Q0FBd0Msc0hBQXNILENBQUMsc0RBQXNELHFIQUFxSCxDQUFDLG1CQUFtQixxQkFBcUIsQ0FBQyxvQkFBb0IsNEJBQTRCLENBQUMsd0JBQXdCLFlBQVksQ0FBQyw2QkFBNkIseUJBQXlCLENBQUMsd0JBQXdCLHdCQUF3QixDQUFDLDRIQUE0SCx3QkFBd0IsQ0FBQywwSEFBMEgsd0JBQXdCLENBQUMsc0hBQXNILHdCQUF3QixDQUFDLGdKQUFnSix3QkFBd0IsQ0FBQyxzRUFBc0Usb0JBQW9CLENBQUMsMkNBQTJDLHFCQUFxQixDQUFDLGtDQUFrQyxxQkFBcUIsQ0FBQyxtS0FBbUssa0JBQWtCLENBQUMsaUtBQWlLLGtCQUFrQixDQUFDLDZKQUE2SixrQkFBa0IsQ0FBQyw0QkFBNEIsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsNkNBQTZDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQywyREFBMkQsc0hBQXNILENBQUMsMkVBQTJFLFdBQVcsQ0FBQyw4Q0FBOEMsVUFBVSxDQUFDLG1DQUFtQyxlQUFlLENBQUMsMERBQTBELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywyRUFBMkUsVUFBVSxDQUFDLFVBQVUsQ0FBQyw4RUFBOEUscUNBQXFDLENBQUMsdURBQXVELHdCQUF3QixDQUFDLFVBQVUsQ0FBQyx3RUFBd0UsVUFBVSxDQUFDLFVBQVUsQ0FBQywyRUFBMkUscUNBQXFDLENBQUMseURBQXlELHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLDBFQUEwRSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsNkVBQTZFLCtCQUErQixDQUFDLFdBQVcsZUFBZSxDQUFDLHVKQUF1SixrQkFBa0IsQ0FBQyx3RkFBd0YsbUNBQW1DLENBQUMsaUJBQWlCLHFCQUFxQixDQUFDLDJCQUEyQixxQkFBcUIsQ0FBQyxvQkFBb0IsZ0NBQWdDLENBQUMsK0hBQStILHFCQUFxQixDQUFDLDJCQUEyQixxQkFBcUIsQ0FBQywwQ0FBMEMsMEJBQTBCLENBQUMseUJBQXlCLHFCQUFxQixDQUFDLGdDQUFnQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyw2RkFBNkYscUJBQXFCLENBQUMsaVdBQWlXLGdDQUFnQyxDQUFDLDBEQUEwRCw0QkFBNEIsQ0FBQyxzRkFBc0YsNEJBQTRCLENBQUMsNEJBQTRCLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyx3REFBd0Qsb0NBQW9DLENBQUMsb0RBQW9ELCtCQUErQixDQUFDLHdCQUF3Qix1SEFBdUgsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQywrREFBK0Qsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsMkZBQTJGLG9DQUFvQyxDQUFDLHVGQUF1RiwwQ0FBMEMsQ0FBQyw2REFBNkQsd0JBQXdCLENBQUMsVUFBVSxDQUFDLHlGQUF5RixtQ0FBbUMsQ0FBQyxxRkFBcUYsK0JBQStCLENBQUMsOEJBQThCLHFIQUFxSCxDQUFDLDhCQUE4QixhQUFhLENBQUMseUNBQXlDLGFBQWEsQ0FBQyx1Q0FBdUMsYUFBYSxDQUFDLHNCQUFzQiwySEFBMkgsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsYUFBYSxnQ0FBZ0MsQ0FBQyxzQkFBc0Isa0NBQWtDLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxtREFBbUQsc0hBQXNILENBQUMsZ0JBQWdCLGdDQUFnQyxDQUFDLG1TQUFtUywwQkFBMEIsQ0FBQyxvQkFBb0Isb0dBQW9HLGVBQWUsQ0FBQyxDQUFDLGtDQUFrQyxxQkFBcUIsQ0FBQyx3RUFBd0UscUJBQXFCLENBQUMsZ0RBQWdELHFCQUFxQixDQUFDLDBLQUEwSyxhQUFhLENBQUMsc0JBQXNCLG9CQUFvQixDQUFDLFVBQVUsb0JBQW9CLENBQUMsa0RBQWtELGFBQWEsQ0FBQyw2REFBNkQsYUFBYSxDQUFDLDJEQUEyRCxhQUFhLENBQUMsNkNBQTZDLGFBQWEsQ0FBQyx1QkFBdUIsZ0NBQWdDLENBQUMsbURBQW1ELHdCQUF3QixDQUFDLDhEQUE4RCx3QkFBd0IsQ0FBQyw0REFBNEQsd0JBQXdCLENBQUMsNkdBQTZHLGFBQWEsQ0FBQyx3SEFBd0gsYUFBYSxDQUFDLHNIQUFzSCxhQUFhLENBQUMsNkRBQTZELGFBQWEsQ0FBQyxxS0FBcUssYUFBYSxDQUFDLHVJQUF1SSx3QkFBd0IsQ0FBQyxXQUFXLGFBQWEsQ0FBQyx3REFBd0QscUJBQXFCLENBQUMsNENBQTRDLHFCQUFxQixDQUFDLDREQUE0RCxnQ0FBZ0MsQ0FBQyxvRkFBb0YsMkdBQTJHLENBQUMsd0JBQXdCLENBQUMsMEJBQTBCLENBQUMsOERBQThELGdDQUFnQyxDQUFDLHNGQUFzRiwyR0FBMkcsQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEIsQ0FBQyxxREFBcUQsZ0NBQWdDLENBQUMsNkVBQTZFLGdDQUFnQyxDQUFDLGtFQUFrRSxnQ0FBZ0MsQ0FBQyw4RUFBOEUscUJBQXFCLENBQUMsMEZBQTBGLDRCQUE0QixDQUFDLDJEQUEyRCxxQkFBcUIsQ0FBQyxpRUFBaUUscUJBQXFCLENBQUMsNkVBQTZFLGFBQWEsQ0FBQyx3RkFBd0YsYUFBYSxDQUFDLHNGQUFzRixhQUFhLENBQUMsK0dBQStHLGFBQWEsQ0FBQyxpRkFBaUYscUJBQXFCLENBQUMsbUZBQW1GLHFCQUFxQixDQUFDLHNCQUFzQixhQUFhLENBQUMscUJBQXFCLGFBQWEsQ0FBQyxtQkFBbUIsYUFBYSxDQUFDLG9FQUFvRSxxQkFBcUIsQ0FBQyx3SEFBd0gscUJBQXFCLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLHFDQUFnQyxxQkFBcUIsQ0FBckQsMENBQWdDLHFCQUFxQixDQUFyRCxnQ0FBZ0MscUJBQXFCLENBQUMscUNBQXFDLHFCQUFxQixDQUFDLDhDQUE4QyxxQkFBcUIsQ0FBQyx5Q0FBeUMscUJBQXFCLENBQUMsK0JBQStCLG1CQUFtQixDQUFDLHdFQUF3RSxtQkFBbUIsQ0FBQywyRkFBMkYsYUFBYSxDQUFDLDhCQUE4QixxQkFBcUIsQ0FBQyxnQ0FBZ0MscUJBQXFCLENBQUMsOEJBQThCLHFCQUFxQixDQUFDLHdCQUF3QixxQkFBcUIsQ0FBQyxnTUFBZ00sMEJBQTBCLENBQUMsK0dBQStHLDBCQUEwQixDQUFDLGdCQUFnQixlQUFlLENBQUMsOENBQThDLHVIQUF1SCxDQUFDLGVBQWUsc0JBQXNCLENBQUMscUJBQXFCLENBQUMseURBQXlELHFCQUFxQixDQUFDLHdFQUF3RSxxQkFBcUIsQ0FBQyx1TEFBdUwsMEJBQTBCLENBQUMsZUFBZSxlQUFlLENBQUMsNERBQTRELHFCQUFxQixDQUFDLGtEQUFrRCxvQ0FBb0MsQ0FBQyxzQ0FBc0MsQ0FBQyx5Q0FBeUMsb0NBQW9DLENBQUMsdU1BQXVNLDRCQUE0QixDQUFDLDZCQUE2QixZQUFZLENBQUMseUJBQXlCLHdCQUF3QixDQUFDLDhCQUE4Qix3QkFBd0IsQ0FBQywwREFBMEQsWUFBWSxDQUFDLHNEQUFzRCx3QkFBd0IsQ0FBQywyREFBMkQsd0JBQXdCLENBQUMsd0RBQXdELFlBQVksQ0FBQyxvREFBb0Qsd0JBQXdCLENBQUMseURBQXlELHdCQUF3QixDQUFDLGlEQUFpRCxjQUFjLENBQUMsdUVBQXVFLGNBQWMsQ0FBQyxtRUFBbUUsY0FBYyxDQUFDLHdCQUF3Qiw0QkFBNEIsQ0FBQyx3RUFBd0Usb0JBQW9CLENBQUMsMlNBQTJTLHdCQUF3QixDQUFDLHVFQUF1RSxvQkFBb0IsQ0FBQyx1U0FBdVMsd0JBQXdCLENBQUMscUVBQXFFLG9CQUFvQixDQUFDLCtSQUErUix3QkFBd0IsQ0FBQyw0SUFBNEksNEJBQTRCLENBQUMsd0lBQXdJLGdDQUFnQyxDQUFDLDhEQUE4RCxxQkFBcUIsQ0FBQyxzQ0FBc0MscUJBQXFCLENBQUMsa0JBQWtCLHFCQUFxQixDQUFDLHdCQUF3QixxQkFBcUIsQ0FBQyx1Q0FBdUMscUJBQXFCLENBQUMsa0JBQWtCLHFCQUFxQixDQUFDLGtCQUFrQixlQUFlLENBQUMsZ0RBQWdELHVIQUF1SCxDQUFDLHFFQUFxRSwwQkFBMEIsQ0FBQywwREFBMEQsYUFBYSxDQUFDLHlEQUF5RCxhQUFhLENBQUMsdURBQXVELGFBQWEsQ0FBQyxpRUFBaUUsYUFBYSxDQUFDLGtFQUFrRSxxQkFBcUIsQ0FBQyxzQkFBc0Isd0JBQXdCLENBQUMscUJBQXFCLENBQUMsWUFBWSxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyw0QkFBNEIscUJBQXFCLENBQUMsa0NBQWtDLDBIQUEwSCxDQUFDLGlCQUFpQixzQ0FBc0MsQ0FBQyxnQ0FBZ0MscUNBQXFDLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLHFDQUFxQyxDQUFDLGlCQUFpQixDQUFDLDBDQUEwQyxnQkFBZ0IsQ0FBQyxzQ0FBc0MsQ0FBQyxzQ0FBc0MsK0JBQStCLENBQUMsc0RBQXNELHdCQUF3QixDQUFDLG9EQUFvRCxxQ0FBcUMsQ0FBQyxrREFBa0Qsd0JBQXdCLENBQUMsa0VBQWtFLHdCQUF3QixDQUFDLGdFQUFnRSxxQ0FBcUMsQ0FBQyw4REFBOEQsd0JBQXdCLENBQUMsK0RBQStELHdCQUF3QixDQUFDLDZEQUE2RCxvQ0FBb0MsQ0FBQywyREFBMkQsd0JBQXdCLENBQUMsd0RBQXdELHFCQUFxQixDQUFDLHdCQUF3QixzSEFBc0gsQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsZ0NBQWdDLENBQUMsNkJBQTZCLGdDQUFnQyxDQUFDLHdHQUF3Ryx3QkFBd0IsQ0FBQywwQ0FBMEMsVUFBVSxDQUFDLHFHQUFxRyx3QkFBd0IsQ0FBQyx5Q0FBeUMscUJBQXFCLENBQUMsK0ZBQStGLHdCQUF3QixDQUFDLHVDQUF1QyxVQUFVLENBQUMsdUJBQXVCLG9DQUFvQyxDQUFDLHlGQUF5RixnQ0FBZ0MsQ0FBQyxxSUFBcUksZ0NBQWdDLENBQUMsd0RBQXdELGdDQUFnQyxDQUFDLDZDQUE2QyxnQ0FBZ0MsQ0FBQyxvSkFBb0osZ0NBQWdDLENBQUMsNEtBQTRLLGdDQUFnQyxDQUFDLDZFQUE2RSw0QkFBNEIsQ0FBQyw0QkFBNEIsQ0FBQyw0S0FBNEssNEJBQTRCLENBQUMsb05BQW9OLDRCQUE0QixDQUFDLGlEQUFpRCwyQkFBMkIsQ0FBQyx5Q0FBeUMsNEhBQTRILENBQUMsa0lBQWtJLENBQUMsdUNBQXVDLDZIQUE2SCxDQUFDLGtHQUFrRyxnQ0FBZ0MsQ0FBQyxvQkFBb0IsdUJBQXVCLGVBQWUsQ0FBQyxDQUFDLHFFQUFxRSxxQkFBcUIsQ0FBQyxnQ0FBZ0MsZ0NBQWdDLENBQUMsVUFBVSxDQUFDLCtIQUErSCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsNENBQTRDLDRCQUE0QixDQUFDLGFBQWEsQ0FBQyx1REFBdUQscUJBQXFCLENBQUMsc0RBQXNELGFBQWEsQ0FBQyw4Q0FBOEMscUJBQXFCLENBQUMsbUNBQW1DLGlDQUFpQyxDQUFDLDBHQUEwRyxnQ0FBZ0MsQ0FBQyx1QkFBdUIsYUFBYSxDQUFDLGlDQUFpQyx1Q0FBdUMsQ0FBQywrRkFBK0Ysb0NBQW9DLENBQUMsa0JBQWtCLENBQUMsNkJBQTZCLHFCQUFxQixDQUFDLCtEQUErRCxxQkFBcUIsQ0FBQyxtQ0FBbUMsNEJBQTRCLENBQUMsdUVBQXVFLDRCQUE0QixDQUFDLGdHQUFnRyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsZ3JCQUFnckIscUNBQXFDLENBQUMsa0ZBQWtGLHdCQUF3QixDQUFDLGdJQUFnSSxxQkFBcUIsQ0FBQyx3cUJBQXdxQixxQ0FBcUMsQ0FBQyxnRkFBZ0Ysd0JBQXdCLENBQUMsNEhBQTRILGdDQUFnQyxDQUFDLHdwQkFBd3BCLHFDQUFxQyxDQUFDLDRFQUE0RSx3QkFBd0IsQ0FBQyxvSEFBb0gscUJBQXFCLENBQUMsd3dCQUF3d0IscUNBQXFDLENBQUMsOFZBQThWLHdCQUF3QixDQUFDLHNOQUFzTixVQUFVLENBQUMsMFJBQTBSLDBCQUEwQixDQUFDLG9KQUFvSixpQkFBaUIsQ0FBQyw0TkFBNE4saUNBQWlDLENBQUMsc0hBQXNILHNDQUFzQyxDQUFDLGd3QkFBZ3dCLHFDQUFxQyxDQUFDLHdWQUF3Vix3QkFBd0IsQ0FBQyxrTkFBa04scUJBQXFCLENBQUMsc1JBQXNSLG9CQUFvQixDQUFDLGtKQUFrSiw0QkFBNEIsQ0FBQywwTkFBME4sMkJBQTJCLENBQUMsb0hBQW9ILGdDQUFnQyxDQUFDLGd2QkFBZ3ZCLHFDQUFxQyxDQUFDLDRVQUE0VSx3QkFBd0IsQ0FBQywwTUFBME0sVUFBVSxDQUFDLDhRQUE4USwwQkFBMEIsQ0FBQyw4SUFBOEksaUJBQWlCLENBQUMsc05BQXNOLGlDQUFpQyxDQUFDLGdIQUFnSCxzQ0FBc0MsQ0FBQyxhQUFhLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsNEhBQTRILDZCQUE2QixDQUFDLDRNQUE0TSxhQUFhLENBQUMsZ0NBQWdDLHdCQUF3QixDQUFDLGFBQWEsNEJBQTRCLENBQUMsVUFBVSxlQUFlLENBQUMscUNBQXFDLHFCQUFxQixDQUFDLHlCQUF5QiwwQkFBMEIsQ0FBQyxrQkFBa0IsQ0FBQyx3SEFBd0gsQ0FBQyw0QkFBNEIsYUFBYSxDQ0Mxdi9EO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXOztJQUVYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYmFkZ2UtY29udGVudHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjlweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6MjRweH0ubWF0LWgxLC5tYXQtaGVhZGxpbmUsLm1hdC10eXBvZ3JhcGh5IGgxe2ZvbnQ6NDAwIDI0cHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMywubWF0LXN1YmhlYWRpbmctMiwubWF0LXR5cG9ncmFwaHkgaDN7Zm9udDo0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNCwubWF0LXN1YmhlYWRpbmctMSwubWF0LXR5cG9ncmFwaHkgaDR7Zm9udDo0MDAgMTVweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDo0MDAgY2FsYygxNHB4ICogMC44MykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1oNiwubWF0LXR5cG9ncmFwaHkgaDZ7Zm9udDo0MDAgY2FsYygxNHB4ICogMC42NykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1ib2R5LXN0cm9uZywubWF0LWJvZHktMntmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtYm9keSwubWF0LWJvZHktMSwubWF0LXR5cG9ncmFwaHl7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJvZHkgcCwubWF0LWJvZHktMSBwLC5tYXQtdHlwb2dyYXBoeSBwe21hcmdpbjowIDAgMTJweH0ubWF0LXNtYWxsLC5tYXQtY2FwdGlvbntmb250OjQwMCAxMnB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZGlzcGxheS00LC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNHtmb250OjMwMCAxMTJweC8xMTJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotMC4wNWVtO21hcmdpbjowIDAgNTZweH0ubWF0LWRpc3BsYXktMywubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTN7Zm9udDo0MDAgNTZweC81NnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0wLjAyZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0yLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMntmb250OjQwMCA0NXB4LzQ4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LTAuMDA1ZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0xLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtmb250OjQwMCAzNHB4LzQwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgNjRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJ1dHRvbiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9uLC5tYXQtZmxhdC1idXR0b24sLm1hdC1mYWIsLm1hdC1taW5pLWZhYntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2FyZHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyMHB4fS5tYXQtY2FyZC1zdWJ0aXRsZSwubWF0LWNhcmQtY29udGVudHtmb250LXNpemU6MTRweH0ubWF0LWNoZWNrYm94e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7bGluZS1oZWlnaHQ6MjRweH0ubWF0LWNoaXB7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbiwubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbntmb250LXNpemU6MThweH0ubWF0LXRhYmxle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtaGVhZGVyLWNlbGx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2FsZW5kYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4fS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCwubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b257Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWRpYWxvZy10aXRsZXtmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Lm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudHtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS4xMjU7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbntmb250LXNpemU6MTUwJTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9ue2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257aGVpZ2h0OjEuMTI1ZW07bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjVlbSAwO2JvcmRlci10b3A6Ljg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzMzMzMzMzJX0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye3RvcDotMC44NDM3NWVtO3BhZGRpbmctdG9wOi44NDM3NWVtfS5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7Zm9udC1zaXplOjc1JTttYXJnaW4tdG9wOi42NjY2NjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNzkxNjY2NjY2N2VtKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNDM3NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNTMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjI4MTI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye21hcmdpbi10b3A6LjU0MTY2NjY2NjdlbTt0b3A6Y2FsYygxMDAlIC0gMS42NjY2NjY2NjY3ZW0pfUBtZWRpYSBwcmludHsubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoMC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMWVtKSBzY2FsZSgwLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSgwLjc1KX19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouMjVlbSAwIC43NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMDkzNzVlbTttYXJnaW4tdG9wOi0wLjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzoxZW0gMCAxZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS44NDM3NWVtO21hcmdpbi10b3A6LTAuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1ncmlkLXRpbGUtaGVhZGVyLC5tYXQtZ3JpZC10aWxlLWZvb3Rlcntmb250LXNpemU6MTRweH0ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lLC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH1pbnB1dC5tYXQtaW5wdXQtZWxlbWVudHttYXJnaW4tdG9wOi0wLjA2MjVlbX0ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHh9Lm1hdC1yYWRpby1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3R7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3QtdHJpZ2dlcntoZWlnaHQ6MS4xMjVlbX0ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtc3RlcHBlci12ZXJ0aWNhbCwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXN0ZXAtbGFiZWx7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3J7Zm9udC13ZWlnaHQ6bm9ybWFsfS5tYXQtc3RlcC1sYWJlbC1lcnJvcntmb250LXNpemU6MTRweH0ubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWR7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdGFiLWdyb3Vwe2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdG9vbGJhciwubWF0LXRvb2xiYXIgaDEsLm1hdC10b29sYmFyIGgyLC5tYXQtdG9vbGJhciBoMywubWF0LXRvb2xiYXIgaDQsLm1hdC10b29sYmFyIGg1LC5tYXQtdG9vbGJhciBoNntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowfS5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206NnB4fS5tYXQtdG9vbHRpcC1oYW5kc2V0e2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Lm1hdC1saXN0LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1saXN0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweH0ubWF0LW9wdGdyb3VwLWxhYmVse2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1zaW1wbGUtc25hY2tiYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2xpbmUtaGVpZ2h0OjE7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo1MDB9Lm1hdC10cmVle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHh9Lm1hdC1yaXBwbGV7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpe3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVke292ZXJmbG93OnZpc2libGV9Lm1hdC1yaXBwbGUtZWxlbWVudHtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSx0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO3RyYW5zZm9ybTpzY2FsZSgwKX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uY2RrLW92ZXJsYXktY29udGFpbmVyLC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjF9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXN9LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpe2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne3BhZGRpbmc6MnB4IDAgIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8gIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudH10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3h7cGFkZGluZzoycHggMCAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ggIWltcG9ydGFudDtoZWlnaHQ6MCAhaW1wb3J0YW50fS5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb246aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSwubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LWFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiM2NzNhYjd9Lm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2ZmZDc0MH0ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2Y0NDMzNn0ubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHNldWRvLWNoZWNrYm94e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXJ7Y29sb3I6I2ZhZmFmYX0ubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtjb2xvcjojYjBiMGIwfS5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6IzY3M2FiN30ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2ZmZDc0MH0ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNiMGIwYjB9Lm1hdC1lbGV2YXRpb24tejB7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejJ7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo0e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo1e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16N3tib3gtc2hhZG93OjBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejh7Ym94LXNoYWRvdzowcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo5e2JveC1zaGFkb3c6MHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTB7Ym94LXNoYWRvdzowcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTF7Ym94LXNoYWRvdzowcHggNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTJ7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTN7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTR7Ym94LXNoYWRvdzowcHggN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTV7Ym94LXNoYWRvdzowcHggOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTZ7Ym94LXNoYWRvdzowcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE3e2JveC1zaGFkb3c6MHB4IDhweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxOHtib3gtc2hhZG93OjBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA3cHggMzRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTl7Ym94LXNoYWRvdzowcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIwe2JveC1zaGFkb3c6MHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjF7Ym94LXNoYWRvdzowcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyMntib3gtc2hhZG93OjBweCAxMHB4IDE0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIze2JveC1zaGFkb3c6MHB4IDExcHggMTRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjR7Ym94LXNoYWRvdzowcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYXBwLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXJ7ZGlzcGxheTpub25lfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcil7YmFja2dyb3VuZDojZmZmfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYmFkZ2UtY29udGVudHtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzY3M2FiN30uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9Lm1hdC1iYWRnZS1hY2NlbnQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6I2ZmZDc0MDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1iYWRnZS13YXJuIC5tYXQtYmFkZ2UtY29udGVudHtjb2xvcjojZmZmO2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LWJhZGdle3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtYmFkZ2UtaGlkZGVuIC5tYXQtYmFkZ2UtY29udGVudHtkaXNwbGF5Om5vbmV9Lm1hdC1iYWRnZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnR7YmFja2dyb3VuZDojYjliOWI5O2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWJhZGdlLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czo1MCU7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtOnNjYWxlKDAuNik7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LC5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZXt0cmFuc2l0aW9uOm5vbmV9Lm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmV7dHJhbnNmb3JtOm5vbmV9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtsaW5lLWhlaWdodDoxNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LThweH0ubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjJweDtoZWlnaHQ6MjJweDtsaW5lLWhlaWdodDoyMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTExcHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDtsaW5lLWhlaWdodDoyOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Ym94LXNoYWRvdzowcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojNjczYWI3fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjojZmZkNzQwfS5tYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e29wYWNpdHk6LjE7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZsYXQtYnV0dG9uLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LWZhYiwubWF0LW1pbmktZmFie2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeXtjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2Fybntjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1mYWIubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLC5tYXQtZmFiLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LWZsYXQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cHtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmR7Ym94LXNoYWRvdzpub25lfS5tYXQtYnV0dG9uLXRvZ2dsZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1idXR0b24tdG9nZ2xlIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX1bZGlyPXJ0bF0gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6bm9uZTtib3JkZXItdG9wOnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMjYpO2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojYmRiZGJkfS5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmR7Ym9yZGVyOnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYXJke2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJre2ZpbGw6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojZmFmYWZhICFpbXBvcnRhbnR9Lm1hdC1jaGVja2JveC1taXhlZG1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojNjczYWI3fS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojZmZkNzQwfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZXtib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVye29wYWNpdHk6LjU0fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1kaXNhYmxlZHtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXJ7YmFja2dyb3VuZDojMDAwfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LXRhYmxle2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRhYmxlIHRoZWFkLC5tYXQtdGFibGUgdGJvZHksLm1hdC10YWJsZSB0Zm9vdCxtYXQtaGVhZGVyLXJvdyxtYXQtcm93LG1hdC1mb290ZXItcm93LFttYXQtaGVhZGVyLXJvd10sW21hdC1yb3ddLFttYXQtZm9vdGVyLXJvd10sLm1hdC10YWJsZS1zdGlja3l7YmFja2dyb3VuZDppbmhlcml0fW1hdC1yb3csbWF0LWhlYWRlci1yb3csbWF0LWZvb3Rlci1yb3csdGgubWF0LWhlYWRlci1jZWxsLHRkLm1hdC1jZWxsLHRkLm1hdC1mb290ZXItY2VsbHtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWhlYWRlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYWxlbmRhci1hcnJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXI+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSwuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xOCl9Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6IzY3M2FiNztjb2xvcjojZmZmfS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwMyw1OCwxODMsLjQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwwLDAsLjg3KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaHtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmV7Y29sb3I6IzY3M2FiN30ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWRpYWxvZy1jb250YWluZXJ7Ym94LXNoYWRvdzowcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kaXZpZGVye2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZGl2aWRlci12ZXJ0aWNhbHtib3JkZXItcmlnaHQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWFjdGlvbi1yb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSksLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZDojZmZmfX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiwubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbntjb2xvcjppbmhlcml0fS5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojNjczYWI3fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6IzY3M2FiN30ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50LC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1oaW50e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQyKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjQyKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojNjczYWI3fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjA2KX0ubWF0LWljb24ubWF0LXByaW1hcnl7Y29sb3I6IzY3M2FiN30ubWF0LWljb24ubWF0LWFjY2VudHtjb2xvcjojZmZkNzQwfS5tYXQtaWNvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCwubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6IzY3M2FiN30ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiNmZmQ3NDB9Lm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCwubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbGlzdC1pdGVtLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLC5tYXQtbGlzdC1vcHRpb246Zm9jdXMsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1c3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbiwubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpob3ZlciwubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpmb2N1c3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LW1lbnUtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtbWVudS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LW1lbnUtaXRlbXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtcGFnaW5hdG9ye2JhY2tncm91bmQ6I2ZmZn0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNkMWM0ZTl9Lm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2QxYzRlOX0ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmZTU3Zn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmU1N2Z9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwubWF0LXNwaW5uZXIgY2lyY2xle3N0cm9rZTojNjczYWI3fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGV7c3Ryb2tlOiNmZmQ3NDB9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC13YXJuIGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xle3N0cm9rZTojZjQ0MzM2fS5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiM2NzNhYjd9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeTphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2ZmZDc0MH0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQ6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm46YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2VsZWN0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc2VsZWN0LXBhbmVse2JhY2tncm91bmQ6I2ZmZn0ubWF0LXNlbGVjdC1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6IzY3M2FiN30ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1kcmF3ZXItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXB1c2h7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKXtib3gtc2hhZG93OjBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWRyYXdlci1zaWRle2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5ke2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgxMDMsNTgsMTgzLC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1zbGlkZS10b2dnbGU6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7Ym94LXNoYWRvdzowcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWIsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjIpfS5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1ie2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVye2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KX0ubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrc3tiYWNrZ3JvdW5kLWltYWdlOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KX0ubWF0LXN0ZXAtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCwubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfUBtZWRpYShob3Zlcjogbm9uZSl7Lm1hdC1zdGVwLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOm5vbmV9fS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLW9wdGlvbmFse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29ue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNTQpO2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0e2JhY2tncm91bmQtY29sb3I6IzY3M2FiNztjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3J7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwubWF0LXN0ZXBwZXItdmVydGljYWx7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7Ym9yZGVyLWxlZnQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZXtib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNvcnQtaGVhZGVyLWFycm93e2NvbG9yOiM3NTc1NzV9Lm1hdC10YWItbmF2LWJhciwubWF0LXRhYi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpfS5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFyLC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1oZWFkZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1ib3R0b206bm9uZX0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXRhYi1ncm91cFtjbGFzcyo9bWF0LWJhY2tncm91bmQtXSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhcltjbGFzcyo9bWF0LWJhY2tncm91bmQtXXtib3JkZXItYm90dG9tOm5vbmU7Ym9yZGVyLXRvcDpub25lfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjA5LDE5NiwyMzMsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIyOSwxMjcsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwOSwxOTYsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9ue2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMjksMTI3LC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9ue2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdG9vbGJhcntiYWNrZ3JvdW5kOiNmNWY1ZjU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LWFjY2VudHtiYWNrZ3JvdW5kOiNmZmQ3NDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtd2FybntiYWNrZ3JvdW5kOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWUsLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6aW5oZXJpdH0ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbmFjay1iYXItY29udGFpbmVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpO2JhY2tncm91bmQ6IzMyMzIzMjtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2NvbG9yOiNmZmQ3NDB9XG4iLCJAaW1wb3J0ICdAYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvZGVlcHB1cnBsZS1hbWJlci5jc3MnO1xyXG4uaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHotaW5kZXg6IDEwO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-content/main-content.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/main-content/main-content.component.ts ***!
    \********************************************************/

  /*! exports provided: MainContentComponent */

  /***/
  function srcAppMainContentMainContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainContentComponent", function () {
      return MainContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_df_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/df.json */
    "./src/app/df.json");

    var src_app_df_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! src/app/df.json */
    "./src/app/df.json", 1);
    /* harmony import */


    var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/df_r.json */
    "./src/app/df_r.json");

    var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! src/app/df_r.json */
    "./src/app/df_r.json", 1);
    /* harmony import */


    var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! smooth-scrollbar */
    "./node_modules/smooth-scrollbar/index.js");
    /* harmony import */


    var src_app_prem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/prem */
    "./src/app/prem.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../out-graph/out-graph.component */
    "./src/app/out-graph/out-graph.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function MainContentComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContentComponent_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return [ctx_r15.selectedCountry = "", ctx_r15.update()];
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainContentComponent_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041C\u0435\u0441\u0442\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainContentComponent_td_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r17.num, " ");
      }
    }

    function MainContentComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0442\u0440\u0430\u043D\u0430, \u0433\u043E\u0440\u043E\u0434");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainContentComponent_td_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r18.country, " ");
      }
    }

    function MainContentComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainContentComponent_td_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r19.confirmed, " ");
      }
    }

    function MainContentComponent_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u043C\u0435\u0440\u0442\u0435\u0439");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainContentComponent_td_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.deaths, " ");
      }
    }

    function MainContentComponent_th_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0432\u0448\u0438\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainContentComponent_td_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r21.cured, " ");
      }
    }

    function MainContentComponent_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u0441\u043C\u0435\u0440\u0442\u043D\u043E\u0441\u0442\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainContentComponent_td_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22.death_per, " ");
      }
    }

    function MainContentComponent_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContentComponent_tr_35_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var row_r23 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return row_r23 === ctx_r24.chosenitem ? [ctx_r24.chosenitem = null, ctx_r24.params.setParams(ctx_r24.chosenitem)] : [ctx_r24.chosenitem = row_r23, ctx_r24.params.setParams(ctx_r24.chosenitem)];
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r23 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-expanded-row", ctx_r13.chosenitem === row_r23)("active", row_r23 === ctx_r13.chosenitem);
      }
    }

    function MainContentComponent_tr_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
      }
    }

    var item = function item() {
      _classCallCheck(this, item);
    };

    var MainContentComponent = /*#__PURE__*/function () {
      function MainContentComponent(params) {
        _classCallCheck(this, MainContentComponent);

        this.params = params;
        this.displayedColumns = ['num', 'country', 'confirmed', 'deaths', 'cured', 'death_per'];
        this.items = src_app_df_json__WEBPACK_IMPORTED_MODULE_1__;
        this.items_w = this.items;
        this.chosenitem = this.items[0];
      }

      _createClass(MainContentComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          smooth_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"].init(document.querySelector('#my-scrollbar'));
        }
      }, {
        key: "sortData",
        value: function sortData(sort) {
          var s_data = this.items.slice();

          if (!sort.active || sort.direction === '') {
            this.items = s_data;
            return;
          }

          this.items_w = s_data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';

            switch (sort.active) {
              case 'num':
                return compare(a.num, b.num, isAsc);

              case 'country':
                return compare(a.country, b.country, isAsc);

              case 'confirmed':
                return compare(a.confirmed, b.confirmed, isAsc);

              case 'deaths':
                return compare(a.deaths, b.deaths, isAsc);

              case 'cured':
                return compare(a.cured, b.cured, isAsc);

              case 'death_per':
                return compare(a.death_per, b.death_per, isAsc);

              default:
                return 0;
            }
          });
        }
      }, {
        key: "switchtor",
        value: function switchtor() {
          this.items = src_app_df_r_json__WEBPACK_IMPORTED_MODULE_2__;
          this.items_w = this.items;
          this.chosenitem = this.items[0];
          this.params.setParams(this.chosenitem);
        }
      }, {
        key: "switchtow",
        value: function switchtow() {
          this.items = src_app_df_json__WEBPACK_IMPORTED_MODULE_1__;
          this.items_w = this.items;
          this.chosenitem = this.items[0];
          this.params.setParams(this.chosenitem);
        }
      }, {
        key: "update",
        value: function update() {
          console.log(this.selectedCountry);

          if (this.selectedCountry != '') {
            this.items_w = [];

            var _iterator = _createForOfIteratorHelper(this.items),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var dat = _step.value;
                var cont = dat.country;

                if (cont.match(this.selectedCountry)) {
                  this.items_w.push(dat);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            console.log("ye");
            this.items_w = [];
            this.items_w = this.items;
          }
        }
      }]);

      return MainContentComponent;
    }();

    MainContentComponent.ɵfac = function MainContentComponent_Factory(t) {
      return new (t || MainContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_prem__WEBPACK_IMPORTED_MODULE_4__["ParamsModel"]));
    };

    MainContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainContentComponent,
      selectors: [["app-main-content"]],
      decls: 39,
      vars: 7,
      consts: [[1, "main"], [1, "main-content"], ["mode", "side", "opened", "", 1, "mat-drawer-side-p"], [1, "search-bar"], [1, "search-bar-border"], [1, "example-full-width"], ["matInput", "", "color", "basic", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["value", "world", 1, "dashboard_buttons"], ["value", "world", "id", "but_ch", 3, "click"], ["value", "russia", "id", "but_ch", 3, "click"], ["id", "my-scrollbar"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "num"], ["mat-header-cell", "", "mat-sort-header", "num", 4, "matHeaderCellDef"], ["class", "example-element-", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "country"], ["mat-header-cell", "", "mat-sort-header", "country", "style", "text-align: center", 4, "matHeaderCellDef"], ["matColumnDef", "confirmed"], ["mat-header-cell", "", "mat-sort-header", "confirmed", 4, "matHeaderCellDef"], ["matColumnDef", "deaths"], ["mat-header-cell", "", "mat-sort-header", "deaths", 4, "matHeaderCellDef"], ["matColumnDef", "cured"], ["mat-header-cell", "", "mat-sort-header", "cured", 4, "matHeaderCellDef"], ["matColumnDef", "death_per"], ["mat-header-cell", "", "mat-sort-header", "death_per", 4, "matHeaderCellDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "active", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], [3, "parentData"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "num"], ["mat-cell", "", 1, "example-element-"], ["mat-header-cell", "", "mat-sort-header", "country", 2, "text-align", "center"], ["mat-header-cell", "", "mat-sort-header", "confirmed"], ["mat-header-cell", "", "mat-sort-header", "deaths"], ["mat-header-cell", "", "mat-sort-header", "cured"], ["mat-header-cell", "", "mat-sort-header", "death_per"], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-header-row", ""]],
      template: function MainContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u043E\u0438\u0441\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainContentComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.selectedCountry = $event;
          })("ngModelChange", function MainContentComponent_Template_input_ngModelChange_8_listener() {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MainContentComponent_button_9_Template, 3, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-button-toggle-group", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContentComponent_Template_mat_button_toggle_click_11_listener() {
            return ctx.switchtow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041C\u0438\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-button-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainContentComponent_Template_mat_button_toggle_click_13_listener() {
            return ctx.switchtor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0420\u0424");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function MainContentComponent_Template_table_matSortChange_16_listener($event) {
            return ctx.sortData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MainContentComponent_th_18_Template, 2, 0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainContentComponent_td_19_Template, 2, 1, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MainContentComponent_th_21_Template, 2, 0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MainContentComponent_td_22_Template, 2, 1, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MainContentComponent_th_24_Template, 2, 0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MainContentComponent_td_25_Template, 2, 1, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MainContentComponent_th_27_Template, 2, 0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MainContentComponent_td_28_Template, 2, 1, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MainContentComponent_th_30_Template, 2, 0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MainContentComponent_td_31_Template, 2, 1, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainContentComponent_th_33_Template, 2, 0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainContentComponent_td_34_Template, 2, 1, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MainContentComponent_tr_35_Template, 1, 4, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MainContentComponent_tr_36_Template, 1, 0, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-out-graph", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.items_w);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.chosenitem);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContent"], _out_graph_out_graph_component__WEBPACK_IMPORTED_MODULE_13__["OutGraphComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"]],
      styles: [".main[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n[_nghost-%COMP%]     .mat-drawer-backdrop {\r\n    position: relative !important; \r\n}\r\n#my-scrollbar[_ngcontent-%COMP%] {\r\n  height: 80%;\r\n  overflow: auto;\r\n}\r\nmat-drawer-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding-top: 64px;\r\n    display: block;\r\n}\r\nmat-drawer-conten[_ngcontent-%COMP%] {\r\n   min-width: 500px;\r\n}\r\n.mat-drawer-side-p[_ngcontent-%COMP%] {\r\n    padding-top: 64px;\r\n    padding-bottom: 50px;\r\n    width: 30vw;\r\n    max-width: 900px;\r\n\r\n    display: block;\r\n    height: 100%;\r\n}\r\n[_nghost-%COMP%]     .mat-drawer-inner-container {   \r\n    overflow: hidden !important;\r\n}\r\n.search-bar[_ngcontent-%COMP%] {\r\n    width: 98%;\r\n    padding: 1%;\r\n    \r\n}\r\n.example-full-width[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    bottom: 0;\r\n}\r\n.search-bar-border[_ngcontent-%COMP%] {\r\n    background-color: #e0e0e0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    vertical-align: bottom;\r\n    border: solid 1px #e0e0e0;\r\n    height: 50px;\r\n}\r\n.dashboard_buttons[_ngcontent-%COMP%] {\r\n    height: 80px; \r\n    display: flex;\r\n}\r\n#but_ch[_ngcontent-%COMP%] {\r\n    width: 100%; \r\n    height: 100%; \r\n    font-size: 22px;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\nmat-button-toggle-group[_ngcontent-%COMP%] {\r\n    border-radius: 0!important;\r\n}\r\nth.mat-header-cell[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    cursor: pointer;\r\n\r\n}\r\n.mat-cell[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    cursor:default;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: left;\r\n  \r\n}\r\ntr.mat-row[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(0,0,0,.07);\r\n}\r\ntr.mat-row[_ngcontent-%COMP%]:active {\r\n    background-color: rgba(0,0,0,.38)!important;\r\n}\r\ntr.mat-row.active[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #e0e0e0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7R0FDRyxnQkFBZ0I7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdCQUFnQjs7SUFFaEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlOztBQUVuQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDJDQUEyQztBQUMvQztBQUNBOztJQUVJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubWF0LWRyYXdlci1iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDsgXHJcbn1cclxuI215LXNjcm9sbGJhciB7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxubWF0LWRyYXdlci1jb250ZW4ge1xyXG4gICBtaW4td2lkdGg6IDUwMHB4O1xyXG59XHJcbi5tYXQtZHJhd2VyLXNpZGUtcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHsgICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLWJhciB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG4uc2VhcmNoLWJhci1ib3JkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNlMGUwZTA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmRhc2hib2FyZF9idXR0b25zIHtcclxuICAgIGhlaWdodDogODBweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNidXRfY2gge1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCFpbXBvcnRhbnQ7XHJcbn1cclxudGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjdXJzb3I6ZGVmYXVsdDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIFxyXG59XHJcblxyXG50ci5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA3KTtcclxufVxyXG50ci5tYXQtcm93OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4zOCkhaW1wb3J0YW50O1xyXG59XHJcbnRyLm1hdC1yb3cuYWN0aXZlIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-content',
          templateUrl: './main-content.component.html',
          styleUrls: ['./main-content.component.css']
        }]
      }], function () {
        return [{
          type: src_app_prem__WEBPACK_IMPORTED_MODULE_4__["ParamsModel"]
        }];
      }, null);
    })();

    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    /***/

  },

  /***/
  "./src/app/news/news.component.ts":
  /*!****************************************!*\
    !*** ./src/app/news/news.component.ts ***!
    \****************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent() {
        _classCallCheck(this, NewsComponent);
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)();
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 4,
      vars: 0,
      consts: [[1, "main"], [1, "main-container"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "news works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n.main-container[_ngcontent-%COMP%] {\r\n    padding-top: 64px;\r\n    padding-bottom: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-graph/out-graph.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/out-graph/out-graph.component.ts ***!
    \**************************************************/

  /*! exports provided: OutGraphComponent */

  /***/
  function srcAppOutGraphOutGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutGraphComponent", function () {
      return OutGraphComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_ddf_russia_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/ddf_russia.json */
    "./src/app/ddf_russia.json");

    var src_app_ddf_russia_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! src/app/ddf_russia.json */
    "./src/app/ddf_russia.json", 1);
    /* harmony import */


    var src_app_ddf_world_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/ddf_world.json */
    "./src/app/ddf_world.json");

    var src_app_ddf_world_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! src/app/ddf_world.json */
    "./src/app/ddf_world.json", 1);
    /* harmony import */


    var src_app_df_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/df.json */
    "./src/app/df.json");

    var src_app_df_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! src/app/df.json */
    "./src/app/df.json", 1);
    /* harmony import */


    var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/df_r.json */
    "./src/app/df_r.json");

    var src_app_df_r_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! src/app/df_r.json */
    "./src/app/df_r.json", 1);
    /* harmony import */


    var src_app_prem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/prem */
    "./src/app/prem.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OutGraphComponent_mat_option_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.country);
      }
    }

    function OutGraphComponent_mat_option_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.country);
      }
    }

    var dataArray;
    highcharts__WEBPACK_IMPORTED_MODULE_1__["setOptions"]({
      colors: ['#058DC7', '#50B432', '#ED561B']
    });

    var OutGraphComponent = /*#__PURE__*/function () {
      function OutGraphComponent(params) {
        _classCallCheck(this, OutGraphComponent);

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
            type: this.selectedType
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
          }, {
            data: 0
          }, {
            data: 0
          }],
          credits: {
            enabled: false
          }
        };
        this.column_options = {
          subtitle: {
            text: 'Число зараженных на момент 28.05.2020 с учетом количества выздоровевших и умерших'
          },
          chart: {
            type: 'column'
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
          }, {
            name: "Выберите страну",
            colorByPoint: true,
            data: 0,
            visible: false
          }],
          credits: {
            enabled: false
          }
        };
        this.Option_Donut = {
          chart: {
            backgroundColor: 'transparent'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              shadow: true,
              innerSize: '20%'
            }
          },
          series: [{
            type: 'pie',
            name: 'Процент людей'
          }],
          credits: {
            enabled: false
          }
        };
      }

      _createClass(OutGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.comparechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('comparecharts', this.column_options);
          this.linechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container', this.line_options);
          this.chart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container-f', this.Option_Donut);
          update_donut(this.chart, this.params.getParams());
          update_line(this.linechart, this.params.getParams(), true, null);
          update_column(this.comparechart, this.params.getParams(), this.compare_data);
          this.isInit = true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.isInit) {
            if (this.parentData != null) {
              if (this.isDestroyed) {
                this.comparechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('comparecharts', this.column_options);
                this.chart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container-f', this.Option_Donut);
                this.linechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container', this.line_options);
                this.isDestroyed = false;
              }

              this.chart.destroy();
              this.linechart.destroy();
              this.comparechart.destroy();
              this.comparechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('comparecharts', this.column_options);
              this.chart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container-f', this.Option_Donut);
              this.linechart = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container', this.line_options);
              update_donut(this.chart, this.params.getParams());
              update_column(this.comparechart, this.params.getParams(), this.compare_data);
              update_line(this.linechart, this.params.getParams(), true, null);
            } else {
              if (!this.isDestroyed) {
                this.chart.destroy();
                this.linechart.destroy();
                this.comparechart.destroy();
                this.isDestroyed = true;
              }
            }
          }
        }
      }, {
        key: "updateselected",
        value: function updateselected() {
          this.compare_data = initselected(this.selectedValue, this.items_w, this.items_r);
          console.log(this.compare_data);
          update_column(this.comparechart, this.params.getParams(), this.compare_data);
          this.chartsec = highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container-s', this.Option_Donut);
          update_donut(this.chartsec, this.compare_data);
        }
      }, {
        key: "change_data",
        value: function change_data() {
          this.selectedpoint = this.linechart.getSelectedPoints();

          if (this.selectedpoint != 0) {
            if (this.isButton) {
              this.linechart.update({
                subtitle: {
                  text: 'Статистика с 28.04.2020 по 28.05.2020'
                }
              });
              update_line(this.linechart, this.params.getParams(), true, null);
              this.swap_type(this.selectedType);
              this.isButton = false;
            } else {
              var x = this.selectedpoint[0].options.name;
              this.linechart.update({
                subtitle: {
                  text: 'Статистика за ' + x
                }
              });
              update_line(this.linechart, this.params.getParams(), false, x);
              this.swap_type('column');
              this.isButton = true;
            }
          }
        }
      }, {
        key: "swap_type",
        value: function swap_type(type) {
          this.linechart.update({
            chart: {
              type: type
            }
          });
        }
      }, {
        key: "updatecolor",
        value: function updatecolor() {
          this.comparechart.update({
            colors: [this.comp_colorConf, this.comp_colorCured, this.comp_colorDeaths]
          });
          this.chart.update({
            colors: [this.comp_colorConf, this.comp_colorCured, this.comp_colorDeaths]
          });
        }
      }, {
        key: "updatecolorline",
        value: function updatecolorline() {
          this.linechart.update({
            colors: [this.line_colorConf, this.line_colorCured, this.line_colorDeaths]
          });
        }
      }, {
        key: "updateType",
        value: function updateType() {
          if (!this.isButton) {
            this.swap_type(this.selectedType);
          }
        }
      }]);

      return OutGraphComponent;
    }();

    OutGraphComponent.ɵfac = function OutGraphComponent_Factory(t) {
      return new (t || OutGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_prem__WEBPACK_IMPORTED_MODULE_6__["ParamsModel"]));
    };

    OutGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OutGraphComponent,
      selectors: [["app-out-graph"]],
      inputs: {
        parentData: "parentData"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 87,
      vars: 66,
      consts: [[1, "header-content"], [1, "all-highcharts"], [1, "line-highcharts", 2, "width", "100%"], [1, "line-card", 3, "click"], ["id", "container"], [1, "side-menu-line-chart"], [2, "width", "100%"], [3, "ngModel", "ngModelChange"], ["value", "line"], ["value", "column"], ["value", "area"], [1, "select-color"], [1, "selector-color"], ["value", "#058DC7"], ["value", "#DDDF00"], ["value", "#FF9655"], ["value", "#50B432"], ["value", "#24CBE5"], ["value", "#FFF263"], ["value", "#ED561B"], ["value", "#64E572"], ["value", "#6AF9C4"], [1, "compare-highcharts"], [1, "board-container"], [1, "compare-card"], ["id", "comparecharts", 2, "width", "80%"], [1, "side-menu"], [3, "value", 4, "ngFor", "ngForOf"], [1, "round-highcharts"], [1, "round-highchart"], [1, "first-donut"], ["id", "container-f"], [1, "second-donut"], ["id", "container-s"], [3, "value"]],
      template: function OutGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "asd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutGraphComponent_Template_mat_card_click_6_listener() {
            return ctx.change_data();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-card-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0422\u0438\u043F \u0433\u0440\u0430\u0444\u0438\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_12_listener($event) {
            return ctx.selectedType = $event;
          })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_12_listener() {
            return ctx.updateType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041B\u0438\u043D\u0435\u0439\u043D\u044B\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0421\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u044B\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041B\u0438\u043D\u0435\u0439\u043D\u044B\u0439 \u0441 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0426\u0432\u0435\u0442\u0430 \u0441\u0435\u0440\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0417\u0430\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_25_listener($event) {
            return ctx.line_colorConf = $event;
          })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_25_listener() {
            return ctx.updatecolorline();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0412\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0432\u0448\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_32_listener($event) {
            return ctx.line_colorCured = $event;
          })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_32_listener() {
            return ctx.updatecolorline();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0423\u043C\u0435\u0440\u0448\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_39_listener($event) {
            return ctx.line_colorDeaths = $event;
          })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_39_listener() {
            return ctx.updatecolorline();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-card-content", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0421\u0442\u0440\u0430\u043D\u0430/\u0433\u043E\u0440\u043E\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_51_listener($event) {
            return ctx.selectedValue = $event;
          })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_51_listener() {
            return ctx.updateselected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, OutGraphComponent_mat_option_54_Template, 2, 2, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, OutGraphComponent_mat_option_55_Template, 2, 2, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0426\u0432\u0435\u0442\u0430 \u0441\u0435\u0440\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0417\u0430\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_62_listener($event) {
            return ctx.comp_colorConf = $event;
          })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_62_listener() {
            return ctx.updatecolor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u0412\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0432\u0448\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_69_listener($event) {
            return ctx.comp_colorCured = $event;
          })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_69_listener() {
            return ctx.updatecolor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u0423\u043C\u0435\u0440\u0448\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_76_listener($event) {
            return ctx.comp_colorDeaths = $event;
          })("ngModelChange", function OutGraphComponent_Template_mat_select_ngModelChange_76_listener() {
            return ctx.updatecolor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.isDestroyed ? "hidden" : "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.isDestroyed ? "hidden" : "visible");
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"]],
      styles: [".header-content[_ngcontent-%COMP%] {\r\n    height: 10%;\r\n}\r\n.all-highcharts[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n}\r\n.compare-highcharts[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    display:flex; \r\n    justify-content: space-between  ;\r\n    height: 50vh;\r\n}\r\n[_nghost-%COMP%]     .mat-drawer-content {\r\n    overflow: hidden !important;\r\n    margin: 10px;\r\n}\r\nmat-drawer-container[_ngcontent-%COMP%] {\r\n    width: 70vw;\r\n}\r\n#container[_ngcontent-%COMP%] { \r\n    width: 87%;\r\n}\r\n#comparehighcharts[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n.side-menu[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    padding-right: 5px;\r\n    width: 20%;\r\n    height: 100%;\r\n}\r\n.side-menu-line-chart[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    padding-right: 5px;\r\n    width: 13%;\r\n    height: 30vh;\r\n    overflow: hidden;\r\n}\r\n.round-highchart[_ngcontent-%COMP%] {\r\n    height: 23vh;\r\n    width: 100%;\r\n    \r\n}\r\n.round-highcharts[_ngcontent-%COMP%] {\r\n    height: 46vh;\r\n    width: 50%;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n.board-container[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n.first-donut[_ngcontent-%COMP%], .second-donut[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n.compare-card[_ngcontent-%COMP%] {\r\n    display: flex; \r\n    height: 46vh;\r\n    width: 100%;\r\n}\r\n.line-card[_ngcontent-%COMP%] {\r\n    \r\n    height: 30vh;\r\n    display: flex;\r\n}\r\n#container-f[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n#container-s[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.select-color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 5%;\r\n    width: 90%;\r\n    color: rgba(0,0,0,.42);\r\n}\r\n.selector-color[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    border: solid 1px #e0e0e0;\r\n    border-radius: 3px;\r\n    display: grid;\r\n    justify-items: end;\r\n}\r\n.mat-select[_ngcontent-%COMP%] {\r\n    font-size: 1.2vmin;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    font-size: 1.2vmin;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    font: inherit;\r\n    font-size: 1.4vmin;\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0LWdyYXBoL291dC1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL291dC1ncmFwaC9vdXQtZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxufVxyXG4uYWxsLWhpZ2hjaGFydHMge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuLmNvbXBhcmUtaGlnaGNoYXJ0cyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIDtcclxuICAgIGhlaWdodDogNTB2aDtcclxufVxyXG46aG9zdCAvZGVlcC8gLm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDcwdnc7XHJcbn1cclxuI2NvbnRhaW5lciB7IFxyXG4gICAgd2lkdGg6IDg3JTtcclxufVxyXG4jY29tcGFyZWhpZ2hjaGFydHMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zaWRlLW1lbnUge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNpZGUtbWVudS1saW5lLWNoYXJ0IHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTMlO1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucm91bmQtaGlnaGNoYXJ0IHtcclxuICAgIGhlaWdodDogMjN2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuLnJvdW5kLWhpZ2hjaGFydHMge1xyXG4gICAgaGVpZ2h0OiA0NnZoO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5maXJzdC1kb251dCwgLnNlY29uZC1kb251dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb21wYXJlLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBoZWlnaHQ6IDQ2dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGluZS1jYXJkIHtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4jY29udGFpbmVyLWZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jY29udGFpbmVyLXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNlbGVjdC1jb2xvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNDIpO1xyXG59XHJcbi5zZWxlY3Rvci1jb2xvciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcclxufVxyXG4ubWF0LXNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDEuMnZtaW47XHJcbn1cclxubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjJ2bWluO1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDEuNHZtaW47XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-out-graph',
          templateUrl: './out-graph.component.html',
          styleUrls: ['./out-graph.component.css']
        }]
      }], function () {
        return [{
          type: src_app_prem__WEBPACK_IMPORTED_MODULE_6__["ParamsModel"]
        }];
      }, {
        parentData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    function initselected(country, items_1, items_2) {
      console.log(country);

      var _iterator2 = _createForOfIteratorHelper(items_1),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var dat = _step2.value;
          var cont = dat.country;
          console.log(cont);

          if (cont == country) {
            return dat;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(items_2),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _dat = _step3.value;
          var _cont = _dat.country;
          console.log(_cont);

          if (_cont == country) {
            return _dat;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return null;
    }

    function update_line(hichart, param, flag, datepoint) {
      var a = Object.values(src_app_ddf_russia_json__WEBPACK_IMPORTED_MODULE_2___namespace);
      var b = a[0];

      for (var _i = 0, _Object$values = Object.values(b); _i < _Object$values.length; _i++) {
        var dat = _Object$values[_i];
        var cont = Object.values(dat)[0];

        if (cont == param.country) {
          if (flag) {
            dataArray = dat;
          } else {
            var _iterator4 = _createForOfIteratorHelper(Object.values(dat)[1]),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;

                if (Object.values(item)[0] == datepoint) {
                  dataArray = item;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
      }

      ;
      var c = Object.values(src_app_ddf_world_json__WEBPACK_IMPORTED_MODULE_3___namespace);
      var d = c[0];

      for (var _i2 = 0, _Object$values2 = Object.values(d); _i2 < _Object$values2.length; _i2++) {
        var _dat2 = _Object$values2[_i2];
        var _cont2 = Object.values(_dat2)[0];

        if (_cont2 == param.country) {
          if (flag) {
            dataArray = _dat2;
          } else {
            var _iterator5 = _createForOfIteratorHelper(Object.values(_dat2)[1]),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _item = _step5.value;

                if (Object.values(_item)[0] == datepoint) {
                  dataArray = _item;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }
      }

      ;
      var dataconfirmed = [];
      var datadeaths = [];
      var datacured = [];

      if (flag) {
        dataArray.data.forEach(function (value) {
          dataconfirmed.push([value.date, value.confirmed]);
          datadeaths.push([value.date, value.deaths]);
          datacured.push([value.date, value.cured]);
        });
      } else {
        dataconfirmed.push([dataArray.date, dataArray.confirmed]);
        datadeaths.push([dataArray.date, dataArray.deaths]);
        datacured.push([dataArray.date, dataArray.cured]);
      }

      hichart.update({
        chart: {
          type: 'line'
        }
      });
      hichart.title.update({
        text: param.country
      });
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
        data: [{
          name: 'Зараженные (актуальные данные)',
          y: param.confirmed - (param.deaths + param.cured)
        }, {
          name: 'Выздоровевшие',
          y: param.cured
        }, {
          name: 'Умершие',
          y: param.deaths
        }]
      });

      if (secparam != null) {
        hichart.series[1].update({
          name: secparam.country,
          data: [{
            name: 'Зараженные (актуальные данные)',
            y: secparam.confirmed - (secparam.deaths + secparam.cured)
          }, {
            name: 'Выздоровевшие',
            y: secparam.cured
          }, {
            name: 'Умершие',
            y: secparam.deaths
          }],
          visible: true
        });
      } else {
        hichart.series[1].update({
          name: "Выберите страну",
          data: [0, 0, 0],
          visible: false
        });
      }
    }

    function update_donut(hichart, param) {
      if (param != null) {
        hichart.title.update({
          text: param.country
        });
        hichart.series[0].update({
          name: param.country,
          data: [{
            name: 'Зараженные (актуальные данные)',
            y: param.confirmed - (param.deaths + param.cured)
          }, {
            name: 'Выздоровевшие',
            y: param.cured
          }, {
            name: 'Умершие',
            y: param.deaths
          }]
        });
      } else {
        hichart.destroy();
      }
    }
    /***/

  },

  /***/
  "./src/app/prem.ts":
  /*!*************************!*\
    !*** ./src/app/prem.ts ***!
    \*************************/

  /*! exports provided: ParamsModel */

  /***/
  function srcAppPremTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParamsModel", function () {
      return ParamsModel;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_df_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/df.json */
    "./src/app/df.json");

    var src_app_df_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! src/app/df.json */
    "./src/app/df.json", 1);

    var item = function item() {
      _classCallCheck(this, item);
    };

    var ParamsModel = /*#__PURE__*/function () {
      function ParamsModel() {
        _classCallCheck(this, ParamsModel);

        this.items = src_app_df_json__WEBPACK_IMPORTED_MODULE_1__;
        this.chosenitmf = this.items[0];
        this.chosenitms = this.items[1];
      }

      _createClass(ParamsModel, [{
        key: "setParams",
        value: function setParams(param) {
          this.chosenitmf = param;
        }
      }, {
        key: "getParams",
        value: function getParams() {
          return this.chosenitmf;
        }
      }]);

      return ParamsModel;
    }();

    ParamsModel.ɵfac = function ParamsModel_Factory(t) {
      return new (t || ParamsModel)();
    };

    ParamsModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ParamsModel,
      factory: ParamsModel.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParamsModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\angular\test\testAPP\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map