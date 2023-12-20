export default async function handler(req, res) {
    const clientId = 'fefbf096-4a5b-48d1-9f69-5d1e52a64363';
    const clientSecret = 'secret_t59HmR0bxp7VBiGhNfvQlIEF4Ze6XJjio8IBKrMREag';
    const redirectUri = 'http://localhost:3000/notioncallback';
    const { Client } = require('@notionhq/client');


    const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    try {
        const response = await fetch('https://api.notion.com/v1/oauth/token', {
            method: 'POST',

            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Basic ${encoded}`,
            },
            body: JSON.stringify({
                grant_type: 'authorization_code',
                code: req.body.code,
                redirect_uri: redirectUri,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const notion = new Client({ auth: data.access_token });
        const pages = await notion.search({});
        return res.status(200).json(pages.results);
    } catch (error) {
        console.error('Error fetching token:', error);
    }
    res.status(200).json({ name: 'John Doe' });
}
