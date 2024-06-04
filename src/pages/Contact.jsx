import PageHeader from "../components/PageHeader";
import bg from "../images/video_bg.jpg"

const Contact = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`}} className="bg-cover bg-left bg-no-repeat">
            <PageHeader>
                        Contact Us
            </PageHeader>


            <section>
                            <div className="contact-form max-w-[700px] bg-[#ebe3e367] mx-auto border p-6 rounded-lg flex flex-col gap-6">
                                    <h5 className="fsz-30 mb-20"> Get In Touch. </h5>
                                    <div className="form-group">
                                        <label  className="fsz-14"> Your Name * </label>
                                        <input type="text" className="form-control w-full py-2 rounded-md" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label  className="fsz-14"> Your Mail * </label>
                                        <input type="text" className="form-control w-full py-2 rounded-md" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="fsz-14"> Phone * </label>
                                        <input type="text" className="form-control w-full py-2 rounded-md" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label  className="fsz-14"> Message </label>
                                        <textarea rows="3" className="form-control w-full py-2 rounded-md"></textarea>
                                    </div>
                                    <button href="#" className="btn w-full  size-1 hover-bg-black mt-50"> <span> Send A Message + </span> </button>
                                </div>
            </section>
        </div>
    );
};

export default Contact;