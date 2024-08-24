export const Header = () => {
    return (
        <>
            <header className='max-w-7xl px-5 flex justify-between md:justify-evenly py-4 md:py-6  bg-[--bg-primary-b] mb-6 md:md-0'>
                {/* <h1 className='text-2xl font-black text-[--bg-primary-w] text-center content-center w-10 h-10 rounded-lg bg-[--primary-color] cursor-pointer hover:text-[--bg-secondary-w]'>12</h1> */}
                <a href="/"><img className='rounded-lg size-9 cursor-pointer' src='\img\12_logo.svg' alt='' /></a>
                
                <nav className='content-center'>
                    <ol className='flex cursor-pointer gap-5'>
                        <li className='text-sm md:text-md  hover:border-b-[--text-primary] border-b-2 border-b-[--bg-primary]'><a href="#services">Services</a></li>
                        <li className='text-sm md:text-md hover:border-b-[--text-primary] border-b-2 border-b-[--bg-primary]  '><a href="#projects">Projects</a></li>
                        <li className='text-sm md:text-md hover:border-b-[--text-primary] border-b-2 border-b-[--bg-primary]  '><a href="#about">About</a></li>
                    </ol>
                </nav>
            </header>
        </>
    );
};
