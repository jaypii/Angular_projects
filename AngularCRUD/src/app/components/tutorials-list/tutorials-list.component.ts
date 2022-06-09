import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/components/tutorials-list';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})

export class TutorialsListComponent implements OnInit {
  tutorials: Tutorial[] = [];
  currentNWN2Char?: Tutorial;
  currentIndex = -1;
  name = '';
  race= '';

  page = 1;
  count = 0;
  pageSize = 12;
  pageSizes = [12, 18, 24];

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
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

/*   searchRace(): void {
    this.nwn2charService.findByRace(this.race)
      .subscribe(
        data => {
          this.nwn2chars = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
 */
}
