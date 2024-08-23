export const Hero = () => {
    return (
        <>
            <section className='max-w-7xl mx-5 content-center md:mx-10 h-auto md:h-screen  md:grid grid-cols-3 '>
                <div className='flex justify-center content-center mb-6 md:mb-0'>
                    <img className=' justify-center md:w-[400px] md:h-[400px] w-[250px] h-[250px] ' src='\img\raul_memoji_2.png' alt='logo' />
                </div>

                <div className='md:px-5 content-center text-center col-span-2'>
                    <h2 className='md:text-start text-lg md:text-3xl font-bold mb-4'>Engr. Raúl Calleros </h2>
                    <h1 className='text-[--text-secondary] text-3xl md:text-7xl font-bold mb-4 '>Software Developer</h1>
                    <p className='text-sm md:text-lg mb-4'>Durango, México</p>
                    <div className="flex justify-center md:justify-end gap-5">
                        <a href="https://www.instagram.com/rcllrhz/" target="_blank"><img className="size-9 bg-[--text-secondary] rounded-lg shadow-lg shadow-[--text-secondary] hover:-translate-y-1 hover:scale-110 " src="src\assets\img\instagram_icon.svg" alt="" /></a>
                        <a href="https://www.linkedin.com/in/raul-calleros-hdez/" target="_blank"><img className="size-9 bg-[--text-secondary] rounded-lg shadow-lg shadow-[--text-secondary] hover:-translate-y-1 hover:scale-110 " src="src\assets\img\linkedin_icon.svg" alt="" /></a>
                    </div>

                </div>
            </section >
        </>
    );
};
