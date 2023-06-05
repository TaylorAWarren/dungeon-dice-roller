import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import TeamBuilderPage from './components/TeamBuilderPage';
import CharacterSheetPage from './components/CharacterSheetPage';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/teambuilder" element={<TeamBuilderPage />} />
          <Route path="/CharacterSheet" element={<CharacterSheetPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

//This is inline css referenced above
const styles = {
  body: {
    height: "500px",
    backgroundColor: "magenta"
  }
}
