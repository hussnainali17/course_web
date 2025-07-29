import React from 'react';
import Layout from '../components/Layout';

const Pricing = () => (
    <Layout>
        <section className="py-12 px-4 bg-white">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Pricing Plans</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* 6-Month Subscription */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-6 w-full max-w-xs text-center hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center justify-center">
                        <span className="text-blue-600 mr-2">◆</span> 6-Month Subscription –{' '}
                        <span className="ml-1 font-bold">$45</span>
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
                        <span className="text-blue-600 mr-2">◆</span> 1-Year Subscription –{' '}
                        <span className="ml-1 font-bold">$65</span>
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
                        <span className="text-blue-600 mr-2">◆</span> 2-Year Subscription –{' '}
                        <span className="ml-1 font-bold">$130</span>
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
    </Layout>
);

export default Pricing;