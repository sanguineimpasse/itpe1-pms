import { Component, OnInit } from '@angular/core';
import { user_list_data } from 'src/data/testlistdata';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  //userListData = user_list_data;

  //sort the users by dateCreated
  userListData = this.filterUsersByDate(user_list_data, 10);
  
  private filterUsersByDate(users: any[], weeksAgo: number): any[] {
    const currentDate = new Date();
    const minDate = new Date(currentDate.getTime() - weeksAgo * 7 * 24 * 60 * 60 * 1000); // Calculate the minimum date

    return users
      .filter(user => new Date(user.dateCreated) >= minDate)
      .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
  }
  recentlyAddedUsers = this.filterUsersByDate(user_list_data, 10); // adjust the number of weeks here
  
  patients  = user_list_data.filter(user => user.accountType === 'patient').length; //filter the array with only the type of 'patient', then measure length
  recentPatients = this.recentlyAddedUsers.filter(user => user.accountType === 'patient').length;
  recentDoctors = this.recentlyAddedUsers.filter(user => user.accountType === 'doctor').length;;
  doctors = user_list_data.filter(user => user.accountType === 'doctor').length; //filter the array with only the type of 'doctor', then measure length

  ngOnInit(): void {
      //console.log(this.userListData);
  }
}
