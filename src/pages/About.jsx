import PageHeader from "../components/PageHeader";
import img1 from "../images/ab1.jpg"
import img2 from "../images/ab2.jpg"

const About = () => {
    return (
        <div>
            <PageHeader>
                About Us
            </PageHeader>

            <section className="md:flex gap-2 p-4 text-gray-200">
                    <div className="max-w-[900px] space-y-6">
                        <h2 className="text-6xl">Certified Restfolio Restaurant Brand Since 1997</h2>
                        <div className="md:flex gap-2">
                            <div>
                                <p>Donec maximus ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea dictumst. esent consequat mauris nec pulvinar tristique. Fusce laoreet orci euismod tincidunt tincidunt. Nam sit amet consequat massa. Cras condimentum, urna vel commodo volutpat, orci libero placerat dolor, non tincidunt.</p>
                                <p>Donec maximus ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea. Praesent consequat mauris nec pulvinar.</p>
                            </div>
                            <img src={img1} alt="" className="max-w-[400px]"/>
                        </div>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
            </section>
        </div>
    );
};

export default About;