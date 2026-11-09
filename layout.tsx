import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Unwritten — The knowledge your campus never documented', description: 'A student-powered map of the unwritten rules, useful tips and real experiences that make campus life easier.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
