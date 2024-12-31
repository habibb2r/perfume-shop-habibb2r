

const SectionTitle = ({title}) => {
    return (
        <div className="w-full flex justify-center items-center">
            <h1 className="font-myfont md:font-title font-semibold text-xl md:text-4xl text-center md:w-1/4">{title}</h1>
        </div>
    );
};

export default SectionTitle;