

// eslint-disable-next-line react/prop-types
const TitleSec = ({title, subtitle}) => {
    return (
        <div className="flex justify-center items-center flex-col pb-6 space-y-3">
            <h4 className="underline text-orange-300 underline-offset-8">----{subtitle}-----</h4>
            <h2 className="text-2xl font-bold underline underline-offset-8">{title}</h2>
        </div>
    );
};

export default TitleSec;