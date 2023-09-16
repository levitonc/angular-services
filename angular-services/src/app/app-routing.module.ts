import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // esse providers aqui é onde INJETAMOS o que necessita ser injetado

})
export class AppRoutingModule { }
