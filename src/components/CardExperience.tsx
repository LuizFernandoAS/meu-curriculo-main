interface cardProps{
  profession: string;
  enterprise: string;
  place: string;
  time: string;
  workActivities: string;
  urlLetter: string;
}

export function CardExperience({profession, enterprise, place, urlLetter, time, workActivities }:cardProps){
  return(
  <div className="rounded-lg md:mr-4 my-3 bg-zinc-800 py-4 px-6 md:w-96 w-full">    
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold my-1">{profession}</h3>
        <small className="text-zinc-400"><strong className="text-zinc-300">Empresa:</strong> {enterprise}</small>
        <small className="text-zinc-400"><strong className="text-zinc-300">Local:</strong> {place}</small>
        <small className="text-zinc-400"><strong className="text-zinc-300">Local:</strong> {time}</small>
        <small className="md:h-20 text-zinc-400"><strong className="text-zinc-300">Atividades:</strong> {workActivities}</small>
      </div>
      {/* Botão carta de recomendação*/}
      <div className="flex justify-end">
        <a className="blue bg-teal-600 hover:bg-teal-700 rounded-md px-4 py-2 mt-5 " 
        type="button"
        href={urlLetter}
        target="_blank">Carta de Recomendação</a>
      </div>
    
  </div>)
}