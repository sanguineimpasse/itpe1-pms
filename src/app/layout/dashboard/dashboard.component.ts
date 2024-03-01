import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud/crud.service';
import { TokenService } from 'src/app/services/token/token.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(
    private router: Router, 
    private tokenService:TokenService, 
    private crudService : CrudService,
    public datePipe : DatePipe,
  ) {}
  public chart: any;

  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  //these are just dummy variables, replace with actual queries from the DB
  currentAccount: string = this.tokenService.getRole();
  fullName = this.tokenService.getSepName();
  firstName:string = this.fullName.firstname
  lastName:string = this.fullName.lastname;

  recentlyAddedUsers:any;
  
  txtNumRecentPatients:number = 0;
  txtNumRecentDoctors:number = 0;
  txtNumPatients:number = 0;
  txtNumDoctors:number = 0;

  ngOnInit(): void {
    var userList = [{
      createdAt: "",
      email: ""​,​
      firstname: "",
      lastname: "",
      role: "",
      userCode: ""
    }];

    var recentlyAddedUsers;
    var patients;
    var doctors;
    var recentPatients;
    var recentDoctors;

    this.crudService.getUserList('all').subscribe((res) => {
      userList = res;
      patients = res.patients;
      doctors = res.doctors;
      // console.log(
      //   'userList: ' + JSON.stringify(userList) +
      //   '\npatients: ' + JSON.stringify(patients) +
      //   '\ndoctors: ' + JSON.stringify(doctors)
      // );
      const combinedUsers: object[] = [...patients, ...doctors]; 

      recentlyAddedUsers = this.filterUsersByDate(combinedUsers, 3); // adjust the number of weeks here

      console.log(recentlyAddedUsers);
      recentPatients = recentlyAddedUsers.filter(user => user.role === 'patient').length;
      recentDoctors = recentlyAddedUsers.filter(user => user.role === 'doctor').length;

      this.txtNumDoctors = doctors.length;
      this.txtNumPatients = res.patients.length;
      this.txtNumRecentDoctors = recentDoctors;
      this.txtNumRecentPatients = recentPatients;
      this.recentlyAddedUsers = recentlyAddedUsers;

      if(this.currentAccount==='admin'){
        this.chart = new Chart("recentUserChart", {
          type: 'line',
          data: {
            labels: [
              this.dateFormatter(7),
              this.dateFormatter(6),
              this.dateFormatter(5),
              this.dateFormatter(4),
              this.dateFormatter(3),
              this.dateFormatter(2),
              this.dateFormatter(1),
            ],
            datasets: [
              {
                label: 'Doctors',
                data: [
                  this.daysAgo(doctors, 7).length - this.daysAgo(doctors, 6).length,
                  this.daysAgo(doctors, 6).length - this.daysAgo(doctors, 5).length,
                  this.daysAgo(doctors, 5).length - this.daysAgo(doctors, 4).length,
                  this.daysAgo(doctors, 4).length - this.daysAgo(doctors, 3).length,
                  this.daysAgo(doctors, 3).length - this.daysAgo(doctors, 2).length,
                  this.daysAgo(doctors, 2).length - this.daysAgo(doctors, 1).length,
                  this.daysAgo(doctors, 1).length,
                ],
                fill: false,
                borderColor: '#1db0b0',
                tension: 0.1,
                showLine: true
              },
              {
                label: 'Patients',
                data: [
                  this.daysAgo(patients, 7).length - this.daysAgo(patients, 6).length,
                  this.daysAgo(patients, 6).length - this.daysAgo(patients, 5).length,
                  this.daysAgo(patients, 5).length - this.daysAgo(patients, 4).length,
                  this.daysAgo(patients, 4).length - this.daysAgo(patients, 3).length,
                  this.daysAgo(patients, 3).length - this.daysAgo(patients, 2).length,
                  this.daysAgo(patients, 2).length - this.daysAgo(patients, 1).length,
                  this.daysAgo(patients, 1).length,
                ],
                fill: false,
                borderColor: '#044B63',
                tension: 0.1,
                showLine: true
              },
              {
                label: 'All',
                data: [
                  this.daysAgo(combinedUsers, 7).length - this.daysAgo(combinedUsers, 6).length,
                  this.daysAgo(combinedUsers, 6).length - this.daysAgo(combinedUsers, 5).length,
                  this.daysAgo(combinedUsers, 5).length - this.daysAgo(combinedUsers, 4).length,
                  this.daysAgo(combinedUsers, 4).length - this.daysAgo(combinedUsers, 3).length,
                  this.daysAgo(combinedUsers, 3).length - this.daysAgo(combinedUsers, 2).length,
                  this.daysAgo(combinedUsers, 2).length - this.daysAgo(combinedUsers, 1).length,
                  this.daysAgo(combinedUsers, 1).length,
                ],
                fill: false,
                borderColor: '#89bf81',
                tension: 0.1,
                showLine: true
              }
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
          
        });
      }
      

    });
  }
  
  dateFormatter(daysAgo:number){
    const currentDate = new Date();
    const result = this.datePipe.transform(new Date(currentDate.getTime() - daysAgo * 24 * 60 * 60 * 1000), 'MM dd, yyyy (EEEE)');
    return result;
  }

  daysAgo(users: any[], daysAgo: number){
    const currentDate = new Date();
    const minDate = new Date(currentDate.getTime() - daysAgo * 24 * 60 * 60 * 1000); // Calculate the minimum date

    return users
    .filter(user => new Date(user.createdAt) >= minDate)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  private filterUsersByDate(users: any[], weeksAgo: number): any[] {
    const currentDate = new Date();
    const minDate = new Date(currentDate.getTime() - weeksAgo * 7 * 24 * 60 * 60 * 1000); // Calculate the minimum date

    return users
      .filter(user => new Date(user.createdAt) >= minDate)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
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
