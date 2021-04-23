import React from "react"

const order = (props) => {

    const ingredients = []
    for (let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount :props.ingredients[ingredientName]})
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span key={ig.name} style={{textTransform: "capitalize", display: "inline-block", margin: "0 8px", border: "1px solid #ccc", padding: "5px"}}> {ig.name} ({ig.amount})</span>
    })

    // LOGIC USED IN BURGER WORKS ASWELL

    // let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
    //     return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
    //         return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
    //     })
    // })
    // .reduce((arr, el) => {
    //     return arr.concat(el)
    // }, [])

    return  (
    <div className={"order"}>
        <p> Ingredients: {ingredientOutput}</p>
        <p> Price: <strong> USD$ {Number.parseFloat(props.totalPrice).toFixed(2)}</strong></p>
    </div>
    )
}

export default order