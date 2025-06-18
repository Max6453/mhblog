'use client'

import InfiniteMenu from '@/components/ui/InfiniteMenu'

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Motorsport',
    description: 'From Formula 1 to WEC'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Tech',
    description: 'Newest releases from anything sooner than blink of an eye'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Tutorials',
    description: 'Tips and tricks from many topics'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Around the world',
    description: 'Politics, sport, game awards? i have got it all'
  }
];


export default function Categories() {
    return(
    <div style={{ height: '750px', position: 'relative' }}>
    <InfiniteMenu items={items}/>
    </div>
    );
}