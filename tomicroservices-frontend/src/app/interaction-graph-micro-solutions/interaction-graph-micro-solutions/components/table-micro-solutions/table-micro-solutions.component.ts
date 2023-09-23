import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

export interface MicroSolutionsTable {
  microService: string;
  metric: string;
  value: string;
  trace: string;
}

@Component({
  selector: 'app-table-micro-solutions',
  templateUrl: './table-micro-solutions.component.html',
  styleUrls: ['./table-micro-solutions.component.scss'],
})
export class TableMicroSolutionsComponent implements OnInit {
  @Input() tabelaVisivel: boolean = false;
  arrayMicroSolutions: Array<MicroSolutionsTable> = [
    {
      microService: 'microservice0',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace:
        'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main',
    },
    {
      microService: 'microservice1',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace:
        'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main',
    },
    {
      microService: 'microservice2',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace:
        'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main',
    },
    {
      microService: 'microservice3',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace:
        'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main',
    },
    {
      microService: 'microservice4',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace:
        'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main',
    },
    {
      microService: 'microservice5',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace:
        'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main',
    },
    {
      microService: 'microservice6',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace:
        'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main',
    },
    {
      microService: 'microservice7',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace:
        'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main',
    },
    {
      microService: 'microservice8',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace:
        'teste.gerado.ManterLivro#Method:executar#SizeOf:30#Deep:1#Thread:main',
    },
    {
      microService: 'microservice9',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace:
        'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main',
    },
  ];

  filterForm = new FormGroup({
    microService: new FormControl(''),
    metric: new FormControl(''),
    value: new FormControl(''),
    trace: new FormControl(''),
  });

  queryField = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    let fields = '';
  }

  filter(event: KeyboardEvent) {
    console.log(event);
  }
}
