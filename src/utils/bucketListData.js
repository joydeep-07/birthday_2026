import {
  Compass,
  Play,
  Star,
  Bike,
  ShoppingBag,
  CloudRain,
  Car,
  Coffee,
  Heart,
  MapPin,
  Music,
  Plane,
  GlassWater,
  Wine,
} from "lucide-react";

export const destinationTabs = [
  "Popular",
  "Paris",
  "Japan",
  "Goa",
  "Clubbing",
  "Drinks",
  "Rainy Dates",
  "More",
];

export const tabContentMap = {
  Popular: [
    {
      title: "Paris, Just Us Two",
      location: "Paris, France",
      image:
        "https://i.pinimg.com/1200x/a2/82/18/a28218d31aab2ac77437b03aa35f2651.jpg",
      icon: Plane,
    },
    {
      title: "Japan Adventure",
      location: "Tokyo, Japan",
      image:
        "https://i.pinimg.com/736x/b0/27/0d/b0270d97b0a09136bf7e844190863d22.jpg",
      icon: Compass,
    },
    {
      title: "Goa Beach Escape",
      location: "Goa, India",
      image:
        "https://i.pinimg.com/736x/ff/70/20/ff702001ec5f13fdfa1b14ad97fa1344.jpg",
      icon: MapPin,
    },
    {
      title: "Getting Drunk Together",
      location: "Somewhere with music",
      image:
        "https://i.pinimg.com/736x/de/2c/82/de2c82fca4203526da188f954ffbdad9.jpg",
      icon: Wine,
    },
  ],

  Paris: [
    {
      title: "Eiffel Tower Sparkle at Night",
      location: "Chumu o khabo 🫦",
      image:
        "https://i.pinimg.com/736x/62/0d/5d/620d5d429278224d04c777f65aa593a2.jpg",
      icon: Plane,
    },
    {
      title: "Roof Top Date",
      location: "With Red wine, Paris 🍷",
      image:
        "https://i.pinimg.com/736x/bc/6c/d2/bc6cd286e8c7412ed481e4e13a955c35.jpg",
      icon: Coffee,
    },
    {
      title: "Sham ko Paris ki sadko me ghumenge",
      location: "Aur yaha bhi kiss karenge 💋💋💋",
      image:
        "https://i.pinimg.com/736x/f0/10/45/f01045cabec889571e8340d267af6c01.jpg",
      icon: Heart,
    },
    {
      title: "Croissants & Coffee",
      location: "Apki favourite jo hai 👀",
      image:
        "https://i.pinimg.com/736x/a7/b6/c6/a7b6c6c6a49f8206fe4e89c7c35f6b95.jpg",
      icon: ShoppingBag,
    },
  ],

  Japan: [
    {
      title: "Cherry Blossoms in Full Bloom",
      location: "Tokyo, Japan",
      image:
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=85",
      icon: Compass,
    },
    {
      title: "Late Night Ramen Run",
      location: "Shinjuku Alleyways",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=85",
      icon: Coffee,
    },
    {
      title: "Explore Neon City Streets",
      location: "Akihabara & Shibuya",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=85",
      icon: MapPin,
    },
    {
      title: "Peaceful Temple Gardens",
      location: "Kyoto, Japan",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=85",
      icon: Star,
    },
  ],

  Goa: [
    {
      title: "Rent a Scooter & Chase Sunsets",
      location: "Chapora, Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=85",
      icon: Bike,
    },
    {
      title: "Late Night Beach Waves",
      location: "Palolem Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=85",
      icon: MapPin,
    },
    {
      title: "Cozy Beach Shack Dinner",
      location: "Anjuna Shoreline",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85",
      icon: Wine,
    },
    {
      title: "Long Coastal Drive",
      location: "Goa Countryside",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=85",
      icon: Car,
    },
  ],

  Clubbing: [
    {
      title: "Dress Up & Dance All Night",
      location: "VIP Club Floor",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=85",
      icon: Music,
    },
    {
      title: "Concert Front Row Experience",
      location: "Live Music Arena",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=85",
      icon: Play,
    },
    {
      title: "Rooftop Party Beats",
      location: "City Skyline Club",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=85",
      icon: Star,
    },
    {
      title: "Late Night Neon Vibes",
      location: "Downtown Lounge",
      image:
        "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=600&q=85",
      icon: Wine,
    },
  ],

  Drinks: [
    {
      title: "Cocktails Only When Together",
      location: "Skyline Cocktail Bar",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=85",
      icon: GlassWater,
    },
    {
      title: "Wine Tasting Evening",
      location: "Vineyard Cellar",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=85",
      icon: Wine,
    },
    {
      title: "Warm Coffee & Deep Talks",
      location: "Corner Café",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=85",
      icon: Coffee,
    },
    {
      title: "Sunset Drinks by the Water",
      location: "Pier Bar",
      image:
        "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=600&q=85",
      icon: Heart,
    },
  ],

  "Rainy Dates": [
    {
      title: "Cozy Indoor Movie Marathon",
      location: "Our Living Room",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=85",
      icon: CloudRain,
    },
    {
      title: "Rain Walk Under One Umbrella",
      location: "City Streets in Rain",
      image:
        "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=600&q=85",
      icon: Heart,
    },
    {
      title: "Hot Chocolate at a Rainy Window",
      location: "Glasshouse Café",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=85",
      icon: Coffee,
    },
    {
      title: "Long Drive Listening to Rain",
      location: "Highway with Music",
      image:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=85",
      icon: Car,
    },
  ],

  More: [
    {
      title: "Spontaneous Shopping Spree",
      location: "Boutique Street",
      image:
        "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=600&q=85",
      icon: ShoppingBag,
    },
    {
      title: "Late Night Long Drive Adventure",
      location: "Somewhere New",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=85",
      icon: Car,
    },
    {
      title: "Stargazing Away From City Lights",
      location: "Mountain Viewpoint",
      image:
        "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=85",
      icon: Star,
    },
    {
      title: "Adding More Dreams to the List",
      location: "Everywhere Together",
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=600&q=85",
      icon: Compass,
    },
  ],

};

export const stories = [
  {
    category: "Paris",
    title:
      "Walk around Paris at night, see the Eiffel Tower sparkle and find a tiny café together.",
    date: "Bucket List • Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=85",
  },
  {
    category: "Japan",
    title:
      "Take a trip to Japan, explore Tokyo together and spend a day surrounded by cherry blossoms.",
    date: "Bucket List • Japan",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=85",
  },
  {
    category: "Goa",
    title:
      "Go to Goa, rent a scooter, chase sunsets and spend the evening somewhere near the sea.",
    date: "Bucket List • Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=85",
  },
  {
    category: "Night Out",
    title:
      "Dress up, go clubbing, dance together and have a drink only when we're together.",
    date: "Bucket List • Us",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=85",
  },
];
