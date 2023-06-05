import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform:any= FormGroup;
  Signin:Boolean=false;

  constructor( private formbuilder:FormBuilder){}
  ngOnInit(){
    this.loginform = this.formbuilder.group({
      email:new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  get f(){
    return this.loginform.controls
  }
  metadata:any=''

  submit(){
    this.Signin =true;
    if(this.loginform.valid){
      this.metadata={
        email: this.loginform.value.email,
        password: this.loginform.value.password,
      }
      console.log(this.loginform.value)
    }
  }
}
