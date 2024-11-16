import React, { useState } from 'react';
import Foto from '../assets/foto.jpg'

const Hero = () => {
    return (
        <section id="Hero" className="h-screen flex flex-col sm:flex-row justify-center sm:justify-start items-center bg-white px-8">
              <div className="sm:w-1/2">
                 <h2 className= 'font-semibold text-yellow-500'>Hello Everyone I'ts Me!</h2>
                 <h1 className= 'sm:text-5xl font-bold text-pink-500'>NISA ARDILA</h1>
                 <h3 className= 'mt-1 text-pink-400 font-bold'> And I'm a UI/UX Designer </h3>
                 <p className='mt-4 text-pink-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur atque fugit quidem laborum consectetur, exercitationem architecto quis repudiandae? Laudantium sequi tempora rem ipsum atque? Nobis doloremque itaque fuga dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore. Porro, recusandae natus vero quas ipsam, eius laborum est a dignissimos in sapiente ex quibusdam deleniti, sed temporibus corporis voluptatem.</p>
                </div>

                <div className="flex justify-center sm:w-1/2 mt-6 sm:mt-0">
                 <img src={Foto} className='w-64 sm:w-48 lg:w-64' alt="Foto" />
                </div>


        </section>

    );
};
export default Hero;