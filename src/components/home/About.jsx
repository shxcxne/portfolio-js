export const About = () => {
    return (
        <>
            <section id="about" className="max-w-7xl h-auto md:h-screen  content-center mx-5 md:mx-10 mb-6">
                <h1  className="text-3xl md:text-7xl font-bold mb-6">About</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 w-auto ">
                    <div className="m-auto">
                        <img className="hidden md:block md:w-[400px] md:h-[400px] w-[300px] bg-[--primary-color] rounded-full" src="\img\raul_memoji_1.png" alt="" />
                    </div>

                    <div className="grid grid-cols-2 col-span-2 md:px-6 m-auto gap-2 md:gap-4">
                        <article className="n bg-[--bg-secondary] py-5 px-3 rounded-lg shadow-sm shadow-[--primary-color] ">
                            <h2 className="text-[--text-secondary] text-center text-lg md:text-2xl font-bold mb-4">Education</h2>
                            <p className="text-sm md:text-lg text-center">Bachelor’s degree in computer systems from the institute technological of Durango.
                            </p>
                        </article>
                        <article className="bg-[--bg-secondary] py-5 px-3 rounded-lg shadow-sm shadow-[--primary-color]">
                            <h2 className="text-[--text-secondary] text-center text-lg md:text-2xl font-bold mb-4">Sports</h2>
                            <p className="text-sm md:text-lg text-center">Field hockey player with over 10 national and international medals.</p> </article>
                        <article className="bg-[--bg-secondary] py-5 px-3 rounded-lg shadow-sm shadow-[--primary-color]">
                            <h2 className="text-[--text-secondary] text-center text-lg md:text-2xl font-bold mb-4">Hobbies</h2>
                            <p className="text-sm md:text-lg text-center">Developing software, gym and movies are some of the things I enjoy the most.</p> </article>
                        <article className="bg-[--bg-secondary] py-5 px-3 rounded-lg shadow-sm shadow-[--primary-color]">
                            <h2 className="text-[--text-secondary] text-center text-lg md:text-2xl font-bold mb-4">Principles</h2>
                            <p className="text-sm md:text-lg text-center">Responsibility, respect, and discipline are values that are indispensable in my work.</p> </article>
                    </div>
                </div>
            </section>
            
        </>
    )
}
