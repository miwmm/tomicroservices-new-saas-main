import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionGraphMicroSolutionsComponent } from './interaction-graph-micro-solutions/interaction-graph-micro-solutions.component';


const routes: Routes = [
  {
    path: '',
    component: InteractionGraphMicroSolutionsComponent
  },
  {
    path: 'log/result-0', component: InteractionGraphMicroSolutionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractionGraphRoutingModule {}
