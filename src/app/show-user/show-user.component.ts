import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
userData=null;
  constructor(private userService:UsersService,private route: ActivatedRoute) { }

  async ngOnInit(){
   let userId =this.route.snapshot.paramMap.get('userId');   
   userId=userId!=='undefined'?userId:'1'
    this.userData= await this.userService.getUser(userId);
  }
  
}
