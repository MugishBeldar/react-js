import React from 'react'

function ErrorInComponent({name}) {
    if(name === 'joker') {
        throw new Error('not a hero!');
    }
  return (
    <div>{name}</div>
  )
}

export default ErrorInComponent