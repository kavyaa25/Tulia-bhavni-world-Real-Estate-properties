function Hero() {
    try {
        const [showProperties, setShowProperties] = React.useState(false);
        const [showAbout, setShowAbout] = React.useState(false);
        const [currentSlide, setCurrentSlide] = React.useState(0);

        const slides = [
            {
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                title: "Discover Luxury Living",
                description: "Explore our curated collection of premium properties in the most sought-after locations."
            },
            {
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
                title: "Your Dream Home Awaits",
                description: "From modern penthouses to waterfront estates, find the perfect property that matches your lifestyle."
            },
            {
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
                title: "Exclusive Properties",
                description: "Access our exclusive listings and premium real estate opportunities before they hit the market."
            }
        ];

        React.useEffect(() => {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000);
            return () => clearInterval(timer);
        }, []);

        return (
            <React.Fragment>
                <section className="hero-section" data-name="hero-section">
                    <div className="hero-slider">
                        {slides.map((slide, index) => (
                            <div 
                                key={index}
                                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 hero-overlay"></div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="hero-content container mx-auto px-4">
                        <div className="max-w-3xl">
                            <AnimatedElement animation="slide-in">
                                <h1 className="hero-title text-white" data-name="hero-title">
                                    {slides[currentSlide].title}
                                </h1>
                            </AnimatedElement>
                            
                            <AnimatedElement animation="fade-in">
                                <p className="hero-description text-white" data-name="hero-description">
                                    {slides[currentSlide].description}
                                </p>
                            </AnimatedElement>
                            
                            <AnimatedElement animation="scale-in">
                                <div className="hero-cta flex space-x-6" data-name="hero-cta">
                                    <button 
                                        className="btn btn-primary btn-animate text-lg px-8 py-4"
                                        onClick={() => setShowProperties(true)}
                                    >
                                        <i className="fas fa-search mr-2"></i>
                                        View Properties
                                    </button>
                                    <button 
                                        className="btn btn-outline text-white border-2 border-white btn-animate text-lg px-8 py-4"
                                        onClick={() => setShowAbout(true)}
                                    >
                                        <i className="fas fa-info-circle mr-2"></i>
                                        Learn More
                                    </button>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </section>

                <AllProperties 
                    isVisible={showProperties} 
                    onClose={() => setShowProperties(false)} 
                />
                
                <AboutModal 
                    isOpen={showAbout} 
                    onClose={() => setShowAbout(false)} 
                />
            </React.Fragment>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
