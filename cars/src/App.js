import logo from './logo.svg';
import './App.css';
import Pics from './components/Pics.js'
import Cor from './components/Cor';

function App() {
  return (
    <>
      <div> <Pics /> </div>
      <div className='w-1/2 m-auto h-screen'><Cor /></div>
    </>
  );
}

export default App;
