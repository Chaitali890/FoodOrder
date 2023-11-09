import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Shared/model/food';
import { Tag } from 'src/app/Shared/model/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string) :Foods[]{
      return tag == "All"?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
   
  //you can write this statement is very simple type let's do it.

  }

  // getAll():string[]{
  //     return [
  //       '/assets/food1.jpeg',
  //       '/assets/food2.jpeg',
  //       '/assets/food3.jpeg',
  //       '/assets/food4.jpeg',
  //       '/assets/food5.jpeg',
  //       '/assets/food6.jpeg',
  //       '/assets/food7.jpeg',
  //       '/assets/food8.jpeg',
  //     ]
  // }

  getAllTag():Tag[]{
    return [
      { name: 'All', count:14 },
      { name: 'meat', count:4 },
      { name: 'bowl', count:2 },
      { name: 'vegetable pizza', count:3},
      { name: 'SlowFood', count:2},
    ];
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        price: 90,
        name: 'vegetable pizza',
        favorite:false,
        star: 4.8,
        tags:['FastFood','Pizza','Lunch'],
        imageUrl: 'assets/food1.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      },
      {
        id:2,
        price: 90,
        name: 'bowl',
        favorite:false,
        star: 4.8,
        tags:['FastFood','Pizza','Lunch'],
        imageUrl: 'assets/food2.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      },
      {
        id:3,
        price: 90,
        name: 'vegetable pizza',
        favorite:false,
        star: 4.8,
        tags:['FastFood','Pizza','Lunch'],
        imageUrl: 'assets/food3.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      },
      {
        id:4,
        price: 90,
        name: 'meat',
        favorite:false,
        star: 4.8,
        tags:['FastFood','Pizza','Lunch'],
        imageUrl: 'assets/food4.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      },
      {
        id:5,
        price: 90,
        name: 'vegetable pizza',
        favorite:false,
        star: 4.8,
        tags:['FastFood','Pizza','Lunch'],
        imageUrl: 'assets/food5.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      },
      {
        id:6,
        price: 90,
        name: 'vegetable pizza',
        favorite:false,
        star: 4.8,
        tags:['FastFood','Pizza','Lunch'],
        imageUrl: 'assets/food6.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      },
      {
        id:7,
        price: 90,
        name: 'vegetable pizza',
        favorite:false,
        star: 4.8,
        tags:['FastFood','Pizza','Lunch'],
        imageUrl: 'assets/food7.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      },
      {
        id:8,
        price: 90,
        name: 'vegetable pizza',
        favorite:false,
        star: 4.8,
        tags:['FastFood','Pizza','Lunch'],
        imageUrl: 'assets/food8.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      }
         ];
  }

}
