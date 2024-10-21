import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { AdminA } from "../../componentes/artistas/AdminA"
import { ListarA } from "../../componentes/artistas/ListarA"
import { RegistrarA } from "../../componentes/artistas/RegistrarA";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { Acerca } from "../../componentes/otros/Acerca";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="" element={<Inicio />} />

      <Route path="/admina" element={< AdminA/>}/>
      <Route path="/lista" element={< ListarA/>}/>
      <Route path="/regisa" element={< RegistrarA/>}/>
      <Route path="/acer" element={< Acerca/>}/>

      <Route path="*" element={<NoEncontrado />}/>
    </Routes>
  );
};
