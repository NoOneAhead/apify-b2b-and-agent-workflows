"""Quickstart: Call lu-tools/b2b-domain-preflight-fusion from Python."""
import os
import urllib.request
import json

APIFY_TOKEN = os.environ.get("APIFY_TOKEN")
if not APIFY_TOKEN:
    raise SystemExit("Set APIFY_TOKEN environment variable first.")

url = f"https://api.apify.com/v2/acts/lu-tools~b2b-domain-preflight-fusion/run-sync-get-dataset-items?token={APIFY_TOKEN}"
payload = json.dumps({
    "domains": ["stripe.com", "linear.app", "apify.com"],
    "compactMode": True,
}).encode("utf-8")

req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"}, method="POST")
with urllib.request.urlopen(req, timeout=60) as resp:
    results = json.loads(resp.read().decode("utf-8"))

for item in results:
    print(f"{item['domain']} => {item['verdict']} ({item['grade']}, {item['leadQualityScore']}/100) | Email: {item['emailProvider']}")
