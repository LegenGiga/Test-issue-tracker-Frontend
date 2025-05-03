

const apiKeys = {
    ADMIN: import.meta.env.VITE_ADMIN_API_KEY,
};

const config = {
    API_URL: import.meta.env.VITE_API_URL,
    apiKeyStart: "Api-Key ",
    apiKeys, 
};

export default config; 