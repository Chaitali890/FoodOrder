import { Component,Input,OnInit } from '@angular/core';
import { Tag } from '../Shared/model/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input()
  foodpagetags?:string[];

  @Input()
  justifyContent?:string='center'

  tags:Tag[] =[];
  constructor(private foodService:FoodService) {}

  
  ngOnInit(): void {
    if(!this.foodpagetags)
    this.tags = this.foodService.getAllTag();
  }
}
