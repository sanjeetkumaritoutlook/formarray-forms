import { Component,OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserInformation } from '../model/userinformation';
import { User } from '../model/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
//   template: `
//   <ul>
//     <li *ngFor="let user of users | async">
//      {{ user.id }}
//     </li>
//   </ul>
// `
})
export class UsersComponent implements OnInit {
  // users: any;
  userInfo : UserInformation;

  constructor(private usersService: UsersService) {
    this.userInfo = {} as UserInformation;
  }
  ngOnInit() :void{
    //subscribe to the obserable in the service to get data - emit vs next()
    // this.usersService.getUsers().subscribe(response => {
    //   this.users = response.data;
  // });

  this.usersService.getUsers().subscribe(response => {

    this.userInfo.page = response?.page;
    this.userInfo.per_page = response?.per_page;
    this.userInfo.total = response?.total;
    this.userInfo.total_pages = response?.total_pages;
    this.userInfo.data = response?.data?.map(item => {
      var user = {} as User;
      user.avatar = item?.avatar;
      user.email = item?.email;
      user.first_name = item?.first_name;
      user.last_name = item?.last_name;
      user.id = item?.id;
      return user;
    });
  });

  }
}
