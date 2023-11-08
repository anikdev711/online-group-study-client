

const Featured = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row gap-20">
                        <img src="https://i.imgur.com/FT7RRqT.png" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold mb-10">Meet, discuss and <br /> study in online</h1>
                            <ul className="list-disc">
                                <li>Group discussion</li>
                                <li>Practice tasks</li>
                                <li>Assignments</li>
                                <li>Learn from mistakes</li>
                                <li>Online study materials</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;