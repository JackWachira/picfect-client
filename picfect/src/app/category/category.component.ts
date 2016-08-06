import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import {CategoryItem} from './categoryitem';
import {HomeService} from '../home/home.service';
import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css'],
  directives: [Toasty],
})
export class CategoryComponent implements OnInit {
  @Input() categorySelected: CategoryItem;
  constructor(private homeService: HomeService, private toastyService: ToastyService) {
    this.homeService.triggerToast$.subscribe(item => this.onToastTriggered());
  }
  onToastTriggered() {
    console.log("received toast");
    this.addToast();
  }
  addToast() {
    var toastOptions: ToastOptions = {
      title: "Oops!",
      msg: "Please select a category first",
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        this.setIntervalX(function () {
          var $div2blink = $(".card-category");
          var backgroundInterval = setTimeout(function () {
            $div2blink.toggleClass("backgroundRed");
          }, 0)
        }, 1000, 2);
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
    this.toastyService.warning(toastOptions);
  }
  setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

      callback();

      if (++x === repetitions) {
        window.clearInterval(intervalID);
      }
    }, delay);
  }
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
    this.categorySelected = category;
    this.homeService.changeCategory(category);

  }
  resetCategories() {
    // this.categorySelect.emit({
    //   value: 0
    // })
  }

}
