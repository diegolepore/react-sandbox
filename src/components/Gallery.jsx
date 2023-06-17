import React from 'react';
import { getImageUrl } from "../utils";


const profiles = [
  {
    name: 'Maria Skłodowska-Curie',
    imageId: 'szV5sdG',
    careerInfo: {
      profession: 'physicist and chemist',
      awards: [
        'Nobel Prize in Physics', 
        'Nobel Prize in Chemistry', 
        'Davy Medal', 
        'Matteucci Medal'
      ],
      discovered: 'Polonium (element)'
    }
  },
  {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    careerInfo: {
      profession: 'geochemist',
      awards: [
        'Miyake Prize for geochemistry', 
        'Tanaka Prize'
      ],
      discovered: 'A method for measuring carbon dioxide in sea water'
    }
  }
]

function Profile(props) {
  const name = props.name
  const careerInfo = props.careerInfo
  
  return(
    <section className="profile">
        <h2>{ name }</h2>
        <img
          className="avatar"
          src={getImageUrl(props)}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
          { careerInfo.profession }
          </li>
          <li>
            <b>Awards: { careerInfo.awards.length } </b> 
            (
              { careerInfo.awards.map(award => award) }
            )
          </li>
          <li>
            <b>Discovered: </b>
            { careerInfo.discovered }
          </li>
        </ul>
      </section>
  )
}

export default function Gallery() {
  // let regex = /chemist/i;
  let regex = /\bchemist\b/i;

  const chemists = profiles.filter(profile =>
    regex.test(profile.careerInfo.profession)
  );

  const listItems =  chemists.map( profile => (
    <li key={profile.imageId}><Profile {...profile}  /></li>
  ))

  return (
    <div>
      <h1>Notable Scientists</h1>
      <ul>{ listItems }</ul>
    </div>
  );
}
