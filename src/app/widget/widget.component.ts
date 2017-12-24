import {Component, ComponentFactoryResolver, ComponentRef, Host, Injector, Input, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {WidgetContainerComponent} from "../widget-container/widget-container.component";

// [attr.data-widget-id]="widgetId"

@Component({
  selector: "widget",
  template: `
    <div>
      <h2>Widget Name</h2>
      <ng-template #widgetAnchor></ng-template>
    </div>
  `,
  styleUrls: ["./widget.component.css"]
})
export class WidgetComponent implements OnInit {
  _config;
  componentInstance;

  @Input() set widgetConfig(config) {
    this._config = config;
  }

  @Input() set ready(data) {
    if (data) {
      const factory = this.resolver.resolveComponentFactory(this._config.type);
      this.componentInstance = this.widgetAnchor.createComponent(factory);
      this.componentInstance.instance.data = data;
    }
  }


  @ViewChild("widgetAnchor", {read: ViewContainerRef}) widgetAnchor: ViewContainerRef;

  constructor(private injector: Injector,
              private resolver: ComponentFactoryResolver,
              @Host() private widgetContainer: WidgetContainerComponent) {
  }

  ngOnInit() {
  }

}
