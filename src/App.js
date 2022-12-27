// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './Component/Content';
import Footer from './Component/Footer';
import Header from './Component/Header';
import ProductSlider from "./Component/slider";
import StarRating from "./Component/submit";


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <ProductSlider/>
      <StarRating/>
      
      <Footer/>

    </div>
  );
}

export default App;
