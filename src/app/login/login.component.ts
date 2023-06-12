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
  userdata:any=[];

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
     this.userdata =JSON.parse(localStorage['userdata'] || [])
  }
  get f() {
    return this.loginform.controls
  }
  metadata: any = ''

  submit() {
    // console.log(this.loginform.value)
    console.log(this.registerform.value)
    this.Signin = true;
    if (this.loginform.valid) {
      this.metadata = {
       
        email: this.loginform.value.email,
        password: this.loginform.value.password,
      }
      
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
      this.userdata.push(this.valuedata)
      localStorage.setItem('userdata', JSON.stringify(this.userdata))
      console.log(this.registerform.value)
    }
   }


  registerHandler() {
    this.isLogin = !this.isLogin;
  }
  formreset(){
    this.registerform.reset();
    this.Signin = false;
  }
}
