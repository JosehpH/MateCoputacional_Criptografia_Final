import data from '../assets/integrantes.json'
import '../styles/MiembrosEquipo.css'
function Integrante(props: any) {
   const integrante = (
     <div className="contenedorIntegrante">
       <img alt="Persona" className="imagenIntegrante" src={props.imagen}></img>
       <div className="contenedorTexto">
         <b>
           <p className="nombre-integrante">{props.nombre}</p>
         </b>
         <b>
           <p className="carrera-integrante">{props.carrera}</p>
         </b>
         <p className="texto-integrante">"{props.testimonio}"</p>
       </div>
     </div>
   );

   return integrante;
}

function MiembrosEquipo() {
    return (
      <div className="Miembros">
        { data.map((integrante) => {
          return (
            <Integrante
              key={Math.random()}
              nombre={integrante.nombres + ", " + integrante.apellidos}
              imagen={integrante.url_foto}
              testimonio={integrante.descripcion}
              carrera={integrante.carrera}
            />
          );
        })}
      </div>
    );

}
export default MiembrosEquipo;