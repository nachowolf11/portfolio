import { useContactForm, useLanguage } from '../hooks'
import { BarLoader } from 'react-spinners';
import ReCAPTCHA from "react-google-recaptcha";

export const ContactSection = () => {
  const {t} = useLanguage('global');

  const { formData, handleChange, handleSubmit, isLoading, recaptchaRef, isSubmitted } = useContactForm();
  return (
    <section id='contact' className='section-container min-h-screen bg-red-400 pt-16 md:pt-32'>

      <div className='flex flex-col items-center'>
        <h2 className='font-kanit font-semibold text-5xl md:text-6xl text-white'>{t("contact.title")}</h2>
      </div>

      <div className='w-full flex justify-center mb-16 px-8 sm:px-0 mt-10 md:mt-20'>
        {
          isSubmitted
          ?
            <div className='animate__animated animate__fadeIn flex flex-col relative rounded-b-md w-full h-[35rem] sm:w-1/2 lg:w-1/3 xl:w-1/4 justify-center items-center py-8 md:px-16 bg-red-500 drop-shadow-lg'>
              <h3 className='text-white text-4xl font-kanit font-medium mb-5 text-center'>{t('contact.messageSent')}</h3>
              <p className='font-kanit text-white text-justify text-xl font-extralight'>{t('contact.thanks')}</p>
            </div>
        :
            <form className='flex flex-col relative rounded-b-md w-full h-[35rem] sm:w-1/2 lg:w-1/3 xl:w-1/4 items-center py-8 md:px-16 bg-red-500 drop-shadow-lg' onSubmit={handleSubmit}>
              <div className='w-full absolute top-0'>
                <BarLoader width={'100%'} loading={isLoading} height={5} color="rgb(255, 253, 248)" />
              </div>
              <div>
                <h3 className='text-white text-3xl font-kanit font-bold opacity-95 mb-5'>{t('contact.email')}</h3>
              </div>
              <input
                className='w-11/12 my-3 text-xl p-2 font-kanit font-light rounded-md outline-red-500'
                type="text"
                name="name"
                required
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className='w-11/12 my-3 text-xl p-2 font-kanit font-light rounded-md outline-red-500'
                type="email"
                name="email"
                required
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className='w-11/12 my-3 text-xl p-2 font-kanit font-light rounded-md outline-red-500'
                type="text"
                name="subject"
                required
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                className='w-11/12 my-3 text-xl p-2 font-kanit font-light rounded-md resize-none h-40 outline-red-500'
                name="message"
                required
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
              />
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LcQ604oAAAAAO43SgNxKY3n5vs_hmLiNxf03r-V"
              />
              <button type="submit"
                className='font-kanit text-xl shadow-lg bg-white rounded-3xl px-6 py-1 mt-2 hover:shadow-rose-300 hover:scale-110 transition-all select-none'
              >
                {t('contact.send')}
              </button>
            </form>
        }


      </div>

    </section>
  )
}