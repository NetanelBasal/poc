import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/distinctUntilChanged";
import {assocPath} from "ramda";
import {WidgetsService} from "./widgets/widgets.service";
import {Widget} from "./widgets/widget.model";
import {combineLatest} from "rxjs/observable/combineLatest";
import {WidgetsUIStateService} from "./widgets/widget-ui-state/widget-ui-state.service";
import {Observable} from "rxjs/Observable";
import {PagesService} from "./pages/pages.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  inView$;
  widgets$: Observable<Widget[]>;

  constructor(private widgetUIStateService: WidgetsUIStateService,
              private pagesService: PagesService,
              private widgetsService: WidgetsService) {
  }

  ngOnInit() {
    this.inView$ = this.widgetUIStateService.select();
    this.widgets$ = this.widgetsService.asArray();
    this.pagesService.add();
    // this.widgetsService.selectActive().subscribe(active => {
    //   console.log(active);
    // });
    //
    // combineLatest(
    //   this.widgetsService.selectWidgets(),
    //   this.widgetsService.selectActive()
    // ).subscribe(([widgets, active]) => {
    //   console.log(active, widgets);
    // });
    //
  }
}
