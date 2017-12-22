import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import {assocPath} from 'ramda';
import {WidgetsService} from './widgets/widgets.service';
import {Widget} from './widgets/widget.model';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {WidgetsVisibiltyService} from './widgets/widgets-visibilty/widgets-visibilty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  widgets = [];
  inView$;

  constructor(private widgetsVisibiltyService: WidgetsVisibiltyService,
              private widgetsService: WidgetsService) {
  }

  ngOnInit() {
    this.inView$ = this.widgetsVisibiltyService.select();
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
    // this.widgetsService.selectWidgets().subscribe(widgets => {
    //   console.log(widgets);
    // });
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
    // this.widgetsService.addWidget(new Widget({id: 1}));
  }
}
