const Sips = ({liquid}) => {


    return(
        <div className="conteiner">
        <div className="conteiner-cards"> 
        <img src={liquid.strDrinkThumb} alt="" />
        <h1>{liquid.strDrink}</h1>
        <p>{liquid.strInstructions}</p>
        </div>
        </div>
       
    )
}

export default Sips