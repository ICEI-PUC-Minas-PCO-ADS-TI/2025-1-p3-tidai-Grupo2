import React from 'react';
import { useTransacoes } from '../hooks/useTransacoes';
import { TransacaoForm } from '../components/TransacaoForm';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Dashboard: React.FC = () => {
  const { transacoes, loading, error, addTransacao, deleteTransacao } = useTransacoes();

  const saldoTotal = transacoes.reduce((acc, transacao) => {
    return transacao.tipo === 'Receita' 
      ? acc + transacao.valor 
      : acc - transacao.valor;
  }, 0);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Dashboard Financeiro</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
            <h2 className="text-lg font-semibold mb-2">Saldo Total</h2>
            <p className="text-3xl font-bold">
              R$ {saldoTotal.toFixed(2)}
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Nova Transação</h2>
            <TransacaoForm onSubmit={addTransacao} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Histórico de Transações</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transacoes.map((transacao) => (
                  <tr key={transacao.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {format(new Date(transacao.data), 'dd/MM/yyyy', { locale: ptBR })}
                    </td>
                    <td className="px-6 py-4">{transacao.descricao}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transacao.tipo === 'Receita' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {transacao.tipo}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${transacao.tipo === 'Receita' ? 'text-green-600' : 'text-red-600'}`}>
                      R$ {transacao.valor.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteTransacao(transacao.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;