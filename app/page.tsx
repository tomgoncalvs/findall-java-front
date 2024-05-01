import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-custom-blue text-white min-h-screen flex justify-center items-center p-6 gap-10">
      <div className="flex flex-col items-center max-w-xs">
        <header className="text-5xl font-bold mb-4">Findall</header>
        <p className="mb-6 text-center">
          Nunca foi tão fácil encontrar um serviço.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <Link href={"/buscar"}>
          <button className="bg-custom-purple text-white text-lg px-10 py-4 rounded flex items-center justify-center gap-2 w-full">
            <Image
              src="/images/Group.svg"
              width={32}
              height={32}
              alt="Ícone Contratar"
            />
            Contratar
          </button>
          </Link>
          <Link href={"/cadastro"}>
          <button className="bg-custom-red text-white text-lg px-10 py-4 rounded flex items-center justify-center gap-2 w-full">
            <Image
              src="/images/Vector.svg"
              width={32}
              height={32}
              alt="Ícone Oferecer"
            />
            Oferecer
          </button>
          </Link>
        </div>
      </div>

      <div className="flex-shrink-0">
        <Image
          src="/images/ilustracao.svg"
          width={500}
          height={500}
          alt="Ilustração"
        />
      </div>

      <footer className="fixed bottom-0 mb-4 w-full text-center flex items-center justify-center">
        <small className="ml-2 mx-1">Total de 285 conexões já realizadas </small>
        <Image
          src="/images/coracao.svg"
          width={14}
          height={14}
          alt="Ilustração de coração"
        />
      </footer>
    </div>
  );
}
