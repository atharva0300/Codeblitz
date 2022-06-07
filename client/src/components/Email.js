import React from 'react'
import {motion} from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Email({displayEmail}) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i6mq4ir', 'template_tt2ypdt', form.current, 'P6quofFcSWoHzUXH3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

  
    return (
      <div>
         {displayEmail && <motion.div 
          className='email bg-black rounded-3xl opacity-90'
          animate = {{
              x : -250,
              y : -250
          }}

          initial = {{
              x : -250,
              y : 0
          }}

          transition = {{
              type : "spring"
          }}
         >
             <form ref = {form} className='flex flex-col justify-around mt-12' onSubmit={(e) => sendEmail(e)}>
                 <label className = "text-white self-center">Full Name : </label>
                 <input type = "text" className = "self-center w-2/3 h-8" placeholder='Enter you full name here...' name  = "name" />
                <br/>
                 <label className = "text-white self-center">Email id : </label>
                 <input type = "email" className = "self-center w-2/3 h-8" placeholder='Enter you email here...' />
                    <br/>
                 <label className = "text-white self-center">Message : </label>
                 <input className = "self-center w-2/3 h-32" type = "text" placeholder='Enter message here...' name = "message" />
                 <br/>
                 <button type = "submit" className='w-36 h-16 text-xl rounded-3xl text-white bg-fuchsia-500 self-center'>Send Email</button>
             </form>

             </motion.div>}
     </div>
    )
}

export default Email