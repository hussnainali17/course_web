import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdClose, MdChatBubble } from 'react-icons/md';

const whatsappLink = 'https://wa.me/923414517833?text=Hello!%20I%20have%20a%20question%20please%20help%20me.%20From%20https%3A%2F%2Fcourse-web-f8da.onrender.com';
const instagramLink = 'https://www.instagram.com/invites/contact/?igsh=1wvlqx0530vzk&utm_content=nm2cg2n';

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-50 bottom-15 right-3 flex flex-col items-end space-y-3">
      <div className="relative flex flex-col items-end">
        {/* Action Buttons */}
        <div
          className={`flex flex-col items-end transition-all duration-500 ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
          }`}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-green-400 hover:bg-green-500 transition mb-2"
            title="WhatsApp"
            style={{ transitionDelay: open ? '150ms' : '0ms' }}
          >
            <FaWhatsapp className="text-white text-3xl" />
          </a>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-pink-400 hover:bg-pink-500 transition mb-2"
            title="Instagram"
            style={{ transitionDelay: open ? '300ms' : '0ms' }}
          >
            <FaInstagram className="text-white text-3xl" />
          </a>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-purple-400 hover:bg-purple-500 transition mb-2"
            title="Close"
            style={{ transitionDelay: open ? '450ms' : '0ms' }}
          >
            <MdClose className="text-white text-3xl" />
          </button>
        </div>
        {/* Main FAB */}
        <button
          onClick={() => setOpen(true)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-blue-800 hover:bg-blue-900 transition-transform duration-500 ${
            open ? 'rotate-180 scale-90 pointer-events-none opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
          title="Contact"
        >
          <MdChatBubble className="text-white text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default FloatingContact;