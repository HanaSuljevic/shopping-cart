import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersList: User[] = [];

  error: boolean = false
  

  constructor(
    private accountService: AccountService, 
    private router: Router 
  ) { }

  model: any = {}

  ngOnInit(): void {
    this.loadUsers();
  }

  login() {
    console.log(this.model);
    const user = this.model;

    const result = this.usersList.find(({ username, password }) => username === user.username && user.password === password);
    console.log("result", result)
    if(!result) {
      this.error = true
      return
    }
    else {
      this.router.navigate(['']); 
    }
    }

  loadUsers() {
    this.accountService.getUsers().subscribe(response => {
      this.usersList = response
      console.log('response', response)
    })
  }  

}
