const topButton = document.getElementById('scroll-top');
function updateScrollButton() { topButton.hidden = window.scrollY < 600; }
window.addEventListener('scroll', updateScrollButton, { passive: true });
updateScrollButton();
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }));

document.getElementById('copy-bibtex').addEventListener('click', async () => {
  const button = document.getElementById('copy-bibtex');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(document.getElementById('bibtex').textContent);
    button.textContent = 'Copied';
    status.textContent = 'Citation copied to clipboard.';
    setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2000);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Copy is unavailable in this browser. The citation is selected; press Ctrl+C or ⌘C to copy.';
  }
});
