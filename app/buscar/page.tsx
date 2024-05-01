import Head from 'next/head';

export default function Busca() {
  // Mock de dados para simulação, você pode substituir por dados reais de uma API
  const servicos = [
    {
      id: 1,
      nome: "Lorem Ipsum",
      categoria: "Publicidade",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ante in enim sollicitudin malesuada eget vel turpis.",
      imagem: "https://i.pravatar.cc/300?img=1"  
    },
    {
        id: 2,
        nome: "Lorem Ipsum",
        categoria: "Publicidade",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ante in enim sollicitudin malesuada eget vel turpis.",
        imagem: "https://i.pravatar.cc/300?img=3"  
      },
      {
        id: 3,
        nome: "Lorem Ipsum",
        categoria: "Publicidade",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ante in enim sollicitudin malesuada eget vel turpis.",
        imagem: "https://i.pravatar.cc/300?img=4"  
      },
  ];

  return (
    <div className="bg-gradient-to-br from-[#535CC7] to-[#F0F0F7] min-h-screen p-10">
      <Head>
        <title>Busque pelo serviço desejado</title>
      </Head>
      <div className="container w-[900px] mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Busque pelo serviço desejado!</h1>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex gap-4 mb-4">
            <input type="text" placeholder="Buscar" className="input-field flex-1" />
            <select className="input-field w-1/4">
              <option>Dia da semana</option>
            </select>
            <select className="input-field w-1/4">
              <option>Horário</option>
            </select>
          </div>

          {servicos.map((servico) => (
            <div key={servico.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <div className="flex gap-4">
                <img src={servico.imagem} alt="Foto do usuário" className="rounded-full h-16 w-16" />
                <div>
                  <h2 className="text-xl font-semibold">{servico.nome}</h2>
                  <p className="text-sm text-gray-500">{servico.categoria}</p>
                </div>
              </div>
              <p className="my-4">{servico.descricao}</p>
              <div className="border-t pt-4">
              <button className="text-blue-500 hover:text-blue-800 border border-blue-500 rounded-lg px-4 py-2">Saiba Mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
