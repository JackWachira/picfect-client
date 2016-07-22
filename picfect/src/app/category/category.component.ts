import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  categories: Object[] = [
    {name: "Adventure", image: "adventure.png"},
    {name: "Sport", image: "sports.png"},
    {name: "Music", image: "music.png"},
    {name: "Fashion", image: "fashion.png"},
    {name: "Selfies", image: "selfies.png"},
    {name: "Party", image: "party.png"}
  ];

}
