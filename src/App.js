import './App.scss';

import 'bootstrap/dist/js/bootstrap.bundle';

import Header from './components/Header';
import Footer from './components/Footer';
import WeatherForcast from './components/WeatherForcast';
import WeatherContextProvider from './contexts/WeatherContext';

function App() {
  return (
    <div className="App bg-light">
      <WeatherContextProvider>
        <Header />
        <WeatherForcast />
        <Footer />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
