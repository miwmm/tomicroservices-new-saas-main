import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ApiService } from '../../shared/services/api.service';
import "fs-web"  
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Node, Edge, Layout } from '@swimlane/ngx-graph';
import { Subject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
interface Metric {
  name: string;
  code: string;
}

@Component({
  selector: 'app-interaction-graph-micro-solutions',
  templateUrl: './interaction-graph-micro-solutions.component.html',
  styleUrls: ['./interaction-graph-micro-solutions.component.scss'],
})
export class InteractionGraphMicroSolutionsComponent implements OnInit {
  treeFiles: Array<TreeNode> = [];
  selectedFile!: TreeNode;
  visibleSidebar1: boolean = false;
  tabelaVisivel = false;
  treeVisivel = true;
  tabelaSelecionado = false;
  treeSelecionado = false;
  loading = false;
  metrics: Metric[] = [];
  selectedMetric: Metric | undefined;
  updateGraph$: Subject<boolean> = new Subject();
  nodes: Node[] = [];
  edges: Edge[] = [];
  graphsNode: Array<Node[]> = [];
  graphsEdge: Array<Edge[]> = [];

  
  constructor(private cdr: ChangeDetectorRef, private apiService: ApiService, private router: Router, private http: HttpClient) {}
  

  async ngOnInit(): Promise<void> {
    this.visibleSidebar1 = true;
    this.viewTree();
    this.loading = true;
    this.metrics = [
      { name: 'Coupling', code: '1' },
      { name: 'Cohesion', code: '2' },
      { name: 'OverheadMax', code: '3' },
      { name: 'Functionality', code: '4' },
      { name: 'Reuse', code: '5' }
    ];
    await this.iniGraph();
  }

  viewTable() {
    this.tabelaSelecionado = true;
    this.treeSelecionado = false;
    this.treeVisivel = false;
    this.tabelaVisivel = true;
  }

  viewTree() {
    this.treeSelecionado = true;
    this.tabelaSelecionado = false;
    this.treeVisivel = true;
    this.tabelaVisivel = false;
  }

  pegarEvento(event: MouseEvent) {
    console.log(event);
  }

  previousPage() {
    this.router.navigateByUrl('/');
  }
  async iniGraph(){
    const iniMetric = 'Coupling';
    let i = 0;
    for(const metric of this.metrics) {
      const nameMetric = metric.name;
      let startIndex = await this.buscarMetrica(nameMetric);
      console.log(startIndex);
      try {
        const resultado = await this.lerMicroservice(startIndex);
        const nodes = resultado.nodes;
        const edges = resultado.edges;
        this.graphsNode[i] = nodes;
        this.treeFiles.push(nodes);
        this.graphsEdge[i] = edges;
      } catch (erro) {
        console.error('Erro:', erro);
      }
      i++;
    }
    const firstGraph = this.graphsNode[0];
    console.log("primeiro: ", firstGraph);
    this.loading = false;
    await this.changeGraph(this.graphsNode[0], this.graphsEdge[0]);
    
    
  }  
  async onDropdownChange(event: any) {
    const idMetric = event.value.code - 1;
    console.log("id: ", idMetric);
    await this.changeGraph(this.graphsNode[idMetric], this.graphsEdge[idMetric]);
  }

  async changeGraph(nodes: Node[], edges: Edge[]){
    try {
      console.log("change graph: ", nodes);
      this.atualizarGrafoComNovasInformacoes(nodes, edges);
      this.updateGraph$.next(true);
    
    } catch (erro) {
      console.error('Erro:', erro);
    }
    

  }
  
  async lerMicroservice(startIndex: number): Promise<any> {
    const arquivo = await this.http.get('assets/log/result-0', {responseType: 'text'})
     return new Promise<any>((resolve) => {
      arquivo.subscribe(async (res) => {
        const lines = res.split('\n');
        const searchTerm = 'Best of';
        const searchTermEnd = '---';
        const tokenStart = '[ ';
        const tokenEnd = ']';
        const tokenMicroservice = "microservice";
        let lastMicroservice: string = "";
        const nodes: Node[] = [];
        const edges: Edge[] = [];
        let nodeId = 0;
        let edgeId = 0;
        const nameId = 'id';
        let i = startIndex + 1;
        while (i < lines.length && !(lines[i].includes(searchTerm)) && !(lines[i].includes(searchTermEnd))) {
          if (lines[i].trim().startsWith(tokenMicroservice)) {
            nodeId++;
            const stringId = nodeId;
            const microservice = lines[i];
            console.log(nodeId);
            console.log(microservice);
            const novoNo: Node = {
              id: stringId.toString(),
              label: microservice
            };
            nodes.push(novoNo);
            lastMicroservice = microservice;
          } else if (lines[i].trim().startsWith('==>')) {
            let indexMicroLink = lines[i].indexOf(tokenStart);
            let lineMicroLink = lines[i].substring(indexMicroLink + tokenStart.length);
            let microLink = lineMicroLink.substring(0, lineMicroLink.indexOf(tokenEnd));
            let functionLink = lineMicroLink.substring(lineMicroLink.indexOf(tokenEnd) + tokenEnd.length);
            if (!(microLink.includes('not found'))) {
              edgeId++;
              const novoEdge: Edge = {
                id: nameId.concat(edgeId.toString()),
                source: lastMicroservice,
                target: microLink,
                label: functionLink
              };
              edges.push(novoEdge);
            }else{
              console.log('not found');
            }
      
          }
          i++;
        }
       resolve({ nodes, edges });
     }); 
    });
  
  
  
  
}

  async buscarMetrica(searchMetric: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
    this.http.get('assets/log/result-0', { responseType: 'text' }).subscribe(
      (data) => {
        //console.log(data); 
        const lines = data.split('\n');

        const searchTerm = 'Best of';
        const token = '.overhead.';
        const tokenPer = 'Per';
        let startIndex = -1;
        
        
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes(searchTerm)) {
            startIndex = i;
            let indexMetric = lines[i].indexOf(token);
            let lineMetric = lines[i].substring(indexMetric + token.length);
            let metric = lineMetric.substring(0, lineMetric.indexOf(tokenPer));
            if(metric === searchMetric){
              break;
            }
            
          }
        }
        if (startIndex !== -1) {
           resolve(startIndex);
                    
        } else {
          console.log('Frase "best of" não encontrada ou não há linhas suficientes após a ocorrência.');
          reject('Frase "best of" não encontrada ou não há linhas suficientes após a ocorrência.');
        }
      },
      (error) => {
        console.error('Erro ao ler o arquivo de log:', error);
        reject(error);
      }
    );
    
  }
  
 );
}
adicionarInformacoesAoGrafo(infoNodes: Node[], infoEdges: Edge[]) {
  for (const info of infoNodes) {
    
    const novoNo: Node = {
      id: info.id,
      label: info.label
    };    
    if (!this.nodes.find(node => node.id === novoNo.id)) {
      this.nodes.push(novoNo);
    }
  }
  for (const inf of infoEdges){
    this.adicionarArestaPorRotulos(inf.id ,inf.source, inf.target, inf.label);

  }
}


