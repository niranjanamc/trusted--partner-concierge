import React, { useState, useEffect } from 'react';
import { MapPin, Star, Plus, Check, X, GripVertical, Trash2, Calendar, AlertTriangle, Clock, Coffee } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { destinations } from '../data/destinations';
import { validateDay } from '../utils/calculations';
import styles from './Destinations.module.css';

// Fix Leaflet marker icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Map Updater Component to center map on selected places
const MapUpdater = ({ center }) => {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, 10);
        }
    }, [center, map]);
    return null;
};

// Helper to resolve image paths correctly for both local dev and GitHub Pages
const getImagePath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${baseUrl}${cleanPath}`;
};

// Custom Icon Generator
const createCustomIcon = (imageUrl, name) => {
    return L.divIcon({
        className: styles.customMarkerContainer,
        html: `<div class="${styles.customMarker}" style="width: 40px; height: 40px;">
             <img src="${getImagePath(imageUrl)}" class="${styles.markerImage}" alt="marker" />
             <div class="${styles.markerLabel}">${name}</div>
           </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });
};

// Modal Component
const DestinationModal = ({ place, onClose, onAdd }) => {
    const [activeImage, setActiveImage] = useState(place.image);

    // Reset active image if place changes
    useEffect(() => {
        setActiveImage(place.image);
    }, [place]);

    if (!place) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={24} />
                </button>
                <div className={styles.modalHeader} style={{ backgroundImage: `url(${getImagePath(activeImage)})` }}>
                    <h2>{place.name}</h2>
                </div>
                <div className={styles.modalBody}>
                    <p>{place.description}</p>

                    {/* Gallery Section */}
                    {place.gallery && place.gallery.length > 0 && (
                        <div className={styles.gallerySection}>
                            <h3>Gallery</h3>
                            <div className={styles.galleryList}>
                                {place.gallery.map((img, i) => (
                                    <div
                                        key={i}
                                        className={`${styles.galleryItem} ${getImagePath(img) === getImagePath(activeImage) ? styles.galleryItemActive : ''}`}
                                        style={{ backgroundImage: `url(${getImagePath(img)})` }}
                                        onClick={() => setActiveImage(img)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className={styles.modalSection}>
                        <h3>Attractions & Details</h3>
                        <div className={styles.attractionsList}>
                            {place.attractions.map((a, i) => (
                                <div key={i} className={styles.attractionItem}>
                                    {a.image && (
                                        <div className={styles.attractionImage} style={{ backgroundImage: `url("${getImagePath(a.image)}")` }}></div>
                                    )}
                                    <h4>{a.name}</h4>
                                    {a.description && <p className={styles.attractionDesc}>{a.description}</p>}

                                    <div className={styles.attractionMeta}>
                                        {a.tips && (
                                            <div className={styles.metaWithIcon}>
                                                <Clock size={14} /> <span>{a.tips}</span>
                                            </div>
                                        )}

                                        <div className={styles.metaWithIcon}>
                                            <Coffee size={14} />
                                            <span>Breakfast: {a.breakfastPoint && a.breakfastPoint !== '--' && a.breakfastPoint !== '----' ? a.breakfastPoint : 'Not specified'}</span>
                                        </div>

                                        {a.addressLink ? (
                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.addressLink)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${styles.metaWithIcon} ${styles.addressLink}`}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <MapPin size={14} /> <span>{a.addressLink}</span>
                                            </a>
                                        ) : (
                                            <div className={styles.metaWithIcon}>
                                                <MapPin size={14} /> <span>Location details unavailable</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Attraction Gallery (Mini simple version) */}
                                    {a.gallery && a.gallery.length > 1 && (
                                        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '4px' }}>
                                            {a.gallery.map((gImg, gIdx) => (
                                                <div key={gIdx} style={{
                                                    width: '40px', height: '40px',
                                                    borderRadius: '4px',
                                                    backgroundImage: `url(${getImagePath(gImg)})`,
                                                    backgroundSize: 'cover',
                                                    flexShrink: 0
                                                }} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.modalSection}>
                        <h3>Resorts</h3>
                        <ul>
                            {place.resorts.map((r, i) => <li key={i}>{r}</li>)}
                        </ul>
                    </div>
                    <button className={styles.modalAddBtn} onClick={() => { onAdd(place); onClose(); }}>
                        Add to Itinerary
                    </button>
                </div>
            </div>
        </div>
    );
};

const Destinations = () => {
    const [activeTab, setActiveTab] = useState('dayTrips');
    const [selectedPlace, setSelectedPlace] = useState(null);

    // Date State
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [itinerary, setItinerary] = useState({
        'day-1': { id: 'day-1', title: 'Day 1', items: [] },
    });

    const [mapCenter, setMapCenter] = useState([12.9716, 77.5946]); // Bangalore

    // Update itinerary days when dates change
    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

            if (diffDays > 0 && diffDays <= 30) { // Limit to 30 days reasonable
                const newItinerary = {};
                for (let i = 1; i <= diffDays; i++) {
                    const dayId = `day-${i}`;
                    // Preserve existing items if day exists
                    newItinerary[dayId] = itinerary[dayId] || { id: dayId, title: `Day ${i}`, items: [] };
                }
                setItinerary(newItinerary);
            }
        }
    }, [startDate, endDate]);

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        // Reordering within the same list
        if (source.droppableId === destination.droppableId) {
            const dayId = source.droppableId;
            const day = itinerary[dayId];
            const newItems = Array.from(day.items);
            const [reorderedItem] = newItems.splice(source.index, 1);
            newItems.splice(destination.index, 0, reorderedItem);

            setItinerary({
                ...itinerary,
                [dayId]: { ...day, items: newItems },
            });
        } else {
            // Moving between lists
            const sourceDay = itinerary[source.droppableId];
            const destDay = itinerary[destination.droppableId];
            const sourceItems = Array.from(sourceDay.items);
            const destItems = Array.from(destDay.items);
            const [movedItem] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, movedItem);

            setItinerary({
                ...itinerary,
                [source.droppableId]: { ...sourceDay, items: sourceItems },
                [destination.droppableId]: { ...destDay, items: destItems },
            });
        }
    };

    const addToItinerary = (place, dayId = 'day-1') => {
        // Check if already in any day
        for (const day in itinerary) {
            if (itinerary[day].items.find(p => p.id === place.id)) {
                alert(`${place.name} is already in your itinerary!`);
                return;
            }
        }

        // Default to first available day if dayId not present (e.g. dynamic days changed)
        const targetDayId = itinerary[dayId] ? dayId : Object.keys(itinerary)[0];

        const day = itinerary[targetDayId];
        const newItems = [...day.items, place];
        setItinerary({
            ...itinerary,
            [targetDayId]: { ...day, items: newItems },
        });
        setMapCenter([place.lat, place.lng]);
    };

    const removeFromItinerary = (dayId, index) => {
        const day = itinerary[dayId];
        const newItems = Array.from(day.items);
        newItems.splice(index, 1);
        setItinerary({
            ...itinerary,
            [dayId]: { ...day, items: newItems },
        });
    };

    const openModal = (place) => {
        setSelectedPlace(place);
        setMapCenter([place.lat, place.lng]);
    };

    return (
        <div className={styles.plannerContainer}>
            {/* Left Sidebar: Browse Places */}
            <div className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2>Explore</h2>
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'dayTrips' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('dayTrips')}
                        >
                            Day Trips
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'weekendGetaways' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('weekendGetaways')}
                        >
                            Getaways
                        </button>
                    </div>
                </div>

                <div className={styles.placesList}>
                    {destinations[activeTab].map((place) => (
                        <div key={place.id} className={styles.placeCard} onClick={() => openModal(place)}>
                            <div className={styles.placeImage} style={{ backgroundImage: `url(${getImagePath(place.image)})` }}></div>
                            <div className={styles.placeContent}>
                                <h3>{place.name}</h3>
                                <p className={styles.placeDesc}>{place.description}</p>
                                <button
                                    className={styles.addBtn}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToItinerary(place);
                                    }}
                                >
                                    <Plus size={16} /> Add
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Center: Itinerary Timeline */}
            <div className={styles.itineraryPanel}>
                <div className={styles.itineraryHeader}>
                    <h2>Your Itinerary</h2>
                    <button className={styles.requestBtn} onClick={() => window.location.href = '/contact'}>
                        Request Quote
                    </button>
                </div>

                {/* Date Picker */}
                <div className={styles.datePickerSection}>
                    <div className={styles.dateInputGroup}>
                        <label>Start Date</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className={styles.dateInput}
                        />
                    </div>
                    <div className={styles.dateInputGroup}>
                        <label>End Date</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className={styles.dateInput}
                        />
                    </div>
                </div>

                <DragDropContext onDragEnd={onDragEnd}>
                    <div className={styles.daysContainer}>
                        {Object.values(itinerary).map((day, index) => {
                            // Calculate validation for this day
                            // Assumption: Day 1 starts at Bangalore. Subsequent days start from previous day's last item?
                            // For simplicity: Day 1 starts at Bangalore.
                            // If we want chain logic:
                            // let startLoc = index === 0 ? { lat: 12.9716, lng: 77.5946 } : getLastLocation(itinerary[`day-${index}`]);
                            // For now, let's validate each day independently assuming start from a hub or previous location is handled in "Total Distance" roughly.
                            // Actually, let's stick to the user's "250km per day" rule.
                            // We'll assume start from Bangalore for Day 1, and for others, maybe just point-to-point within the day?
                            // Let's use Bangalore as base for Day 1, and first item of Day N as start for Day N (if multiple items).

                            let startLoc = { lat: 12.9716, lng: 77.5946 }; // Default Bangalore
                            if (index > 0) {
                                // For Day 2+, start from the last location of Day 1? Or just calculate distance traversed IN that day?
                                // "Travelling should not cross 250km per day" usually means total driving.
                                // Let's assume point-to-point sum within the day.
                                if (day.items.length > 0) startLoc = { lat: day.items[0].lat, lng: day.items[0].lng };
                            }

                            const validation = validateDay(day.items, startLoc);

                            return (
                                <div key={day.id} className={styles.dayColumn}>
                                    <div className={styles.dayHeader}>
                                        <h3 className={styles.dayTitle}>{day.title}</h3>
                                        <div className={styles.dayStats}>
                                            <span>{validation.totalDistance} km</span> • <span>{validation.totalTime} hrs</span>
                                        </div>
                                    </div>

                                    {validation.warnings.length > 0 && (
                                        <div className={styles.warningBox}>
                                            {validation.warnings.map((w, i) => (
                                                <div key={i} className={styles.warningItem}>
                                                    <AlertTriangle size={14} /> {w}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <Droppable droppableId={day.id}>
                                        {(provided, snapshot) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                className={`${styles.dayList} ${snapshot.isDraggingOver ? styles.draggingOver : ''} ${validation.isValid ? '' : styles.invalidDay}`}
                                            >
                                                {day.items.length === 0 && (
                                                    <div className={styles.emptyDay}>Drag places here</div>
                                                )}
                                                {day.items.map((place, index) => (
                                                    <Draggable key={place.id} draggableId={place.id} index={index}>
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                className={`${styles.itineraryItem} ${snapshot.isDragging ? styles.dragging : ''}`}
                                                                onClick={() => setMapCenter([place.lat, place.lng])}
                                                            >
                                                                <div {...provided.dragHandleProps} className={styles.dragHandle}>
                                                                    <GripVertical size={16} />
                                                                </div>
                                                                <div className={styles.itemContent}>
                                                                    <h4>{place.name}</h4>
                                                                </div>
                                                                <button
                                                                    className={styles.deleteBtn}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        removeFromItinerary(day.id, index);
                                                                    }}
                                                                >
                                                                    <Trash2 size={14} />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            );
                        })}
                    </div>
                </DragDropContext>
            </div>

            {/* Right: Map */}
            <div className={styles.mapPanel}>
                <MapContainer center={[12.9716, 77.5946]} zoom={8} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />
                    <MapUpdater center={mapCenter} />

                    {/* Markers for all places in current tab */}
                    {destinations[activeTab].map((place) => (
                        <Marker
                            key={place.id}
                            position={[place.lat, place.lng]}
                            icon={createCustomIcon(place.image, place.name)}
                            eventHandlers={{ click: () => openModal(place) }}
                        >
                            <Tooltip direction="top" offset={[0, -20]} opacity={1} className={styles.customTooltip}>
                                <div className={styles.tooltipContent}>
                                    <div className={styles.tooltipTitle}>{place.name}</div>
                                    <div className={styles.tooltipDesc}>{place.description}</div>
                                    {place.attractions && place.attractions.length > 0 && (
                                        <div className={styles.tooltipAttractions}>
                                            Near: {place.attractions.slice(0, 2).map(a => a.name).join(', ')}
                                        </div>
                                    )}
                                </div>
                            </Tooltip>
                            <Popup>
                                <div className={styles.popup}>
                                    <h3>{place.name}</h3>
                                    <button onClick={() => addToItinerary(place)}>Add to Itinerary</button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                    {/* Markers for itinerary items (if not in current tab) */}
                    {Object.values(itinerary).flatMap(day => day.items).map((place) => (
                        <Marker
                            key={`itinerary-${place.id}`}
                            position={[place.lat, place.lng]}
                            icon={createCustomIcon(place.image, place.name)}
                        >
                            <Tooltip direction="top" offset={[0, -20]} opacity={1} className={styles.customTooltip}>
                                <div className={styles.tooltipContent}>
                                    <div className={styles.tooltipTitle}>{place.name}</div>
                                    <div className={styles.tooltipDesc}>{place.description}</div>
                                </div>
                            </Tooltip>
                            <Popup>
                                <div className={styles.popup}>
                                    <h3>{place.name}</h3>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            {/* Modal Detail View */}
            {selectedPlace && (
                <DestinationModal
                    place={selectedPlace}
                    onClose={() => setSelectedPlace(null)}
                    onAdd={addToItinerary}
                />
            )}

        </div>
    );
};

export default Destinations;
