'use client'
import FlowingMenu from '@/components/ui/FlowingMenu'

const demoItems = [
  { link: '/en', text: 'English Website', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/sk-SK', text: 'Slovenská Stranka', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/de', text: 'Deutsche Website', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/es', text: 'sitio web en español', image: 'https://picsum.photos/600/400?random=4' }
];

export default function main() {
  return(

<div style={{ height: '600px', position: 'relative', top: '50px' }}>
  <FlowingMenu items={demoItems} />
</div>
)
}