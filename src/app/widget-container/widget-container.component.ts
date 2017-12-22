import {Component, Input, OnInit} from '@angular/core';
import {WidgetsVisibiltyService} from '../widgets/widgets-visibilty/widgets-visibilty.service';
import {Observable} from 'rxjs/Observable';
import {WidgetsVisibilty} from '../widgets/widgets-visibilty/widgets-visibilty.model';
import 'rxjs/add/operator/do';

@Component({
  selector: 'widget-container',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements OnInit {
  @Input() widgetId;
  inView: Observable<WidgetsVisibilty>;

  constructor(private widgetsVisibiltyService: WidgetsVisibiltyService) {
  }

  ngOnInit() {
    this.inView = this.widgetsVisibiltyService.getById(this.widgetId);
  }

}
