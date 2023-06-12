import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: any = FormGroup;
  registerform: any = FormGroup;
  Signin: Boolean = false;
  isLogin = true;

  constructor(private formbuilder: FormBuilder) { }
  ngOnInit() {
    this.loginform = this.formbuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })

    this.registerform = this.formbuilder.group({
      name: new FormControl('', [Validators.required]),
      mob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
     
  }
  get f() {
    return this.loginform.controls
  }
  metadata: any = ''

  submit() {
    console.log(this.loginform)
    console.log(this.registerform)
    this.Signin = true;
    if (this.loginform.valid) {
      this.metadata = {
       
        email: this.loginform.value.email,
        password: this.loginform.value.password,
      }
      console.log(this.loginform.value)
    }
  }

   get b(){
    return this.registerform.controls
   }
   valuedata:any=''

   Registerdata(){
    this.Signin=true;
    if(this.registerform.valid){
      this.valuedata={
        name: this.registerform.value.name,
        mob: this.registerform.value.mob,
        email: this.registerform.value.email,
        password: this.registerform.value.password,
      }
    }
   }


  registerHandler() {
    this.isLogin = !this.isLogin;
  }
}
