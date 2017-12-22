import {Component, Host, OnInit} from '@angular/core';
import {WidgetContainerComponent} from '../widget-container/widget-container.component';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  widgetId;
  inView$;

  constructor(@Host() private widgetContainer: WidgetContainerComponent) {
  }

  ngOnInit() {
    this.widgetId = this.widgetContainer.widgetId;
    this.inView$ = this.widgetContainer.inView;
  }

}
