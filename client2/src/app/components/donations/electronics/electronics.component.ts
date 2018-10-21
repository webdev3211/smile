import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../../../services/donations.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {


  allelectronics;

  constructor(
    private donateService: DonationsService
  ) { }


  getAllElectronics() {
    this.donateService.getAllElectronics().subscribe(data => {
      this.allelectronics = data.data;
    })
  }


  ngOnInit() {
    this.getAllElectronics();
  }


}
