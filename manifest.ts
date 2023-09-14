import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vinh Nguyen Web Portfolio',
    short_name: "Vinh's Portfolio",
    description: 'Vinh Nguyen Portfolio Built with Next.js',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/assets/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}