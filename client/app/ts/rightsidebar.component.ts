import { Component , OnInit} from '@angular/core';

@Component({
	selector: 'right-sidebar',
	templateUrl  : 'app/html/rightsidebar.component.html'
})

export class RightSidebarComponent{
	isuser = localStorage.getItem("isuser") == "true" ? true : false;
}