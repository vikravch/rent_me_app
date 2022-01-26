import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import ToDo from "./components/ToDo";

function App() {
  return (
    <>
      <Header/>
      <MainBody/>
      <Footer/>
        <ToDo  />
    </>
  );
}

export default App;
