import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-biodataview',
  templateUrl: './biodataview.component.html',
  styleUrls: ['./biodataview.component.scss']
})
export class BiodataviewComponent implements OnInit {
  model: any = {};
  myData: any[] = [];
  myviewData: any[] = [];
  public isChecked = false;
  public isChecked1 = false;
  id: any;
  updatedid:any;
  form:any;
  constructor(private userService: UserService) { }
  submitted = false;

  buttonDisabled: boolean = false;
  ngOnInit(): void {
    this.viewalldata();
    
  }
  submit(form:any){
    console.log(form);
    var phoneNumber = form.phoneNumber;
    console.log(phoneNumber);
    this.userService.PostData(form).subscribe((res: any) => {
      this.viewalldata();
    });
  
  }
  viewalldata(){
  
    this.userService.GetAllData()
    .subscribe(data => {
      this.myData = data;
      
    });
   
  }
  update(){
     
    this.userService.EditData(this.updatedid,this.form).subscribe((res) => {
      this.viewalldata();
  });
   
}
onEdit(item:any){
  this.updatedid= item._id;
  this.model.firstName=item.firstName;
  this.model.lastName=item.lastName;
  this.model.email=item.email;
  this.model.phoneNumber=item.phoneNumber;
  this.model.address1=item.address1;
  this.model.address2=item.address2;
  this.model.city=item.city;
  this.model.state=item.state;
  this.model.zipCode=item.zipCode;
  this.model.country=item.country;
  this.model.qualification=item.qualification;
  this.model.comments=item.comments;

  
  this.buttonDisabled=false;
    this.isChecked=true;
    
  
}
    onDelete(id:string){
      
          this.userService.DeleteData(id).subscribe((res) => {
        this.viewalldata();
       
       
        });
    }
    onview(id:string){
  
      this.userService.GetById(id)
      .subscribe(data => {
        this.myviewData = data;
        console.log(this.myviewData)
    
        this.model.firstName=data.firstName;
  this.model.lastName=data.lastName;
  this.model.email=data.email;
  this.model.phoneNumber=data.phoneNumber;
  this.model.address1=data.address1;
  this.model.address2=data.address2;
  this.model.city=data.city;
  this.model.state=data.state;
  this.model.zipCode=data.zipCode;
  this.model.country=data.country;
  this.model.qualification=data.qualification;
  this.model.comments=data.comments;

          this.buttonDisabled=true;
          this.isChecked=false;
          this.isChecked1=true;
    
    
    
    
      });
     
    }
}
