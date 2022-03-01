import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewpageComponent } from './components/newpage/newpage.component';
import { TestpageComponent } from './components/testpage/testpage.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    NewpageComponent,
    TestpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
