const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchFromAPI = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    // Optionally handle or log errors here if needed
    console.error('API request error:', error);
    throw error;
  }
};
