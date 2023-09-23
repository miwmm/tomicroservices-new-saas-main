import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionMicroSolutionsComponent } from './interaction-micro-solutions/interaction-micro-solutions.component';

const routes: Routes = [
  {
    path: '',
    component: InteractionMicroSolutionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractionRoutingModule {}
