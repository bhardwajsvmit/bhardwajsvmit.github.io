'use client';

import { useEffect, useRef } from 'react';

function formatIST(): string {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    }).format(new Date());
  } catch {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }
}

export function useClockRef<T extends HTMLElement>(intervalMs = 15000) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const set = () => {
      if (ref.current) ref.current.textContent = formatIST();
    };
    set();
    const id = setInterval(set, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return ref;
}
