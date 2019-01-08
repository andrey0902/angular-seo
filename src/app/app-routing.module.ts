import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import {MyDataComponent} from './my-data/my-data.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'About me',
      description: 'Description Meta Tag Content'
    }
  },
  {
    path: 'data',
    component: MyDataComponent,
    data: {
      title: 'data for you',
      description: 'Description Meta Tag For my father'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
