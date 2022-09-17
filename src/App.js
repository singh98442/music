import './App.css';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App bg-gray-500">
     <Header/>
     <Hero/>
     <Experience/>
    </div>
  );
}

export default App;
