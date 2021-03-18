import logo from './logo.svg';
import HomeTop from './components/HomeTop';
import Cases from './components/Cases';
import Footer from './components/Footer';
import './App.css';
import './media-queries.css';

function App() {
  return (
    <div className="App">
      <HomeTop />
      <Cases />
      <Footer />
    </div>
  );
}

export default App;
