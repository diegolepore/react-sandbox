import React from 'react';
import Button from './components/Button';
import TodoList from './components/TodoList';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import PackingList from './components/PackingList';

function App() {

  const hedyProps = {
    person: { 
      name: 'Hedy Lamarr',
      imageId: 'yXOvdOS'
    },
    size: 200
  }

  return (
    <div>
      <h1>Hello, world!! 😃</h1>

      <PackingList />
      
      <Gallery />
      
      {/* <Profile /> */}

      {/* <Button /> */}
      
      {/* <TodoList /> */}

      {/* https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax */}
      {/* <Avatar
       {...hedyProps}
      />
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      /> */}
    </div>
  );
}

export default App;
