import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { SearchComponent } from "src/app/search/search.component";
import { HistoryComponent } from "src/app/history/history.component";
import { DetailComponent } from "src/app/detail/detail.component";
import { ScreenComponent } from "src/app/screen/screen.component";


const routes: Routes = [
  {
    
       path: 'detail', component: DetailComponent },
        {
    
       path: 'history', component: HistoryComponent },
       {
    
       path: 'search', component: SearchComponent },
         {
    
       path: '', component: ScreenComponent },
   
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }