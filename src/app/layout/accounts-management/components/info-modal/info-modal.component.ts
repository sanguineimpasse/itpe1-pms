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
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.method = capitalizeFirstLetter(params['method']);
            this.type = capitalizeFirstLetter(params['type']);
            console.log(`info-modal type is: ${this.type} \nwith modify method of: ${this.method}`);
        })

        function capitalizeFirstLetter(str: string): string {
            return str.slice(0, 1).toUpperCase() + str.slice(1);
        }
    }

    //do condition here on edit or add; whether to fill up fields or not

}
