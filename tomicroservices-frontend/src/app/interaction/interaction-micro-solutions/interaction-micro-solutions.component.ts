import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InteractiveEvaluation, RespostaListaInteractiveEvaluation } from '../../shared/models/interactive-evaluation';
import { MockService } from '../../shared/services/mock.service';
import { NotificaService } from '../../shared/services/notifica.service';

@Component({
  selector: 'app-interaction-micro-solutions',
  templateUrl: './interaction-micro-solutions.component.html',
  styleUrls: ['./interaction-micro-solutions.component.scss']
})
export class InteractionMicroSolutionsComponent implements OnInit {

  nameUser = 'user01';
  interactiveEvaluation!: RespostaListaInteractiveEvaluation;
  interactiveEvaluationData!: InteractiveEvaluation;
  evaluationForm!: FormGroup;
  constructor(private router: Router, private mockService: MockService, private notificaService: NotificaService, private formBuilder: FormBuilder) { }

  async ngOnInit() {
    this.interactiveEvaluation = await this.mockService.listMicroEvaluations()
      this.configurarFormulario()
  }

    configurarFormulario() {
    this.evaluationForm = this.formBuilder.group({
      ratings: [null, Validators.required]
    })
  }

  verficiaValorMaiorQue() {
    if(this.evaluationForm.controls['ratings'].value > 5) {
      this.notificaService.criaWarning('O número deve sempre ser de 0 a 5', 'Info')
    }
  }

  async navigateToGraph() {
    await this.router.navigate(['interaction-graph'])
  }
}
