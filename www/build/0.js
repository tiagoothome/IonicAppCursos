webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesPageModule", function() { return DetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhes__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhesPageModule = /** @class */ (function () {
    function DetalhesPageModule() {
    }
    DetalhesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhes__["a" /* DetalhesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhes__["a" /* DetalhesPage */]),
            ],
        })
    ], DetalhesPageModule);
    return DetalhesPageModule;
}());

//# sourceMappingURL=detalhes.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetalhesPage = /** @class */ (function () {
    function DetalhesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetalhesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhesPage');
        var curso = this.navParams.get('key');
        console.log(curso);
        this.curso = curso;
    };
    DetalhesPage.prototype.fechar = function () {
        this.navCtrl.pop();
    };
    DetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhes',template:/*ion-inline-start:"C:\Users\Tiago\Documents\IonicAppCursos\src\pages\detalhes\detalhes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detalhes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <ion-card-header>\n      <h1>Curso: {{ curso?.nome }}</h1>\n    </ion-card-header>\n\n    <ion-card>\n      <img src="{{curso?.img_icon}}"/>\n      <ion-card-content>\n        <p>\n          Professor: {{ curso?.professor }} <br> \n          Data de Inicio: {{ curso?.dt_realizacao }} <br>\n          Carga Horária: {{ curso?.carga_horaria }} horas <br>\n          Conteúdo: {{ curso?.conteudo }} <br>\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <button color="dark" ion-button block (click) = "fechar()">Fechar</button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Tiago\Documents\IonicAppCursos\src\pages\detalhes\detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetalhesPage);
    return DetalhesPage;
}());

//# sourceMappingURL=detalhes.js.map

/***/ })

});
//# sourceMappingURL=0.js.map