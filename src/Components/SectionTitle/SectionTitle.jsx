
const SectionTitle = ({headiing, subHeading}) => {
    return (
        <div className="mx-auto font-bold text-center md:w-4/12 my-8">
            <p className="mb-2  text-blue-900">--- {subHeading} ---</p>
            <h3 className="text-4xl border-y-4 py-4">{headiing}</h3>
        </div>
    );
};

export default SectionTitle; 