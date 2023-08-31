/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import DateFormatter from './DateFormatter'

const Header = ({ data }) => {
    console.log({data})
    return (
        <div>
            <h1 className='header'>{data.welcome}</h1>
            <h2 className='headerMeta'>{data.title}. It is {data.subtitle}</h2>
            <img src={data.profile}/>
            <h2><span>Author : {data.author.firstName} {data.author.lastName},  Date:  </span>  
            <DateFormatter data={data} /></h2>

            <p>
                React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook.
            </p>

        </div>
    )
}

export default Header