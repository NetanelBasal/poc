import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WidgetsService} from "./widgets.service";
import {WidgetsStore} from "./widgets.store";
import {widgetUIStateProviders} from "./widget-ui-state/widget-ui-state.providers";
import {widgetQueryProviders} from "./widget-query/widget-query.providers";
import {widgetResponseProviders} from "./widget-response/widget-response.providers";
import {WidgetsWorkerService} from "./widgets-worker/widgets-worker.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    WidgetsStore,
    WidgetsService,
    WidgetsWorkerService,
    ...widgetQueryProviders,
    ...widgetUIStateProviders,
    ...widgetResponseProviders
  ],
  declarations: []
})
export class WidgetsModule {
}
