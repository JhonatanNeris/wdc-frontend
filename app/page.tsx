import Image from "next/image";
import CardDescription from "./components/CardDescription";
import CardSlider from "./components/CardSlider";
import EmailCapture from "./components/EmailCapture";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Divisor from "./components/Divisor";



const slides = [
  { id: 1, src: '/esporte1.svg', title: 'Salto na vara', text: 'As manobras pompoarísticas mais avançadas – você vai ter uma ppk, forte, resistente, saudável e com truques de tirar o fôlego, como: chupitar, dedilhar, enlaçar, sugar, e vários outros segredos' },
  { id: 2, src: '/esporte2.svg', title: 'APERTÊ', text: 'Os melhores golpes para nocautear de uma vez por todas os problemas que atrapalham a sua saúde íntima – como a incontinência, cólicas e os incômodos da menopausa, por exemplo' },
  { id: 3, src: '/esporte3.svg', title: 'GINÁSTICA NHANHAÍSTICA', text: 'O passo a passo para desenvolver habilidades que farão você liderar no quesito rebolada sensual e manuseio de bolas.' },
  { id: 4, src: '/esporte4.svg', title: 'SIRIRICLISMO', text: 'Exercícios para aumentar a sua consciência corporal e te ajudar a entender quais são os pontos que mais te dão prazer para que você se torne uma mulher altamente orgástica' },
];


