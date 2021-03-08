import React from "react"

const burgerIngredient = ( props ) => {
    let ingredient = null;

    switch (props.type) {
        case ("bread-bottom"):
            ingredient = <div className={"breadBottom"}/>
            break
        case("bread-top"):
            ingredient = (
                            <div className={"breadTop"}>
                                <div className={seeds1}/>
                                <div className={seeds2}/>
                            </div>
                        )
            break
        case("meat"):
            ingredient = <div className={"meat"}/>
            break
        case("cheese"):
            ingredient = <div className={"cheese"}/>
            break
        case("salad"):
            ingredient = <div className={"salad"}/>
            break
        case("bacon"):
            ingredient = <div className={"bacon"}/>
            break
        default:
            let ingredient = null;
    }

    return ingredient
}

export default burgerIngredient