# Agentic Critical Training (ACT)

Project page for **Agentic Critical Training**, checked against arXiv:2603.08706v2 (October 8, 2026).

ACT trains action judgment with verifiable rewards as a warm-up before imitation learning, with optional reinforcement learning from the IL checkpoint. At inference time, policies generate actions directly.

## Authors

Weize Liu¹, Minghui Liu¹, Sy-Tuyen Ho¹, Yongkyun Lee<sup>∀</sup>, Andrew Adams Schoen<sup>∀</sup>, Souradip Chakraborty¹, Xiyao Wang¹‡, Furong Huang<sup>1,∀,‡</sup>

¹ University of Maryland, College Park · <sup>∀</sup> All Purpose AI · ‡ Equal advising

## Local preview

This is a static site with no build step, package installation, or external runtime dependencies.

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765. The relative asset paths also support the `/ACT/` GitHub Pages subdirectory.

## Files and sources

- `index.html`: page content, accessible result tables, scholarly metadata, and BibTeX.
- `static/css/style.css`: responsive page styles.
- `static/js/main.js`: citation copy with fallback and scroll-to-top control. Both model tables are always displayed.
- `static/paper/agentic-critical-training.pdf`: unchanged local reference copy of the supplied arXiv v2 PDF. The primary paper button and citation metadata link to https://arxiv.org/pdf/2603.08706; this local copy is not required for deployment.
- `static/images/act-*.png`: Figures 1–4 rendered from the earlier revised PDF; their content remains consistent with arXiv v2. Captions are rendered separately in HTML. Click a figure on the page to open its full-resolution image.

The page presents the abstract directly, followed by motivation, the method, main results (Tables 1–2), controls (Table 3), and the intervention/general-reasoning figures (Figures 3–4). Appendix protocols, detailed appendix tables, and case studies remain in the paper. Older image assets are retained but are no longer referenced by the page.

When updating results, preserve each table's metric and uncertainty: ALFWorld/WebShop use success rates, ScienceWorld uses mean episode score. General-reasoning and rationale-intervention results belong to the standalone ACT-stage checkpoint, not the full downstream pipeline.

## Manual checks

- Inspect desktop and narrow mobile layouts; wide tables should scroll within their containers.
- Confirm Qwen3 and Olmo results are both displayed, with no model selector.
- Keep the Code button absent until a repository URL is available.
- Confirm the abstract is fully visible as one paragraph without interaction.
- Check figure links, the local PDF, section navigation, and citation copying.
- Check the browser console and run `node --check static/js/main.js` and `git diff --check`.
