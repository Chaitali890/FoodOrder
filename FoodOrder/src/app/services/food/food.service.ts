import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Shared/model/food';
import { Tag } from 'src/app/Shared/model/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getFoodById(id:number): Foods{
  return this.getAll().find(food => food.id == id)!;
}




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
      { name: 'FastFood', count:2 },
      { name: 'Hamburger', count:3},
      { name: 'Lunch', count:2},
    ];
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        price: 90,
        name: 'pizza Pepperoni',
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
        name: 'Meatball',
        favorite:true,
        star: 4.8,
        tags:['FastFood','Pizza','Lunch'],
        imageUrl: 'assets/food2.jpeg',
        cookTime: '40-50',
        origins:['china','middle-east'],
      },
      {
        id:3,
        price: 90,
        name: 'Hamburger',
        favorite:false,
        star: 4.8,
        tags:['FastFood','Hamburger'],
        imageUrl: 'assets/food3.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      },
      {
        id:4,
        price: 90,
        name: 'Fried Potatoes',
        favorite:true,
        star: 4.8,
        tags:['FastFood','Fried'],
        imageUrl: 'assets/food4.jpeg',
        cookTime: '40-50',
        origins:['belgium','france'],
      },
      {
        id:5,
        price: 50,
        name: 'Chicken Soup',
        favorite:false,
        star: 4.8,
        tags:['meat'],
        imageUrl: 'assets/food5.jpeg',
        cookTime: '40-50',
        origins:['india','asia'],
      },
      {
        id:6,
        price: 90,
        name: 'vegetable pizza',
        favorite:false,
        star: 4.8,
        tags:['Pizza','FastFood','Lunch'],
        imageUrl: 'assets/food6.jpeg',
        cookTime: '40-50',
        origins:['italy'],
      },
      {
        id:7,
        price: 40,
        name: 'vegetable spicy pizza',
        favorite:true,
        star: 4.8,
        tags:['Pizza','FastFood','Lunch'],
        imageUrl: 'assets/food6.jpeg',
        cookTime: '40-50',
        origins:['indian'],
      },
      {
        id:8,
        price: 60,
        name: 'vegetable burger',
        favorite:true,
        star: 4.8,
        tags:['Pizza','FastFood','Lunch'],
        imageUrl: 'assets/food6.jpeg',
        cookTime: '40-50',
        origins:['indian'],
      },
      {
        id:8,
        price: 60,
        name: 'Lunch',
        favorite:true,
        star: 4.8,
        tags:['Pizza','FastFood','Lunch'],
        imageUrl: 'assets/food6.jpeg',
        cookTime: '40-50',
        origins:['indian'],
      }
         ];
  }

}
