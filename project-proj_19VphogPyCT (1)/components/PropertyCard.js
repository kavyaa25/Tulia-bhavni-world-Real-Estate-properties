function PropertyCard({ property }) {
    try {
        return (
            <AnimatedElement animation="slide-in">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift" data-name="property-card">
                    <div className="relative shimmer group" data-name="property-image">
                        <img 
                            src={property.image} 
                            alt={property.title}
                            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 space-y-2">
                            <span className="block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                {property.type}
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <div className="flex flex-wrap gap-2">
                                    {property.amenities?.map((amenity, index) => (
                                        <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors" data-name="property-title">
                            {property.title}
                        </h3>
                        <p className="text-gray-600 mb-4" data-name="property-location">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            {property.location}
                        </p>
                        
                        <div className="flex justify-between mb-4 text-gray-600" data-name="property-details">
                            <span className="flex items-center">
                                <i className="fas fa-bed mr-2"></i>
                                {property.beds} Beds
                            </span>
                            <span className="flex items-center">
                                <i className="fas fa-bath mr-2"></i>
                                {property.baths} Baths
                            </span>
                            <span className="flex items-center">
                                <i className="fas fa-ruler-combined mr-2"></i>
                                {property.sqft} sqft
                            </span>
                        </div>
                        
                        <div className="flex justify-between items-center border-t pt-4" data-name="property-footer">
                            <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                            <button className="btn btn-outline btn-animate group">
                                <span>View Details</span>
                                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </AnimatedElement>
        );
    } catch (error) {
        console.error('PropertyCard component error:', error);
        reportError(error);
        return null;
    }
}
