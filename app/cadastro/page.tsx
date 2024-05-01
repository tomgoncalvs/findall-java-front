import Head from 'next/head';

export default function Cadastro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#535CC7] to-[#F0F0F7] flex justify-center items-start pt-20">
      <Head>
        <title>Cadastro</title>
      </Head>

      <div className="w-[900px]"> 

        
        <div className="mb-8"> 
          <h1 className="text-[42px] font-bold text-slate-200">Cadastro</h1>
          <p className="text-[12px] text-slate-200">O primeiro passo, é preencher esse formulário de inscrição.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <form>
            <div className="space-y-4">
              <input type="text" placeholder="Nome Completo" className="input-field" />
              <input type="text" placeholder="CNPJ" className="input-field" />
              <input type="text" placeholder="Whatsapp" className="input-field" />
              <textarea placeholder="Descrição do Serviço Prestado" className="input-field h-24"></textarea>
            </div>

            <hr className="my-6" />
            <div className="mb-6">
              <select className="input-field">
                <option>Selecione a categoria do seu serviço</option>
              </select>
              <input type="text" placeholder="Custo médio por hora" className="input-field" />
            </div>

            <hr className="my-6" />
            <h2 className="text-xl font-semibold mb-4">Horários disponíveis</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="Dia da semana" className="input-field w-1/2" />
                <input type="text" placeholder="Horário Abertura" className="input-field w-1/4" />
                <input type="text" placeholder="Horário de Fechamento" className="input-field w-1/4" />
              </div>
            </div>

            <button type="submit" className="mt-4 bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Salvar contato</button>
          </form>
        </div>
        
      </div>
    </div>
  );
}
