import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from "../../shared/photo.service";

@Component({
  selector: 'app-show-photo',
  templateUrl: './show-photo.component.html',
  styleUrls: ['./show-photo.component.css']
})
export class ShowPhotoComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  photoObj: any = {};

  constructor(
    public photoService: PhotoService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.photoService.getSinglePhoto(this.id).subscribe((res: {}) => {
      this.photoObj = res;
    })
  }
}