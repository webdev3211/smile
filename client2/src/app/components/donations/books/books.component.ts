import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../../../services/donations.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  allbooks;

  constructor(
    private donateService: DonationsService
  ) { }


  getAllBook() {
    this.donateService.getAllBooks().subscribe(data => {
      this.allbooks = data.data;
    })
  }


  ngOnInit() {
    this.getAllBook();
  }


}
