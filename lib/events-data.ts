import type { Event, EventPhoto } from "@/components/gallery/events-gallery"

function generatePhotos(folder: string, count: number, eventTitle: string): EventPhoto[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/events/${folder}/${i + 1}.jpg`,
    title: `${eventTitle} - Photo ${i + 1}`,
  }))
}

export const SCHOOL_EVENTS: Event[] = [
  {
    id: 1,
    title: "Annual Sports Day 2026",
    date: "February 20, 2026",
    time: "9:00 AM - 3:30 PM",
    location: "Sai English High School Grounds",
    category: "Sports",
    image: "/events/sportsday-2026/1.jpg",
    description:
      "A thrilling showcase of athletic excellence, discipline, and teamwork featuring track and field events, march-past, relays, and medal ceremonies.",
    photos: generatePhotos("sportsday-2026", 14, "Annual Sports Day 2026"),
  },
  {
    id: 2,
    title: "Independence Day Celebration",
    date: "August 15, 2026",
    time: "8:00 AM - 11:30 AM",
    location: "Sai English High School Campus",
    category: "Cultural",
    image: "/events/independence-day/1.jpg",
    description:
      "Honoring India's freedom with patriotic pride through tricolor flag hoisting, national anthem, ceremonial drills, and heartfelt student performances.",
    photos: generatePhotos("independence-day", 11, "Independence Day Celebration"),
  },
  {
    id: 3,
    title: "Rajathakalothsava",
    date: "December 2025",
    time: "9:30 AM - 1:00 PM",
    location: "Sai English High School Campus",
    category: "Cultural",
    image: "/events/raj/1.jpg",
    description:
      "A grand Silver Jubilee cultural festival celebrating 25 years of excellence with vibrant music, dance, theatrical performances, and student honours.",
    photos: generatePhotos("raj", 20, "Rajathakalothsava"),
  },
  {
    id: 4,
    title: "Republic Day Celebration",
    date: "January 26, 2026",
    time: "8:30 AM - 11:00 AM",
    location: "Sai English High School Campus",
    category: "Cultural",
    image: "/events/republic-day/1.jpg",
    description:
      "Commemorating the Constitution of India with a grand parade, inspiring student addresses, homage to freedom fighters, and cultural presentations.",
    photos: generatePhotos("republic-day", 3, "Republic Day Celebration"),
  },
  {
    id: 5,
    title: "International Yoga Day",
    date: "June 21, 2026",
    time: "7:30 AM - 9:30 AM",
    location: "Sai English High School Grounds",
    category: "Sports",
    image: "/events/yoga-day/1.jpg",
    description:
      "Promoting mental peace, agility, and holistic well-being through mass yoga demonstrations, pranayama, and mindfulness meditation sessions.",
    photos: generatePhotos("yoga-day", 11, "International Yoga Day"),
  },
  {
    id: 6,
    title: "Saraswati Puja Celebration",
    date: "February 14, 2026",
    time: "9:00 AM - 12:30 PM",
    location: "Sai English High School Campus",
    category: "Cultural",
    image: "/events/saraswati-puja/1.jpg",
    description:
      "Seeking the divine blessings of Goddess Saraswati for wisdom, academic learning, arts, and music with traditional rituals, pushpanjali, and prayers.",
    photos: generatePhotos("saraswati-puja", 9, "Saraswati Puja Celebration"),
  },
  {
    id: 7,
    title: "World Environment Day",
    date: "June 5, 2026",
    time: "8:30 AM - 12:00 PM",
    location: "Sai English High School Campus",
    category: "Academic",
    image: "/events/environment-day/1.jpg",
    description:
      "Inspiring environmental stewardship and green awareness with campus tree plantation drives, eco-friendly exhibits, and conservation pledges.",
    photos: generatePhotos("environment-day", 6, "World Environment Day"),
  },
  {
    id: 8,
    title: "Echoes of the Past",
    date: "October 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Sai English High School Campus",
    category: "Cultural",
    image: "/events/echoes-of-the-past/1.jpg",
    description:
      "A nostalgic glimpse into the cherished history, unforgettable milestones, and heritage memories of Sai English High School.",
    photos: generatePhotos("echoes-of-the-past", 10, "Echoes of the Past"),
  },
]
