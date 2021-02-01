import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useState , useEffect} from 'react';
function App() {
  const [like , setLike] = useState('');
  const [users , setUsers] = useState([]);
  const [single , setSingle]  = useState({});
  useEffect(()=>{
                         fetch('https://jsonplaceholder.typicode.com/users')
                         .then(res=>res.json())
                         .then(data=>setUsers(data))

                         fetch('https://jsonplaceholder.typicode.com/users/1')
                         .then(res=>res.json())
                         .then(data=> setSingle(data))

  } , [])
  return (
    <div className="App">
     
     <ThumbUpAltIcon onClick = {()=>setLike(like ? '' : 'primary')} color = {like}></ThumbUpAltIcon>
     <h4>Name : {single.name}</h4>
     {
       users.map(user => <li>{user.name}</li>)
     }
    </div>
  );
}

export default App;
