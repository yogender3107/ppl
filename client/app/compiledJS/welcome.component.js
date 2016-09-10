"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'welcome',
            template: "\n\t\t<div class=\"content_lft\">\n\t    <h1>Welcome from PPL!</h1>\n\t    <p class=\"discrptn\">\n\t    \tThere are many variations of passages of Lorem Ipsum available,\n\t    \tbut the majority have suffered alteration in some form, \n\t    \tby injected humour, or randomised words which don't look even slightly believable. \n\t    \tIf you are going to use a passage of Lorem Ipsum, \n\t    \tyou need to be sure there isn't anything embarrassing hidden in the middle of text. \n\t    </p>\n\t    <img src=\"app/images/img_9.png\"  alt=\"\"/> \n\t    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map