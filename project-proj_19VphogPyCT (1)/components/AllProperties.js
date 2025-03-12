function AllProperties({ isVisible, onClose }) {
    try {
        if (!isVisible) return null;

        const allProperties = [
            ...properties,
            {
                id: 4,
                title: "Seaside Villa",
                location: "Malibu, CA",
                price: "$8,500,000",
                beds: 6,
                baths: 7,
                sqft: "7,500",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
                type: "Sale",
                featured: false
            },
            {
                id: 5,
                title: "Modern City Apartment",
                location: "Chicago, IL",
                price: "$4,200/month",
                beds: 2,
                baths: 2,
                sqft: "1,500",
                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
                type: "Rent",
                featured: false
            },
            {
                id: 6,
                title: "Mountain View Estate",
                location: "Aspen, CO",
                price: "$12,000,000",
                beds: 8,
                baths: 9,
                sqft: "10,000",
                image: "https://images.unsplash.com/photo-1506126279646-a697353d3166",
                type: "Sale",
                featured: false
            }
        ];

        const [filters, setFilters] = React.useState({
            type: 'all',
            minPrice: '',
            maxPrice: '',
            beds: 'all'
        });

        const filteredProperties = allProperties.filter(property => {
            if (filters.type !== 'all' && property.type !== filters.type) return false;
            
            const price = parseInt(property.price.replace(/[^0-9]/g, ''));
            if (filters.minPrice && price < parseInt(filters.minPrice)) return false;
            if (filters.maxPrice && price > parseInt(filters.maxPrice)) return false;
            
            if (filters.beds !== 'all' && property.beds < parseInt(filters.beds)) return false;
            
            return true;
        });

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto" data-name="all-properties">
                <div className="min-h-screen py-8">
                    <div className="container mx-auto px-4">
                        <div className="bg-white rounded-lg p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">All Properties</h2>
                                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                    <i className="fas fa-times text-xl"></i>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" data-name="filters">
                                <select 
                                    value={filters.type}
                                    onChange={(e) => setFilters({...filters, type: e.target.value})}
                                    className="p-2 border rounded"
                                >
                                    <option value="all">All Types</option>
                                    <option value="Sale">For Sale</option>
                                    <option value="Rent">For Rent</option>
                                </select>

                                <input
                                    type="number"
                                    placeholder="Min Price"
                                    value={filters.minPrice}
                                    onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                                    className="p-2 border rounded"
                                />

                                <input
                                    type="number"
                                    placeholder="Max Price"
                                    value={filters.maxPrice}
                                    onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                                    className="p-2 border rounded"
                                />

                                <select
                                    value={filters.beds}
                                    onChange={(e) => setFilters({...filters, beds: e.target.value})}
                                    className="p-2 border rounded"
                                >
                                    <option value="all">All Beds</option>
                                    <option value="1">1+ Beds</option>
                                    <option value="2">2+ Beds</option>
                                    <option value="3">3+ Beds</option>
                                    <option value="4">4+ Beds</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {filteredProperties.map(property => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AllProperties component error:', error);
        reportError(error);
        return null;
    }
}
