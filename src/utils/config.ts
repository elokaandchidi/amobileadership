
export const config = {
    sanity : {
        projectId : import.meta.env.VITE_APP_SANITY_PROJECT_ID,
        token : import.meta.env.VITE_APP_SANITY_API_TOKEN,
    },
    paystack : {
        publicKey : import.meta.env.VITE_APP_PUBLIC_PAYSTACK_PUBLIC_KEY,
    },
};
