import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent }     from './login.component';
import { RegisterComponent } from './register.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: 'login', /*default path... is pasted here..*/
      pathMatch:'full'
    },
    {
      path : 'home',
      component : HomeComponent
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
      path : 'register',
      component : RegisterComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
