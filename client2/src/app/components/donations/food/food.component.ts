import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../../../services/donations.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  allfoods;

  constructor(
    private donateService: DonationsService
  ) { }


  getAllFood() {
    this.donateService.getAllFood().subscribe(data => {
      this.allfoods = data.data;
    })
  }

  ngOnInit() {
    this.getAllFood();
  }

}
