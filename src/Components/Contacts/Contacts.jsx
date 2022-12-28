import { useForm } from "react-hook-form";
import './contacts.css'

const Contactanos = () => {

    const { register, formState: { errors },handleSubmit } = useForm({
        defaultValues: {
            nombre: '',
            direccion: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return <div>
        <h1 className="Form">Formulario</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 20
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 20 caracteres</p>}
            </div>
            <div>
                <label>Dirección</label>
                <input type="text" {...register('direccion', {
                    required: true
                })} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div>
                <label>Mascota</label>
                <select {...register('Mascota')}>
                    <option value="Dog">Perro</option>
                    <option value="Cat">Gato</option>
                </select>
            </div>
            <div>
                <label>Cuentanos</label>
                <input type="text"{...register('Cuentanos', {
                    required: true,
                })} />
                    {errors.nombre?.type === 'required' && <p>El campo cuentanos es requerido</p>}
            </div>
        
            
          
            <input type="submit" value="Enviar Whatsapp" />
        </form>
    </div>
}

export default Contactanos;