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
var LoginComponent = (function () {
    function LoginComponent(router, userservice) {
        this.router = router;
        this.userservice = userservice;
        this.user = {};
    }
    LoginComponent.prototype.checklogin = function () {
        var _this = this;
        //console.log(this.user);
        return this.userservice
            .post('login', this.user).then(function (res) {
            if (res.local.isverified == true) {
                alert(JSON.stringify(res));
                localStorage.setItem("isuser", "true"); //storing locally..
                var name = res.local.name;
                localStorage.setItem("uname", name.slice(0, name.indexOf(' ')));
                localStorage.setItem("uid", res._id);
                //localStorage.setItem("isadmin",res.local.isadmin);
                window.location.reload();
                _this.router.navigate(['/home']);
            }
            else {
                alert("You have to verify your email-Id first to login...\nfor verification check your mails..");
            }
        }).catch(function () { alert("username or passsword is not correct.."); });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("isuser") == 'true') {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/html/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map