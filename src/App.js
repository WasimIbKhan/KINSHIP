import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Body from './components/Body'
function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
