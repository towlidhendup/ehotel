import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm:FormGroup;
 

  constructor() { }

  ngOnInit(): void {
  this.signupForm=new FormGroup({
    username:new FormControl(null,[Validators.required]),
    contact: new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required]),
    cPwd:new FormControl(null,[Validators.required])
  });
  }
  sgnSubmit(){
    console.log(this.signupForm);
  }

}
