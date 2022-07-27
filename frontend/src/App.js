
import { Route } from 'react-router-dom';
import './App.css';
import home from './pages/home';
import ChatPage from './pages/ChatPage';


function App() {
  return (
   <div className='App'>
   <Route  exact path="/" component={home}/>
   <Route exact path="/chats" component={ChatPage}/>
   </div>
  );
}

export default App;
