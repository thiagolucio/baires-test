import './App.css';
import CardAlbum from './components/CardAlbum/CardAlbum';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Header />
      <div className="container container-cards">
        <div className="row">
          <CardAlbum />
        </div>
      </div>
    </>
  );
}

export default App;
