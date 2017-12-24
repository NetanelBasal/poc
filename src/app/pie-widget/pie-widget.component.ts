import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-pie-widget",
  template: `
    <p>
      pie-widget works!
      {{data | json}}
    </p>
  `,
  styles: []
})
export class PieWidgetComponent implements OnInit {
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
