import { Component, OnInit } from '@angular/core';
import { NWN2Char } from 'src/app/models/nwn2char.model';
import { NWN2CharService } from 'src/app/services/nwn2char.service';

@Component({
  selector: 'app-nwn2chars-list',
  templateUrl: './nwn2chars-list.component.html',
  styleUrls: ['./nwn2chars-list.component.css']
})

export class NWN2CharsListComponent implements OnInit {
  nwn2chars: NWN2Char[] = [];
  currentNWN2Char?: NWN2Char;
  currentIndex = -1;
  name = '';

  page = 1;
  count = 0;
  pageSize = 12;
  pageSizes = [12, 18, 24];

  constructor(private nwn2charService: NWN2CharService) { }

  ngOnInit(): void {
    this.retrieveNWN2Chars();
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {

    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchTitle) {
      params[`name`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveNWN2Chars(): void {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);

    this.nwn2charService.getAll(params)
    .subscribe(
      response => {
        const { nwn2chars, totalItems } = response;
        this.nwn2chars = nwn2chars;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveNWN2Chars();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveNWN2Chars();
  }

  refreshList(): void {
    this.retrieveNWN2Chars();
    this.currentNWN2Char = undefined;
    this.currentIndex = -1;
  }

  setActiveNWN2Char(nwn2char: NWN2Char, index: number): void {
    this.currentNWN2Char = nwn2char;
    this.currentIndex = index;
  }

  removeAllNWN2Chars(): void {
    this.nwn2charService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.nwn2charService.findByTitle(this.name)
      .subscribe(
        data => {
          this.nwn2chars = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
