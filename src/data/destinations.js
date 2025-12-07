export const destinations = {
    dayTrips: [
        {
            id: 'nandi-hills',
            name: 'Nandi Hills',
            lat: 13.3702,
            lng: 77.6835,
            description: 'A historic hill fortress and popular weekend destination known for its stunning sunrise views and pleasant weather.',
            image: 'https://images.unsplash.com/photo-1590416995329-87c126602360?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: "Tipu's Drop", description: 'A cliff face at a 600m height.' },
                { name: 'Bhoga Nandeeshwara Temple', description: 'A 9th-century Hindu temple.' },
                { name: 'Amruth Sarovar', description: 'A beautiful water tank.' },
                { name: 'Muddenahalli', description: 'The birthplace of Sir M. Visvesvaraya.' }
            ],
            resorts: [
                'Clarks Exotica Convention, Resort & Spa',
                'Signature Club Resort'
            ]
        },
        {
            id: 'ramanagara',
            name: 'Ramanagara',
            lat: 12.7150,
            lng: 77.2813,
            description: 'Famous for its rocky terrain and silk cocoon markets, this place gained fame from the movie "Sholay".',
            image: 'https://images.unsplash.com/photo-1600619286683-160436923456?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Ramdevara Betta', description: 'The hill famous from the movie "Sholay".' },
                { name: 'Janapada Loka', description: 'A folk museum.' },
                { name: 'Kanva Reservoir', description: 'A serene artificial lake.' }
            ],
            resorts: [
                'Shilhaandara Resort'
            ]
        },
        {
            id: 'savandurga',
            name: 'Savandurga',
            lat: 12.9196,
            lng: 77.2928,
            description: 'One of the largest monolith hills in Asia, offering a challenging trek and scenic views.',
            image: 'https://images.unsplash.com/photo-1622307583606-560641e74720?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Savandi Veerabhadreshwara Swamy', description: 'Ancient temple at the foothills.' },
                { name: 'Manchanabele Dam', description: 'A dam across the Arkavathy river.' }
            ],
            resorts: [
                'Savandurga Valley Resort'
            ]
        },
        {
            id: 'skandagiri',
            name: 'Skandagiri',
            lat: 13.4185,
            lng: 77.6839,
            description: 'Known for its night treks and the spectacular view of clouds beneath you at sunrise.',
            image: 'https://images.unsplash.com/photo-1615887023516-9b6c5062a5a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Papagni Mutt', description: 'A temple at the foothills.' },
                { name: 'Chikkaballapur town', description: 'Nearby town with local culture.' }
            ],
            resorts: [
                'Mount Palazzo'
            ]
        },
        {
            id: 'anthargange',
            name: 'Anthargange',
            lat: 13.1438,
            lng: 78.2006,
            description: 'A rocky hill range famous for its caves and volcanic rock formations.',
            image: 'https://images.unsplash.com/photo-1582558452363-233777467771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Kolar Gold Fields', description: 'The now-defunct gold mines.' },
                { name: 'Kotilingeshwara Temple', description: 'A temple with a huge number of lingas.' },
                { name: 'Someshwara Temple, Kolar', description: 'Historic temple.' }
            ],
            resorts: [
                'Silvanest Resort'
            ]
        },
        {
            id: 'bannerghatta',
            name: 'Bannerghatta National Park',
            lat: 12.8009,
            lng: 77.5777,
            description: 'A biological park close to the city, hosting a zoo, safari, and butterfly park.',
            image: 'https://images.unsplash.com/photo-1544896434-d36ce4071f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Butterfly Park', description: 'Within the national park premises.' },
                { name: 'Zoo and Safari', description: 'Tiger and Lion safari.' }
            ],
            resorts: [
                'Bannerghatta Nature Camp (Jungle Lodges & Resorts)'
            ]
        },
        {
            id: 'shivanasamudra',
            name: 'Shivanasamudra Waterfalls',
            lat: 12.2936,
            lng: 77.1706,
            description: 'A spectacular segmented waterfall on the river Kaveri.',
            image: 'https://images.unsplash.com/photo-1569827633538-4f5145326755?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Gaganachukki and Bharachukki Falls', description: 'The two sections of the falls.' },
                { name: 'Talakadu', description: 'A historical site with buried temples.' },
                { name: 'Somanathapura', description: 'Home to the Chennakesava Temple.' }
            ],
            resorts: [
                'Hotel Mayura Gaganachukki'
            ]
        },
        {
            id: 'hogenakkal',
            name: 'Hogenakkal Falls',
            lat: 12.1182,
            lng: 77.7770,
            description: 'Often referred to as the "Niagara of India", known for its medicinal baths and coracle rides.',
            image: 'https://images.unsplash.com/photo-1629863836373-305886657800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Melagiri Hills', description: 'Scenic hills nearby.' },
                { name: 'Pennagaram village', description: 'Local village experience.' }
            ],
            resorts: [
                'Hotel Tamilnadu'
            ]
        }
    ],
    weekendGetaways: [
        {
            id: 'mysore',
            name: 'Mysore',
            lat: 12.2958,
            lng: 76.6394,
            description: 'The City of Palaces, known for its heritage structures and yoga centers.',
            image: 'https://images.unsplash.com/photo-1582555627756-1279294f5e73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Mysore Palace', description: 'The historical royal residence.' },
                { name: 'Brindavan Gardens', description: 'Famous for its musical fountain.' },
                { name: 'Chamundi Hills', description: 'With the Chamundeshwari Temple.' },
                { name: 'Srirangapatna', description: 'The historic capital of Tipu Sultan.' },
                { name: 'Ranganathittu Bird Sanctuary', description: 'Bird watching haven.' }
            ],
            resorts: [
                'Radisson Blu Plaza Hotel Mysore',
                'Grand Mercure Mysore',
                'Royal Orchid Metropole Mysore'
            ]
        },
        {
            id: 'coorg',
            name: 'Coorg (Kodagu)',
            lat: 12.3375,
            lng: 75.8069,
            description: 'Known as the Scotland of India, famous for its coffee plantations and misty hills.',
            image: 'https://images.unsplash.com/photo-1590422749845-816709d79902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Abbey Falls', description: 'A scenic waterfall.' },
                { name: "Raja's Seat", description: 'A garden with a view of the sunset.' },
                { name: 'Dubare Elephant Camp', description: 'For elephant interactions.' },
                { name: 'Talakaveri', description: 'The source of the river Kaveri.' },
                { name: 'Namdroling Monastery', description: 'Golden Temple.' }
            ],
            resorts: [
                'The Tamara Coorg',
                'Evolve Back, Coorg',
                'Taj Madikeri Resort & Spa, Coorg'
            ]
        },
        {
            id: 'chikmagalur',
            name: 'Chikmagalur',
            lat: 13.3153,
            lng: 75.7754,
            description: 'A coffee land with serene environment and lush green hills.',
            image: 'https://images.unsplash.com/photo-1598322066601-5c96f2382e56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Mullayanagiri', description: 'The highest peak in Karnataka.' },
                { name: 'Baba Budangiri', description: 'A mountain in the Dattagiri Hill Range.' },
                { name: 'Hebbe Falls', description: 'A waterfall within a coffee estate.' },
                { name: 'Kudremukh National Park', description: 'Biodiversity hotspot.' },
                { name: 'Kemmangundi', description: 'A hill station with ornamental gardens.' }
            ],
            resorts: [
                'The Serai Chikmagalur',
                'Trivik Hotels & Resorts, Chikmagalur',
                'Java Rain Resorts'
            ]
        },
        {
            id: 'ooty',
            name: 'Ooty',
            lat: 11.4102,
            lng: 76.6950,
            description: 'Queen of Hill Stations, known for its tea gardens and colonial charm.',
            image: 'https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Ooty Botanical Gardens', description: 'Exotic plants and flowers.' },
                { name: 'Ooty Lake', description: 'Boating and scenic views.' },
                { name: 'Doddabetta Peak', description: 'The highest point in the Nilgiris.' },
                { name: 'Coonoor', description: "A nearby hill station with Sim's Park." },
                { name: 'Nilgiri Mountain Railway', description: 'Toy train ride.' }
            ],
            resorts: [
                'Sterling Ooty Fern Hill',
                'Savoy - IHCL SeleQtions',
                'Gem Park Ooty'
            ]
        },
        {
            id: 'wayanad',
            name: 'Wayanad',
            lat: 11.6854,
            lng: 76.1320,
            description: 'A rural district in Kerala known for its spice plantations and wildlife.',
            image: 'https://images.unsplash.com/photo-1603957262102-123456789012?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Edakkal Caves', description: 'With ancient petroglyphs.' },
                { name: 'Soochipara Falls', description: 'A three-tiered waterfall.' },
                { name: 'Banasura Sagar Dam', description: 'The largest earthen dam in India.' },
                { name: 'Chembra Peak', description: 'Trekking destination.' },
                { name: 'Pookode Lake', description: 'Freshwater lake.' }
            ],
            resorts: [
                'Vythiri Village Resort',
                'The Windflower Resort & Spa, Vythiri',
                'Arayal Resorts'
            ]
        },
        {
            id: 'bheemeshwari',
            name: 'Bheemeshwari',
            lat: 12.3050,
            lng: 77.2750,
            description: 'A nature lover’s paradise, ideal for fishing and trekking.',
            image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Cauvery Fishing Camp', description: 'Angling destination.' },
                { name: 'Galibore Fishing Camp', description: 'Nature camp.' },
                { name: 'Doddamakali Nature Camp', description: 'Adventure camp.' }
            ],
            resorts: [
                'Bheemeshwari Nature & Adventure Camp (Jungle Lodges & Resorts)'
            ]
        },
        {
            id: 'kabini',
            name: 'Kabini',
            lat: 11.9333,
            lng: 76.3500,
            description: 'Famous for its wildlife sanctuary and luxury jungle lodges.',
            image: 'https://images.unsplash.com/photo-1589136777351-943288250292?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Nagarhole National Park', description: 'Tiger and elephant sightings.' },
                { name: 'Kabini River', description: 'Boat safaris.' },
                { name: 'Iruppu Falls', description: 'Freshwater falls.' }
            ],
            resorts: [
                'Evolve Back, Kabini',
                'The Serai Kabini',
                'Kabini River Lodge (Jungle Lodges & Resorts)'
            ]
        },
        {
            id: 'sakleshpur',
            name: 'Sakleshpur',
            lat: 12.9716,
            lng: 75.7876,
            description: 'A hill station in the Western Ghats known for its slopes covered in coffee, tea and spice plantations.',
            image: 'https://images.unsplash.com/photo-1605629244098-8f670f7982e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Manjarabad Fort', description: 'A star-shaped fort.' },
                { name: 'Bisle Ghat Viewpoint', description: 'Panoramic views.' },
                { name: 'Sakaleswara Temple', description: 'Ancient Shiva temple.' }
            ],
            resorts: [
                'Eka Resort',
                'The Hills Resort'
            ]
        },
        {
            id: 'hampi',
            name: 'Hampi',
            lat: 15.3350,
            lng: 76.4600,
            description: 'A UNESCO World Heritage Site featuring the ruins of the Vijayanagara Empire.',
            image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            attractions: [
                { name: 'Virupaksha Temple', description: 'Active Hindu temple.' },
                { name: 'Vijaya Vittala Temple', description: 'With the stone chariot.' },
                { name: 'Matanga Hill', description: 'Best sunset view.' },
                { name: 'Hemakuta Hill Temple Complex', description: 'Cluster of temples.' },
                { name: 'Anegundi village', description: 'Historic village.' }
            ],
            resorts: [
                'Evolve Back, Hampi',
                'Hyatt Place Hampi'
            ]
        }
    ]
};
