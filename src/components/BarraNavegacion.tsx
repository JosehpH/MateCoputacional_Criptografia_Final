import logo from "../assets/upcLogo.png";
import "../styles/BarraNavegacion.css";

function BarraNavegacion({ pos, setPos }: any) {
  const estiloBoton = "btn_barra";
  const marcado = " btn_marcado";

  //Botones de navegación
  const BotonNavegacion = (props: any): JSX.Element => {
    return (
      <div
        className={
          pos == props.posicionBoton ? estiloBoton + marcado : estiloBoton
        }
        onClick={() => {
          setPos(props.posicionBoton);
        }}
      >
        {props.children}
      </div>
    );
  };
  const toggleMenu = () => {
    const barra = document.querySelector('.nav-links');
    barra?.classList.toggle('show');
  }
  return (
    <div className="barraNavegacion">
      <img src={logo} alt="logoUpc" className="logo" />

    <div className="nav-links">
      <BotonNavegacion posicionBoton={1}>
        <span className="material-symbols-outlined">home</span> Inicio
      </BotonNavegacion>

      <BotonNavegacion posicionBoton={2}>
        <span className="material-symbols-outlined">play_arrow</span> Proyecto
      </BotonNavegacion>

      <BotonNavegacion posicionBoton={3}>
        <span className="material-symbols-outlined">groups</span> Miembros del
        equipo
      </BotonNavegacion>
      </div>
      <div className="hamburguer" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
}

export default BarraNavegacion;
