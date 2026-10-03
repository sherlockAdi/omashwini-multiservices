import type { Metadata } from 'next';
import './globals.css';
import './profile.css';
export const metadata: Metadata = { title: { default: 'Omashwini | People. Purpose. Progress.', template: '%s | Omashwini Multiservices' }, description: 'Omashwini Multiservices Private Limited, incorporated in 2023 in Faizabad (Ayodhya), Uttar Pradesh. Explore our company, leadership and corporate information.', icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg` } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
