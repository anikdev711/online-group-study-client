

const Faq = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-20 mb-10">FAQ</h1>
            <div className="max-w-[1200px] mx-auto">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        How can I join the online study group?
                    </div>
                    <div className="collapse-content">
                        <p>You can go to the registration page and register at first. Then you will be able to see our features.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What are the benefits?
                    </div>
                    <div className="collapse-content">
                        <p>You can do assignments and practice tasks. Other members of the group will review this and give marks and feedback</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Is the study group productive ?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can discuss with other members about study anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;