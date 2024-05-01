"use client"
import Head from 'next/head';
import { useState } from 'react';

export default function CadastroServico() {
const [servicos, setServicos] = useState<{ nome: string; valor: string; prazo: string; descricao: string; fotos: any[] }[]>([]);

const adicionarServico = () => {
    const novoServico = { nome: '', valor: '', prazo: '', descricao: '', fotos: [] };
    setServicos([...servicos, novoServico]);
};

const salvarServico = () => {
    console.log('Serviços salvos:', servicos);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#535CC7] to-[#F0F0F7] flex justify-center items-start py-20">
      <Head>
        <title>Cadastro de Serviços</title>
      </Head>
      <div className="bg-white shadow-lg rounded-lg p-8 w-[900px]">
        <h1 className="text-3xl font-bold mb-6">Cadastro</h1>
        <p className="text-sm mb-4">Preencha as informações do serviço prestado para que outros usuários encontrem</p>

        {servicos.map((servico, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Serviço</h2>
            <input type="text" placeholder="Nome do Serviço" className="input-field mb-2" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Valor (R$)" className="input-field" />
              <input type="text" placeholder="Prazo" className="input-field" />
            </div>
            <textarea placeholder="Descrição do serviço" className="input-field h-24 mt-2 mb-2"></textarea>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[...Array(3)].map((e, i) => (
                <div key={i} className="border-2 border-dashed border-gray-400 rounded-lg h-24 flex justify-center items-center">
                  <span className="text-gray-400">+</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center">
          <button onClick={adicionarServico} className="text-blue-500 hover:text-blue-600 font-bold py-2 px-4">+ Adicionar Serviço</button>
          <button onClick={salvarServico} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Salvar</button>
        </div>
      </div>
    </div>
  );
}
