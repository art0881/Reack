import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Aside from './components/aside/aside';
import Profile from './components/profile/profile';

const App = () => {
  return(
    <div className="App">
    <div className='content'>
    <Header />
      <div className='flex_block'>
      <Aside />
     <Profile />
      </div>
     </div>
    </div>
  )
}

export default App;
