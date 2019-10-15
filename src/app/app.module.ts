import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { SearchBtnComponent } from './shared/search-btn/search-btn.component';
import { AddBtnComponent } from './shared/add-btn/add-btn.component';
import { DeleteBtnComponent } from './shared/delete-btn/delete-btn.component';
import { KataComponent } from './shared/kata/kata.component';
import { EditBtnComponent } from './shared/edit-btn/edit-btn.component';
import { NavComponent } from './views/nav/nav.component';
import { MemberComponent } from './views/member/member.component';
import { RankComponent } from './views/rank/rank.component';
import { HonorComponent } from './views/honor/honor.component';
import { TotalComponent } from './views/total/total.component';
import { InfoComponent } from './shared/info/info.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchBtnComponent,
    AddBtnComponent,
    DeleteBtnComponent,
    KataComponent,
    EditBtnComponent,
    NavComponent,
    MemberComponent,
    RankComponent,
    HonorComponent,
    TotalComponent,
    InfoComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
