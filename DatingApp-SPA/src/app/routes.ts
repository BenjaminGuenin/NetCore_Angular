import { AuthGuard } from './_guards/auth.guard';
import { MemberListComponent } from './components/member-list/member-list.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ListComponent } from './components/list/list.component';


// The order matters! Angular goes from top to bottom.
export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent },
  { path: 'lists', component: ListComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