atualizarGrafoComNovasInformacoes(novoNode: Node[], novoEdge: Edge[]) {
  
  this.nodes = [];
  this.edges = [];
  this.adicionarInformacoesAoGrafo(novoNode, novoEdge);

}
adicionarArestaPorRotulos(idEdge: any, sourceLabel: any, targetLabel: any, labelEdge: any): void {
  // Procurar nós com os rótulos correspondentes
  const sourceNode = this.nodes.find(node => node.label === sourceLabel);
  const targetNode = this.nodes.find(node => node.label === targetLabel);

  if (sourceNode && targetNode) {
    // Se ambos os nós forem encontrados, crie uma nova aresta
    const novaAresta: Edge = {
      id: idEdge,
      source: sourceNode.id, // Use o ID do nó fonte
      target: targetNode.id, // Use o ID do nó de destino
      label: labelEdge, // Defina sua label de aresta
    };
    this.edges.push(novaAresta);
    console.log(novaAresta);
  } else {
    // Lide com o caso em que um ou ambos os rótulos não correspondem a nós
    console.error('Um ou ambos os rótulos não correspondem a nós existentes.');
  }
}
}

const arrayToTree = (items: any[], parentId = null): TreeNode[] => {
  return items
    .filter(item => item.parentId === parentId)
    .map(item => {
      const children = arrayToTree(items, item.id);
      return {
        label: item.label,
        children: children.length ? children : undefined
      };
    });
};



/**
 * // Obtendo as 6 linhas após a frase "best of"
          const infoLines = lines.slice(startIndex, startIndex + 6);
          const numbers: number[] = [];
          const regex = /:\s*(\d+)/;
       

          for (const line of infoLines) {
            const match = line.match(regex);
            if (match && match.length > 1) {
              const number = parseInt(match[1], 10);
              numbers.push(number);
            }
          }
 */