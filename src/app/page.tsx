import Hero from "@/components/Hero/hero"
import Serviços from "./routes/servicos/page"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <div className="absolute left-0 top-0 -z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-backgroundBlue">
        <Hero />
      </div>

      <div className="my-0 flex h-screen w-full items-center justify-center px-4">
        <div className="">
          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/logo.svg"}
              alt="logo GODRIVES"
              width={48}
              height={48}
            />
            <p className="text-center text-base text-primaryWhite md:text-lg">
              Seja bem vindo a{" "}
              <span className="text-xl font-bold text-primaryBlue">GO</span>
              <span className="text-xl font-bold text-primaryRed">DRIVES</span>
            </p>
          </div>
          <p className="mt-5 text-center text-3xl font-semibold text-primaryWhite sm:text-4xl">
            Manutenção em equipamentos{" "}
            <span className="text-primaryBlue">eletrônicos industriais</span>{" "}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-3xl border-2 border-primaryWhite bg-transparent px-7 py-3 font-medium text-primaryWhite transition-all hover:bg-primaryWhite hover:text-backgroundBlue">
              Leia mais
            </button>
            <button className="rounded-3xl border-2 border-primaryBlue bg-transparent px-7 py-3 font-medium text-primaryBlue transition-all hover:bg-primaryBlue hover:text-backgroundBlue">
              Contate-nos
            </button>
          </div>
        </div>
      </div>

      {/* <div className="h-[650px] w-full bg-white">Teste</div>
      <div className="h-[650px] w-full bg-white">Teste</div>

      <div className="h-[650px] w-full bg-white">Teste</div> */}
    </>
  )
}
