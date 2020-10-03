export interface Funcionario {
    login: string;
    nomeTecnico: string;
    unidadeNegocio: string;
    cidade: string;
    fotoApp: boolean;
    certificadoIn: boolean;
}

export interface Producao {
    mesReferencia: string;
    pctMesReferencia: string;
    diasEscalados: number;
    totalGeral: number;
    instalacoes: number;
    servicos: number;
    manutencoes: number;
    retornos: number;
    total: number;
    mediaCttDias: number;
}

export interface Quebra {
    totalQuebra: number;
    pctQuebra: string;
    pctAderencia: string;
}

export interface CumprimentoAgenda {
    tec1: string;
    pctExecucaoSobreposta: string;
    alteraHorarioDias: number;
}

export interface Baixa {
    usoPda: boolean;
    pctWa: string;
    pctUra: string;
    pctHumano: string;
}

export interface AtualizacaoStatusWa {
    primeiroTrabalho: string;
    pctDeslocamento: string;
    pctStatusRefeicao: string;
}


export interface Indicador {
    funcionario: Funcionario;
    producao: Producao;
    quebra: Quebra;
    cumprimentoAgenda: CumprimentoAgenda;
    baixa: Baixa;
    atualizacaoStatusWa: AtualizacaoStatusWa;
}
