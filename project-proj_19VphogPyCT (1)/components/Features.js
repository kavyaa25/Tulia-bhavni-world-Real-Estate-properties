function Features() {
    try {
        const features = [
            {
                icon: "fa-house",
                title: "Wide Range of Properties",
                description: "Browse through our extensive collection of residential and commercial properties."
            },
            {
                icon: "fa-money-bill-wave",
                title: "Best Market Price",
                description: "We ensure you get the best deals and market prices for your dream property."
            },
            {
                icon: "fa-handshake",
                title: "Trusted Agents",
                description: "Our experienced agents are here to guide you through every step."
            }
        ];

        return (
            <section className="section" id="features" data-name="features-section">
                <div className="container">
                    <AnimatedElement animation="fade-in">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                    </AnimatedElement>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <AnimatedElement key={index} animation="scale-in">
                                <div className="text-center p-6 hover-lift" data-name="feature-card">
                                    <div className="inline-block p-4 rounded-full bg-blue-100 mb-4 hover-scale">
                                        <i className={`fas ${feature.icon} text-3xl text-blue-600`}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}
