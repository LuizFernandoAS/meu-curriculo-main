import { CardEducation } from "../components/CardEducation"

const tableEducation = [
  {
    "id": 1,
    "grade": "Certificado",
    "course": "Databricks Fundamentals",
    "institution": "Databricks Academy",
    "time": "Novembro/2024",

    "apprenticeship": "Ambiente Databricks, Unity Catalog, Workflow e Lakehouse",
    "urlCourse": "https://credentials.databricks.com/a7560a58-835e-4bf0-b962-68dd28a9913b"
   },
   {
    "id": 1,
    "grade": "Certificado",
    "course": "Generative AI Fundamentalss",
    "institution": "Databricks Academy",
    "time": "Julho/2024",

    "apprenticeship": "Conceitos de GenAI: Inteligência Artificial, Machine Learning, Deep Learning e IA Gererativa",
    "urlCourse": "https://credentials.databricks.com/00de1e2e-531c-4a46-ad15-9c7a62c7bce2#acc.dz7hx0to"
   },
  {
    "id": 2,
    "grade": "Certificado",
    "course": "Discover",
    "institution": "Rockeseat",
    "time": "Maio/2023",
    "hours": "12 horas",
    "apprenticeship": "HTML, CSS, JavaScript, Git e Github",
    "urlCourse": "https://app.rocketseat.com.br/certificates/02d896c7-22e1-470e-8de3-b972a96c64e8"
   },
  {
   "id": 3,
   "grade": "Certificado",
   "course": "Conectar",
   "institution": "Rockeseat",
   "time": "Maio/2023",
   "hours": "2h23min",
   "apprenticeship": "fundamentos da programação, funcionamento de computadores, internet e mais.",
   "urlCourse": "https://drive.google.com/file/d/1KEvAE24pMS9HRYw8uZ5MajC4RgXJ1e7i/view"
  },
  {
    "id": 4,
    "grade": "Certificado",
    "course": "Fundamentar",
    "institution": "Rockeseat",
    "time": "Maio/2023",
    "hours": "28 horas",
    "apprenticeship": "Fundamentos de HTML, CSS, JavaScript, DOM, Terminal, NodeJS, EJS, SQL, Estrutura de Dados, Programação Orientada a Objetos, Programação Funcional, Git, GitHub e HTTP.",
    "urlCourse": "https://app.rocketseat.com.br/certificates/b6809bd0-2d25-4b22-a396-bf26f9c51be3"
   },
  {
   "id": 5,
   "grade": "Certificado",
   "course": "Especializar",
   "institution": "Rockeseat",
   "time": "Maio/2023",
   "hours": "11 horas",
   "apprenticeship": "JavaScript Assíncrono e Promises, APIs, Fundamentos de ReactJS e TypeScript, GitHub para times, CSS Transition e Animation, SQL Avançado.",
   "urlCourse": "https://app.rocketseat.com.br/certificates/5f8cc984-1bfa-4951-b7ec-36f2ca80d110"
  },
  {
    "id": 6,
    "grade": "Certificado",
    "course": "Inglês(Nível 1)",
    "institution": "Universidade Federal de Santa Catarina",
    "time": "Setembro/2022 -Dezembro/2022",
    "hours": "60 horas",
    "apprenticeship": "Práticas das habilidades orais e escritas.",
    "urlCourse": "https://drive.google.com/file/d/1sNE5aCqhD70VmxHYrd--W75Y0xIlLQND/view?usp=sharing"
  },
  {
   "id": 7,
   "grade": "Certificado",
   "course": "Python",
   "institution": "Impacta",
   "time": "Novembro/2020",
   "hours": "6 horas",
   "urlCourse": "https://drive.google.com/file/d/1ynhiPjzB2rTpyZBEoplLzTKbbE5r6UPH/view?usp=sharing"
  },
  {
   "id": 8,
   "grade": "Certificado",
   "course": "SQL Server",
   "institution": "Impacta",
   "time": "Abril/2021",
   "hours": "22 horas",
   "urlCourse": "https://drive.google.com/file/d/1u2WgqcoU6RsrVb5Db_ZZ3gEdZYD1EUGH/view?usp=sharing"
  },
  {
    "id": 9,
    "grade": "Certificado",
    "course": "Desenvolvimento de Liderança",
    "institution": "Senac Itaquera",
    "time": "Agosto/2019 a Setembro/2019",
    "hours": "20 horas",
    "urlCourse": "https://drive.google.com/file/d/1j2rraXeRlA1jocZz9ZwLx_EdXwILmzMR/view?usp=sharing"
   },
   {
    "id": 10,
    "grade": "Certificado",
    "course": "Liderança Situacional",
    "institution": "Senac Itaquera",
    "time": "Agosto/2019 a Setembro/2019",
    "hours": "16 horas",
    "urlCourse": "https://drive.google.com/file/d/1QtbPXXnMDVGk3yCHrLVNgKyj5GzJ039K/view?usp=drive_link"
   },
   {
    "id": 11,
    "grade": "Certificado",
    "course": "Microsoft Excel - Básico ao Avançado com Dashboard",
    "institution": "Udemy",
    "time": "Outubro/2023",
    "hours": "9,5 horas",
    "apprenticeship": "Fórmulas, Funções, Tabela Dinâmica, Gráfico Dinâmico, Macros, Impressão e Proteção.",
    "urlCourse": "https://drive.google.com/file/d/1KpjCeta5mvo3I3vZPaPY1BBmec-9rqPE/view?usp=drive_link"
   },
   {
    "id": 11,
    "grade": "Certificado",
    "course": "Microsoft Excel - Básico ao Avançado com Dashboard",
    "institution": "Udemy",
    "time": "Outubro/2023",
    "hours": "9,5 horas",
    "apprenticeship": "Fórmulas, Funções, Tabela Dinâmica, Gráfico Dinâmico, Macros, Impressão e Proteção.",
    "urlCourse": "https://drive.google.com/file/d/1KpjCeta5mvo3I3vZPaPY1BBmec-9rqPE/view?usp=drive_link"
   },
   
 
 ]

export function Certification(){
  return(<>
    <main className="md:ml-52 bg-zinc-900 md:pl-8 pt-12 pr-6 pl-6 pb-6">
      <h1 className="md:ml-12 max-sm:mx-5 text-3xl mb-8 text-teal-600 font-bold max-lg:text-center">Certificações</h1>
          <div className=" md:ml-12 max-sm:mx-5 pb-6">
            <div className="flex flex-row flex-wrap max-sm:flex-col">
            {tableEducation.map( courseCard =>{
                return <CardEducation 
                  key={courseCard.id} 
                  grade={courseCard.grade}
                  course= {courseCard.course}
                  hours= {courseCard.hours}
                  apprenticeship= {courseCard.apprenticeship}
                  time={courseCard.time}
                  institution={courseCard.institution}
                  urlCourse={courseCard.urlCourse}
                  />
                }                          
             )
            }
          </div>
        </div>  
    </main>
  </>)
}