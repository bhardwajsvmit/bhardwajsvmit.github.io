import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/work';

export const dynamic = 'force-static';

const base = 'https://bhardwajsvmit.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    ...caseStudies.map(({ slug }) => ({ url: `${base}/work/${slug}`, priority: 0.8 })),
  ];
}
