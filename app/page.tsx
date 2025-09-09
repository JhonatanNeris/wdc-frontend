import Image from "next/image";
import CardDescription from "./components/CardDescription";
import CardSlider from "./components/CardSlider";
import SliderEmbla from "./components/SliderEmbla";

const slides = [
  { id: 1, src: '/esporte1.svg', title: 'Salto na vara', text: 'As manobras pompoarísticas mais avançadas – você vai ter uma ppk, forte, resistente, saudável e com truques de tirar o fôlego, como: chupitar, dedilhar, enlaçar, sugar, e vários outros segredos' },
  { id: 2, src: '/esporte1.svg', title: 'Salto na vara', text: 'As manobras pompoarísticas mais avançadas – você vai ter uma ppk, forte, resistente, saudável e com truques de tirar o fôlego, como: chupitar, dedilhar, enlaçar, sugar, e vários outros segredos' },
  { id: 3, src: '/esporte1.svg', title: 'Salto na vara', text: 'As manobras pompoarísticas mais avançadas – você vai ter uma ppk, forte, resistente, saudável e com truques de tirar o fôlego, como: chupitar, dedilhar, enlaçar, sugar, e vários outros segredos' },
  { id: 4, src: '/esporte1.svg', title: 'Salto na vara', text: 'As manobras pompoarísticas mais avançadas – você vai ter uma ppk, forte, resistente, saudável e com truques de tirar o fôlego, como: chupitar, dedilhar, enlaçar, sugar, e vários outros segredos' },
];


