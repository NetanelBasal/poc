import {Injectable} from "@angular/core";
import {WidgetResponse} from "../widget-response/widget-response.model";
import {WidgetsUIStateService} from "../widget-ui-state/widget-ui-state.service";

@Injectable()
export class WidgetsWorkerService {

  constructor(private widgetUIStateService: WidgetsUIStateService) {
  }

  start(widgetId, response: WidgetResponse) {
    console.log(`Start worker for widget ${widgetId} with ${response}`);
    setTimeout(() => {
      this.widgetUIStateService.setReady(widgetId);
    }, 1000);
  }

}
