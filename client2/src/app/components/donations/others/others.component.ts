import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../../../services/donations.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  allothers;

  constructor(
    private donateService: DonationsService
  ) { }


  getAllOthers() {
    this.donateService.getAllOthers().subscribe(data => {
      this.allothers = data.data;
    })
  }


  ngOnInit() {
    this.getAllOthers();
  }


}
