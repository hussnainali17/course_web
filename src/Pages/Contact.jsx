import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { gsap } from 'gsap';

const contacts = [
    {
    name: 'WhatsApp Direct',
    icon: <FaWhatsapp className="text-green-500" />,
    link: 'https://wa.me/923414517833',
  },
  {
    name: 'WhatsApp Channel',
    icon: <FaWhatsapp className="text-blue-500" />,
    link: 'https://whatsapp.com/channel/0029VacszpdDjiOariYlCI1l',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="text-pink-500" />,
    link: 'https://www.instagram.com/invites/contact/?igsh=1wvlqx0530vzk&utm_content=nm2cg2n',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className="text-blue-600" />,
    link: 'https://www.facebook.com/share/1FK75zXKUj',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="text-blue-800" />,
    link: 'https://www.linkedin.com/in/dr-abd-ullah-588a17330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Telegram',
    icon: <FaTelegram className="text-blue-400" />,
    link: 'https://t.me/DrAbdullah_iMD',
  },
  
];

const Contact = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    const validIcons = iconsRef.current.filter(Boolean);
    gsap.from(validIcons, {
      y: 30,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power2.out',
    });
  }, []);

  return (
    <Layout>
      <section className="py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-blue-800 mb-8 text-lg">
          You can contact us 24/7 through any of the following platforms.
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {contacts.map((c, i) => (
            <a
              key={c.name}
              href={c.link}
              ref={el => (iconsRef.current[i] = el)}
              className="transition-transform transform hover:scale-125 text-4xl"
              target="_blank"
              rel="noopener noreferrer"
              title={c.name}
            >
              {c.icon}
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;