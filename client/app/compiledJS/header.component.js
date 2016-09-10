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
var router_1 = require('@angular/router');
var user_service_1 = require('./service/user.service');
var HeaderComponent = (function () {
    function HeaderComponent(router, userservice) {
        this.router = router;
        this.userservice = userservice;
        this.isuser = localStorage.getItem("isuser") == "true" ? true : false;
        this.uname = localStorage.getItem("uname") != null ? localStorage.getItem("uname").toUpperCase() : "";
        this.uid = localStorage.getItem("uid");
        this.profilepicpath = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.uid) {
            this.userservice.getuser("getuser/" + this.uid)
                .then(function (res) {
                if (res['image'].length == 0) {
                    _this.profilepicpath = "app/images/pic.png";
                }
                else {
                    _this.profilepicpath = "http://localhost:8888" + res['image'][res['image'].length - 1];
                }
            })
                .catch(function () { console.log("caught error.."); });
        }
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        localStorage.setItem("isuser", "false");
        window.location.reload();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            templateUrl: 'app/html/header.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map