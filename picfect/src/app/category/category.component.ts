import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CategoryItem} from './categoryitem';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output() categorySelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  categories: CategoryItem[] = [
    { name: "Adventure", image: "adventure.png", id: 1 },
    { name: "Sport", image: "sports.png", id: 2 },
    { name: "Music", image: "music.png", id: 3 },
    { name: "Fashion", image: "fashion.png", id: 4 },
    { name: "Selfies", image: "selfies.png", id: 5 },
    { name: "Party", image: "party.png", id: 6 }
  ];
  selectCategory(category: CategoryItem) {
    this.categorySelect.emit({
      value: { categoryId: category.id, categoryName: category.name }
    })
  }
  resetCategories() {
    this.categorySelect.emit({
      value: 0
    })
  }

}
