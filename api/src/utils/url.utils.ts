/**
 * Get the base URL for the application
 * Automatically detects Vercel deployment or uses configured HOST
 */
export const getBaseUrl = (): string => {
    // If running on Vercel, use VERCEL_URL
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    // If HOST is set with protocol, use it as-is
    if (process.env.HOST?.startsWith('http')) {
        return process.env.HOST;
    }

    // Otherwise, use HOST with http:// (for local development)
    return `http://${process.env.HOST || 'localhost:3000'}`;
};
