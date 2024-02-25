import logo from './logo.svg';
import './App.css';
import GlobalContext from './context/GlobalContext';
import List from './Components/List';



function App() {
  return (
    <GlobalContext>
      <List/>
    </GlobalContext>
  );
}

export default App;
