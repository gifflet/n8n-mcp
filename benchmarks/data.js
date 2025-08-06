window.BENCHMARK_DATA = {
  "lastUpdate": 1754508163828,
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
      },
      {
        "commit": {
          "author": {
            "email": "guisousa09@hotmail.com",
            "name": "gifflet",
            "username": "gifflet"
          },
          "committer": {
            "email": "guisousa09@hotmail.com",
            "name": "gifflet",
            "username": "gifflet"
          },
          "distinct": true,
          "id": "06e826abdbc2dcf48475ffb01167608f94abfcc0",
          "message": "feat(n8n): add support for custom SSL certificate via N8N_CERT_PATH",
          "timestamp": "2025-08-06T12:00:34-03:00",
          "tree_id": "df337445459bacc34a0a33aeff29e89912c49e47",
          "url": "https://github.com/gifflet/n8n-mcp/commit/06e826abdbc2dcf48475ffb01167608f94abfcc0"
        },
        "date": 1754501730554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "unit": "ms",
            "range": 0.32,
            "extra": "52325 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1526,
            "unit": "ms",
            "range": 0.6473,
            "extra": "317 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "unit": "ms",
            "range": 0.2696,
            "extra": "210235 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0666,
            "unit": "ms",
            "range": 0.4192,
            "extra": "15004 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "guisousa09@hotmail.com",
            "name": "gifflet",
            "username": "gifflet"
          },
          "committer": {
            "email": "guisousa09@hotmail.com",
            "name": "gifflet",
            "username": "gifflet"
          },
          "distinct": true,
          "id": "95296a14467dd4163e4c01508340066117bca995",
          "message": "feat(n8n-cert): add support for self-signed SSL certificates via N8N_CERT_PATH",
          "timestamp": "2025-08-06T16:20:57-03:00",
          "tree_id": "0209da65bd34260771586a734961e60cb5ff3a35",
          "url": "https://github.com/gifflet/n8n-mcp/commit/95296a14467dd4163e4c01508340066117bca995"
        },
        "date": 1754508163171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0188,
            "unit": "ms",
            "range": 0.3276,
            "extra": "53128 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.2123,
            "unit": "ms",
            "range": 1.8989000000000003,
            "extra": "311 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0052,
            "unit": "ms",
            "range": 0.3272,
            "extra": "193108 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0669,
            "unit": "ms",
            "range": 0.4426,
            "extra": "14954 ops/sec"
          }
        ]
      }
    ]
  }
}