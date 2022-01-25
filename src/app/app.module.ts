import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { CommentSectionComponent } from './MyComponents/comment-section/comment-section.component';
import { ImageSliderComponent } from './MyComponents/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CommentSectionComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
