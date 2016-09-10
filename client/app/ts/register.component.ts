import {Component,OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';
import {UserService} from './service/user.service';

@Component({
	selector : "register",
	templateUrl : 'app/html/register.component.html'
})

export class RegisterComponent implements OnInit{
	constructor (private router : Router, private userservice : UserService){}
	private user = {firstname:'',lastname:''};
	
  signup(){
  		 this.user['name']=this.user.firstname+" "+this.user.lastname;
  		 delete this.user.firstname;
  		 delete this.user.lastname;
		console.log(this.user);
		return this.userservice.post("register",this.user).then(res => {
           				 alert("registration successfull..\n please check your mails for verification.\nplease click ok to login..");
						this.router.navigate(['/login']) 	})
           .catch(function(){	alert("Email Already registered : registration is not possible.. please try again later...")  });
	}	
	
   ngOnInit(){
     if(localStorage.getItem("isuser") == 'true'){
       this.router.navigate(['/home']);
     }
   }

}