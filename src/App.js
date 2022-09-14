import './App.css';
import CompartilheComponent from './components/compartilhe/CompartilheComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import ListComponent from './components/listaDeProdutos/ListComponent';
import MainComponent from './components/main/MainComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <ListComponent />
      <CompartilheComponent/>
    </div>
  );
}

export default App;
