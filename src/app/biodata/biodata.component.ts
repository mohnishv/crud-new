import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.scss']
})
export class BiodataComponent implements OnInit {
  myData: any[] = [];
  myviewData: any[] = [];
  public isChecked = false;
  id: any;

  
  constructor( private formBuilder: FormBuilder,private userService: UserService) { }
  registerForm: any;
  submitted = false;
  updatedid:any;
  buttonDisabled: boolean = false;
  ngOnInit(): void {
    console.log("buttonDisabled")
    this.viewalldata();
    this.registerForm = this.formBuilder.group({
     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
       phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]], 
      // mobileNumber1: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{3}$")]], 
      // mobileNumber2: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{4}$")]],  
      address1: ['', Validators.required],
      address2: ['', Validators.required],
       city: ['', Validators.required],
       state: ['', Validators.required],
       zipCode: ['', [Validators.required, Validators.pattern("[0-9]{6}")]],
       country: ['', Validators.required],
        qualification: ['', Validators.required],
        comments: ['', Validators.required]
      });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      console.log(this.registerForm.value)
      
      
      this.userService.postData(this.registerForm.value).subscribe((res: any) => {
        this.viewalldata();
      });
   
  }
viewalldata(){
  
  this.userService.getAllData()
  .subscribe(data => {
    this.myData = data;
    
  });
 
}

  onDelete(id:string){
    
        this.userService.deleteData(id).subscribe((res) => {
      this.viewalldata();
     
     
      });
  }
  onEdit(item:any){
    this.updatedid= item._id;
    this.registerForm.patchValue(
      {   firstName: item.firstName, 
        lastName: item.lastName, 
        email: item.email,
        phoneNumber: item.phoneNumber,
        address1: item.address1,
        address2:item.address2,
        city:item.city,
        state:item.state,
        zipCode:item.zipCode,
        country:item.country,
        qualification:item.qualification,
        comments:item.comments,
      },
    
      );
    
      this.isChecked=true;
      
    
  }
  update(){
     
    this.userService.editData(this.updatedid,this.registerForm.value).subscribe((res) => {
      this.viewalldata();
  });
   
}
onview(id:string){
  
  this.userService.getById(id)
  .subscribe(data => {
    this.myviewData = data;
    console.log(this.myviewData)

    this.registerForm.patchValue(
      {   firstName: data.firstName, 
        lastName: data.lastName, 
        email: data.email,
        phoneNumber: data.phoneNumber,
        address1: data.address1,
        address2:data.address2,
        city:data.city,
        state:data.state,
        zipCode:data.zipCode,
        country:data.country,
        qualification:data.qualification,
        comments:data.comments,
      },
    
      );
      this.buttonDisabled=true;





  });
 
}
}
