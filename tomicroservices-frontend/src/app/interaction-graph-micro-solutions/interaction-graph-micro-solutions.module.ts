import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionGraphMicroSolutionsComponent } from './interaction-graph-micro-solutions/interaction-graph-micro-solutions.component';
import { TreeModule } from 'primeng/tree';
import { InteractionGraphRoutingModule } from './interaction-graph-micro-solutions-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from '../shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { TreeComponent } from './interaction-graph-micro-solutions/components/tree/tree.component';
import { TableMicroSolutionsComponent } from './interaction-graph-micro-solutions/components/table-micro-solutions/table-micro-solutions.component';
import { TableModule } from 'primeng/table';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InteractionGraphMicroSolutionsComponent,
    TreeComponent,
    TableMicroSolutionsComponent,
    
  ],
  imports: [
    //Angular
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    InteractionGraphRoutingModule,
    FormsModule,
  
    //Primeng
    TreeModule,
    SharedModule,
    SidebarModule,
    SplitterModule,
    DividerModule,
    TableModule,
    NgxGraphModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
  ],
  providers: [ApiService],
})
export class InteractionGraphMicroSolutionsModule {}
