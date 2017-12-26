import {Injectable} from "@angular/core";
import {WidgetsService} from "../widgets/widgets.service";

@Injectable()
export class PagesService {

  constructor(private widgetsService: WidgetsService) {

  }

  add() {
    for (var i = 0, len = 10; i < len; i++) {
      this.widgetsService.addWidget(({
        id: i + 1,
        name: `Widget - ${i + 1}`,
        filters: {
          date: {
            from: "a",
            to: "b"
          },
          interactives: [Math.random(), Math.random()]
        }
      }));
    }
  }

}
