export interface User {
  id: number;
  nome: string;
  email: string;
  transacoes: Transacao[];
  endividado: boolean;
}

export interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  tipo: 'Receita' | 'Despesa';
  data: string;
  usuario: User;
}

export interface MetaFinanceira {
  id: number;
  nome: string;
  valor: number;
  prazo: string;
  status: 'Em Andamento' | 'Concluída' | 'Atrasada';
  usuario: User;
}

export interface Conteudo {
  id: number;
  titulo: string;
  descricao: string;
  tipo: 'Receita' | 'Economia';
  nivel: 'Iniciante' | 'Avançado';
}

export interface Dashboard {
  id: number;
  usuario: User;
  saldoTotal: number;
  investimentoTotal: number;
}