import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useLanguage } from '../hooks'

export const ContactSection = () => {
  const {t} = useLanguage('global');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target,
        'YOUR_USER_ID'
      )
      .then(
        (response) => {
          console.log('Correo electrónico enviado con éxito:', response);
        },
        (error) => {
          console.error('Error al enviar el correo electrónico:', error);
        }
      );
  };
  return (
    <section id='contact' className='section-container min-h-screen bg-red-400 pt-16 md:pt-32'>

      <div className='flex flex-col items-center'>
        <h2 className='font-kanit font-semibold text-5xl md:text-6xl text-white'>{t("contact.title")}</h2>
      </div>

      <div className='w-full flex justify-center px-8 sm:px-0 mt-10 md:mt-20'>
        <form className='flex flex-col rounded-md w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 items-center py-8 md:px-16 bg-red-500 drop-shadow-lg' onSubmit={handleSubmit}>
          <div>
            <h3 className='text-white text-3xl font-kanit mb-5'>{t('contact.email')}</h3>
          </div>
          <input
            className='w-11/12 my-3 text-xl p-2 font-kanit font-light rounded-md'
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='w-11/12 my-3 text-xl p-2 font-kanit font-light rounded-md'
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className='w-11/12 my-3 text-xl p-2 font-kanit font-light rounded-md'
            type="text"
            name="subject"
            placeholder="Asunto"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            className='w-11/12 my-3 text-xl p-2 font-kanit font-light rounded-md resize-none h-40'
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit"
            className=''
          >
            Enviar Correo
            </button>
        </form>
      </div>

    </section>
  )
}
