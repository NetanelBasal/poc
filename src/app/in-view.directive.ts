import inView from "in-viewport";
import {AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy} from "@angular/core";
import {WidgetsUIStateService} from "./widgets/widget-ui-state/widget-ui-state.service";

// var observer;
//
// var options = {
//   root: document.getElementById("container"),
//   rootMargin: "0px"
// };
//
// observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry["isIntersecting"]) {
//       console.warn(entry.target);
//     }
//   });
// }, options);


@Directive({
  selector: "[inView]"
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  private _selector;
  private _widgetId;
  private _dispose;

  @Input() set inView(selector) {
    this._widgetId = selector;
    this._selector = `[data-widget-id="${selector}"]`;
  };

  constructor(private _host: ElementRef,
              private widgetUIStateService: WidgetsUIStateService,
              private _zone: NgZone) {
  }


  ngAfterViewInit() {
    const widgetElement = this._host.nativeElement;
    const widgetsContainer = document.getElementById("container");

    this._zone.runOutsideAngular(() => {
      this._dispose = inView(widgetElement, {container: widgetsContainer, offset: 30}, (_) => {
        this._zone.run(() => {
          this.widgetUIStateService.update(this._widgetId);
        });
      });
    });

    // observer.observe(widgetElement);

  }

  ngOnDestroy() {
    this._dispose();
  }


}
