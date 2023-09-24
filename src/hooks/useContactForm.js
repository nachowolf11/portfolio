import { createRef, useState } from "react";
import emailjs from 'emailjs-com';

export const useContactForm = () => {
    const recaptchaRef = createRef();
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formValidation, setFormValidation] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        'g-recaptcha-response':''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const resetForm = () => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);



        const token = await recaptchaRef.current.executeAsync();

    
        emailjs
          .send(
            'service_j2kk6nf',
            'template_7hszax4',
            {...formData, 'g-recaptcha-response':token},
            'oX_fOEHWBOIvJtZgd'
          )
          .then(
            (response) => {
              setIsLoading(false);
              setIsSubmitted(true);
              resetForm();
            },
            (error) => {
              console.error('Error al enviar el correo electrónico:', error);
              setIsLoading(false);
            }
          );
      };

    return {
        formData,
        isLoading,
        recaptchaRef,
        isSubmitted,
        setFormData,
        handleSubmit,
        resetForm,
        handleChange,
    }
}