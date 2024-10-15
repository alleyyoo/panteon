const BASE_URL: string = 'http://localhost:4000/api';

export const fetchData = async (url: string, method?: string, body?: any) => {
  const requestOptions: RequestInit = {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access')}`
    },
    body: JSON.stringify(body)
  };
  try {
    const response: Response = await fetch(`${BASE_URL}${url}`, requestOptions);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: any = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error || 'Network error');
  }
};
