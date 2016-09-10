import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './service/user.service'

@Component({
	selector:'login',
	templateUrl : 'app/html/login.component.html'
})

export class LoginComponent implements OnInit{
	constructor (private router : Router, private userservice : UserService){}
  private user = {};
  
  checklogin(){
		//console.log(this.user);
		return this.userservice
           .post('login',this.user).then(	

               res => {       
                   if(  res.local.isverified == true){
                      alert(JSON.stringify(res));   
                      localStorage.setItem("isuser","true");  //storing locally..
                      var name= res.local.name;                   
                      localStorage.setItem("uname",name.slice(0,name.indexOf(' ')));
                      localStorage.setItem("uid",res._id);
                      //localStorage.setItem("isadmin",res.local.isadmin);
                      window.location.reload();  

                      this.router.navigate(['/home']);
                   }else{
                     alert("You have to verify your email-Id first to login...\nfor verification check your mails..");
                   }
           			}).catch(function(){	alert("username or passsword is not correct..")  });
	      }

   ngOnInit(){
     if(localStorage.getItem("isuser") == 'true'){
       this.router.navigate(['/home']);
     }
   }

}