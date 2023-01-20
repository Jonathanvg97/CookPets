import { useForm } from "react-hook-form";
import "./contacts.css";
import Footer from "../Footer/Footer";

const Contactanos = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      nombre: "",
      direccion: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="containerContact">
        <h1 className="Form">Formulario</h1>

        <div clasName="contIzq">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                {...register("nombre", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.nombre?.type === "required" && (
                <p>El campo nombre es requerido</p>
              )}
              {errors.nombre?.type === "maxLength" && (
                <p>El campo nombre debe tener menos de 20 caracteres</p>
              )}
            </div>
            <div>
              <label>Dirección</label>
              <input
                type="text"
                {...register("direccion", {
                  required: true,
                })}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                {...register("email", {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.email?.type === "pattern" && (
                <p>El formato del email es incorrecto</p>
              )}
            </div>
            <div>
              <label>Mascota</label>
              <select {...register("Mascota")}>
                <option value="Dog">Perro</option>
                <option value="Cat">Gato</option>
              </select>
            </div>
            <div>
              <label>Cuentanos</label>
              <input
                type="text"
                {...register("Cuentanos", {
                  required: true,
                })}
              />
              {errors.nombre?.type === "required" && (
                <p>El campo cuentanos es requerido</p>
              )}
            </div>

            <input type="submit" value="Enviar" />
          </form>
        </div>

        <div className="contDer"></div>

        <div class="direct-contact-container">
          <ul class="contact-list">
            <li class="list-item">
              <i class="fa fa-map-marker fa-2x">
                <span class="contact-text place">City, State</span>
              </i>
            </li>

            <li class="list-item">
              <i class="fa fa-phone fa-2x">
                <span class="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    (212) 555-2368
                  </a>
                </span>
              </i>
            </li>

            <li class="list-item">
              <i class="fa fa-envelope fa-2x">
                <span class="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    hitmeup@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <ul class="social-media-list">
            <li>
              <a href="https://www.instagram.com/_cookpets_/" target="blank">
                <i class="ri-instagram-line"></i>{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100076581402873"
                target="blank"
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=573108580916&text&type=phone_number&app_absent=0"
                target="blank"
              >
                <i class="ri-whatsapp-line"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contactanos;
