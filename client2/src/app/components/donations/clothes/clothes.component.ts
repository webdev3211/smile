import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../../../services/donations.service';


@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  allclothes;

  constructor(
    private donateService: DonationsService
  ) { }


  getAllClothes() {
    this.donateService.getAllClothes().subscribe(data => {
      this.allclothes = data.data;
    })
  }

  ngOnInit() {
    this.getAllClothes();
  }


}





