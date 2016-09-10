import {Component, OnInit} from '@angular/core';
import {UserService}  from './service/user.service';
import {Router} from '@angular/router';
import {User} from './schemas/user';

@Component({
	selector : 'forgotpassword',
	templateUrl : 'app/html/forgotpassword.component.html'
})

export class ForgorPasswordComponent implements OnInit{
		constructor(
			private router : Router,
			private userservice : UserService
		){}
		private user = new User();

	sendPassword(){
		/*console.log(this.user.email);
		this.userservice.get("forgotpassword",this.user.email)
				.then(rs => {
					alert("Password is send to your registered email..\n check your inbox..");
					this.router.navigate(['/login']);
				})
				.catch (function(){alert("Error while sending Password to your mail..\nCheck your registered mailid and try again later.")});*/
	}

	ngOnInit(){
		if(localStorage.getItem("isuser") == "true"){
			this.router.navigate(['/home']);	
		}
	}

}