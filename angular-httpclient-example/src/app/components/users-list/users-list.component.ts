import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  Users: any = [];

  constructor(
    public crudService: CrudService
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    return this.crudService.getUsers().subscribe((res: {}) => {
      this.Users = res;
    })
  }

  delete(id: string) {
    if (window.confirm('Really?')){
      this.crudService.deleteUser(id).subscribe(res => {
        this.fetchUsers()
      })
    }
  }

}