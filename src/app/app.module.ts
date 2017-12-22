import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkerService } from './worker.service';
import {WidgetsModule} from './widgets/widgets.module';
import { InViewDirective } from './in-view.directive';
import { WidgetComponent } from './widget/widget.component';
import { WidgetContainerComponent } from './widget-container/widget-container.component';

@NgModule({
  declarations: [
    AppComponent,
    InViewDirective,
    WidgetComponent,
    WidgetContainerComponent
  ],
  imports: [
    BrowserModule,
    WidgetsModule
  ],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
