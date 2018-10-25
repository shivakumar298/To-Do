import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from "src/app/app.routing";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    HistoryComponent,
    SearchComponent,
    DetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
