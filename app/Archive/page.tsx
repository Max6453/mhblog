'use client'
import Masonry from '@/components/ui/Masonry'

const items = [
  {
    id: "1",
    img: "/assets/24-Nurburgring.jpg",
    url: "/Motorsport/GTWC/24-hours-of/Nurburgring",
    height: 600,
  },
      {
    id: "1",
    img: "/assets/Canada.webp",
    url: "/Motorsport/Formula-1/Canadian-Grand-Prix",
    height: 600,
  },
    {
    id: "2",
    img: "/assets/Le-Mans.jpg",
    url: "/Motorsport/WEC/Le-Mans",
    height: 600,
  },
    {
    id: "3",
    img: "/assets/Spain.jpg",
    url: "/Formula-1/Spanish-Grand-Prix",
    height: 600,
  },
  {
    id: "4",
    img: "/assets/monaco.jpg",
    url: "/Formula-1/Monaco-Grand-Prix",
    height: 600,
  },
  {
    id: "5",
    img: "/assets/Emilia-romagna.webp",
    url: "/Formula-1/Emilia-Romagna-Grand-Prix",
    height: 600,
  },
  {
    id: "6",
    img: "/assets/Miami.avif",
    url: "/Formula-1/Miami-Grand-Prix",
    height: 600,
  },
  {
    id: "7",
    img: "/assets/WEC-SPA.jpg",
    url: "/Motorsport/WEC/Spa",
    height: 600,
  },
  {
    id: "8",
    img: "/assets/css.png",
    url: "/Tutorials-and-tips/",
    height: 600,
  },
  {
    id: "9",
    img: "/assets/html.jpg",
    url: "/Tutorials-and-tips/HTML-for-beginners",
    height: 600,
  },
  // ... more items
];

export default function Archive() {
  return (
    <div className='pt-20 flex gap-x-10'>
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={1.10}
        blurToFocus={true}
        colorShiftOnHover={true}
      />
    </div>
  );
}