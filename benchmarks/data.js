window.BENCHMARK_DATA = {
  "lastUpdate": 1754403411776,
  "repoUrl": "https://github.com/gifflet/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "czlonkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "czlonkowski",
            "username": "czlonkowski"
          },
          "distinct": true,
          "id": "b944afa1bbce3c09e00004cff7ee660f61423057",
          "message": "fix: add Jekyll config to prevent Liquid syntax errors in GitHub Pages\n\n- Jekyll was trying to parse Liquid template syntax in our code examples\n- This caused the Pages build to fail with syntax errors\n- Added _config.yml to exclude all documentation and source files\n- GitHub Pages will now only process benchmark-related files\n- Fixes the pages-build-deployment workflow failure\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-08-05T08:50:52+02:00",
          "tree_id": "5408835cd584bd20fddedaf46fa98b519ad19eab",
          "url": "https://github.com/gifflet/n8n-mcp/commit/b944afa1bbce3c09e00004cff7ee660f61423057"
        },
        "date": 1754403411031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0187,
            "unit": "ms",
            "range": 0.24339999999999998,
            "extra": "53377 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1306,
            "unit": "ms",
            "range": 0.4739,
            "extra": "319 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "unit": "ms",
            "range": 0.257,
            "extra": "218713 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0665,
            "unit": "ms",
            "range": 0.3145,
            "extra": "15028 ops/sec"
          }
        ]
      }
    ]
  }
}