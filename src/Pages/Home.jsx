import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { gsap } from 'gsap';
import Social from '../components/Social';
import FloatingContact from '../components/FloatingContact';
import { FaBookOpen, FaMobileAlt, FaGlobe, FaBolt, FaUserMd, FaSyncAlt } from 'react-icons/fa';

const Home = () => {
    const heroRef = useRef(null);
    const paraRef = useRef(null);
    const featuresRef = useRef(null);
    const howItWorksRef = useRef(null);

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
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-blue-50 py-16 px-4 text-center">
                <h1
                    ref={heroRef}
                    className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
                >
                    THE USMLE HORIZON
                </h1>
                <p
                    ref={paraRef}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-blue-800 mb-8"
                >
                    <span className="font-semibold text-blue-900">
                        A highly trusted platform
                    </span>{' '}
                    which is serving the medical students since half a decade, who are aspiring for International Exams i.g.{' '}
                    <span className="font-semibold text-blue-900">
                        (USMLE, PLAB, AMC, MCCQE, etc)
                    </span>{' '}
                    their Required Resources and Providing Research opportunities in Internationally renowned journals such as{' '}
                    <span className="font-semibold text-blue-900">
                        PubMed, WOS, Fortune, Google Scholars, Scopus, Nature, etc.
                    </span>
                    <br /><br />
                    Our Moto is <span className="italic font-bold text-blue-900">"We serve from Scratch to Match"</span>
                </p>
            </section>
            {/* Pricing Section */}
            <section className="py-12 px-4 bg-white">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Pricing Plans</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* 6-Month Subscription */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-6 w-full max-w-xs text-center hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center justify-center">
                            <span className="text-blue-600 mr-2">◆</span> 6-Month Subscription – <span className="ml-1 font-bold">$45</span>
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
                            onClick={() => window.location.href = 'https://wa.me/923414517833'}
                        >
                            SUBSCRIBE/EXTEND NOW
                        </button>
                    </div>
                    {/* 1-Year Subscription */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-6 w-full max-w-xs text-center hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center justify-center">
                            <span className="text-blue-600 mr-2">◆</span> 1-Year Subscription – <span className="ml-1 font-bold">$65</span>
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
                            onClick={() => window.location.href = 'https://wa.me/923414517833'}
                        >
                            SUBSCRIBE/EXTEND NOW
                        </button>
                    </div>
                    {/* 2-Year Subscription */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-6 w-full max-w-xs text-center hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center justify-center">
                            <span className="text-blue-600 mr-2">◆</span> 2-Year Subscription – <span className="ml-1 font-bold">$130</span>
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
                            onClick={() => window.location.href = 'https://wa.me/923414517833'}
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
                        <div>
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
                            <div className="text-blue-800 text-sm">USMLE, PLAB, AMC, MCCQE, MRCP, NEET PG</div>
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
            <Social />
            <FloatingContact />
        </Layout>
    );
};

export default Home;