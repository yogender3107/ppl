import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector : 'home',
	templateUrl: 'app/html/home.component.html'
})

export class HomeComponent {	
   	
    constructor(
			private router : Router
		){}
    
	ngOnInit(){
     if(localStorage.getItem("isuser") == 'true'){
       
     }
     else
     {
     	this.router.navigate(['/login']);
     }
   }
}