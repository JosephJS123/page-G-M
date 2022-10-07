import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import wsp from "../../img/whatsapp.png";
import "./Contact.css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [alert, setAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if ([name, email, message].includes("")) {
      setDone(false);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    }

    emailjs
      .sendForm(
        "service_5fhhght",
        "template_8ymg4kq",
        form.current,
        "0mPvN3KjKQkM4BZNX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(() => {
      setDone(false);
    }, 5000);
    setName("");
    setEmail("");
    setMessage("");
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color : darkMode ? "white" : ""}}>Estamos disponibles</span>
          <span>Contáctenos</span>
          <div
            className="blur s-blur1"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>

        <div className="wsp">
        <a href="https://wa.me/51924961674" target="_blank" rel="noreferrer">
          <img src={wsp} alt="whatsapp" width={60} height={60} />
        </a>
        <span>👈</span>
      </div>
      </div>
      
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Su nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Hola, quisiera contratar sus servicios de show y decoración."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="ENVIAR CORREO" className="button" />
          <span>{alert && "Hubo un error, complete todos los campos!"}</span>
          <span>
            {done &&
              "Mensaje enviado correctamente!, nos pondremos en contacto con usted."}
          </span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
