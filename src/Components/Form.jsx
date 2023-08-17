import { useState } from "react"

const Form = () => {

    const [cliente, setCliente] = useState(
        {
            nombre: "",
            telefono:"",
            email: ""
        }
    )

    const [show, setShow] = useState(false)
    const [error,setError] = useState(false)

    const handdleSubmit = () => {

        if(cliente.nombre.length > 3 && cliente.email.length > 6 && cliente.telefono.length > 10){
            setShow(true)
            setError(false)
        }
        else{
            setError(true)
        }
    }

  return (
    <div>
        <input type="text" placeholder="Nombre" value={cliente.nombre} onChange={(event)=>setCliente({...cliente, nombre:event.target.value})}/>
        <br />
        <input type="text" placeholder="Telefono" value={cliente.telefono} onChange={(event)=>setCliente({...cliente, telefono:event.target.value})}/>
        <br />
        <input type="email" placeholder="Correo Electronico" value={cliente.email} onChange={(event)=>setCliente({...cliente, email:event.target.value})}/>
        <br />
        <button onClick={handdleSubmit}>Enviar</button>
        {show && <h3>Recibimos tus datos, un asesor te contactara</h3>}
        {error && <h4 style={{color:'red'}}>Porfavor, chequea que la informacion sea correcta</h4>}
    </div>
  )
}

export default Form