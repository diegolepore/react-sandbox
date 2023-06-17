import React from 'react'

function Item({ name, isPacked }) {

  // SOLUTION 3
  return (
    <li>
      {name} {isPacked && '✓'}
    </li>
  )

  // SOLUTION 2
  // return (
  //   <li className='name'>
  //     { isPacked ? (
  //       <del>
  //         {`${name} ✓`}
  //       </del>
  //     ):(  
  //       name 
  //     )}
  //   </li>
  // )

  // SOLUTION 1
  // if(isPacked) {
  //   // return <li className='name'> {name} ✓ </li>
  //   return null
  // }
  // return <li className='name'> {name} </li>
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

export default PackingList