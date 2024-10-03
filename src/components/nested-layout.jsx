/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
"use client";
import { UserContextProvider } from '@/context/userContext';
import React from 'react'
import { PrimeReactProvider } from 'primereact/api';

export default function NestedLayout({ children }) {
  return (
    <PrimeReactProvider>
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </PrimeReactProvider>
  )
}
