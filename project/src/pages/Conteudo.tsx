import React, { useState, useEffect } from 'react';
import api from '../services/api';

interface ConteudoType {
  id: number;
  titulo: string;
  descricao: string;
  tipo: string;
  nivel: string;
}

const Conteudo: React.FC = () => {
  const [conteudos, setConteudos] = useState<ConteudoType[]>([]);

  useEffect(() => {
    loadConteudos();
  }, []);

  const loadConteudos = async () => {
    try {
      const response = await api.get('/conteudo');
      setConteudos(response.data);
    } catch (error) {
      console.error('Erro ao carregar conteúdos:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Conteúdo Educacional</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conteudos.map((conteudo) => (
          <div key={conteudo.id} className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{conteudo.titulo}</h2>
            <p className="text-gray-600 mb-4">{conteudo.descricao}</p>
            <div className="flex justify-between text-sm">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {conteudo.tipo}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                {conteudo.nivel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conteudo;