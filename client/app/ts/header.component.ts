import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
import {UserService}from './service/user.service';

@Component({
	selector : 'my-header',
	templateUrl : 'app/html/header.component.html'
})


export class HeaderComponent{
	isuser = localStorage.getItem("isuser") == "true" ? true : false;
	uname = localStorage.getItem("uname")!=null?localStorage.getItem("uname").toUpperCase() : "";
	public uid = localStorage.getItem("uid");
	public profilepicpath 		 = "";
	constructor(
			private router : Router,
			private userservice : UserService
		){}
	
	ngOnInit(){
		if(this.uid){
		this.userservice.getuser("getuser/"+this.uid)
			.then(res=>{
				if(res['image'].length == 0){	this.profilepicpath = "app/images/pic.png";	}
				else{ this.profilepicpath = "http://localhost:8888"+res['image'][res['image'].length -1]; }
			})
			.catch(()=>{console.log("caught error..")});
		}
	}
	logout(){		
			localStorage.clear();
			localStorage.setItem("isuser","false");		   
		window.location.reload();
	}
}
