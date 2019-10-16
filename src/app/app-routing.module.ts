import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './views/member/member.component';
import { RankComponent } from './views/rank/rank.component';
import { HonorComponent } from './views/honor/honor.component';
import { TotalComponent } from './views/total/total.component';
import { ReservationComponent } from './views/reservation/reservation.component';


const routes: Routes = [
  {path: 'member', component: MemberComponent},
  {path: 'rank', component: RankComponent},
  {path: 'honor', component: HonorComponent},
  {path: 'total', component: TotalComponent},
  {path: 'reservation', component: ReservationComponent},
  { path: '',
    redirectTo: '/reservation',
    pathMatch: 'full'
  },
  { path: '**', component: MemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
