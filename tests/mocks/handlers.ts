import { http, HttpResponse } from 'msw';

export const handlers = [
  // Auth endpoints
  http.post('/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json();

    if (email === 'test@example.com' && password === 'password123') {
      return HttpResponse.json({
        user: {
          id: '1',
          email: 'test@example.com',
          name: 'Test User',
        },
        token: 'mock-jwt-token',
      });
    }

    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  }),

  http.post('/api/auth/logout', () => {
    return HttpResponse.json({ message: 'Logged out successfully' });
  }),

  // Cart endpoints
  http.get('/api/cart', () => {
    return HttpResponse.json({
      items: [
        {
          id: '1',
          name: 'Product 1',
          price: 29.99,
          quantity: 2,
        },
        {
          id: '2',
          name: 'Product 2',
          price: 49.99,
          quantity: 1,
        },
      ],
      total: 109.97,
    });
  }),

  http.post('/api/cart/add', async ({ request }) => {
    const item = await request.json();
    return HttpResponse.json({ ...item, id: Date.now().toString() });
  }),

  http.delete('/api/cart/:id', ({ params }) => {
    return HttpResponse.json({ id: params.id, deleted: true });
  }),
];
