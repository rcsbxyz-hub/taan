<div align="center">

# Taan.

**A free, ad-free, local-first music player for Android.**

*Music that feels like a printed magazine — warm paper, ink typography, one terracotta accent, and every song with zero ads and zero accounts.*

[![Official Website](https://img.shields.io/badge/website-taan%20landing-C0522E?style=flat-square)](https://rcsbxyz-hub.github.io/taan/)
[![Latest Release](https://img.shields.io/github/v/release/rcsbxyz-hub/taan?style=flat-square&color=C0522E)](https://github.com/rcsbxyz-hub/taan/releases/latest)
[![Platform](https://img.shields.io/badge/platform-Android%207.0%2B-17140F?style=flat-square)](#download)
[![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-8B8375?style=flat-square)](LICENSE)

Designed & developed independently by **[Rudro Chandro Sarker (RCS)](https://github.com/rcsbxyz-hub)**

</div>

---

## Download

Get the latest release-signed Android APK directly from the **[Official Taan Website](https://rcsbxyz-hub.github.io/taan/#download)** or **[GitHub Releases](https://github.com/rcsbxyz-hub/taan/releases/latest)**:

| APK Build | Size (`v2.1.2`) | Best For |
|---|---:|---|
| **`Taan-v2.1.2-arm64-v8a.apk`** | ~20.8 MB | Modern 64-bit Android phones *(smallest & fastest — recommended)* |
| **`Taan-v2.1.2-universal.apk`** | ~56.5 MB | Any Android 7.0+ device *(if unsure of CPU architecture)* |
| **`Taan-v2.1.2-armeabi-v7a.apk`** | ~18.7 MB | Older 32-bit Android phones |

> **Note on Google Play Protect:** Because Taan is distributed directly outside the Google Play Store, Android may show a Play Protect prompt on first install. Tap **More details → Install anyway** (or **Scan app**) to install safely. Taan includes a privacy-first periodic background update notifier (zero Firebase, zero tracking) that alerts you whenever a new signed release is available.

---

## What’s New in `v2.1`

- **Rock-Solid Playback Engine** — Generation-guarded track switching prevents skip cascades and races; automatic mid-stream recovery resumes dropped or expired streams cleanly; true Fisher-Yates **Shuffle** and fixed **Loop All** queue wrap-around; instant **0 ms offline playback** when tapping already-downloaded songs from any screen.
- **4× Faster Chunked Offline Downloads** — 4-worker HTTP `206` byte-range chunked downloader bypasses single-connection CDN throttling, downloads up to 2 tracks concurrently, and exports audio to your phone or SD card folder on a dedicated Android background thread with zero UI stutter.
- **Zero-Lag Performance** — Decoupled progress streams eliminate full-screen rebuild storms across all tabs, in-memory download progress updates remove SQLite query spikes, DPR-sized artwork caching cuts RAM usage, and SQLite **WAL mode** speeds up local persistence.
- **Editorial UI 2.0 & Bilingual Typography** — Fit-to-screen **Now Playing 2.0** (`Playing · Lyrics · Queue`), offline bundled **Hind Siliguri** font for Bangla lyrics alongside **Instrument Serif** + **Plus Jakarta Sans**, clean single-line Home masthead, bespoke warm-paper **Edit Profile** sheet with live monogram preview, 1-tap `Light / Dark / System` theme strip, and full-screen grouped Settings.

See the complete version history in **[CHANGELOG.md](CHANGELOG.md)**.

---

## Features

### Listening & Playback
- **Unified Multi-Source Queue** — Stream YouTube, JioSaavn (up to `320 kbps`), and your own local audio files in one continuous queue with automatic cross-source fallback.
- **Smart Deduplicated Radio** — Start instant radio from any track or search result with normalized title deduplication so cover versions never stack up in Up Next.
- **5-Band Manual Hardware Equalizer & Crossfade** — Drag custom `60 Hz – 14 kHz` sliders or choose curated sound profiles, blend tracks with `2s – 8s` crossfade, and control loudness boost, playback speed (`0.5× – 2.0×`), and sleep timer.
- **Android MediaSession & Home Widget** — Full lock-screen artwork, notification shade, Bluetooth headset controls, and a warm-paper **4×1 Android Home Screen Widget**.

### Editorial Design & Lyrics
- **Print-Magazine Craft** — Warm paper (`#F6F2E9`) & dark ink (`#131110`) themes, 2% fractal paper grain, muted album-art tinting, hairline progress scrubber, editorial numbered shelves (`01 / 02 / 03`), and floating capsule dock.
- **Synced Bilingual Lyrics & Quote Card Studio** — Time-synced lyrics with tap-to-seek, automatic **Hind Siliguri** rendering for Bangla script, full-screen reader, and a **Lyrics Quote Card Studio** that exports 3× PNG posters (`Warm Paper`, `Dark Ink`, `Terracotta`) for Stories.
- **Daily Fresh Home Edition** — Adapts to the time of day (*Morning / Afternoon / Evening / Late night*) with globally balanced daily picks, 3-card hero carousel, 2×3 **Speed Dial** grid, Artists disc rail, and Fresh Covers.

### Offline, Import & Privacy
- **High-Speed Offline Downloads & Custom Folders** — Auto-download liked songs, track live progress badges, and save copies to **any internal storage or SD card folder** via Android Storage Access Framework (SAF).
- **Zero-Login Playlist Importer** — Paste any public **YouTube**, **YouTube Music**, or **Spotify** playlist link in Search or Library to import tracks straight into your local library.
- **100% Private & Local-First** — Zero accounts, zero ads, zero analytics, zero crash SDKs. Includes on-device **Listening Insights**, live **Diagnostics** log viewer, and 1-tap `.json` library backup & restore.

---

## Feedback & Bug Reports

Found a bug or have a feature idea?
- Open an issue in **[GitHub Issues](https://github.com/rcsbxyz-hub/taan/issues)** (you can copy live logs directly from `Settings → Diagnostics → Copy logs`).

---

## Author & Copyright

**Rudro Chandro Sarker (RCS)**
- Official Website: [rcsbxyz-hub.github.io/taan](https://rcsbxyz-hub.github.io/taan/)
- GitHub: [@rcsbxyz-hub](https://github.com/rcsbxyz-hub)

Copyright © 2026 Rudro Chandro Sarker (RCS). **All Rights Reserved.** See [LICENSE](LICENSE).
Taan is an independent, free, ad-free personal music player with no ads, no accounts, no tracking, and no DRM circumvention. Not affiliated with YouTube, Google, JioSaavn, or Spotify.
