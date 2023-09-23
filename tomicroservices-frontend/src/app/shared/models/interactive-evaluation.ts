export interface RespostaListaInteractiveEvaluation {
  listaOcorrencia: Array<InteractiveEvaluation>
}

export interface InteractiveEvaluation {
  id: number;
  name: string;
  solutionName: string;
  objectives: string;
  ratings: number;
  evaluated: boolean;
}
