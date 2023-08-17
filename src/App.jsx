import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {

  const[buscarAuto, setBuscarAuto] = useState(false)
  
  let autos = [
    {id: 1,marca: "FIAT", modelo: "CRONOS", img: 'https://cronos.fiat.com.ar/content/dam/fiat/products/359/ahk/1/2023/page/hero.png'},
    {id: 2,marca: "RENAULT", modelo: "SANDERO", img: 'https://autotest.com.ar/wp-content/uploads/2022/10/Renault-Sandero-Brasil.jpg'},
    {id: 3,marca: "CHEVROLET", modelo: "CRUZE", img: 'https://autotest.com.ar/wp-content/uploads/2021/07/CHEVROLET-CRUZE-SPORT6-PORTADA.jpg'},
    {id: 4,marca: "TOYOTA", modelo: "ETIOS", img: 'https://www.infobae.com/new-resizer/dptGQXF7iPv_FiPmn_xrr-qTVZo=/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/K6CAZAD4GFGUBH3QMJJL77R64I'},
    {id: 5,marca: "PEUGEOT", modelo: "208", img: 'https://cdn.motor1.com/images/mgl/rK3Jor/s3/208-style-2023.jpg'}
  ]

  return (
    <>
      <h1>LM Automotores</h1>
      {autos.map((auto) => <Card key={auto.id} auto={auto} setBuscarAuto={setBuscarAuto}/>)}
      <h2>Contactanos</h2>
      <Form />
    </>
  )
}

export default App
