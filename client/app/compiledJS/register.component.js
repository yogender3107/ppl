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
var RegisterComponent = (function () {
    function RegisterComponent(router, userservice) {
        this.router = router;
        this.userservice = userservice;
        this.user = { firstname: '', lastname: '' };
    }
    RegisterComponent.prototype.signup = function () {
        var _this = this;
        this.user['name'] = this.user.firstname + " " + this.user.lastname;
        delete this.user.firstname;
        delete this.user.lastname;
        console.log(this.user);
        return this.userservice.post("register", this.user).then(function (res) {
            alert("registration successfull..\n please check your mails for verification.\nplease click ok to login..");
            _this.router.navigate(['/login']);
        })
            .catch(function () { alert("Email Already registered : registration is not possible.. please try again later..."); });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("isuser") == 'true') {
            this.router.navigate(['/home']);
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "register",
            templateUrl: 'app/html/register.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map