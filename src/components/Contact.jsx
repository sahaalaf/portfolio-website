import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the form state without using the spread operator
        setForm((prevForm) => {
            const newForm = { name: prevForm.name, email: prevForm.email, message: prevForm.message };
            newForm[name] = value;
            return newForm;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_2gnwh8p",
                "template_ydfzypj",
                {
                    from_name: form.name,
                    to_name: "Sahal Sajeed",
                    from_email: form.email,
                    to_email: "sarcasticsahal@gmail.com",
                    message: form.message,
                },
                "94oR62wI946yVx7No"
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Thank you, I will get back to you as soon as possible.", {
                        position: 'top-center',
                        
                    });
                    setForm({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log(error);
                    toast.error("Something went wrong.");
                }
            );
    };

    return (
        <div className="bg-custom-bg bg-cover w-full h-screen flex items-center justify-center relative">
            {/* Toast Container */}
            <Toaster position="top-right" reverseOrder={false} />

            <img
                src="/yellow_glossy.png"
                alt="Yellow Glossy"
                className="hidden md:block absolute z-10 yellow-glossy"
            />

            <div className="md:w-[85%] w-[87%] h-[92%] md:h-[75%] rounded-2xl bg-custom-opacity backdrop-blur-lg shadow-2xl flex flex-col px-6 md:px-20 py-2 md:py-8">
                <div className='mt-0'>
                    <Navbar />
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-gradient text-2xl md:text-4xl text-white font-semibold md:mt-8 mt-0'>Get in touch</h3>
                            <div className='mt-2 w-full md:w-[450px]'>
                                <form className='flex flex-col space-y-4' ref={formRef} onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className='p-3 rounded-md border-none outline-none bg-gray-800 text-white'
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className='p-3 rounded-md border-none outline-none bg-gray-800 text-white'
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="4"
                                        value={form.message}
                                        onChange={handleChange}
                                        className='p-3 rounded-md border-none outline-none bg-gray-800 text-white'
                                    />
                                    <button
                                        type="submit"
                                        className='bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700'
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 mt-8 md:mt-0 flex justify-center'>
                            <img src='/intouch.png' className='w-full max-w-[370px] hidden md:block' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
