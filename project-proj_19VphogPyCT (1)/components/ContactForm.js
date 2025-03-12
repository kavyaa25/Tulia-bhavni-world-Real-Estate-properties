function ContactForm() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission
            console.log('Form submitted:', formData);
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section className="section bg-gray-50" id="contact" data-name="contact-section">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                        <form onSubmit={handleSubmit} className="space-y-6" data-name="contact-form">
                            <div>
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ContactForm component error:', error);
        reportError(error);
        return null;
    }
}
