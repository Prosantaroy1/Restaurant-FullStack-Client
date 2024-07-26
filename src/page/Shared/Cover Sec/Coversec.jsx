
const Coversec = ({img,title}) => {
    return (
        <div>
            <div
                className="hero h-1/4 mb-11"
               >
                <div className="hero-overlay bg-opacity-60"></div>
                <img src={img} alt="" className="bg-opacity-5"/>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coversec;