import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {ViewRequestComponent} from './view-request/view-request.component';

const routes: Routes=[


{path:'ViewRequest', component:ViewRequestComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
  export class ViewRoutingModule {}