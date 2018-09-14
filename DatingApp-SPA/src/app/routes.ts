import { MemberListComponent } from './components/member-list/member-list.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ListComponent } from './components/list/list.component';


// The order matters! Angular goes from the top to the bottom.
export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'member', component: MemberListComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
