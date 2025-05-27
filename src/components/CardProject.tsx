interface cardProps{
  name: string;
  urlCode?: string;
  tools: string;
  viewProject: string;
}

export function CardProject({name,urlCode,tools,viewProject}:cardProps){
  return(
  <div className="rounded-lg md:mr-4 my-3 bg-zinc-800 py-4 px-6 sm:w-[345px]">
    {/* Name */}
    <h3 className="text-lg font-bold">{name}</h3>
      <div className="h-20 max-sm:max-w-[350px]">
        {/* Codigo GitHub */}
        {urlCode &&(
          <div>
            <small className="text-zinc-400">Código:{" "}
              <a 
                className="text-teal-600 underline"
                href={urlCode}
                target="_blank">[ Clique aqui ]</a>
            </small>
            <br/>
          </div>
        )}
  
        {/* Ferramentas utilizadas */}
        <small className="text-zinc-400">Ferramentas utilizadas: {tools}</small>
      </div>

    {/* Botão para Visualizar o Projeto*/}
    <div className="flex justify-end">
      <a className="blue hover:bg-teal-700 bg-teal-600 rounded-md px-3 py-1 mt-3" 
      type="button"
      href={viewProject}
      target="_blank">Visualizar Projeto</a>
    </div>
  </div>)
}