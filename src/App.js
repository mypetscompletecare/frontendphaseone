import './App.css';
import Header from './components/header';
import AboutSections from './pages/AboutSections';
import BestSeller from './pages/BestSeller';
import DisplayBannerWithMsg from './pages/DisplayBannerWithMsg';
import Footer from './pages/Footer';
import SliderSection from './pages/SliderSection';
import TopCategories from './pages/TopCategories';

function App() {
  return (
    <div className="container">
      <Header />
      <SliderSection />
      <TopCategories />
      <AboutSections />
      <BestSeller />
      <DisplayBannerWithMsg />
      <Footer />
    </div>
  );
}

export default App;
