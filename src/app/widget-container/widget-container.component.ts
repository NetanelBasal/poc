import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";
import {WidgetsUIStateService} from "../widgets/widget-ui-state/widget-ui-state.service";
import "rxjs/add/operator/filter";
import {WidgetQueryService} from "../widgets/widget-query/widget-query.service";
import "rxjs/add/operator/take";
import {WidgetResponseService} from "../widgets/widget-response/widget-response.service";
import {WidgetsWorkerService} from "../widgets/widgets-worker/widgets-worker.service";

@Component({
  selector: "widget-container",
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ["./widget-container.component.css"]
})
export class WidgetContainerComponent implements OnInit {
  @Input() widgetId;
  inView: Observable<boolean>;

  constructor(private widgetUIStateService: WidgetsUIStateService,
              private widgetResponseService: WidgetResponseService,
              private widgetsWorkerService: WidgetsWorkerService,
              private widgetQueryService: WidgetQueryService) {
  }

  ngOnInit() {
    // this.inView = this.widgetUIStateService.visible(this.widgetId);
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
  }

}
