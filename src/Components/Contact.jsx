import React, { useEffect, useState } from 'react'

const newLocal = "w-full pl-3 block rounded-md border-2 border-black py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-8 transition-colors duration-200 ease-in-out";
function Contact() {
    const [address, setAddress] = useState('');

    useEffect(() => {
        const url = 'https://maps.google.com/maps?width=866&amp;height=543&amp;hl=en&amp;q=I%20I%20Chundigarh%20Road&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed';

        const params = new URLSearchParams(url);
        const query = decodeURIComponent(params.get('q'));

        setAddress(query);
    }, []);
    console.log(address)
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="absolute inset-0 ">
                    <iframe className='opacity-90' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.410877375631!2d66.9978470971365!3d24.84981278174431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e01f1955555%3A0xa1db12f43b5d9ada!2sTextile%20Plaza!5e0!3m2!1sen!2s!4v1686061687879!5m2!1sen!2s" width="100%" height="100%"></iframe>
                </div>
                <div className="container px-5 py-10 mx-auto flex shadow-xl">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                        </div>
                        <button className="h-10 bg-indigo-600 px-5 py-1.5 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none active:bg-indigo-500 rounded-xl ">Button</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
