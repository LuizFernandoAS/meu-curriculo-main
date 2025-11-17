import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import imgProfile from "./assets/profile01.jpg"
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function App() {

  return (<BrowserRouter>
      <div className="md:w-60 md:h-screen md:fixed bg-zinc-800">
        {/* Header Aside */}
        <header className="py-6 flex flex-col bg-zinc-900 border-b-4 border-b-zinc-900 rounded-b-lg bg-gradient-to-b from-zinc-800 to-zinc-900 justify-center items-center">
          {/* Imagem */}
          <a className="mb-2" href="/">
            <img className="border-2 border-gray-700 rounded-full" src={imgProfile} alt="" width={125}/>
          </a>
          <div className="flex flex-col items-center justify-center ">
            <strong className="text-xl">LuizFernando<span className="text-teal-600">AS</span></strong>
            <span className="text-zinc-600 text-sm">Analista de Dados</span>
          </div>
        </header>
          <aside className=" bg-zinc-800"> 
            {/* Navegação*/}
            <nav className="md:mt-2 flex flex-wrap flex-col md:gap-3 max-md:gap-y-2 md:px-1 py-10 max-md:py-2 max-md:px-1">
              <a className="md:border-l-4 max-md:border-x-4 border-teal-600 bg-zinc-900 max-md:bg-zinc-900 md:p-2 p-3 text-center hover:bg-zinc-950" href="/">Perfil Profissional</a>
              <a className="md:border-l-4 max-md:border-x-4 border-teal-600 bg-zinc-900 max-md:bg-zinc-900 md:p-2 p-3 text-center hover:bg-zinc-950" href="/MeusProjetos">Meus Projetos</a>
              <a className="md:border-l-4 max-md:border-x-4 border-teal-600 bg-zinc-900 max-md:bg-zinc-900 md:p-2 p-3 text-center hover:bg-zinc-950" href="/FormacaoAcademica">Formação Acadêmica</a>
              <a className="md:border-l-4 max-md:border-x-4 border-teal-600 bg-zinc-900 max-md:bg-zinc-900 md:p-2 p-3 text-center hover:bg-zinc-950" href="/ExperienciaProfissional">Experiência Profissional</a>
              <a className="md:border-l-4 max-md:border-x-4 border-teal-600 bg-zinc-900 max-md:bg-zinc-900 md:p-2 p-3 text-center hover:bg-zinc-950" href="/Certificacoes">Certificações</a>
            </nav>
            <footer className="max-md:hidden mt-8 max-sm:">
              <div className="flex justify-center gap-3">
                <a className="hover:text-teal-600" href="https://linkedin.com/in/luizfernando-as"><LinkedinLogo size={24}/></a>
                <a className="hover:text-teal-600" href="https://github.com/LuizFernandoAS"><GithubLogo size={24}/></a>
                <a className="hover:text-teal-600" href="mailto:luizfernandoaraujodasilva@hotmail.com"><Envelope size={24}/></a>
              </div>
              
              <span className="flex py-8 justify-center text-sm">Desenvolvido por
                <a  className="underline px-1 text-indigo-900" 
                    href="https://linkedin.com/in/luizfernando-as"
                    target="_blank">LuizFernandoAS</a></span>
            </footer>
          </aside> 
        </div>
    
        <Router/>
      
        <footer className="md:hidden flex flex-col gap-5 py-6 bg-zinc-800">
              <div className="flex justify-center gap-3">
                <a className="hover:text-teal-600" href="https://linkedin.com/in/luizfernando-as"><LinkedinLogo size={24}/></a>
                <a className="hover:text-teal-600" href="https://github.com/LuizFernandoAS"><GithubLogo size={24}/></a>
                <a className="hover:text-teal-600" href="mailto:luizfernandoaraujodasilva@hotmail.com"><Envelope size={24}/></a>
              </div>
              
              <span className="flex justify-center text-sm">Desenvolvido por
                <a  className="underline px-1 text-indigo-900" 
                    href="https://linkedin.com/in/luizfernando-as"
                    target="_blank">LuizFernandoAS</a></span>
            </footer>
    
    </BrowserRouter>
  )
}
