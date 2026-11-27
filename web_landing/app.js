(() => {
  const REPO = 'rcsbxyz-hub/taan';
  const FALLBACK_TAG = 'v2.1.2';
  const FALLBACK_BASE = `https://github.com/${REPO}/releases/latest`;

  // 1. Theme toggle (respects system preference + localStorage)
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('taan-landing-theme');
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(mode) {
    root.setAttribute('data-theme', mode);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', mode === 'dark' ? '#131110' : '#F6F2E9');
    }
    if (themeBtn) {
      themeBtn.setAttribute(
        'aria-label',
        mode === 'dark' ? 'Switch to light paper theme' : 'Switch to dark ink theme'
      );
      themeBtn.innerHTML =
        mode === 'dark'
          ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/></svg>'
          : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  themeBtn?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('taan-landing-theme', next);
    applyTheme(next);
  });

  // 2. Interactive phone preview tabs (Home / Now Playing / Settings)
  const tabs = document.querySelectorAll('[data-phone-tab]');
  const views = document.querySelectorAll('[data-phone-view]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-phone-tab');
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });
      views.forEach((v) => {
        v.classList.toggle('active', v.getAttribute('data-phone-view') === target);
      });
    });
  });

  // 3. Live GitHub Releases integration (auto-updates version, date & APK links)
  function formatMB(bytes) {
    if (!bytes || Number.isNaN(bytes)) return '';
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function formatReleaseDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  async function hydrateLatestRelease() {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/releases/latest`,
        { headers: { Accept: 'application/vnd.github+json' } }
      );
      if (!res.ok) return;
      const data = await res.json();
      const tag = data.tag_name || FALLBACK_TAG;
      const htmlUrl = data.html_url || FALLBACK_BASE;
      const assets = Array.isArray(data.assets) ? data.assets : [];

      const findAsset = (needle) =>
        assets.find((a) => (a.name || '').toLowerCase().includes(needle));

      const arm64 = findAsset('arm64-v8a');
      const universal = findAsset('universal');
      const armv7 = findAsset('armeabi-v7a');

      document.querySelectorAll('[data-version-label]').forEach((el) => {
        el.textContent = tag;
      });

      const primaryUrl = arm64?.browser_download_url || universal?.browser_download_url || htmlUrl;
      document.querySelectorAll('[data-dl-primary]').forEach((a) => {
        a.setAttribute('href', primaryUrl);
      });
      document.querySelectorAll('[data-dl-universal]').forEach((a) => {
        a.setAttribute('href', universal?.browser_download_url || htmlUrl);
      });
      document.querySelectorAll('[data-dl-armv7]').forEach((a) => {
        a.setAttribute('href', armv7?.browser_download_url || htmlUrl);
      });

      const sizeArm64 = document.getElementById('size-arm64');
      const sizeUniversal = document.getElementById('size-universal');
      const sizeArmv7 = document.getElementById('size-armv7');
      const heroSize = document.getElementById('hero-apk-size');
      const heroDate = document.getElementById('hero-release-date');

      if (sizeArm64 && arm64?.size) sizeArm64.textContent = `${tag} · ${formatMB(arm64.size)}`;
      if (sizeUniversal && universal?.size) sizeUniversal.textContent = `${tag} · ${formatMB(universal.size)}`;
      if (sizeArmv7 && armv7?.size) sizeArmv7.textContent = `${tag} · ${formatMB(armv7.size)}`;
      if (heroSize && arm64?.size) heroSize.textContent = `${formatMB(arm64.size)} APK`;
      const niceDate = formatReleaseDate(data.published_at);
      if (heroDate && niceDate) heroDate.textContent = `Updated ${niceDate}`;
    } catch (_) {
      // Keep safe fallback links silently when offline.
    }
  }

  hydrateLatestRelease();
})();
