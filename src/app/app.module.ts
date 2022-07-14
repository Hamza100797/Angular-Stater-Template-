import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './_layouts/admin-layout/admin-view/admin-view/admin-view.component';
import { ClientViewComponent } from './_layouts/client-layout/client-view/client-view/client-view.component';
import { NavbarComponent } from './_layouts/client-layout/components/navbar/navbar/navbar.component';
import { FooterComponent } from './_layouts/client-layout/components/footer/footer/footer.component';
import { AdminDashboardComponent } from './Modules/main-modules/admin-Modules/pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './Modules/main-modules/client-Modules/pages/home/home.component';
import { NotFoundComponent } from './_layouts/common-components/404/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    ClientViewComponent,
    NavbarComponent,
    FooterComponent,
    AdminDashboardComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
