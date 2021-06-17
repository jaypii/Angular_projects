import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  @Input() userObj = { name: '', email: '', phone: 0 }

  constructor(
    public crudService: CrudService, 
    public router: Router
  ) { }

  ngOnInit(): void { }

  addUser(data: any) {
    this.crudService.addUser(this.userObj).subscribe((data: {}) => {
      this.router.navigate(['/list'])
    })
  }

}