export class WidgetQuery {
  query;

  constructor(params: Partial<WidgetQuery>) {
    this.query = params.query;
  }
}
