import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-biodataview',
  templateUrl: './biodataview.component.html',
  styleUrls: ['./biodataview.component.scss']
})
export class BiodataviewComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  submit(form:any){
    var firstName = form.firstName;
    console.log(firstName);
  
    var lastName = form.lastName;
    console.log(lastName);
  
    var comments = form.comments;
    console.log(comments);
  }
}
