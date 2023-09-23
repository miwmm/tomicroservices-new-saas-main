import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionRoutingModule } from './interaction-routing.module';
import { InteractionMicroSolutionsComponent } from './interaction-micro-solutions/interaction-micro-solutions.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { NotificaService } from '../shared/services/notifica.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [InteractionMicroSolutionsComponent],
  imports: [
    //Angular
    CommonModule,
    InteractionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    //PrimeNG
    CardModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    PanelModule,
    MenuModule,
    BrowserAnimationsModule,
    InputNumberModule,
    CheckboxModule,
    ToastModule
  ],
  providers: [
    NotificaService,
    MessageService
  ]
})
export class InteractionModule {}
