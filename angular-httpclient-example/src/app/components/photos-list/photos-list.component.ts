import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from "../../shared/photo.service";

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  Photos: any = [];
  page=1;
  count = 0;
  tableSize = 10;
  tableSizesArr = [5,10];

  constructor(
    public photoService: PhotoService
  ) { }

  ngOnInit() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    return this.photoService.getPhotos().subscribe((res: {}) => {
      this.Photos = res;
    })
  }

  onTableDataChange(event:any){
    this.page = event;
    this.fetchPhotos();
  }  

  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPhotos();
  }  

  handlePageChange(event:any) {
    this.page = event;
  }  
}