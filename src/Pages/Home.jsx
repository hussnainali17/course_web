import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { gsap } from 'gsap';
import Social from '../components/Social';
import Bars from '../components/Bars';
import { useNavigate } from 'react-router-dom';
import FloatingContact from '../components/FloatingContact';
import { FaBookOpen, FaMobileAlt, FaGlobe, FaBolt, FaUserMd, FaSyncAlt } from 'react-icons/fa';
import AnimatedResearchSection from '../components/AnimatedResearchSection';

const Home = () => {
    const heroRef = useRef(null);
    const paraRef = useRef(null);
    const featuresRef = useRef(null);
    const howItWorksRef = useRef(null);
    const medImgRef = useRef(null);
    const logoTextRef = useRef(null);
    const logoImgRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Reset styles before animating
        gsap.set([heroRef.current, paraRef.current], { clearProps: 'all' });

        gsap.fromTo(
            heroRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo(
            paraRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
        );
        gsap.fromTo(
            featuresRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1, ease: 'power3.out' }
        );
        gsap.fromTo(
            howItWorksRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1.3, ease: 'power3.out' }
        );

        // Animate the main medical professional image
        if (medImgRef.current) {
            gsap.fromTo(
                medImgRef.current,
                { scale: 0.7, rotate: -15, opacity: 0 },
                { scale: 1, rotate: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.6)", delay: 0.5 }
            );
        }

        // Animate the logo text
        if (logoTextRef.current) {
            gsap.fromTo(
                logoTextRef.current,
                { scale: 0.7, rotate: -15, opacity: 0 },
                { scale: 1, rotate: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.6)", delay: 0.5 }
            );
        }
        // Animate the logo image
        if (logoImgRef.current) {
            gsap.fromTo(
                logoImgRef.current,
                { scale: 0.7, rotate: -15, opacity: 0 },
                { scale: 1, rotate: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.6)", delay: 0.5 }
            );
        }
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-[#0d3570] min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 relative overflow-hidden">
  {/* Left: Logo and Text */}
  <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left z-10">
    {/* Logo */}
    <div className="flex items-center w-full mb-4">
      <span
        ref={logoTextRef}
        className="text-white text-left font-semibold text-xl mr-3"
      >
        iMD <br />Subscription
      </span>
      <img
        ref={logoImgRef}
        src="https://i.postimg.cc/Vkc3Wg5Q/99.webp"
        alt="iMD Medical Resources Logo"
        className="w-24 h-24 md:mx-0"
      />
    </div>
    {/* Heading */}
    <h1
      ref={heroRef}
      className="text-4xl sm:text-4xl md:text-4xl font-bold text-white mb-4 leading-tight w-full text-left"
    >
      Your Ultimate <br className='md:hidden' /> Medical Life <br />
      Companion &amp;<br className='md:hidden' /> Learning Hub
    </h1>
    {/* Description */}
    <p
      ref={paraRef}
      className="text-white text-base sm:text-lg md:text-lg text-left mb-6 max-w-xl"
    >
       A trusted platform supporting medical students worldwide since 2015 - especially those preparing for exams like USMLE, PLAB, AMC, and MCCQE. With 45,000+ medical and pharmaceutical resources, we offer unlimited access through the world’s largest medical resource hub.
    </p>
  </div>
  {/* Right: Image with Shape */}
  <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0">
    {/* Decorative Shape */}
    <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] bg-[#d6f5e6] rounded-[40%] -z-10 right-0 md:right-8 top-1/2 -translate-y-1/2"></div>
    {/* Main Image */}
    <img
      ref={medImgRef}
      src="https://i.postimg.cc/sf6YJNNb/med.webp"
      alt="Medical Professional"
      className="w-48 sm:w-64 md:w-96 object-contain z-10"
    />
  </div>
</section>
            {/* Pricing Section */}
            <section className="py-12 px-4 bg-white">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Subscription Plans</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* 6-Month Subscription */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-6 w-full max-w-xs text-center hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center justify-center">
                            <span className="text-blue-600 mr-2">◆</span> 6-Month Subscription
                        </h3>
                        <ul className="mb-4 text-blue-700 text-sm list-none space-y-1">
                            <li>✓ Full Access for 180 Days</li>
                            <li>✓ VIP Premium Plan</li>
                            <li>✓ Unlimited Access to All Databases</li>
                            <li>✓ 45,000+ Premium Resources</li>
                            <li>✓ International IP Support</li>
                        </ul>
                       <button
  className="bg-blue-900 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition w-full"
  onClick={() => {
    const message = `
Provide the following information for iMD Account Registeration:
Name:
Access Type:
Email address : 
Desired username: 
Desired password:
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923414517833?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  }}
>
  SUBSCRIBE/EXTEND NOW
</button>
                    </div>
                    {/* 1-Year Subscription */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-6 w-full max-w-xs text-center hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center justify-center">
                            <span className="text-blue-600 mr-2">◆</span> 1-Year Subscription
                        </h3>
                        <ul className="mb-4 text-blue-700 text-sm list-none space-y-1">
                            <li>✓ Full Access for 365 Days</li>
                            <li>✓ VIP Premium Plan</li>
                            <li>✓ Unlimited Access to All Databases</li>
                            <li>✓ 45,000+ Premium Resources</li>
                            <li>✓ International IP Support</li>
                        </ul>
                        <button
  className="bg-blue-900 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition w-full"
  onClick={() => {
    const message = `
Provide the following information for iMD Account Registeration:
Name:
Access Type:
Email address : 
Desired username: 
Desired password:
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923414517833?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  }}
>
  SUBSCRIBE/EXTEND NOW
</button>
                    </div>
                    {/* 2-Year Subscription */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-6 w-full max-w-xs text-center hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center justify-center">
                            <span className="text-blue-600 mr-2">◆</span> 2-Year Subscription
                        </h3>
                        <ul className="mb-4 text-blue-700 text-sm list-none space-y-1">
                            <li>✓ Full Access for 730 Days</li>
                            <li>✓ VIP Premium Plan</li>
                            <li>✓ Unlimited Access to All Databases</li>
                            <li>✓ 45,000+ Premium Resources</li>
                            <li>✓ International IP Support</li>
                        </ul>
                        <button
  className="bg-blue-900 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition w-full"
  onClick={() => {
    const message = `
Provide the following information for iMD Account Registeration:
Name:
Access Type:
Email address : 
Desired username: 
Desired password:
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923414517833?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  }}
>
  SUBSCRIBE/EXTEND NOW
</button>
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section ref={featuresRef} className="py-12 px-4 bg-gradient-to-br from-blue-50 to-white">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-2">
                    <span className="inline-block w-6 h-6 bg-green-500 rounded mr-2"></span>
                    Features
                </h2>
                <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3 bg-white rounded-lg shadow p-4 border border-blue-100">
                        <FaBookOpen className="text-2xl text-yellow-500 mt-1" />
                        <div onClick={()=>navigate('/services')}>
                            <span className="font-bold text-blue-900">Unlimited Access</span>
                            <div className="text-blue-800 text-sm">Full library of notes, books, MCQs &amp; more</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg shadow p-4 border border-blue-100">
                        <FaMobileAlt className="text-2xl text-blue-400 mt-1" />
                        <div>
                            <span className="font-bold text-blue-900">Cross-Device Support</span>
                            <div className="text-blue-800 text-sm">Android, iOS, Windows, Mac — all supported</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg shadow p-4 border border-blue-100">
                        <FaGlobe className="text-2xl text-cyan-500 mt-1" />
                        <div>
                            <span className="font-bold text-blue-900">Global Exam Coverage</span>
                            <div className="text-blue-800 text-sm">USMLE, PLAB, AMC, MCCQE, MRCP, MRCS</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg shadow p-4 border border-blue-100">
                        <FaBolt className="text-2xl text-orange-400 mt-1" />
                        <div>
                            <span className="font-bold text-blue-900">Instant Activation</span>
                            <div className="text-blue-800 text-sm">Get access immediately after payment</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg shadow p-4 border border-blue-100">
                        <FaUserMd className="text-2xl text-orange-600 mt-1" />
                        <div>
                            <span className="font-bold text-blue-900">Trusted Worldwide</span>
                            <div className="text-blue-800 text-sm">50,000+ medical professionals use iMD</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg shadow p-4 border border-blue-100">
                        <FaSyncAlt className="text-2xl text-green-500 mt-1" />
                        <div>
                            <span className="font-bold text-blue-900">Constantly Updated Library</span>
                            <div className="text-blue-800 text-sm">New books, latest MCQs, recent guidelines — library updated regularly</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* How It Works Section */}
            <section ref={howItWorksRef} className="py-12 px-4 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-2">
                    How It Works <span role="img" aria-label="rocket">🚀</span>
                </h2>
                <ol className="max-w-2xl mx-auto list-decimal list-inside text-blue-800 text-lg space-y-3 bg-blue-50 rounded-xl p-6 shadow">
                    <li>
                        <span className="font-semibold">Choose your subscription plan</span> that suits your needs.
                    </li>
                    <li>
                        <span className="font-semibold">Click the WhatsApp button</span> to contact us directly.
                    </li>
                    <li>
                        <span className="font-semibold">Make the payment</span> and get instant access to all resources.
                    </li>
                </ol>
            </section>

            <Bars />
            <AnimatedResearchSection />
            <Social />
            <p className='text-center font-bold text-2xl mb-6 text-blue-800'>You can contact us 24/7</p>
            <FloatingContact />
        </Layout>
    );
};

export default Home;