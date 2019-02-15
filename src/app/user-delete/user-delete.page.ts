import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.page.html',
  styleUrls: ['./user-delete.page.scss'],
})
export class UserDeletePage implements OnInit {
  user: User;

  constructor(private usersService: UsersService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private cookieService: CookieService
  ) { }

  ngOnInit() {
    if(this.cookieService.check('sugar')==false){
      window.location.href='ionicUsers/#/login';
    }else{
    this.activatedRoute.params.subscribe(
   (params)=>{
     this.getUser(params['id']);
   }   
    );
  }
  }

  deleteUser(id: string) :void{
    this.usersService.delete(id).subscribe(
      (response:any)=>{
        if(response.success == true){
          this.router.navigate(['/users']);
        }
      }
    );
}

getUser(id: string) :void{
  this.usersService.user(id).subscribe(
    (response:any)=>{
    this.user = response.user;
    }
  );
}
}