import React from "react"
//Get access to props from the nearest route (BurgerBuilder)
import {withRouter} from "react-router-dom"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients! </p>
    }
    return (
        <div className={"burger"}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default withRouter(burger)