import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'GenLedge — Keep your operations moving', description: 'AI operators and ERP for wholesale distribution, manufacturing, and field services. Connect your people, systems, and work.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
