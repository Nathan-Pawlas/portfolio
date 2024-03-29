import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { RocketCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name,value } = e.target;

    setform({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs.send(
      'service_mrj1tlg', 
      'template_0i5rhio', 
      {
        from_name: form.name,
        to_name: 'Nathan',
        from_email: form.email,
        to_email: 'pawlasnr@gmail.com',
        message: form.message
      },
      '8wrnX3nD-KROWtcaI'
      ).then(() => {
        setloading(false);
        alert('Thank You! I will get back to you as soon as I can!');

        setform({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setloading(false);
        console.log(error);
        alert('Something Went Wrong, email me at pawlasnr@gmail.com');
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-rox flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 bg-opacity-30 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter Name Here'
              className='bg-tertiary bg-opacity-60 py-4 px-6 placeholder:text-[#242526] text-white 
              rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter Email Here'
              className='bg-tertiary bg-opacity-60 py-4 px-6 placeholder:text-[#242526] text-white 
              rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Enter Message Here'
              className='bg-tertiary bg-opacity-60 py-4 px-6 placeholder:text-[#242526] text-white 
              rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button 
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit 
            text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto h-[550px] sm:h-[350px]'
      >
      <div className='bg-hero-glob5 z-0 bg-contain bg-center bg-no-repeat h-[350px]'>
        <RocketCanvas />
      </div>
        
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact")