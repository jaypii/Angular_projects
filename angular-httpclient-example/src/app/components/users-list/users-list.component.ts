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
  page=1;
  count = 0;
  tableSize = 10;
  tableSizesArr = [5,10];

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

  onTableDataChange(event:any){
    this.page = event;
    this.fetchUsers();
  }  

  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchUsers();
  }  

  handlePageChange(event:any) {
    this.page = event;
  }  
}