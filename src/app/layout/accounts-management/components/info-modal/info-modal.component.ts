import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit{
    constructor(private route: ActivatedRoute, private router: Router, private titleService: Title) {}
    method:string = '?';
    type:string = '?';
    txtMethod:string = '?';
    txtType:string = '?';
    isPrescript:boolean = false;
    isAddPatients:boolean = false;

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.method = params['method'];
            this.type = params['type'];

            console.log(`info-modal type is: ${this.type} \nwith modify method of: ${this.method}`);
    
            this.txtMethod = capitalizeFirstLetter(this.method);
            this.txtType = capitalizeFirstLetter(this.type);

            this.isPrescript = this.method==='view'&&this.type==='prescriptions';
            this.isAddPatients = this.method==='add'&&this.type==='patients';
            
        })

        function capitalizeFirstLetter(str: string): string {
            return str.slice(0, 1).toUpperCase() + str.slice(1);
        }
    }

    //do condition here on edit or add; whether to fill up fields or not

}
