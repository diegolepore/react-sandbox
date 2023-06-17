import React from 'react'
import { getImageUrl } from '../utils';

// https://react.dev/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop
const Avatar = ({ person, size = 100 }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export default Avatar