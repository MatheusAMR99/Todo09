import './App.css';
import CompartilheComponent from './components/compartilhe/CompartilheComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import ListComponent from './components/listaDeProdutos/ListComponent';
import MainComponent from './components/main/MainComponent';
import FooterComponents from './components/footer/FooterComponents';
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <ListComponent />
      <CompartilheComponent/>
      <FooterComponents/>
    </div>
  );
}

export default App;
