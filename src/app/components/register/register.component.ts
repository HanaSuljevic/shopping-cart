import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

/**
 * 
 * @param form
 */

function passwordsMatchValidator(form: { get: (arg0: string) => any; }) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMatch: true})
  } else {
    confirmPassword.setErrors(null) 
  }
  return null
}

/**
 * If the data is valid return null else return an object 
 */
function symbolValidator(control: any){ //registerForm.get('password')
  if(control.hasError('required')) return null; 
  if(control.hasError('minlength')) return null; 

  if(control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  error: boolean = false;
  usersList: User[] = [];

  constructor(
    private builder: FormBuilder, 
    private accountService: AccountService,
    private router: Router 
    ) { }

  ngOnInit(): void {
      this.buildForm()
      this.loadUsers()
    }

    buildForm() {
      this.registerForm = this.builder.group({
        name: ['', Validators.required], 
        email: ['', [Validators.required, Validators.email]], 
        username: ['', Validators.required],
        password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]], 
        confirmPassword: ''
      }, {
        validators: passwordsMatchValidator
      })
    }

    loadUsers() {
      this.accountService.getUsers().subscribe(response => {
        this.usersList = response
        console.log('response', response)
      })
    }

  register() {
    console.log(this.registerForm.value)
    const user = this.registerForm.value
    console.log('register user', user)

    const result = this.usersList.find(({ username }) => username === user.username);
    console.log("result", result)
    if(result) {
      this.error = true;
      return;
    }
    this.accountService.registracion({...user, id: new Date().getUTCMilliseconds()}).subscribe(response => {
      console.log('response', response)
      this.router.navigate(['login']); 
    })
  }

}
