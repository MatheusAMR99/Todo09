import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import ListComponent from './components/listaDeProdutos/ListComponent';
import MainComponent from './components/main/MainComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <ListComponent />
    </div>
  );
}

export default App;
