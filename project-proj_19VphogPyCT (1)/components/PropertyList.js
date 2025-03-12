function PropertyList() {
    try {
        return (
            <section className="section bg-gray-50" id="properties" data-name="properties-section">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="btn btn-primary">
                            View All Properties
                        </button>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('PropertyList component error:', error);
        reportError(error);
        return null;
    }
}
