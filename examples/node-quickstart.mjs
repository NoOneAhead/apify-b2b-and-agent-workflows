// Quickstart: Call lu-tools/b2b-domain-preflight-fusion with native Node 20+ fetch (zero dependencies)
const APIFY_TOKEN = process.env.APIFY_TOKEN;
if (!APIFY_TOKEN) {
    throw new Error('Set APIFY_TOKEN environment variable first.');
}

const response = await fetch(
    `https://api.apify.com/v2/acts/lu-tools~b2b-domain-preflight-fusion/run-sync-get-dataset-items?token=${APIFY_TOKEN}`,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            domains: ['stripe.com', 'linear.app', 'apify.com'],
            compactMode: true,
        }),
    },
);

if (!response.ok) {
    throw new Error(`Apify API error ${response.status}: ${await response.text()}`);
}

const results = await response.json();
for (const item of results) {
    console.log(`${item.domain} => ${item.verdict} (${item.grade}, ${item.leadQualityScore}/100) | Email: ${item.emailProvider} | Trust: ${item.trustCenterProvider ?? 'None'}`);
}
