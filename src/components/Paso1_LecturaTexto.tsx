const PASO1_Lectura_Texto = (props: any) => {
  const enviarTexto = () => {
    const textarea = document.querySelector("textarea");
    if (textarea != null) {
      if (textarea.value == "") {
        alert("No hay ningún texto ingresado");
        props.setTexto("");
      } else {
        alert("Texto ingresado correctamente");
        props.setTexto(textarea.value);
      }
    }
    console.log(props.texto);
  };
  const validarExtension = async () => {
    const archivoInput = document.querySelector("input");
    const archivoRuta: any = archivoInput?.value;
    const extPermitidas = /(.txt)$/i;

    if (!extPermitidas.exec(archivoRuta)) {
      alert("Asegúrate de haber seleccionado un archivo .txt");
    } else {
      if (archivoInput?.files && archivoInput.files[0]) {
        const archivo = archivoInput.files[0];
        const contenido = await archivo.text();
        const textarea = document.querySelector("textarea");
        if (textarea != null) textarea.value = contenido;
      }
    }
  };

  return (
    <>
      <h2>PASO 1: Selección de texto</h2>
      <p>
        Puedes ingresar el texto seleccionando un archivo de texto o puedes
        ingresarlo manualmente y darle click al botón de ingresar texto
      </p>
      <hr />
      <div className="Ingreso_Texto">
        <div className="Seleccionar_Archivo">
          <label htmlFor="archivo" className="labelInputFile">
            <span className="material-symbols-outlined">upload_file</span>
            Elija un archivo de texto
          </label>
          <input
            type="file"
            name="archivo"
            id="archivo"
            onChange={() => validarExtension()}
          />
        </div>
        <div className="Textarea_Texto">
          <textarea
            className="TextArea"
            placeholder="INGRESAR TEXTO AQUÍ"
            required
          ></textarea>
        </div>
        <div className="btn_IngresarTexto" onClick={() => enviarTexto()}>
          Ingresar Texto
        </div>
      </div>
      <hr />
    </>
  );
};
export default PASO1_Lectura_Texto;
