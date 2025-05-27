import {Cloud, BoundingBox, ChartBar, FigmaLogo, FileCss, FileHtml, GithubLogo, MicrosoftExcelLogo, MicrosoftPowerpointLogo, MicrosoftWordLogo, PenNib, FileSql, Star, GitlabLogo, Robot } from "@phosphor-icons/react";

export function ProfessionalProfile(){
  return(<>
    <main  className="md:ml-52 bg-zinc-900 md:pl-8 pt-12 pr-6 pl-6 pb-12">
      <article className="max-sm:text-center md:ml-12 md:w-5/6">
        <h1 className="text-3xl mb-8 text-teal-600 font-bold">Perfil Profissional</h1>
        <p className="text-zinc-300">Sou <strong>Luiz Fernando</strong>, um jovem profissional em constante evolução, com sólida formação acadêmica e prática: pós-graduado em Ciência de Dados e Big Data Analytics, graduado em Análise e Desenvolvimento de Sistemas e formação técnica em Administração e Informática. Essa combinação entre negócios e tecnologia me permite identificar oportunidades estratégicas nos dados e transformá-las em resultados concreto.</p>
        <br/>
        <p className="text-zinc-300">
        Atualmente, atuo como Analista de Negócios Pleno com foco em Speech Analytics, conectando dados complexos a insights claros e acionáveis que impulsionam decisões inteligentes e melhoram a performance organizacional. Minha paixão por tecnologia, design e matemática se reflete no domínio de ferramentas como Power BI, Python, Pandas, PySpark, SQL, Azure Databricks e conceitos de Machine Learning.</p>
        <br/>
        <p className="text-zinc-300">Esse site <strong className="text-teal-600">"Meu Currículo"</strong>{" "}
        foi desenvolvido por mim na intenção de mostrar um pouco do meu conhecimento. Conheça alguns dos{" "} 
        <a href="/MeusProjetos" className="underline text-teal-600">Meus Projetos</a>.</p>
      </article>

      <article className="md:ml-12 md:w-5/6 mt-12">
        <h1 className="max-sm:text-center text-3xl mb-4 text-teal-600 font-bold">Habilidades</h1>
        <div className="flex justify-between flex-wrap text-sm text-gray-300">
          <div className="mb-3">
            <span className="flex gap-2 my-4 items-center"><FileHtml size={48}/>HTML</span>
            <span className="flex gap-2 my-4 items-center"><FileCss size={48}/> CSS</span>
            <span className="flex gap-2 my-4 items-center"><FileSql size={48}/>SQL</span>
            <span className="flex gap-2 my-4 items-center"><Star size={48}/>PySpark</span>
          </div>
          <div className="mb-3">
            <span className="flex gap-2 my-4 items-center"><GithubLogo size={48}/> Git e GitHub</span>
            <span className="flex gap-2 my-4 items-center"><GitlabLogo size={48}/>GitLab</span>
            <span className="flex gap-2 my-4 items-center"><Cloud size={48}/>Azure Databricks</span>
            <span className="flex gap-2 my-4 items-center"><Robot size={48}/>Machine Learning</span>
          </div>
          <div className="mb-3">
            <span className="flex gap-2 my-4 items-center"><MicrosoftExcelLogo size={48}/> Excel</span>
            <span className="flex gap-2 my-4 items-center"><MicrosoftWordLogo size={48}/> Word</span>
            <span className="flex gap-2 my-4 items-center"><MicrosoftPowerpointLogo size={48}/> PowerPoint</span>
            <span className="flex gap-2 my-4 items-center"><ChartBar size={48}/> PowerBI</span>
          </div>
          <div className="mb-3">
            <span className="flex gap-2 my-4 items-center"><BoundingBox size={48}/> Adobe Photoshop</span>
            <span className="flex gap-2 my-4 items-center"><PenNib size={48}/> Adobe Illustrator</span>
            <span className="flex gap-2 my-4 items-center"><FigmaLogo size={48}/> Figma</span>
          </div>
        </div>
      
      </article>

    </main>
  </>)
}