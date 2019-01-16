import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../services/movements.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {

  allmovements;

  constructor(
    private movementService: MovementsService
  ) { }

  getAllmovements() {
    this.movementService.showMovements().subscribe(data => {
      this.allmovements = data.data
    })
  }

  ngOnInit() {
    this.getAllmovements();

  }

}
