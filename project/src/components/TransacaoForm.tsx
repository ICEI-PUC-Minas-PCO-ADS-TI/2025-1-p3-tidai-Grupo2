import React from 'react';
import { useForm } from 'react-hook-form';
import { Transacao } from '../types';

interface TransacaoFormProps {
  onSubmit: (data: Omit<Transacao, 'id' | 'usuario'>) => Promise<void>;
}

export const TransacaoForm: React.FC<TransacaoFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmitForm = async (data: any) => {
    try {
      await onSubmit({
        ...data,
        valor: Number(data.valor)
      });
      reset();
    } catch (err) {
      console.error('Erro ao submeter formulário:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Descrição</label>
        <input
          type="text"
          {...register('descricao', { required: 'Descrição é obrigatória' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.descricao && (
          <span className="text-red-500 text-sm">{errors.descricao.message as string}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Valor</label>
        <input
          type="number"
          step="0.01"
          {...register('valor', { required: 'Valor é obrigatório', min: 0 })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.valor && (
          <span className="text-red-500 text-sm">{errors.valor.message as string}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tipo</label>
        <select
          {...register('tipo', { required: 'Tipo é obrigatório' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Selecione...</option>
          <option value="Receita">Receita</option>
          <option value="Despesa">Despesa</option>
        </select>
        {errors.tipo && (
          <span className="text-red-500 text-sm">{errors.tipo.message as string}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Adicionar Transação
      </button>
    </form>
  );
};