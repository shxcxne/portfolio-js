export const Projects = () => {
    return (
        <>
            <section className='max-w-7xl h-auto md:h-screen content-center mx-5 md:mx-10 mb-6'>
                <h1 className='text-center text-3xl md:text-7xl font-bold mb-6'>Portfolio</h1>
                <div className='block md:grid grid-cols-3 md:gap-4'>
                    <article className='p-1 m-auto'>

                        <a href="https://gentle-speculoos-758125.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className=' rounded-lg hover:shadow-lg hover:shadow-[--text-secondary] hover:-translate-y-1 hover:scale-110  ' src='src\assets\img\guitar-screen.png' alt='' />
                        </a>

                    </article>
                    <article className='m-auto p-1'>
                        <a href="https://magical-valkyrie-0270ef.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className='object-fill rounded-lg hover:shadow-lg hover:shadow-[--text-secondary] hover:-translate-y-1 hover:scale-110 ' src='src\assets\img\calculadora-screen.png' alt='' />
                        </a>

                    </article>
                    <article className='m-auto p-1'>

                        <a href="https://www.google.com.mx/" target="_blank" rel="noopener noreferrer">
                            <img className=' rounded-lg  hover:shadow-lg hover:shadow-[--text-secondary] hover:-translate-y-1 hover:scale-110 ' src='src\assets\img\google_screen.png' alt='' />
                        </a>

                    </article>
                    <article className='hidden md:grid m-auto p-1'>
                        <a href=''>
                            <img className=' rounded-lg  hover:shadow-lg hover:shadow-[--text-secondary] hover:-translate-y-1 hover:scale-110 ' src='src\assets\img\google_screen.png' alt='' />
                        </a>
                    </article>
                    <article className='hidden md:grid m-auto p-1'>
                        <a href=''>
                            <img className=' rounded-lg  hover:shadow-lg hover:shadow-[--text-secondary] hover:-translate-y-1 hover:scale-110 ' src='src\assets\img\google_screen.png' alt='' />
                        </a>
                    </article>
                    <article className='hidden md:grid m-auto p-1'>
                        <a href=''>
                            <img className=' rounded-lg shadow-sm  hover:shadow-lg hover:shadow-[--text-secondary] hover:-translate-y-1 hover:scale-110 ' src='src\assets\img\google_screen.png' alt='' />
                        </a>
                    </article>
                </div>

            </section >
        </>
    );
};
