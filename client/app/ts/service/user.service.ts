import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { contentHeaders } from './header';
import {User} from '../schemas/user';
import 'rxjs/add/operator/toPromise';
​
@Injectable()
export class UserService {
	​
	private baseurl = "http://localhost:8888";
	public isLogin = false;
	​
	constructor(private http: Http) { }
	​
	post(url : String,data : Object): Promise<User> {
		let serviceUrl = `${this.baseurl}/${url}`;
		// console.log("serviceUrl",serviceUrl);
		return this.http
		           .post(serviceUrl, data,contentHeaders)
		           .toPromise()
		           .then(res => res.json())
		           .catch(this.handleError);
	}
	getuser(url : string) : Promise<User> {
		let serviceurl = `${this.baseurl}/${url}`;
		console.log(serviceurl);
		return this.http.get(serviceurl).toPromise()
					.then(res=>res.json())
					.catch(this.handleError);
	}
	private handleError(error: any) {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}
	​
}