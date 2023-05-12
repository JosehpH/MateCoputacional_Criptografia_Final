
import "../../styles/ArchivoSalida.css"
function ArchivoSalida(props: any) {
  const guardarArchivoDeTexto = (nombre: string) => {
      const a: any = document.querySelector("a");
      const contenido:string = props.texto;
      if (contenido.length == 0) {
        alert("No hay ningún texto para descargar");
        return;
      }
      const archivo = new Blob([contenido], { type: "text/plain" });
      const url = URL.createObjectURL(archivo);
      a.href = url;
      a.download = nombre;
      //a.click();
      //URL.revokeObjectURL(url);
    };
    return (
      <div className="cont_btnDescarga">
        <a
          className="btnDescarga"
          onClick={() => {
            guardarArchivoDeTexto(props.tipo);
          }}
        >
          Descargar .txt 
        </a>
      </div>
    );
}
export default ArchivoSalida;