const SearchBanner = () => {
    return (
            <section className="w-full text-center flex justify-center items-center">
                <div
                    className="w-full h-[520px] bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
                >
                    <div>
                        <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
                            Discover Your New Home
                        </h1>
                    </div>
                    <div className="w-full border-8 border-red-700 flex items-center justify-center text-center">
                        <form className="text-center flex items-center justify-center">
                            <div className="xl:w-1/2 border-8 border-blue-500 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%]  flex gap-2 md:mt-6 xs:mt-4 mx-4">
                                <input
                                    type="text"
                                    className="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
                                    placeholder=""
                                />
                                <button
                                    type="submit"
                                    className="px-[10px] p-[10px] bg-blue-500 text-lg text-white rounded-md font-semibold"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
    );
};

export default SearchBanner;
