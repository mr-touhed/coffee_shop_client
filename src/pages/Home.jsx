import CoffeeSection from "../components/HistorySection/CoffeeSection";
import HistorySection from "../components/HistorySection/HistorySection";
import Partners from "../components/Partners/Partners";
import SpacialMenu from "../components/SpacialMenu/SpacialMenu";



const Home = () => {
    return (
        <div className="bg-primary ">
            
            <CoffeeSection/>
            <HistorySection/>
            <Partners/>
            <SpacialMenu/>
        </div>
    );
};

export default Home;