export default function Home() {
  return (
    <>
      {/* PRIMEIRA SEÇÃO */}
      <section className="bg-[url('/bg1cel.svg')] bg-cover bg-center h-[100dvh] sm:bg-[url('/bg1.png')]">
        <div className="container mx-auto max-w-[1200px] px-4 pt-5 pb-10 text-center sm:grid sm:grid-cols-2 sm:gap-10 sm:text-left sm:items-center">
          {/* DESKTOP */}
          <div className="hidden sm:flex flex-col mt-30">
            <Image
              src="/logofull.svg"
              alt="Logo"
              width={300}
              height={300}
              className="mb-6 w-[404px] h-auto"
            />
            <h2 className="text-[28px] leading-[1.2]">Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula, onde eu vou ensinar todos os exercícios do meu curso de Ginástica Íntima. <span className="text-[#D4C47E] font-bold">dia 13 de agosto, às 20h, horário de Brasília.</span> Cadastre-se, gratuitamente, e receba o link da live.</h2>
            <br />
            <p className="text-[28px] leading-[1.2]"><span className="text-[28px] font-extrabold text-[#D4C47E]">Ao vivo, dia 13 de agosto, às 20h, horário de Brasília.</span> Cadastre-se, gratuitamente, e receba o link da live</p>

            {/* form */}
            <span className="uppercase text-[12px] mt-4">
              Não se preocupe, seus dados estão protegidos de acordo com a lei LGPD.
            </span>
          </div>

          {/* MOBILE */}
          <div className="flex sm:hidden flex-col items-center">
            <Image
              src="/logofull.svg"
              alt="Logo"
              width={300}
              height={300}
              className="mx-auto mb-4 w-[180px] h-auto"
            />
            <h1 className="font-bold text-[31px]">Meu Curso de Ginástica Íntima gratuito dia 13/08</h1>
            <h2>Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula, onde eu vou ensinar todos os exercícios do meu curso de Ginástica Íntima. <span className="text-[#D4C47E] font-bold">dia 13 de agosto, às 20h, horário de Brasília.</span> Cadastre-se, gratuitamente, e receba o link da live.</h2>

            {/* form */}
            {/* <span>
              Não se preocupe, seus dados estão protegidos de acordo com a lei LGPD.
            </span> */}
          </div>
        </div>
      </section>

      {/* SEGUNDA SEÇÃO */}
      <section className="bg-[url('/talvez1.svg')] bg-cover bg-center h-[100vh]">
        <div className="container mx-auto max-w-[1200px] pt-5 pb-10 text-center">
          <div className="flex flex-col items-center px-[20px] relative">
            <div className="absolute top-[-50px] flex flex-col gap-6">
              {/* bloco azul */}
              <div className="
                  bg-[url('/Rectangle.svg')] bg-cover bg-center
                  bg-[#1A18BB] bg-blend-overlay
                  text-center rounded-2xl p-7 text-white border-[4px] border-[#D4C47E]
                                    
                ">
                <h1 className="font-bold text-[28px] sm:text-[38px] text-[#D4C47E] leading-[1.2]">O que você vai aprender nas Pompolimpíadas</h1>
                <p className="mt-4 text-white text-[16px] sm:text-[24px] leading-[1.4]">
                  Participe da superaula gratuita de Ginástica Íntima no dia 13 de
                  agosto, às 20h; e tenha acesso a todo o conteúdo do curso. Aprenda a
                  dominar a arte do aperta e solta e conquiste o ouro em saúde íntima,
                  autoestima e prazer. Inscreva-se nas PompOlimpíadas 2024 para alcançar
                  o topo em todas as suas relações.{" "}
                  <span className="font-bold text-[#D4C47E]">
                    Veja abaixo o que você vai aprender:
                  </span>
                </p>
              </div>

              {/* SLIDER */}


              <SliderEmbla slides={slides} />

            </div>
          </div>
        </div>
      </section>

      {/* TERCEIRA SEÇÃO  - MOBILE*/}
      <section className="bg-[url('/Rectangle1597.svg')] bg-cover bg-center">
        <div className="container mx-auto pt-5 pb-10 text-center">
          <div className="flex flex-col items-center px-[20px]">
            <h2 className="text-center text-[#1A18BB] font-bold text-[18px]">Para aprender tudo isso e treinar comigo, ao vivo, todos os exercícios do meu curso de Ginástica Íntima, basta cadastrar o seu e-mail gratuitamente.</h2>
            {/* campo de email */}
          </div>

        </div>
      </section>

      {/* QUARTA SEÇÃO */}
      <section className="bg-[url('/Rectangle10.svg')] bg-cover bg-center sm:bg-[url('/Rectangle10desktop.svg')] relative">
        <Image
          src="/medal.svg"
          alt="Medalhas"
          width={50}
          height={50}
          className=" mb-4 w-[300px] h-auto absolute hidden sm:block"
        />
        <div className="container mx-auto pt-5 pb-10 text-center">
          <div className="flex flex-col items-center px-[20px]">
            <h2 className="text-center text-[#fff] font-bold text-[18px]">Existem dois tipos de ppka, aquelas que dominam a modalidade do aperta e solta e as que não praticam nenhum exercício, ou seja, as sedentárias.</h2>
            <div className="bg-[#D9D9D9] rounded-full border-[2px] border-[#FFD964] p-2 mt-5 text-center text-[#1A18BB] font-extrabold text-[15px] uppercase">
              <span>ppk sedentária</span>
            </div>
            <div>
              <CardDescription />
            </div>
            <div className="bg-none rounded-full border-[2px] border-[#FFD964] p-2 mt-5 text-center text-[#fff] font-extrabold text-[15px] uppercase">
              <span>ppk atleta</span>
            </div>
            <div>
              <CardDescription />
            </div>
          </div>

          {/* arrow - SOMENTE DESKTOP */}
          <Image
            src="/arrowdown.svg"
            alt="Logo"
            width={50}
            height={50}
            className="mx-auto mb-4 w-[50px] h-auto"
          />

        </div>
      </section>

      {/* QUARTA SEÇÃO  */}
      <section className="bg-[#1A18BB] bg-cover bg-center">
        <div className="container mx-auto pt-20">
          <div className="flex flex-col items-center px-[20px] sm:flex-row">
            <div className="flex flex-col items-center px-[20px]">
              {/* somente desktop */}
              <h2 className="text-[#FFD964] font-bold text-[18px]">Quem vai te ensinar</h2>

              <p className="text-[18px]">Cátia Damasceno é fisioterapeuta especializada em uroginecologia, e iniciou seu trabalho ensinando exercícios de Ginástica Íntima para o fortalecimento da musculatura de mulheres com problema de flacidez íntima após o parto.</p>
              <br />
              <p className="text-[18px]">Desde então, se especializou em Ginástica Íntima feminina e, ao longo de mais de 15 anos de carreira, seus cursos e palestras já ajudaram milhares de mulheres pelo Brasil. Ao todo, são mais de 150 mil alunas participando ativamente das suas metodologias.</p>
              <br />
              <p className="text-[18px]">Atualmente, Cátia é bastante reconhecida por esse trabalho e se tornou a precursora da Ginástica Íntima no Brasil, tornando-se a maior referência nacional no assunto. Já participou de vários programas influentes na mídia, como o “Programa do Jô”, “Tonight Show'' na CNN, “Se Joga”, também da Rede Globo, e vários outros.</p>
            </div>
            <Image
              src="/Catia.svg"
              alt="Logo"
              width={800}
              height={800}
              className="mx-auto w-[240px] h-auto sm:w-[545px]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#D4C47E]">
        <div className="container mx-auto  text-black text-center p-4 flex flex-col sm:flex-row sm:gap-10 sm:items-center">
          <p>suporte@mulheresbemresolvidas.com.br | CNPJ: 23.705.563.0001/80. SHTN Bloco D RUV, SHCS CLS 216 - Asa Sul, Brasília - DF, 70294-530</p>
          <Image
            src="/logopreto.svg"
            alt="Logo"
            width={800}
            height={800}
            className="mx-auto my-4 w-[180px] h-auto"
          />
          <p>Política de privacidade | Termos de uso © 2022 Todos os direitos reservados</p>
        </div>
      </footer>


    </>
  );
}
