import { FormEvent, useEffect, useRef } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Preview from "../Preview";
import { useForm } from "../../hooks/useForm";
import { sendEmail } from "../../helpers/emailjs";

export const formData = {
  from: "",
  name: "",
  to: "",
  text: "",
};
function ScreenForm() {
  const { from, name, to, text, onInputChange } = useForm<typeof formData>(
    JSON.parse(localStorage.getItem("hugData") as string) || formData
  );

  const navigate = useNavigate();
  const btnPreview = useRef<HTMLButtonElement>(null);
  const btnEnviar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!localStorage.getItem("hugData")) {
      localStorage.setItem("hugData", JSON.stringify(formData));
    }
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: "Estás a punto de enviar un abrazo virtual.",
      text: "Solo tienes que confirmar",
      icon: "info",
      confirmButtonText: "Confirmar",
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const link = encodeURI(
          `${import.meta.env.VITE_HOST}/hug/card/${btoa(from || "Someone")}/${
            btoa(name || "Unknown")
          }/${btoa(text || "Empty")}`
        );
        btnPreview.current?.setAttribute("disabled", "true");
        btnEnviar.current?.setAttribute("disabled", "true");
        return sendEmail(name, to, link)
          .then((response) => {
            return response;
          },
          (error) => {
            Swal.fire({
              title:
                "Ocurrió un error, no podemos enviar el email.",
              icon: "error",
              confirmButtonText: "Ok",
              allowOutsideClick: false,
            });
            btnPreview.current?.removeAttribute("disabled");
            btnEnviar.current?.removeAttribute("disabled");
            throw new Error(error);
          })
          .catch(() => {
            Swal.fire({
              title:
                "Ocurrió un error, no podemos enviar el email.",
              icon: "error",
              confirmButtonText: "Ok",
              allowOutsideClick: false,
            });
            btnPreview.current?.removeAttribute("disabled");
            btnEnviar.current?.removeAttribute("disabled");
          });
      },
    }).then((result) => {
      if (result.value?.status === 200) {
        Swal.fire({
          title: "Tu abrazo ha sido enviado",
          icon: "success",
          confirmButtonText: "Ok",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            btnPreview.current?.removeAttribute("disabled");
            btnEnviar.current?.removeAttribute("disabled");
            localStorage.setItem("hugData", JSON.stringify(formData));
            window.location.reload();
          }
        });
      }
    });
  };

  const onClickNavigate = () => {
    navigate(
      `card/${btoa(from || "Someone")}/${btoa(name || "Unknown")}/${
        btoa(text || "Empty")
      }`
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h1 style={{ marginBottom: "1rem" }}>Virtual Hug</h1>
        <input
          id="form"
          name="from"
          onChange={onInputChange}
          value={from}
          placeholder='Tu nombre o si prefieres "Admirador Secreto"'
        />
        <input
          name="name"
          onChange={onInputChange}
          value={name}
          placeholder="A quién quieres abrazar"
        />
        <input
          name="to"
          type="email"
          onChange={onInputChange}
          value={to}
          placeholder="Su email para que reciba el abrazo"
        />
        <textarea
          name="text"
          onChange={onInputChange}
          value={text}
          placeholder="Escribe alguna dedicatoria"
        />
        <button ref={btnPreview} type="button" onClick={onClickNavigate}>
          Vista previa
        </button>
        <button ref={btnEnviar} type="submit">
          Enviar
        </button>
      </form>
      <Preview name={name} from={from} text={text} />
    </div>
  );
}

export default ScreenForm;
