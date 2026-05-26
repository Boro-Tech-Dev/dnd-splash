export const SITE_TITLE = "DeployDeliver";

export function lockDocumentTitle() {
  document.title = SITE_TITLE;

  const titleEl = document.querySelector("title");
  if (!titleEl) return;

  new MutationObserver(() => {
    if (document.title !== SITE_TITLE) {
      document.title = SITE_TITLE;
    }
  }).observe(titleEl, {
    childList: true,
    characterData: true,
    subtree: true,
  });
}
