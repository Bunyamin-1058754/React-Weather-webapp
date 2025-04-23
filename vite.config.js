export default {
    server: {
      proxy: {
        '/api': 'http://localhost:5000', // Proxy alle API-aanroepen naar Flask backend
      },
    },
  };