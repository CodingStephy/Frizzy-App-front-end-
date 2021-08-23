import React from 'react'
import { Route, Link, Switch } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const Button = () => {
    return(
        <div className = "menubutton">
        <Link to ='/drinks'>
            <button className ='drinks'>
                <AiOutlineArrowRight />
            </button>
        </Link>
        <Link to ='/icecream'>
            <button className ='drinks'>
            <AiOutlineArrowRight />
            </button>
        </Link>
        <Link to ='/ice'>
            <button className ='drinks'>
            <AiOutlineArrowRight className = 'icearrow'/>
            </button>
        </Link>
        <Link to ='/popsicles'>
            <button className ='drinks'>
            <AiOutlineArrowRight />
            </button>
        </Link>
        </div>
    )
}

export default Button