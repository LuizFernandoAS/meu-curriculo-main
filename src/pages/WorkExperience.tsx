import { CardExperience } from "../components/CardExperience";

const tableExperience = [
  { id: 1,
    profession: "Analista de Dados Pleno",
    enterprise:"Neobpo - Santander",
    place: "República - Zona Central | São Paulo - SP ",
    time: "Dezembro/2023 - até o momento",
    workActivities:"Atuei com processamento de ETL, utilizando: Pandas, PySpark, Power BI, SAS e Azure Databricks. Além disso, desenvolvi dashboards para apoiar a tomada de decisões em estrátegias de contato com os clientes.",
    urlLetter:"https://www.linkedin.com/in/luizfernando-as/details/recommendations/"
  },
  { id: 1,
    profession: "Web Designer",
    enterprise:"Distribuidora Bolsão Bebidas",
    place: "Vila Maria - Zona Norte | São Paulo - SP ",
    time: "Julho/2021 - Agosto/2022 | 1 ano e 2 meses",
    workActivities:"Desenvolvi um site para mostrar o catálogo dos produtos da empresa usando: HTML, CSS, PHP, SQL, Bootstrap, Adobe Photoshop, Adobe Illustrator e Adobe XD. Além disso, gerenciava as redes sociais da empresa.",
    urlLetter:"https://drive.google.com/file/d/1xfmEx6nrbsbuvFsSidxglKxGpGEWLmsi/view?usp=sharing"
  },
  { id: 2,
    profession: "Auxiliar de TI",
    enterprise:"Distribuidora Bolsão Bebidas",
    place: "Vila Maria - Zona Norte | São Paulo - SP",
    time: "Dez/2020 - Maio/2021 | 6 meses",
    workActivities: "Desenvolvi o logotipo da empresa e criava designs para postar nas redes sociais usando Adobe Photoshop e Adobe Illustrator.",
    urlLetter:"https://drive.google.com/file/d/1xfmEx6nrbsbuvFsSidxglKxGpGEWLmsi/view?usp=sharing"
  },
  { id: 3,
    profession: "Auxiliar Programador",
    enterprise:"Princípios Bordados",
    place: "Jardim Vila Carrão - Zona Leste | São Paulo - SP ",
    time: "Março/2017 - Março/2019 | 2 anos",
    workActivities:"Desenvolvia design de bordado usando os softwares: Wilcom Embroidery Studio e CorelDraw",
    urlLetter:"https://drive.google.com/file/d/1ClnP-JvetiGmIRl2WKvLjVePwR9xRzAz/view?usp=sharing"
  },
]

export function WorkExperience(){
  return(
        <main className="max-sm:flex max-sm:flex-col justify-center items-center md:ml-52 bg-zinc-900 md:pl-8 pt-12 pb-6">
          <div className="md:ml-12 max-sm:mx-5">
            <h1 className="max-sm:text-center text-3xl mb-8 text-teal-600 font-bold">Experiência Profissional</h1>
            <div className="flex flex-row flex-wrap max-sm:flex-col">
              {/* Card */}
              {tableExperience.map(values =>{
                return(
                  <CardExperience key={values.id}
                    profession={values.profession}
                    enterprise={values.enterprise}
                    place={values.place}
                    time={values.time}
                    workActivities={values.workActivities}
                    urlLetter={values.urlLetter}/>
                  )
                })
              }
            </div>
          </div>          
        </main>
  )
}
