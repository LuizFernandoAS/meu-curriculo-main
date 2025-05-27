import { CardEducation } from "../components/CardEducation"

const tableEducation = [
  { id:1,
    grade: "Ensino Superior",
    course:"Pós-Grad. Ciências de Dados e Big Data Analytics",
    institution:"FMU - Faculdade Metropolitana Unidas",
    time:"Agosto/2024 - Abril/2025",
    urlCourse: "https://levelup.fmu.br/"
  },
  { id:1,
    grade: "Ensino Superior",
    course:"Grad. Análise e Desenvolvimento de Sistemas",
    institution:"Faculdade Impacta de Tecnologia",
    time:"Agosto/2020 - Dezembro/2022",
    urlCourse: "https://drive.google.com/file/d/1RlBtEYnQ2aZRvciH5-E1bE4B02D2LGRC/view?usp=sharing"
  },
  { id:2,
    grade: "Ensino Técnico",
    course:"Técnico em Informática",
    institution:"Senac Itaquera",
    time:"Março/2019 - Dezembro/2020",
    urlCourse: "https://drive.google.com/file/d/1szFK_jHPnUaS-nu2mB-ZmuCALBCcSjJV/view?usp=sharing"
  },
  { id:3,
    grade: "Ensino Técnico",
    course:"Técnico em Administração",
    institution:"Etec de Sapopemba",
    time:"Janeiro/2017 - Junho/2018",
    urlCourse: "https://drive.google.com/file/d/12PCBiuOYS1kHL9iluqAhhoBV2dJHrJpf/view?usp=sharing"
  }
]

export function Education(){
  const title = ["Ensino Superior", "Ensino Técnico"];

  return(<>
    <main className="md:ml-52 bg-zinc-900 md:pl-8 pt-12 pr-6 pl-6 pb-6">
      <h1 className="md:ml-12 max-sm:mx-5 text-3xl mb-8 text-teal-600 font-bold max-lg:text-center">Formação Acadêmica</h1>

      {title.map(titleCourse =>{
        return(
          <div className=" md:ml-12 max-sm:mx-5 pb-6">
            <h2 className="text-lg">{titleCourse}</h2>
            <div className="flex flex-row flex-wrap max-sm:flex-col">
            {tableEducation.map( courseCard =>{
              if(courseCard.grade == titleCourse){
                return <CardEducation 
                  key={courseCard.id} 
                  grade={courseCard.grade}
                  course= {courseCard.course}
                  time={courseCard.time}
                  institution={courseCard.institution}
                  urlCourse={courseCard.urlCourse}
                  />
                }                          
             })
            }
          </div>
        </div>
      )})}
      
    </main>
  </>)
}