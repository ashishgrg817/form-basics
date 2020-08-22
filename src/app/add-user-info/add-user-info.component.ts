import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router} from '@angular/router';
@Component({
  selector: 'add-user-info',
  templateUrl: './add-user-info.component.html',
  styleUrls: ['./add-user-info.component.css']
})
export class AddUserInfoComponent implements OnInit {
  userForm: FormGroup;
  userId:'';
  responseMsg=''
formDirective: FormGroupDirective
  constructor(private fb: FormBuilder,private userService:UsersService,private router:Router,) {
    this.userForm = this.fb.group({
      userId: ['', [Validators.pattern('^[0-9]*$'),Validators.required]],
      title: ['',Validators.required],
      body: ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }
 submitUser(value) {
    this.userService.createUser(value).then((response:any)=>{      
      if(Response){
        this.responseMsg='User created Successfully'
      this.userId=response.userId;
      this.router.navigate(['/show-user', {
        userId:'1'
      }]);
         this.userForm.reset();
        this.formDirective.resetForm();
        
      }
    }).catch(err=>err);
    // this.responseMsg=data?'User created Successfully':''
  }

  goToDetails(){
    this.router.navigate(['/show-user', {
      userId:this.userId
    }]);
  }
}
