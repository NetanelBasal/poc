import {Injectable} from "@angular/core";
import {WidgetsService} from "../widgets/widgets.service";

@Injectable()
export class PagesService {

  constructor(private widgetsService: WidgetsService) {

  }

  add() {
    const w = []
    for (var i = 0, len = 10; i < len; i++) {
      w.push(({
        id: i + 1,
        name: `Widget - ${i + 1}`
      }));
    }
    this.widgetsService.set(w)
  }

}
