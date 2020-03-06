import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleCollections } from './material-module';
import { HomeComponent } from './home/home.component';
import { AboutComponent, AboutDialogComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContactComponent } from './contact/contact.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LayoutModule } from '@angular/cdk/layout';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    PublicationsComponent,
    ContactComponent,
    EventsComponent,
    AboutDialogComponent
  ],
  entryComponents: [AboutDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleCollections,
    SwiperModule,
    LayoutModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
