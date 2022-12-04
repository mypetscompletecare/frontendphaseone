import './App.css';
import Header from './components/header';
import AboutSections from './pages/AboutSections';
import BestSeller from './pages/BestSeller';
import Footer from './pages/Footer';
import PopularBrandsSection from './pages/PopularBrandsSection';
import PuppyOrKittenSection from './pages/PuppyOrKittenSection';
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
      <PuppyOrKittenSection />
      <PopularBrandsSection />
      <Footer />
    </div>
  );
}

export default App;
