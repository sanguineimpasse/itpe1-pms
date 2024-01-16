import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
import { current_account_credentials } from 'src/data/currentaccount';
import { user_list_data } from 'src/data/testlistdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(private router: Router, private tokenService:TokenService) {}
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  //these are just dummy variables, replace with actual queries from the DB
  currentAccountName:string = current_account_credentials.lastName;
  currentAccountFName:string = current_account_credentials.firstName;
  currentAccount: string = this.tokenService.getRole();

  //sort the users by dateCreated
  userListData = this.filterUsersByDate(user_list_data, 10);
  
  private filterUsersByDate(users: any[], weeksAgo: number): any[] {
    const currentDate = new Date();
    const minDate = new Date(currentDate.getTime() - weeksAgo * 7 * 24 * 60 * 60 * 1000); // Calculate the minimum date

    return users
      .filter(user => new Date(user.dateCreated) >= minDate)
      .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
  }
  recentlyAddedUsers = this.filterUsersByDate(user_list_data, 15); // adjust the number of weeks here
  
  //list the recent patients && doctors
  patients  = user_list_data.filter(user => user.accountType === 'patient').length; //filter the array with only the type of 'patient', then measure length
  doctors = user_list_data.filter(user => user.accountType === 'doctor').length; //filter the array with only the type of 'doctor', then measure length
  recentPatients = this.recentlyAddedUsers.filter(user => user.accountType === 'patient').length;
  recentDoctors = this.recentlyAddedUsers.filter(user => user.accountType === 'doctor').length;;

  ngOnInit(): void {
      //console.log(this.userListData);
  }

  determineListBackground(type:string){
    if(type === 'doctor'){
      return {
        'background-color':'#089293',
      }
    }
    else if(type === 'patient'){
      return{
        'background-color':'#044B63',
      }
    }
    else{
      return{
        'background-color':'black'
      }
    }
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
