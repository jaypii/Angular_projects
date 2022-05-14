import { Component, OnInit } from '@angular/core';
import { BookDataService } from "../book-data.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<Object>;
   
  constructor(private bookData: BookDataService) {
    this.books = this.bookData.getBooks();
  }

  ngOnInit(): void {
  }

}
