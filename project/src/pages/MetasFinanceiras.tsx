import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface MetaFinanceira {
  id: number;
  nome: string;
  valor: number;
  prazo: string;
  status: string;
}

const MetasFinanceiras: React.FC = () => {
  const [metas, setMetas] = useState<MetaFinanceira[]>([]);

  useEffect(() => {
    loadMetas();
  }, []);

  const loadMetas = async () => {
    try {
      const response = await api.get('/metafinanceira');
      setMetas(response.data);
    } catch (error) {
      console.error('Erro ao carregar metas:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Metas Financeiras</h1>
      
      <div className="space-y-4">
        {metas.map((meta) => (
          <div key={meta.id} className="border p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{meta.nome}</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${
                meta.status === 'Concluída' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {meta.status}
              </span>
            </div>
            <div className="mt-2 text-gray-600">
              <p>Valor: R$ {meta.valor.toFixed(2)}</p>
              <p>Prazo: {format(new Date(meta.prazo), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetasFinanceiras;