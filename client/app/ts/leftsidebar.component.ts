import { Component , OnInit} from '@angular/core';

@Component({
	selector: 'left-sidebar',
	templateUrl  : 'app/html/leftsidebar.component.html'
})

export class LeftSidebarComponent{
	isuser = localStorage.getItem("isuser") == "true" ? true : false;
}