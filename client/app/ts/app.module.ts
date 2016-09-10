import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';
import { LeftSidebarComponent} from './leftsidebar.component';
import { RightSidebarComponent} from './rightsidebar.component';
import { AppComponent }   from './app.component';
import { routing }        from './app.routing';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent }     from './login.component';
import { RegisterComponent } from './register.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { UserService } from './service/user.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
    
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    LeftSidebarComponent,
    RightSidebarComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
