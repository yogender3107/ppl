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
var user_service_1 = require('./service/user.service');
var router_1 = require('@angular/router');
var user_1 = require('./schemas/user');
var ForgorPasswordComponent = (function () {
    function ForgorPasswordComponent(router, userservice) {
        this.router = router;
        this.userservice = userservice;
        this.user = new user_1.User();
    }
    ForgorPasswordComponent.prototype.sendPassword = function () {
        /*console.log(this.user.email);
        this.userservice.get("forgotpassword",this.user.email)
                .then(rs => {
                    alert("Password is send to your registered email..\n check your inbox..");
                    this.router.navigate(['/login']);
                })
                .catch (function(){alert("Error while sending Password to your mail..\nCheck your registered mailid and try again later.")});*/
    };
    ForgorPasswordComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("isuser") == "true") {
            this.router.navigate(['/home']);
        }
    };
    ForgorPasswordComponent = __decorate([
        core_1.Component({
            selector: 'forgotpassword',
            templateUrl: 'app/html/forgotpassword.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], ForgorPasswordComponent);
    return ForgorPasswordComponent;
}());
exports.ForgorPasswordComponent = ForgorPasswordComponent;
//# sourceMappingURL=forgotpassword.component.js.map