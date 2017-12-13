import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  goals: any;
  constructor(private route: ActivatedRoute,private router: Router,private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));
  
  }

  ngOnInit() {
   
  }
  sendMeHome() {
    this.router.navigate(['']);
  }
}
