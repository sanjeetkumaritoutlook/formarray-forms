import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserInformation } from '../model/userinformation';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //dummy json url 2-> https://reqres.in/api/users?page=1
//dummy json url 3-> https://fakestoreapi.com/users?limit=2
  constructor(private http: HttpClient) { }
 // getUsers() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
    
  //}
//https://www.angularjswiki.com/httpclient/get/
  // public getUsers(): Observable<any> {
    public getUsers(): Observable<UserInformation> {
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const url = 'https://reqres.in/api/users?page=1';
    console.log(url);
    // return this.http.get<any>(url);
    return this.http.get<UserInformation>(url);
}

}
