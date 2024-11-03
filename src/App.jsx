import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Header from './Components/Header/Header';
import Contact from './Components/Header/Contact';
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Main/Hero';
import Service from './Components/Main/Service';
import Count from './Components/Main/Count';
import Features from './Components/Main/Features';
import Appoinment from './Components/Main/Appoinment';
import FAQ from './Components/Main/FAQ';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
// import Support from './Components/Main/Support';
function App() {
    return <>
    <Header>
        <Contact></Contact>
        <Navbar></Navbar>
    </Header>
    <Main>
        <Hero></Hero>
        <Service></Service>
        <Count></Count>
        <Features></Features>
        <Appoinment></Appoinment>
        <FAQ></FAQ>
        {/* <Support></Support> */}
    </Main>
    <Footer></Footer>
    </>
}

export default App
