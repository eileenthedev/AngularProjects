import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userName : string;
  password : string;
  message : string;

  constructor( private router: Router) {
    
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('this.username', this.userName);
    console.log('this.password', this.password);
    if(this.userName && this.userName==='eileen' &&
       this.password && this.password==='123'){
        this.message = "You have keyed in the right password";
        this.router.navigate(['/cats']);
    }
    else{
      this.message = "You have not keyed in the right password";
    }
  }
}
