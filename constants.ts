
import { Category, Photo } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-winter',
    name: 'Atmospheric Winter',
    slug: 'winter',
    description: 'A collection exploring the silence, texture, and muted palettes of the cold season.',
    coverImage: './images/snowycity-1.jpg'
  },
  {
    id: 'cat-newmexico',
    name: 'New Mexico',
    slug: 'newmexico',
    description: 'A collection exploring the landscapes and culture of New Mexico.',
    coverImage: './images/nm-1.jpg'
  },
  {
    id: 'cat-urban',
    name: 'Urban Exploration',
    slug: 'urban',
    description: 'Capturing the geometry, rhythm, and hidden narratives of city architecture.',
    coverImage: './images/urban-2.jpg'
  },
  {
    id: 'cat-natural',
    name: 'Natural Light',
    slug: 'nature',
    description: 'Studies of light and shadow within the natural landscape.',
    coverImage: './images/nature-1.jpg'
  },
  {
    id: 'cat-portrait',
    name: 'Portrait',
    slug: 'portrait',
    description: 'Intimate studies of character and emotion, capturing the essence of individuals through expressive portraiture.',
    coverImage: './images/portrait-1.jpg'
  }
];

export const PHOTOS: Photo[] = [
  // Winter Collection
  { 
    id: 'w1', 
    url: './images/snowycity-1.jpg',
    title: 'The First Frost', 
    category: 'winter', 
    description: 'Crystalline silence blankets the urban landscape—each snowflake an unwritten narrative against weathered brick and frozen architecture.', 
    location: 'Boston', 
    year: '2024' 
  },
  { 
    id: 'w2', 
    url: './images/snowycity-2.jpg', 
    title: 'Neon and Silence', 
    category: 'winter', 
    description: 'Neon bleeds into monochrome—the glow of street lamps pools across wet asphalt and vanishing footprints.', 
    location: 'Boston', 
    year: '2024' 
  },
  { 
    id: 'w3', 
    url: './images/snowycity-3.jpg', 
    title: 'Frozen Threshold', 
    category: 'winter', 
    description: 'Winter\'s geometry rendered in fog and frost—shadows drift across buildings like forgotten memories frozen in time.', 
    location: 'Boston', 
    year: '2024' 
  },
  { 
    id: 'w4', 
    url: './images/snowycity-4.jpg', 
    title: 'City in Repose', 
    category: 'winter', 
    description: 'Solitary figures navigate the quiet streets where snow softens edges and muffles the city\'s rhythm into whispered silence.', 
    location: 'Boston', 
    year: '2024' 
  },
  { 
    id: 'w5', 
    url: './images/snowycity-5.jpg', 
    title: 'Between Worlds', 
    category: 'winter', 
    description: 'A liminal space where snow erases the boundary between earth and sky—the city becomes abstract, stripped of color and distraction.', 
    location: 'Boston', 
    year: '2024' 
  },
    { 
    id: 'w6', 
    url: './images/snowycity-6.jpg', 
    title: 'Monochrome Breath', 
    category: 'winter', 
    description: 'The city dissolves into grayscale—light and shadow dance across pristine snow while the world holds its breath.', 
    location: 'Boston', 
    year: '2024' 
  },

  // new mexico collection
  { 
    id: 'nm1', 
    url: './images/nm-1.jpg', 
    title: 'Desert Awakening', 
    category: 'newmexico', 
    description: 'Golden rays pierce the mesas, transforming rust-colored stone into molten sculpture—a landscape awakening to ancient rhythms.', 
    location: 'Albuquerque', 
    year: '2024'
  },
  { 
    id: 'nm2', 
    url: './images/nm-2.jpg', 
    title: 'Molten Mesas', 
    category: 'newmexico', 
    description: 'Shadows retreat from the advancing sun, revealing layers of desert geology etched into stone—a narrative written in millions of years.', 
    location: 'Santa Fe', 
    year: '2024'
  },
  { 
    id: 'nm3', 
    url: './images/nm-3.jpg', 
    title: 'Stone and Sunrise', 
    category: 'newmexico', 
    description: 'Terraced ridges of red and ochre catch the first blush of dawn—nature\'s palette refined through wind and time.', 
    location: 'Albuquerque', 
    year: '2024'
  },
  { 
    id: 'nm4', 
    url: './images/nm-4.jpg', 
    title: 'Luminous Horizon', 
    category: 'newmexico', 
    description: 'Luminous peaks emerge from darkness as the sun claims the horizon—vast solitude captured in a single moment of transformation.', 
    location: 'Santa Fe', 
    year: '2024'
  },
  { 
    id: 'nm5', 
    url: './images/nm-5.jpg', 
    title: 'Canyon of Light', 
    category: 'newmexico', 
    description: 'Warm amber spills across sculptured plateaus—each shadow a canyon telling stories of erosion and endurance in the heartland.', 
    location: 'Shiprock', 
    year: '2024'
  },
  { 
    id: 'nm6', 
    url: './images/nm-6.jpg', 
    title: 'Ancient Fire', 
    category: 'newmexico', 
    description: 'The landscape ignites with celestial fire—stratified rock formations glow as ancient deserts greet the breaking day.', 
    location: 'Santa Fe', 
    year: '2024'
  },

  // Urban Collection
  { 
    id: 'u1', 
    url: './images/urban-1.jpg', 
    title: 'Steel Geometry', 
    category: 'urban', 
    description: 'Soaring glass and steel converge in perfect angles—a symphony of modern architecture framing infinite sky and possibility.', 
    location: 'Los Angeles', 
    year: '2023' 
  },
  { 
    id: 'u2', 
    url: './images/urban-5.jpg', 
    title: 'Transient Traces', 
    category: 'urban', 
    description: 'Transience frozen in motion—silhouettes fade into the urban landscape, leaving only impressions of journeys never to intersect again.', 
    location: 'Los Angeles', 
    year: '2023' 
  },
  { 
    id: 'u3', 
    url: './images/urban-3.jpg', 
    title: 'The Blur of Hours', 
    category: 'urban', 
    description: 'Time becomes fluid in this passage of countless lives—each blurred figure a story merging into the city\'s collective narrative.', 
    location: 'Boston Seaport', 
    year: '2020' 
  },
  { 
    id: 'u4', 
    url: './images/urban-4.jpg', 
    title: 'Velocity and Shadow', 
    category: 'urban', 
    description: 'Velocity captured—the rush of daily commerce flows through corridors of commerce where solitude meets the collective pulse.', 
    location: 'Boston Seaport', 
    year: '2024' 
  },
  { 
    id: 'u5', 
    url: './images/urban-2.jpg', 
    title: 'Kinetic Convergence', 
    category: 'urban', 
    description: 'Human motion dissolves into abstraction—strangers converge and scatter like particles in the kinetic heart of the city.', 
    location: 'Los Angeles', 
    year: '2023' 
  },
  { 
    id: 'u6', 
    url: './images/urban-6.jpg', 
    title: 'Tropical Reverie', 
    category: 'urban', 
    description: 'Golden hour bathes Miami Beach in molten warmth—the promenade glows as sunset transforms the urban shoreline into a dreamscape where ocean meets architecture in liquid light.', 
    location: 'Miami', 
    year: '2023' 
  },
  { 
    id: 'u7', 
    url: './images/urban-7.jpg', 
    title: 'Urban Echoes', 
    category: 'urban', 
    description: 'Reflections ripple across glass facades—fleeting encounters and architectural echoes shape the downtown rhythm.', 
    location: 'Boston downtown', 
    year: '2025' 
  },
  { 
    id: 'u8', 
    url: './images/urban-8.jpg', 
    title: 'Departure Light', 
    category: 'urban', 
    description: 'Sunlight slices through atrium glass at the library—stillness and geometry frame moments of departure and memory.', 
    location: 'JFK library', 
    year: '2025' 
  },
  { 
    id: 'u9', 
    url: './images/urban-9.jpg', 
    title: 'Notre-Dame Lightshow', 
    category: 'urban', 
    description: 'The Notre-Dame Basilica is transformed by a vibrant light show—animated projections paint the historic façade in color and motion, blending sacred architecture with contemporary spectacle.', 
    location: 'Montréal', 
    year: '2025' 
  },
  { 
    id: 'u10', 
    url: './images/urban-10.jpg', 
    title: 'Crossing Lines', 
    category: 'urban', 
    description: 'Intersections of motion and stillness—commuters carve clean lines of light and shadow at dusk.', 
    location: 'Boston downtown', 
    year: '2025' 
  },
  { 
    id: 'u11', 
    url: './images/urban-11.jpg', 
    title: 'Underground City', 
    category: 'urban', 
    description: 'A subterranean tapestry of passageways, boutiques, and transit—Montréal’s Underground City hums with layered urban life beneath the streets.', 
    location: 'Montréal', 
    year: '2025' 
  },

  // Nature Collection
  { 
    id: 'n1', 
    url: './images/nature-1.jpg', 
    title: 'Alpine Transfiguration', 
    category: 'nature', 
    description: 'Alpenglow transfigures the mountain—summits ablaze with honeyed light as day surrenders to twilight\'s violet embrace.', 
    location: 'Antelope Valley', 
    year: '2023' 
  },
  { 
    id: 'n2', 
    url: './images/nature-2.jpg', 
    title: 'Eternal Tide', 
    category: 'nature', 
    description: 'The ocean\'s breath rendered eternal—water caresses ancient rock as time dissolves into ethereal mist and weathered silence.', 
    location: 'Antelope Valley', 
    year: '2023' 
  },
  { 
    id: 'n3', 
    url: './images/nature-3.jpg', 
    title: 'Summit\'s Golden Hour', 
    category: 'nature', 
    description: 'Sunset ignites the slopes in amber and rose—a fleeting moment where earth reaches toward the heavens in golden communion.', 
    location: 'Antelope Valley', 
    year: '2023' 
  },
  { 
    id: 'n4', 
    url: './images/nature-7.jpg', 
    title: 'Silk and Stone', 
    category: 'nature', 
    description: 'Waves become silk through patient exposure—the shore\'s rhythm transcends to create a dreamscape where stone and water merge.', 
    location: 'Antelope Valley', 
    year: '2023' 
  },
  { 
    id: 'n5', 
    url: './images/nature-5.jpg', 
    title: 'Celestial Crowning', 
    category: 'nature', 
    description: 'The final hour of daylight crowns the peaks in radiant fire—a celestial performance where mountains stand as witnesses to cosmic beauty.', 
    location: 'Grand Canyon', 
    year: '2023' 
  },
  { 
    id: 'n6', 
    url: './images/nature-6.jpg', 
    title: 'Timeless Shore', 
    category: 'nature', 
    description: 'The shoreline suspended in time—infinite waves collapse into singular grace, each moment a meditation on permanence and change.', 
    location: 'Grand Canyon', 
    year: '2023' 
  },
  { 
    id: 'n8', 
    url: './images/nature-8.jpg', 
    title: 'Coastal Sanctuary', 
    category: 'nature', 
    description: 'A solitary boat rests in the sheltered bay—emerald grass frames pristine waters beneath azure skies streaked with white clouds, a moment of serene maritime tranquility.', 
    location: 'Ogunquit, Maine', 
    year: '2025' 
  },
  { 
    id: 'n9', 
    url: './images/nature-9.jpg', 
    title: 'Hydrangea Garden', 
    category: 'nature', 
    description: 'Abundant hydrangeas bloom in vibrant hues—their delicate clusters paint the cottage garden in waves of color, a living palette of grace and horticultural beauty.', 
    location: 'Chatham, Massachusetts', 
    year: '2025' 
  },
  { 
    id: 'n10', 
    url: './images/nature-11.jpg', 
    title: 'Flourishing Petals', 
    category: 'nature', 
    description: 'Radiant hydrangea clusters cascade along the home\'s threshold—their rich, blooming presence transforms the entrance into a sanctuary of botanical abundance and natural elegance.', 
    location: 'Chatham, Massachusetts', 
    year: '2025' 
  },

  // Portrait Collection
  { 
    id: 'p4', 
    url: './images/portrait-4.jpg', 
    title: 'City Reflections',
    category: 'portrait',
    location: 'Boston downtown',
    year: '2024'
  },
  { 
    id: 'p5', 
    url: './images/portrait-5.jpg', 
    title: 'City Reflections',
    category: 'portrait',
    location: 'Boston downtown',
    year: '2024'
  },
  { 
    id: 'p6', 
    url: './images/portrait-6.jpg', 
    title: 'City Reflections',
    category: 'portrait',
    location: 'Boston downtown',
    year: '2024'
  },
  { 
    id: 'p1', 
    url: './images/portrait-1.jpg', 
    title: 'Grace by the Church',
    category: 'portrait',
    location: 'Christian Science Plaza, Boston',
    year: '2024'
  },
  { 
    id: 'p2', 
    url: './images/portrait-2.jpg', 
    title: 'Grace by the Church',
    category: 'portrait',
    location: 'Christian Science Plaza, Boston',
    year: '2024'
  },
  { 
    id: 'p3', 
    url: './images/portrait-3.jpg', 
    title: 'Grace by the Church',
    category: 'portrait',
    location: 'Christian Science Plaza, Boston',
    year: '2024'
  },
    { 
    id: 'p7', 
    url: './images/portrait-7.jpg', 
    title: 'Judy & Nick',
    category: 'portrait',
    location: 'Boston common',
    year: '2024'
  },
  { 
    id: 'p8', 
    url: './images/portrait-8.jpg', 
    title: 'Judy & Nick',
    category: 'portrait',
    location: 'Boston common',
    year: '2024'
  },
  { 
    id: 'p9', 
    url: './images/portrait-9.jpg', 
    title: 'Judy & Nick',
    category: 'portrait',
    location: 'Boston common',
    year: '2024'
  },
];
