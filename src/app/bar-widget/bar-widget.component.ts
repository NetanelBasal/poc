import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "bar-widget",
  template: `
    <p>
      bar-widget works!
      {{data | json}}
    </p>
  `,
  styles: []
})
export class BarWidgetComponent implements OnInit {
  _data;

  @Input() set data(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
