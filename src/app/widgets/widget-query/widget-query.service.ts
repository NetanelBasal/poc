import {Injectable} from "@angular/core";
import {WidgetQuery} from "./widget-query.model";
import {WidgetQueryStore} from "./widget-query.store";
import {timer} from "rxjs/observable/timer";
import "rxjs/add/operator/mapTo";
import {WidgetResponse} from "../widget-response/widget-response.model";
import {WidgetResponseService} from "../widget-response/widget-response.service";

@Injectable()
export class WidgetQueryService {

  constructor(private widgetResponseService: WidgetResponseService,
              private widgetQueryStore: WidgetQueryStore) {
  }

  run(widgetId) {
    console.log(`Running query for ${widgetId}`);
    return timer(0).mapTo(new WidgetResponse({data: {id: widgetId}}))
      .subscribe(response => {
        console.log(`Update response for ${widgetId}`);
        this.widgetResponseService.update(widgetId, response);
      });
  }

  update(widgetId: string, query: WidgetQuery) {
    this.widgetQueryStore.update(state => {
      return {
        ...state,
        entities: {
          ...state.entities,
          [widgetId]: query
        }
      };
    });
  }
}
