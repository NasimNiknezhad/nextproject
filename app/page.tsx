import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startseite',
};

export default function Home() {
  return (
    <main className="default-layout">
      <h1>Willkommen zu Next</h1>
    </main>
  );
}
