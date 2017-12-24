import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import {assocPath} from 'ramda';
import {WidgetsService} from './widgets/widgets.service';
import {Widget} from './widgets/widget.model';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {WidgetsUIStateService} from "./widgets/widget-ui-state/widget-ui-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  widgets = [];
  inView$;

  constructor(private widgetUIStateService: WidgetsUIStateService,
              private widgetsService: WidgetsService) {
  }

  ngOnInit() {
    this.inView$ = this.widgetUIStateService.select();
    for (var i = 0, len = 10; i < len; i++) {
      this.widgets.push({
        id: i + 1,
        name: `Widget - ${i + 1}`,
        filters: {
          date: {
            from: 'a',
            to: 'b'
          },
          interactives: [Math.random(), Math.random()]
        }
      });
    }
    this.widgetsService.asArray().subscribe(widgets => {
      console.warn(widgets);
    });
    this.widgetsService.selectWidgets().subscribe(widgets => {
      console.warn(widgets);
    });
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
    setTimeout(() => {
      this.widgetsService.addWidget(new Widget({id: 12}));
    }, 2000)
  }
}
