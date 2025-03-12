function AboutModal({ isOpen, onClose }) {
    try {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" data-name="about-modal">
                <div className="bg-white rounded-lg p-8 max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-2xl font-bold">About Tulia Bhavni World</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    <div className="space-y-6" data-name="about-content">
                        <section>
                            <h3 className="text-xl font-semibold mb-3">Our Story</h3>
                            <p className="text-gray-600">
                                Founded in 2010, Tulia Bhavni World has grown from a small local agency to one of the most trusted names in real estate. Our journey began with a simple mission: to help people find their perfect homes and make their property dreams come true.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-semibold mb-2">Integrity</h4>
                                    <p className="text-sm text-gray-600">We maintain the highest standards of integrity in all our dealings.</p>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-semibold mb-2">Excellence</h4>
                                    <p className="text-sm text-gray-600">We strive for excellence in every aspect of our service.</p>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-semibold mb-2">Client Focus</h4>
                                    <p className="text-sm text-gray-600">Our clients' needs and satisfaction are our top priority.</p>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-semibold mb-2">Innovation</h4>
                                    <p className="text-sm text-gray-600">We embrace new technologies and ideas to improve our services.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold mb-3">Our Achievements</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">1000+</div>
                                    <div className="text-sm text-gray-600">Properties Sold</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">500+</div>
                                    <div className="text-sm text-gray-600">Happy Families</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">50+</div>
                                    <div className="text-sm text-gray-600">Expert Agents</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">15+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold mb-3">Our Services</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>Residential Property Sales and Purchases</li>
                                <li>Commercial Real Estate Services</li>
                                <li>Property Management</li>
                                <li>Real Estate Consultation</li>
                                <li>Investment Advisory</li>
                                <li>Property Valuation</li>
                            </ul>
                        </section>
                    </div>

                    <div className="mt-8 text-center">
                        <button onClick={onClose} className="btn btn-primary btn-animate">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AboutModal component error:', error);
        reportError(error);
        return null;
    }
}
