export class WidgetUIState {
  visible: boolean;
  ready: boolean;

  constructor(params: WidgetUIState) {
    this.visible = params.visible;
    this.ready = params.ready;
  }
}
