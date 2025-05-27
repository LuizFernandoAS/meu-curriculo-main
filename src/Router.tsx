import { Route, Routes } from "react-router-dom";
import { ProfessionalProfile } from "./pages/ProfessionalProfile";
import { Education } from "./pages/Education";
import { Projects } from "./pages/Projects";
import { WorkExperience } from "./pages/WorkExperience";
import { Certification } from "./pages/Certification";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<ProfessionalProfile/>}/>
      <Route path="/FormacaoAcademica" element={<Education/>}/>
      <Route path="/MeusProjetos" element={<Projects/>}/>
      <Route path="/Certificacoes" element={<Certification/>}/>
      <Route path="/ExperienciaProfissional" element={<WorkExperience/>}/>
    </Routes>
  )
}