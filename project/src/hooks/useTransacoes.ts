import { useState, useEffect } from 'react';
import api from '../services/api';
import { Transacao } from '../types';

export const useTransacoes = (userId?: number) => {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTransacoes = async () => {
    try {
      setLoading(true);
      const response = await api.get<Transacao[]>(userId ? `/transacao/user/${userId}` : '/transacao');
      setTransacoes(response.data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar transações');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTransacao = async (transacao: Omit<Transacao, 'id'>) => {
    try {
      const response = await api.post<Transacao>('/transacao', transacao);
      setTransacoes(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError('Erro ao adicionar transação');
      throw err;
    }
  };

  const deleteTransacao = async (id: number) => {
    try {
      await api.delete(`/transacao/${id}`);
      setTransacoes(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      setError('Erro ao deletar transação');
      throw err;
    }
  };

  useEffect(() => {
    fetchTransacoes();
  }, [userId]);

  return {
    transacoes,
    loading,
    error,
    addTransacao,
    deleteTransacao,
    refreshTransacoes: fetchTransacoes
  };
};