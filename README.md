# Lu Tools — Ready-to-Use n8n Workflows, MCP Configs & API Starters

Production-ready automation templates and Model Context Protocol (MCP) snippets powered by lightweight, zero-proxy **Pay-Per-Event** Apify Actors from **[lu-tools](https://apify.com/lu-tools)**:

| Tool | What It Replaces | Pricing (PPE) | Apify Store |
| :--- | :--- | :--- | :--- |
| **B2B Domain Pre-Flight & AI-Readiness Fusion** | 5 separate DNS / MX / SPF / DMARC / SSL / Tech Stack / `llms.txt` / Trust Center nodes | **$0.008 / domain** ($8 per 1k) | [Open on Apify](https://apify.com/lu-tools/b2b-domain-preflight-fusion) |
| **SaaS Pricing, OpenAPI & Changelog Semantic Diff Monitor** | Noisy HTML diff monitors — outputs only `BREAKING / MAJOR / MINOR` semantic changes | **$0.003 / check** + $0.025 on real diff | [Open on Apify](https://apify.com/lu-tools/saas-pricing-api-diff-monitor) |
| **OSS Dependency & Repo Due-Diligence Auditor (MCP)** | Manual CVE + GPL/AGPL copyleft + stale-package checks for Cursor / Claude Code & CI/CD | **$0.015 / audit** ($15 per 1k) | [Open on Apify](https://apify.com/lu-tools/oss-dependency-due-diligence-mcp) |

---

## 1. Plug All 3 Tools Into Claude Desktop / Cursor / Windsurf via MCP (10 Seconds)

Add this snippet to your `claude_desktop_config.json` or `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "lu-tools-apify": {
      "url": "https://mcp.apify.com/?actors=lu-tools/b2b-domain-preflight-fusion,lu-tools/saas-pricing-api-diff-monitor,lu-tools/oss-dependency-due-diligence-mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    }
  }
}
```

Tip: Pass `"compactMode": true` when calling from AI agents to keep each response around ~220–250 tokens with zero context bloat.

---

## 2. Import Free n8n Workflow Templates

Import any ready-made workflow JSON directly into **n8n** (`Workflows` -> `Import from File`):

1. `n8n-templates/01-b2b-lead-preflight-pipeline.json` — **Zero-Bounce B2B Lead Qualification & AI-Readiness Pipeline** (filters out disposable emails, parked domains, broken SPF/DMARC, and surfaces Vanta/Drata Trust Centers + `llms.txt` before CRM sync).
2. `n8n-templates/02-competitor-pricing-api-diff-alerts.json` — **Daily Competitor Pricing & OpenAPI Breaking-Change Monitor** (persists snapshots across runs and fires alerts only on real `BREAKING / MAJOR` changes).

---

## 3. One-Line API Quickstarts (cURL / Node.js / Python)

### B2B Domain 5-in-1 Pre-Flight
```bash
curl -X POST "https://api.apify.com/v2/acts/lu-tools~b2b-domain-preflight-fusion/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"domains": ["stripe.com", "linear.app", "apify.com"], "compactMode": true}'
```

### OSS Dependency Compliance Gate (npm / PyPI / Cargo)
```bash
curl -X POST "https://api.apify.com/v2/acts/lu-tools~oss-dependency-due-diligence-mcp/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"packages": ["npm:zod", "pypi:fastapi", "cargo:serde"], "policyMode": "commercial-strict", "compactMode": true}'
```

See `examples/node-quickstart.mjs` and `examples/python-quickstart.py` for full runnable scripts.

---

## License

MIT
