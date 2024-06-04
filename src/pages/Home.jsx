import CoffeeSection from "../components/HistorySection/CoffeeSection";
import HistorySection from "../components/HistorySection/HistorySection";
import HeroSection from "../components/Home/HeroSection";
import Partners from "../components/Partners/Partners";
import SpacialMenu from "../components/SpacialMenu/SpacialMenu";



const Home = () => {
    return (
        <div className="bg-primary ">
            <HeroSection/>
            <CoffeeSection/>
            <HistorySection/>
            <Partners/>
            <SpacialMenu/>
        </div>
    );
};

export default Home;