import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
      
      
    </div>
  );
}
// making component 
function LoadComments() {
  // state declaration 1.
  const [comments, setComments] = useState([]);
  // use effect kuse kora 2.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h2> comments: {comments.length}</h2>
      {/* show the comments 3: */}
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
     
    </div>
  )

}

function Comment(props) {
  return (
    <div>
      <h4>email: {props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}
useEffect(() => {}, [])


function Counter() {
  const [count, setCount] = useState(5);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div style={myStyle}>
      <h1>Counter: <span style={{color: 'red'}}>{count}</span></h1>
      <button className='button-design' onClick={handleIncrease}>Increase</button>
      <button className='button-design' onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
const myStyle= {backgroundColor: 'hotpink'}

export default App;
      