import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";
import {WidgetsUIStateService} from "../widgets/widget-ui-state/widget-ui-state.service";
import "rxjs/add/operator/filter";
import {WidgetQueryService} from "../widgets/widget-query/widget-query.service";
import "rxjs/add/operator/take";
import {WidgetResponseService} from "../widgets/widget-response/widget-response.service";
import {WidgetsWorkerService} from "../widgets/widgets-worker/widgets-worker.service";
import {BarWidgetComponent} from "../bar-widget/bar-widget.component";
import {PieWidgetComponent} from "../pie-widget/pie-widget.component";
import {of} from "rxjs/observable/of";

const widgetConfig = {
  1: {
    type: BarWidgetComponent
  },
  2: {
    type: PieWidgetComponent
  },
  3: {
    type: BarWidgetComponent
  },
  4: {
    type: PieWidgetComponent
  },
  5: {
    type: BarWidgetComponent
  },
  6: {
    type: PieWidgetComponent
  },
  7: {
    type: BarWidgetComponent
  },
  8: {
    type: PieWidgetComponent
  },
  9: {
    type: BarWidgetComponent
  },
  10: {
    type: PieWidgetComponent
  }
};

@Component({
  selector: "widget-container",
  template: `
    <widget [ready]="ready | async" [widgetConfig]="widgetConfig | async"></widget>
  `,
  styleUrls: ["./widget-container.component.css"]
})
export class WidgetContainerComponent implements OnInit {
  @Input() widgetId;
  inView: Observable<boolean>;
  ready;
  widgetConfig;

  constructor(private widgetUIStateService: WidgetsUIStateService,
              private widgetResponseService: WidgetResponseService,
              private widgetsWorkerService: WidgetsWorkerService,
              private widgetQueryService: WidgetQueryService) {
  }

  ngOnInit() {

    this.widgetUIStateService.visible(this.widgetId).take(1).subscribe(inView => {
      this.widgetQueryService.run(this.widgetId);
    });
    this.widgetResponseService.getById(this.widgetId)
      .filter(Boolean)
      .subscribe(response => {
        this.widgetsWorkerService.start(this.widgetId, response);
      });
    this.widgetUIStateService.ready(this.widgetId).subscribe(ready => {
      console.log(`${this.widgetId} is ready - ${ready}`);
    });

    this.ready = this.widgetUIStateService.ready(this.widgetId).mapTo({xAxis: Math.random(), yAxis: Math.random()});
    this.widgetConfig = of(widgetConfig[this.widgetId]);
  }

}
