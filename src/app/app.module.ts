import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {WorkerService} from "./worker.service";
import {WidgetsModule} from "./widgets/widgets.module";
import {InViewDirective} from "./in-view.directive";
import {WidgetComponent} from "./widget/widget.component";
import {WidgetContainerComponent} from "./widget-container/widget-container.component";
import {InViewportModule} from "ng-in-viewport";
import {BarWidgetComponent} from "./bar-widget/bar-widget.component";
import {PieWidgetComponent} from "./pie-widget/pie-widget.component";

@NgModule({
  declarations: [
    AppComponent,
    InViewDirective,
    WidgetComponent,
    WidgetContainerComponent,
    BarWidgetComponent,
    PieWidgetComponent
  ],
  imports: [
    BrowserModule,
    WidgetsModule,
  ],
  entryComponents: [BarWidgetComponent, PieWidgetComponent],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
