import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetsService} from './widgets.service';
import {WidgetsStore} from './widgets.store';
import {widgetsVisibiltyProviders} from './widgets-visibilty/widgets-visibilty.providers';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    WidgetsStore,
    WidgetsService,
    ...widgetsVisibiltyProviders
  ],
  declarations: []
})
export class WidgetsModule {
}
