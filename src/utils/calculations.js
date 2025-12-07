// Haversine formula to calculate distance between two points in km
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
};

const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
};

// Validate a day's itinerary
// Rules:
// 1. Total distance < 250km
// 2. Total time < 12 hours (Travel time @ 50km/h + 2 hours per place)
export const validateDay = (items, startLocation = { lat: 12.9716, lng: 77.5946 }) => {
    let totalDistance = 0;
    let currentLocation = startLocation;

    items.forEach(item => {
        const dist = calculateDistance(
            currentLocation.lat,
            currentLocation.lng,
            item.lat,
            item.lng
        );
        totalDistance += dist;
        currentLocation = { lat: item.lat, lng: item.lng };
    });

    // Return trip to start location is NOT calculated here as per typical itinerary logic 
    // (usually you end at the last hotel), but if it's a day trip, you might return.
    // For now, we calculate point-to-point.

    const avgSpeed = 50; // km/h
    const travelTime = totalDistance / avgSpeed;
    const visitingTime = items.length * 2; // 2 hours per place
    const totalTime = travelTime + visitingTime;

    const warnings = [];
    if (totalDistance > 250) {
        warnings.push(`Total distance (${totalDistance.toFixed(0)}km) exceeds 250km limit.`);
    }
    if (totalTime > 12) {
        warnings.push(`Total time (${totalTime.toFixed(1)}h) exceeds 12 hours.`);
    }

    return {
        isValid: warnings.length === 0,
        totalDistance: totalDistance.toFixed(1),
        totalTime: totalTime.toFixed(1),
        warnings
    };
};
