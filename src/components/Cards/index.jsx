import style from './Cards.module.css'

function CardPais({name, capital, population, flags}){
    return(
        <div className={style.container}>

            <img src={flags} alt="" className={style.img}/>
            <p>País: {name}</p>
            <p>Capital: {capital}</p>
            <p>População: {population}</p>
            
        </div>
    )
}
export default CardPais