import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PagesService} from "./pages.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PagesService]
})
export class PagesModule {
}
