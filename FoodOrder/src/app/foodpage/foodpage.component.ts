import { Component, OnInit } from '@angular/core';
import { Foods } from '../Shared/model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{

  food!:Foods;

  constructor(private foodService:FoodService, private route:ActivatedRoute, private cartService:CartService, private router:Router) {
    route.params.subscribe((params) => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id'])
    })
  }


  ngOnInit(): void {
  
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
