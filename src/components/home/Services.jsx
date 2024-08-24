export const Services = () => {
    return (
        <>
            <section id="services" className='max-w-7xl mx-5 md:mx-10 h-auto md:h-screen mb-6 '>
                <h1 className='text-[--text-primary] text-end text-3xl md:text-7xl font-bold mb-6'>Services</h1>
                <div className='md:grid grid-cols-2'>
                    <div className='m-auto space-y-2 md:space-y-4 '>
                        <article className='bg-[--bg-secondary] py-5 px-3  rounded-lg shadow-sm shadow-[--primary-color]'>
                            <div className='flex justify-evenly mb-5'>
                                <img className='size-12' src='\img\html_logo.svg' alt='' />
                                <img className='size-12' src='\img\css_logo.svg' alt='' />
                                <img className='size-12' src='\img\js_logo.svg' alt='' />
                                {/* <img className='size-12' src='\img\nodejs_logo.svg' alt='' /> */}
                            </div>

                            <h2 className='text-[--text-secondary] text-lg md:text-2xl font-bold mb-4'>Web Development</h2>
                            <p className='text-sm md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </article>

                        <article className='bg-[--bg-secondary]  py-5 px-3  rounded-lg shadow-sm shadow-[--primary-color]'>
                            <div className='flex justify-evenly mb-5'>
                                <img className='size-12' src='\img\react_logo.svg' alt='' />
                                <img className='size-12' src='\img\tailwindcss_logo.svg' alt='' />
                            </div>
                            <h2 className='text-[--text-secondary] text-lg md:text-2xl font-bold mb-4'>UI / UX Design</h2>
                            <p className='text-sm md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </article>

                        <article className='bg-[--bg-secondary] py-5 px-3  rounded-lg shadow-sm shadow-[--primary-color]'>
                            <div className='flex justify-evenly mb-5'>
                                <img className='size-12' src='\img\python_logo.svg' alt='' />
                                <img className='size-12' src='\img\qt_logo.svg' alt='' />
                            </div>
                            <h2 className='text-[--text-secondary] text-lg md:text-2xl font-bold mb-4'>Desktop Development</h2>
                            <p className='text-sm md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </article>
                    </div>
                    <div className='m-auto'>
                        <img className='hidden md:block md:w-[400px] md:h-[400px] w-[300px]' src='/img/raul_memoji_3.png' alt='' />
                    </div>
                </div>
            </section>
        </>
    );
};