export default function Home() {
  return (
    <>
      {/* PRIMEIRA SEÇÃO */}
      <section className="bg-[url('/bg1cel.svg')] bg-cover bg-bottom bg-no-repeat h-[100vh] sm:bg-[url('/bg1.png')]">
        <div className="container mx-auto max-w-[1200px] px-5 pt-5 pb-10 text-center sm:grid sm:grid-cols-2 sm:gap-10 sm:text-left sm:items-center">
          {/* DESKTOP */}
          <div className="hidden sm:flex flex-col mt-30">
            <Image
              src="/logofull.svg"
              alt="Logo"
              width={300}
              height={300}
              className="mb-6 w-[404px] h-auto"
            />
            <h2 className="text-[28px] leading-[1.2] text-[#fff]">Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula, onde eu vou ensinar todos os exercícios do meu curso de Ginástica Íntima. <span className="text-[#D4C47E] font-bold">dia 13 de agosto, às 20h, horário de Brasília.</span> Cadastre-se, gratuitamente, e receba o link da live.</h2>
            <br />
            <p className="text-[28px] leading-[1.2]  text-[#fff]"><span className="text-[28px] font-extrabold text-[#D4C47E]">Ao vivo, dia 13 de agosto, às 20h, horário de Brasília.</span> Cadastre-se, gratuitamente, e receba o link da live</p>

            {/* form */}

            <div className="w-full my-5">
              <EmailCapture color="#D4C47E" />
            </div>

            <span className="uppercase text-[12px] mt-4  text-[#fff]">
              Não se preocupe, seus dados estão protegidos de acordo com a lei LGPD.
            </span>
          </div>

          {/* MOBILE */}
          <div className="flex sm:hidden flex-col items-center gap-3 text-white">
            <Image
              src="/logofull.svg"
              alt="Logo"
              width={300}
              height={300}
              className="mx-auto mb-4 w-[180px] h-auto"
            />
            <h1 className="font-bold text-[31px] leading-[1]">Meu Curso de Ginástica Íntima gratuito dia 13/08</h1>
            <h2>Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula, onde eu vou ensinar todos os exercícios do meu curso de Ginástica Íntima. <span className="text-[#D4C47E] font-bold">dia 13 de agosto, às 20h, horário de Brasília.</span> Cadastre-se, gratuitamente, e receba o link da live.</h2>

            <div className="w-full my-5">
              <EmailCapture color="#D4C47E" />
            </div>
          </div>
        </div>
      </section>

      <Divisor/>

      {/* SEGUNDA SEÇÃO */}
      <section className="bg-[#E5E5E5] bg-[url('/talvez1.svg')] bg-cover bg-center sm:bg-[url('/talvez1.svg')]">
        <div className="container mx-auto max-w-[1200px] pt-5 pb-5 sm:pb-20 text-center">
          <div className="flex flex-col items-center ">
            <div className="-mt-[60px] flex flex-col gap-6 w-full px-[20px]">
              {/* Bloco azul */}
              <div className="
                  bg-[url('/bgblue.svg')] bg-cover bg-center
                  bg-[#1A18BB] bg-blend-overlay
                  text-center rounded-2xl px-7 py-7 sm:px-15 text-white border-[4px] border-[#D4C47E]
                                    
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
              
              {/* Slider */}
              <Carousel opts={{ align: "start" }}>
                <CarouselContent>
                  {slides.map((s) => (
                    <CarouselItem key={s.id} className="basis-[80%] sm:basis-1/4">
                      <CardSlider src={s.src} title={s.title} text={s.text} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>


              {/* Arrows(sinalizador de slider) - SOMENTE MOBILE */}
              <Image
                src="/arrowleftandright.svg"
                alt="Logo"
                width={300}
                height={300}
                className="mx-auto w-[180px] h-auto my-1 sm:hidden"
              />

            </div>
          </div>
        </div>
      </section >

      {/* TERCEIRA SEÇÃO - APENAS MOBILE*/}
      < section className="bg-[url('/Rectangle1597.svg')] bg-cover bg-center sm:hidden" >
        <div className="container mx-auto pt-5 pb-10 text-center">
          <div className="flex flex-col items-center px-[20px]">
            <h2 className="text-center text-[#1A18BB] font-bold text-[18px]">Para aprender tudo isso e treinar comigo, ao vivo, todos os exercícios do meu curso de Ginástica Íntima, basta cadastrar o seu e-mail gratuitamente.</h2>
            {/* campo de email */}
            <EmailCapture />
          </div>

        </div>
      </section >

      <Divisor/>

      {/* QUARTA SEÇÃO */}
      < section className="bg-[url('/Rectangle10.svg')] bg-cover bg-center sm:bg-[url('/Rectangle10desktop.svg')] relative" >
        <Image
          src="/medal.svg"
          alt="Medalhas"
          width={50}
          height={50}
          className=" mb-4 w-[300px] h-auto absolute hidden sm:block z-0"
        />
        <div className="container mx-auto max-w-[1200px] pt-15 pb-10 text-center z-30 relative">
          <div className="flex flex-col items-center px-[20px]">
            <div className="flex flex-col sm:flex-col-reverse gap-3">
              <div className="bg-[#D4C47E] w-[40px] h-[4px] mx-auto mb-4 rounded-full">
              </div>
              <h2 className="text-center text-[#fff] font-bold text-[18px] max-w-[986px]">Existem dois tipos de ppka, aquelas que dominam a modalidade do aperta e solta e as que não praticam nenhum exercício, ou seja, as sedentárias.</h2>
            </div>
            <div className="bg-[#D9D9D9] rounded-full border-[2px] border-[#FFD964] p-2 mt-5 text-center text-[#1A18BB] font-extrabold text-[15px] uppercase w-[240px]">
              <span>ppk sedentária</span>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-5 mb-5 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-4">
              <CardDescription text="Não sente vontade de ter relaçao íntima" color="#fff" />
              <CardDescription text="Não tem lubrificação" color="#fff" />
              <CardDescription text="Tem escape de urina quando faz esforço" color="#fff" />
              <CardDescription text="Solta buceidos durante a relação (flatos)" color="#fff" />
              <CardDescription text="Sente fortes cólicas menstruais todos os meses" color="#fff" />
              <CardDescription text="Sente dor na hora da relação" color="#fff" />
            </div>
            <div className="bg-none rounded-full border-[2px] border-[#FFD964] p-2 mt-5 text-center text-[#fff] font-extrabold text-[15px] uppercase w-[240px]">
              <span>ppk atleta</span>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-5 mb-5 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-4">
              <CardDescription text="É muito mais molhadinha" />
              <CardDescription text="Sente muito mais vontade de ter relação" />
              <CardDescription text="Não sofre com cólicas menstruais" />
              <CardDescription text="É altamente orgástica" />
              <CardDescription text="É mais preparada para lidar com os sintomas da menopausa" />
              <CardDescription text="Não tem escape de urina causado pela frouxidão íntima" />
              <CardDescription text="Não sofre com infecçõesde recorrência" />
              <CardDescription text="Fica muito mais resistente no pré e no pós-parto" />
            </div>
          </div>

          {/* arrow - SOMENTE DESKTOP */}
          <Image
            src="/arrowdown.svg"
            alt="Logo"
            width={50}
            height={50}
            className="mx-auto mb-4 w-[50px] h-auto mt-5"
          />

        </div>
      </section >

      <Divisor />

      {/* QUARTA SEÇÃO  */}
      < section className="bg-[#1A18BB] bg-cover bg-center" >
        <div className="container max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center px-[20px] pt-20 sm:pt-0 sm:flex-row sm:grid sm:grid-cols-2  sm:text-left sm:items-center">
            <div className="flex flex-col sm:flex-row sm:gap-10 sm:items-center">
              <Image
                src="/arrowup.svg"
                alt="Logo"
                width={50}
                height={50}
                className="mx-auto mb-4 w-[50px] h-auto  hidden sm:block"
              />
              <div className="text-white">
                {/* somente desktop */}
                <h2 className="text-[#FFD964] font-bold text-[45px] text-left hidden sm:block">Quem vai te ensinar</h2>

                <p className="text-[18px] sm:text-[24px]">Cátia Damasceno é fisioterapeuta especializada em uroginecologia, e iniciou seu trabalho ensinando exercícios de Ginástica Íntima para o fortalecimento da musculatura de mulheres com problema de flacidez íntima após o parto.</p>
                <br />
                <p className="text-[18px] sm:text-[24px]">Desde então, se especializou em Ginástica Íntima feminina e, ao longo de mais de 15 anos de carreira, seus cursos e palestras já ajudaram milhares de mulheres pelo Brasil. Ao todo, são mais de 150 mil alunas participando ativamente das suas metodologias.</p>
                <br />
                <p className="text-[18px] sm:text-[24px]">Atualmente, Cátia é bastante reconhecida por esse trabalho e se tornou a precursora da Ginástica Íntima no Brasil, tornando-se a maior referência nacional no assunto. Já participou de vários programas influentes na mídia, como o “Programa do Jô”, “Tonight Show'' na CNN, “Se Joga”, também da Rede Globo, e vários outros.</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Catia.svg"
                alt="Logo"
                width={800}
                height={800}
                className="mx-auto w-[240px] h-auto sm:w-[575px]"
              />
            </div>
          </div>
        </div>
      </section >

      {/* FOOTER */}
      < footer className="bg-[#D4C47E]" >
        <div className="container mx-auto max-w-[1200px] text-black py-8 flex flex-col sm:flex-row sm:gap-8 sm:items-center sm:grid sm:grid-cols-3 text-center sm:text-left">
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
      </footer >


    </>
  );
}
