import inView from 'in-viewport';
import {AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy} from '@angular/core';
import {WidgetsVisibiltyService} from './widgets/widgets-visibilty/widgets-visibilty.service';


@Directive({
  selector: '[inView]'
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  private _selector;
  private _widgetId;
  private _dispose;

  @Input() set inView(selector) {
    this._widgetId = selector;
    this._selector = `[data-widget-id="${selector}"]`;
  };

  get inView() {
    return this._selector;
  }

  constructor(private _host: ElementRef,
              private _widgetsVisibiltyService: WidgetsVisibiltyService,
              private _zone: NgZone) {
  }


  ngAfterViewInit() {
    const widgetElement = document.querySelector(this.inView);

    const widgetsContainer = document.getElementById('container');
    this._zone.runOutsideAngular(() => {
      this._dispose = inView(widgetElement, {container: widgetsContainer, offset: 30}, (_) => {
        this._zone.run(() => {

          this._widgetsVisibiltyService.update(this._widgetId);
        });
      });
    });

  }

  ngOnDestroy() {
    this._dispose();
  }


}
