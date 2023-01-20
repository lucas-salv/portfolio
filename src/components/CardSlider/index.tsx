import React, { PropsWithChildren } from "react"
import { CardSlider } from "./styles"

export default ({ children}:PropsWithChildren<{}>) => {
    return (
        <CardSlider>
            <div className="cardContainer">
                {children}
            </div>
        </CardSlider>
    )
}