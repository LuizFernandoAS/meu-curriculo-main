import { GraduationCap, Certificate, Student} from "@phosphor-icons/react";

interface cardEducationProps{
  grade: string;
  course: string;
  institution: string;
  time: string;
  urlCourse: string;
  hours?: string;
  apprenticeship?:string; 
}

export function CardEducation(props:cardEducationProps){
  return(
  <div className="flex flex-col items-center rounded-lg md:mr-5 my-3 border-b-2 border-teal-600 bg-zinc-800 py-4 px-6 md:w-80 w-full">
      {props.grade=="Ensino Superior"&&(
        <GraduationCap  color="#0d9488" size={128}/>
      )}
      {props.grade=="Ensino Técnico"&&(
        <Student  color="#0d9488" size={128}/>
      )}
      {props.grade=="Certificado"&&(
        <Certificate  color="#0d9488" size={128}/>
      )}   

    {/* Curso */}
      <h3 className="text-center text-lg font-bold my-2">{props.course}</h3>
      <div className="flex flex-col gap-2 items-center max-sm:max-w-[350px]">
        <small className="text-center text-zinc-400">
          Instituição: {props.institution}   
        </small>
        <small className="text-center text-zinc-400">
          {props.time}
          {props.hours&&(
          <span className="text-zinc-400"> | {props.hours}</span>
        )}
        </small>
        
        {props.apprenticeship&&(
          <small className="text-center text-zinc-400">Conhecimentos Adquiridos: {props.apprenticeship}</small>
        )}
  
      </div>

    {/* Botão para Visualizar o Projeto*/}
      {props.grade!="Certificado"&&(
        <a className="text-center hover:bg-teal-700 bg-teal-600 rounded-md px-4 py-2 mb-2 mt-4" 
        type="button"
        href={props.urlCourse}
        target="_blank">Visualizar Diploma</a>
      )}
      {props.grade=="Certificado"&&(
        <a className="text-center hover:bg-teal-700 bg-teal-600 rounded-md px-4 py-2 mb-2 mt-4" 
        type="button"
        href={props.urlCourse}
        target="_blank">Visualizar Certificado</a>
      )}
    
  </div>
  
  )
}