export class Widget {
  id: number;
  name: string;
  filters: any; // move to WidgetFilters
  constructor(widget) {
    Object.assign(this, widget);
  }
}

