import React from 'react'
import { getImageUrl } from '../utils';

const TodoList = () => {
  const description = 'Hedy Lamarr'

  const person = {
    name: 'Hedy Lamarr',
    imageId: 'yXOvdOS',
    imageSize: 's',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };

  return (
    <div style={ person.theme }>
      <h1>{ person.name }'s Todos</h1>
      <img 
        src={ getImageUrl(person) }
        alt={ description }
        className="photo"
      />
      
      {/* 
        - The next time you see {{ and }} in JSX, know that it’s nothing more than an object inside the JSX curlies! 
        - Inline style properties are written in camelCase. For example, HTML <ul style="background-color: black"> would be written as <ul style={{ backgroundColor: 'black' }}>  in your component.
      */}
      
      <ul style={{
        backgroundColor: '#000',
        color: 'pink',
      }}>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
      </ul>
    </div>
  )
}

export default TodoList