"use client";

import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../lib/fetchFromAPI';

interface TestData {
  message: string;
}

export default function Home() {
  const [data, setData] = useState<TestData | null>(null);

  useEffect(() => {
    // Directly use the utility function
    fetchFromAPI<TestData>('/test')
      .then(setData)
      .catch(error => {
        // Handle the error, or set error state if needed
        console.error('Failed to fetch data:', error);
      });
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
