import React from 'react'

// Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that makes them impure!

/*
A component must be pure, meaning:
  * It minds its own business. It should not change any objects or variables that existed before rendering.
  * Same inputs, same output. Given the same inputs, a component should always return the same JSX.
*/

const StoryTrail = ({ stories }) => {

  // Copy the array!
  // const storiesToDisplay = stories.slice()
  const storiesToDisplay = [ ...stories ]

  // Does not affect the original array:
  storiesToDisplay.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {storiesToDisplay.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );

  // return (
  //   <ul>
  //     {stories.map(story => (
  //       <li key={story.id}>
  //         {story.label}
  //       </li>
  //     ))}
  //     <li>Create Story</li>
  //   </ul>
  // );
}

export default StoryTrail