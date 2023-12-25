import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router) {}
  byWho:string = '';
  userType:string = '';
  userID:string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.byWho = params['byWhom'];
      this.userType = params['userType'];
      this.userID = params['id'];
      console.log(
        'View by: '+ this.byWho + '\n' +
        'Type of user: '+ this.userType + '\n' +
        'of: '+ this.userID + '\n' 
        );
    })
    switch(this.byWho){
      case 'by-admin':{
          
        break;
      }
      default:{
        this.router.navigate(['notfound']);
      }
    }
  }
}
