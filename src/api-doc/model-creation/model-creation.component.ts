import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-creation',
  templateUrl: './model-creation.component.html'
})
export class ModelCreationComponent implements OnInit {
  public doc: string;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.request('./assets/tuto/chapters/model-creation.md')
      .map(res => res.text()).subscribe((md: string) => {
        this.doc = md;
      });
  }

}
