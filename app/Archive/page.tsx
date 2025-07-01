'use client'
import Masonry from '@/components/ui/Masonry'
import { url } from 'inspector';

const items = [
    {
    id: "1",
    img: "/assets/Emilia-romagna.webp",
    url: "/Formula-1/Emilia-Romagna-Grand-Prix",
    height: 600,
  },
  {
    id: "2",
    img: "/assets/Miami.avif",
    url: "/Formula-1/Miami-Grand-Prix",
    height: 600,
  },
    {
      id: "3",
      img: "/assets/WEC-SPA.jpg",
      url: "/Motorsport/WEC/Spa",
      height: 600,
    },
    {
      id: "4",
      img: "/assets/css.png",
      url: "/Tutorials-and-tips/",
      height: 600,
    },
    {
      id: "5",
      img: "/assets/html.jpg",
      url: "/Tutorials-and-tips/HTML-for-beginners",
      height: 600,
    },
    // ... more items
];
export default function Archive() {
  return(
  <div>
  <Masonry
    items={items}
    ease="power3.out"
    duration={0.6}
    stagger={0.05}
    animateFrom="bottom"
    scaleOnHover={true}
    hoverScale={0.95}
    blurToFocus={true}
    colorShiftOnHover={false}
  />
</div>
)
};