'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from '@/redux/reducer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const store = configureStore({
  reducer,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </Provider>
    </html>
  );
}
