import React, { useState } from 'react';

const About = () => {
    return (
        <section id="About" className="h-screen flex flex-col justify-center items-center bg-pink-400">
         <div >  
            <h2 className='sm:text-5xl font-bold text-yellow-300 mb-2'>ABOUT ME</h2> 
         </div>
         <div>
           <p className='mt-2 text-white text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <b className='text-blue-300'>Nostrum, aspernatur dolorem quas deleniti possimus eligendi dolore labore vel tenetur delectus.</b> Praesentium nostrum quod laborum nobis ex rem delectus asperiores molestias? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat repudiandae eveniet, doloremque officia reprehenderit necessitatibus consequuntur velit dolorem. Quo unde pariatur quibusdam voluptatibus et minima ducimus ea voluptas architecto.</p>
         </div>
        </section>

    );
};
export default About;