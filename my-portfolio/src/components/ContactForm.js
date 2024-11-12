import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent by ${formData.name}`);
        // Here, you can add an API call to send form data
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input name="name" type="text" placeholder="Your Name" onChange={handleChange} />
            <input name="email" type="email" placeholder="Your Email" onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
