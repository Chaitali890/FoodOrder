import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../Shared/model/food';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // foods:string[]= [];
 foods:Foods[]= [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) {}


  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.foods = this.foodService.getAll().filter(food=>food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
    else if(params['tag'])
    this.foods = this.foodService.getAllFoodByTag(params['tag'])
    else 
    this.foods=this.foodService.getAll();
    })

  }

}
