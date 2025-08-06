import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaEnvelope, // Add this import
} from 'react-icons/fa';

const contacts = [
  {
    name: 'WhatsApp Direct',
    icon: <FaWhatsapp className="text-green-500" />,
    link:
      'https://wa.me/923414517833?text=Hello!%20I%20have%20a%20question%20please%20help%20me.%20From%20https%3A%2F%2Ftheusmlehorizon.onrender.com',
  },
  {
    name: 'Gmail',
    icon: <FaEnvelope className="text-pink-500" />,
    link: 'mailto:theusmlehorizon@gmail.com',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="text-pink-500" />,
    link:
      'https://www.instagram.com/invites/contact/?igsh=1wvlqx0530vzk&utm_content=nm2cg2n',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className="text-blue-600" />,
    link: 'https://www.facebook.com/share/1FK75zXKUj',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="text-blue-800" />,
    link:
      'https://www.linkedin.com/in/dr-abd-ullah-588a17330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Telegram',
    icon: <FaTelegram className="text-blue-400" />,
    link: 'https://t.me/DrAbdullah_iMD',
  },
];

const Social = () => (
  <section className="py-10 px-4 text-center">
    {/* Top gradient line */}
    <div className="h-1 w-full max-w-lg mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700" />
    <h2 className="text-2xl font-bold text-blue-800 mb-6">Follow us on</h2>
    <div className="flex justify-center items-center gap-6 sm:gap-4 xs:gap-2 flex-nowrap">
      {contacts.map((c) => (
        <a
          key={c.name}
          href={c.link}
          className="text-4xl hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          title={c.name}
        >
          {c.icon}
          <span className="sr-only">{c.name}</span>
        </a>
      ))}
    </div>
    {/* Bottom gradient line */}
    <div className="h-1 w-full max-w-lg mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700" />
  </section>
);

export default Social;
