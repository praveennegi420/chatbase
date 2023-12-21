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
        const pages = await notion.search({filter: { value: 'page', property: 'object'}});
        const pageData= pages.results.map(async(page)=>{
            const blockData = await notion.blocks.retrieve({block_id: page.id,});
            
            const childData = await notion.blocks.children.list({ block_id: page.id, page_size: 50, });   
            const childText= childData.results.map((child)=>{ return child.paragraph.rich_text.map(text=>{ return text.plain_text }); })
            const plainChildText= [].concat(...childText.map((id) => id.map((value) => value)));
            
            return {title: blockData.child_page.title, text: plainChildText[0]};
        });
        return res.status(200).json({data: await Promise.all(pageData)});
        
    } catch (error) {     
        console.error('Error fetching token:', error);
    }   
}
