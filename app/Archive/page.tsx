'use client'
import Masonry from '@/components/ui/Masonry'

const items = [
    {
      id: "1",
      img: "/assets/WEC-SPA.jpg",
      url: "/Motorsport/WEC/Spa",
      height: 600,
    },
    {
      id: "2",
      img: "/assets/css.png",
      url: "/Tutorials-and-tips/",
      height: 500,
    },
    {
      id: "3",
      img: "/assets/html.jpg",
      url: "/Tutorials-and-tips/HTML-for-beginners",
      height: 500,
    },
    // ... more items
];
export default function Archive() {
  return(
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
)
};