import { Category } from '../../core/models/category';
import { NavParams, Platform, ViewController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html'
})
export class CreateCategoryComponent implements OnInit {
  public category: Category;

  public constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) { }

  public ngOnInit() {
    if (!this.category) {
      this.category = new Category();
    }
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public save() {
    this.category.save().subscribe(() => {
      this.viewCtrl.dismiss();
    }, (err) => {
      console.error(err);
      // if an error occur, its probably because category name is taken
    });
  }

}
