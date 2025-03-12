function Footer() {
    try {
        return (
            <footer className="bg-gray-900 text-white py-12" data-name="footer">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div data-name="footer-about">
                            <h3 className="text-xl font-semibold mb-4">About Us</h3>
                            <p className="text-gray-400">
                                Tulia Bhavni World is your trusted partner in finding the perfect property.
                            </p>
                        </div>
                        <div data-name="footer-links">
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#properties">Properties</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-contact">
                            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><i className="fas fa-phone mr-2"></i> +1 234 567 890</li>
                                <li><i className="fas fa-envelope mr-2"></i> info@tuliabhavni.com</li>
                                <li><i className="fas fa-map-marker-alt mr-2"></i> 123 Real Estate St, CA</li>
                            </ul>
                        </div>
                        <div data-name="footer-social">
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Tulia Bhavni World. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
