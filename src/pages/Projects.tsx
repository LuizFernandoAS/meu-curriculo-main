import { CardProject } from "../components/CardProject"

const bd = [
  { id: 1,
    nameProject: "DevLinks",
    project: "HTML e CSS",
    urlCode: "https://github.com/LuizFernandoAS/DevLinks",
    tools: "HTML, CSS, JavaScript, Figma, Git e GitHub",
    viewProject: "https://luizfernandoas.github.io/DevLinks/" 
  },
  { id: 2,
    nameProject: "Dashboard Performance Comercial - Em Construção",
    project: "Power BI",
    tools: "Power BI, Power Query, Métricas, Indicadores, DAX, SVG, Figma, etc.",
    viewProject: "https://drive.google.com/drive/folders/1dxLviwTRbk4cuxcMFKNK_JrRDaXYvjev?usp=drive_link" 
  },
  { id: 3,
    nameProject: "Dashboard Treinamento",
    project: "Power BI",
    tools: "Power BI, Power Query e DAX",
    viewProject: "https://drive.google.com/drive/folders/1ntZVY3zX3cFH3Vz2-R8PUod38fSuIwoq?usp=sharing" 
  },
  { id: 4,
    nameProject: "Árvore de Decisão e Naive Bayes",
    project: "Machine Learning",
    tools: "Pandas, Scikit-learn e LabelEncoder, Train_test_split e Accuracy_score",
    viewProject: "https://colab.research.google.com/drive/1o6Y3nIbA7jS33QTv-UBbpjt5wEUNqgGW?usp=drive_link"
  },
  { id: 5,
    nameProject: "K-means",
    project: "Machine Learning",   
    tools: "Numpy,Scikit-learnandardScaler, Plotly",
    viewProject: "https://colab.research.google.com/drive/1gHCTfkmA-y2ELx4HMP76bG3N53niMvfl?usp=drive_link" 
  }
]

export function Projects(){
  // Títulos
  const title = ["HTML e CSS", "Power BI", "Machine Learning"];

  return(
        <main className="max-sm:flex max-sm:flex-col justify-center items-center md:ml-52 bg-zinc-900 md:pl-8 pt-12 pb-6">
          <div className="md:ml-12 max-sm:mx-5">
          <h1 className="max-sm:text-center text-3xl mb-4 text-teal-600 font-bold">Meus Projetos</h1>
          <p className="max-sm:text-center text-zinc-300 mb-8">Os projetos apresentados abaixo são fictícios, a fim de mostrar um pouco dos meus conhecimentos.</p>
          {/*React*/}
          {title.map(titleProject =>{
            return <>
              <h2 className="max-sm:text-center text-lg">{titleProject}</h2>
              <div className="flex flex-row flex-wrap max-sm:flex-col">
                {/* Card */}
                {bd.map(values =>{
                  if(values.project==titleProject){
                  return(
                      <CardProject key={values.id}
                            name={values.nameProject} 
                            urlCode={values.urlCode} 
                            tools={values.tools} 
                            viewProject={values.viewProject} />
                      )
                    }
                })}
              </div>
            </>
          })
          }
          </div>
        </main>
  )
}