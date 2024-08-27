// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'CSE-574: Lab Assignment No. 1',
  description: 'Created by Ayushman Singh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light-gray text-dark-gray font-sans">
        <header className="bg-primary text-white py-4 shadow-md">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-2xl font-bold">CSE-574: Lab Assignment No. 1</h1>
            <p className="text-sm">Name: Ayushman Singh | Roll Number: 21135040</p>
          </div>
        </header>
        <main className="max-w-5xl mx-auto py-8 px-4">
          {children}
        </main>
        <footer className="bg-primary text-white py-4 mt-12">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center">© 2023 Ayushman Singh. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
