import React, { useState } from 'react';
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'

const Project = () => {
    return (
        <section id="Project" className="h-screen flex flex-col justify-center items-center bg-white">
            <div> 
                <h2 className='sm:text-5xl font-bold text-yellow-300 mb-2'>Project</h2> 
            </div>
           <div className='grid gap-2 md:grid-cols-2 lg:px-2'>
             <div id="1">
                <img src={Project1} className='w-72' alt="Desain ui/ux" />
             </div>
             <div id="2">
                 <img src={Project2} className='w-80' alt="Portofolio" />
                </div>
           </div>
            <p className='text-center text-pink-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero totam, perferendis esse deserunt nihil, iure repudiandae ratione provident consectetur ipsa dolores dolorem ex maiores minima corporis vel asperiores incidunt nesciunt?</p>
        </section>

    );
};
export default Project;