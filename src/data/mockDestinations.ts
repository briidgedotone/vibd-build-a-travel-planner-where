import { Destination } from '@/types'

export const mockDestinations: Destination[] = [
  {
    id: '1',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light, famous for its stunning architecture, art museums, and romantic atmosphere.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    rating: 4.8,
    coordinates: {
      lat: 48.8566,
      lng: 2.3522
    },
    popularAttractions: [
      'Eiffel Tower',
      'Louvre Museum',
      'Notre-Dame Cathedral',
      'Arc de Triomphe',
      'Montmartre'
    ],
    bestTimeToVisit: 'April to June, September to November'
  },
  {
    id: '2',
    name: 'Tokyo',
    country: 'Japan',
    description: 'A bustling metropolis that perfectly blends ultramodern and traditional aspects of Japanese culture.',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    rating: 4.7,
    coordinates: {
      lat: 35.6762,
      lng: 139.6503
    },
    popularAttractions: [
      'Tokyo Skytree',
      'Senso-ji Temple',
      'Shibuya Crossing',
      'Meiji Shrine',
      'Imperial Palace'
    ],
    bestTimeToVisit: 'March to May, September to November'
  },
  {
    id: '3',
    name: 'New York City',
    country: 'USA',
    description: 'The Big Apple offers world-class dining, shopping, and entertainment options alongside iconic landmarks.',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.6,
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    popularAttractions: [
      'Statue of Liberty',
      'Central Park',
      'Empire State Building',
      'Times Square',
      'Brooklyn Bridge'
    ],
    bestTimeToVisit: 'April to June, September to November'
  },
  {
    id: '4',
    name: 'Rome',
    country: 'Italy',
    description: 'The Eternal City is a living museum of ancient ruins, artistic masterpieces, and vibrant street life.',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80',
    rating: 4.7,
    coordinates: {
      lat: 41.9028,
      lng: 12.4964
    },
    popularAttractions: [
      'Colosseum',
      'Roman Forum',
      'Vatican City',
      'Trevi Fountain',
      'Pantheon'
    ],
    bestTimeToVisit: 'April to May, September to October'
  },
  {
    id: '5',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Island paradise known for its lush landscapes, beautiful beaches, spiritual retreats and vibrant culture.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1538&q=80',
    rating: 4.6,
    coordinates: {
      lat: -8.3405,
      lng: 115.0920
    },
    popularAttractions: [
      'Ubud Monkey Forest',
      'Tanah Lot Temple',
      'Tegallalang Rice Terraces',
      'Uluwatu Temple',
      'Kuta Beach'
    ],
    bestTimeToVisit: 'April to October'
  },
  {
    id: '6',
    name: 'Barcelona',
    country: 'Spain',
    description: 'A vibrant city renowned for its distinctive architecture, Mediterranean beaches, and culinary delights.',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.5,
    coordinates: {
      lat: 41.3851,
      lng: 2.1734
    },
    popularAttractions: [
      'Sagrada Familia',
      'Park Güell',
      'Casa Batlló',
      'La Rambla',
      'Gothic Quarter'
    ],
    bestTimeToVisit: 'May to June, September to October'
  },
  {
    id: '7',
    name: 'Sydney',
    country: 'Australia',
    description: 'Harbor city famous for its iconic Opera House, beautiful beaches, and vibrant cultural scene.',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.7,
    coordinates: {
      lat: -33.8688,
      lng: 151.2093
    },
    popularAttractions: [
      'Sydney Opera House',
      'Sydney Harbour Bridge',
      'Bondi Beach',
      'Royal Botanic Garden',
      'Darling Harbour'
    ],
    bestTimeToVisit: 'September to November, March to May'
  },
  {
    id: '8',
    name: 'Santorini',
    country: 'Greece',
    description: 'Stunning island known for its white-washed buildings, blue domes, and breathtaking sunsets over the caldera.',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    rating: 4.8,
    coordinates: {
      lat: 36.3932,
      lng: 25.4615
    },
    popularAttractions: [
      'Oia Village',
      'Fira',
      'Red Beach',
      'Ancient Thera',
      'Akrotiri Archaeological Site'
    ],
    bestTimeToVisit: 'April to May, September to October'
  },
  {
    id: '9',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Former imperial capital renowned for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.7,
    coordinates: {
      lat: 35.0116,
      lng: 135.7681
    },
    popularAttractions: [
      'Fushimi Inari Shrine',
      'Kinkaku-ji (Golden Pavilion)',
      'Arashiyama Bamboo Grove',
      'Gion District',
      'Kiyomizu-dera Temple'
    ],
    bestTimeToVisit: 'March to May, October to November'
  },
  {
    id: '10',
    name: 'Cape Town',
    country: 'South Africa',
    description: 'Stunning coastal city with dramatic mountain backdrops, beautiful beaches, and rich cultural diversity.',
    imageUrl: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    rating: 4.6,
    coordinates: {
      lat: -33.9249,
      lng: 18.4241
    },
    popularAttractions: [
      'Table Mountain',
      'Cape of Good Hope',
      'Robben Island',
      'V&A Waterfront',
      'Boulders Beach'
    ],
    bestTimeToVisit: 'February to April, September to November'
  },
  {
    id: '11',
    name: 'Machu Picchu',
    country: 'Peru',
    description: 'Iconic Incan citadel set high in the Andes Mountains, offering breathtaking archaeological wonders.',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.9,
    coordinates: {
      lat: -13.1631,
      lng: -72.5450
    },
    popularAttractions: [
      'Sun Gate',
      'Huayna Picchu',
      'Inca Trail',
      'Temple of the Sun',
      'Intihuatana Stone'
    ],
    bestTimeToVisit: 'April to October'
  },
  {
    id: '12',
    name: 'Dubai',
    country: 'United Arab Emirates',
    description: 'Futuristic city known for luxury shopping, ultramodern architecture, and lively nightlife.',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.6,
    coordinates: {
      lat: 25.2048,
      lng: 55.2708
    },
    popularAttractions: [
      'Burj Khalifa',
      'Palm Jumeirah',
      'Dubai Mall',
      'Dubai Marina',
      'Dubai Desert Safari'
    ],
    bestTimeToVisit: 'November to April'
  }
]