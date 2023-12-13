import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { current_account_credentials } from 'src/data/currentaccount';
import { user_list_data } from 'src/data/testlistdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(private router: Router) {}

  //sort the users by dateCreated
  currentAccount: string = current_account_credentials.accountType;
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
  doctors = user_list_data.filter(user => user.accountType === 'doctor').length; //filter the array with only the type of 'doctor', then measure length
  recentPatients = this.recentlyAddedUsers.filter(user => user.accountType === 'patient').length;
  recentDoctors = this.recentlyAddedUsers.filter(user => user.accountType === 'doctor').length;;

  ngOnInit(): void {
      //console.log(this.userListData);
  }

  goDoctorList(){
    const id = 'doctor';
    this.router.navigate(['/accounts',id]);
  }
  goPatientList(){
    const id = 'patient';
    this.router.navigate(['/accounts',id]);
  }
}
