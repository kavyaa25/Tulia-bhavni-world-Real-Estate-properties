function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        return (
            <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-2" data-name="logo">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                <img 
                                    src="https://cdn-icons-png.flaticon.com/512/1040/1040993.png" 
                                    alt="Tulia Bhavni World Logo" 
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-blue-600">Tulia Bhavni</span>
                                <span className="text-sm text-gray-600">Real Estate World</span>
                            </div>
                        </div>
                        
                        <nav className="hidden md:flex space-x-8" data-name="navigation">
                            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1">
                                <i className="fas fa-home"></i>
                                <span>Home</span>
                            </a>
                            <a href="#properties" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1">
                                <i className="fas fa-building"></i>
                                <span>Properties</span>
                            </a>
                            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1">
                                <i className="fas fa-star"></i>
                                <span>Features</span>
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1">
                                <i className="fas fa-envelope"></i>
                                <span>Contact</span>
                            </a>
                        </nav>

                        <div className="hidden md:flex items-center space-x-4">
                            <button className="btn btn-outline btn-animate">
                                <i className="fas fa-phone mr-2"></i>
                                Call Us
                            </button>
                        </div>

                        <button 
                            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            data-name="mobile-menu-button"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t" data-name="mobile-menu">
                            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                                <i className="fas fa-home mr-2"></i>
                                Home
                            </a>
                            <a href="#properties" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                                <i className="fas fa-building mr-2"></i>
                                Properties
                            </a>
                            <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                                <i className="fas fa-star mr-2"></i>
                                Features
                            </a>
                            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                                <i className="fas fa-envelope mr-2"></i>
                                Contact
                            </a>
                            <button className="btn btn-outline btn-animate mt-4 w-full">
                                <i className="fas fa-phone mr-2"></i>
                                Call Us
                            </button>
                        </div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
