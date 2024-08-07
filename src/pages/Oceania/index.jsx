import style from './Oceania.module.css'
import { useEffect, useState } from 'react'
import Card from '../../components/Cards'

function oceania(){

    const [ continentes, setContinentes] = useState([])

    useEffect(() => {
        const buscarContinente = async () => {
            const response = await fetch('./paises.json')
            const data = await response.json()
            setContinentes(data)
        }
        buscarContinente()
    }, [])

    let continenteFiltrado = continentes.filter( pais => pais.region == "Oceania")

    return(
        <>
        
        <section className={style.div}>
                {
                    continenteFiltrado.map((paises) => (
                        <Card 
                            key={paises.numericCode}
                            name={paises.name}
                            capital={paises.capital}
                            population={paises.population}
                            flags={paises.flags.png}
                        />
                    ))
                }
            </section>
        
        </>
        
    )
   
}
export default oceania