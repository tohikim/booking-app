import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter style={{
      fontFamily:'Arial'
    }}>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
