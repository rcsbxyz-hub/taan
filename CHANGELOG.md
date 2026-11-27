# Changelog

All notable releases of **Taan** are documented here.

---

## [v2.1.2] — 2026-11-27
### Changed
- **Hardened & Smaller Release APKs**: Enabled Android R8 code minification & resource shrinking plus Flutter Dart symbol obfuscation, reducing APK size (`arm64` 22.1 MB → **20.8 MB**, `armv7` 20.3 MB → **18.7 MB**) while protecting app internals.
- Updated license to **All Rights Reserved** and moved official distribution to dedicated signed releases.

---

## [v2.1.1] — 2026-11-26
### Fixed
- Restored direct native ExoPlayer HTTPS playback on Android by removing custom `AudioSource.uri` headers that caused `just_audio` to route streams through a local cleartext `127.0.0.1` proxy blocked on Android 9+.
- Properly awaited `pause()` before resolving the next track to prevent pause/play race conditions on instant offline and prefetched tracks.
- Increased per-candidate stream load timeout to `20s` and suppressed spurious error banners while fallback candidates are still resolving.

---

## [v2.1.0] — 2026-11-26
### Added
- **4-Worker HTTP 206 Byte-Range Chunked Downloader**: Downloads audio in 768 KB parallel byte ranges (with up to 2 concurrent tracks) to bypass single-connection CDN throttling, with automatic fallback to standard streaming downloads.
- **Instant Offline Playback Fast-Path**: `StreamResolver` now checks `TrackRepository` asynchronously so already-downloaded tracks play immediately from local storage even when tapped from Home, Search, or Playlists.
- **True Queue Shuffle**: Implemented Fisher-Yates shuffling in `PlaybackQueue` that keeps the current song anchored at index 0 and restores original order when toggled off.
- **SQLite WAL Mode**: Enabled `PRAGMA journal_mode = WAL` and `PRAGMA synchronous = NORMAL` for non-blocking local database writes.
- Added automated unit tests covering queue shuffle/restore, 4-worker HTTP 206 multi-chunk downloads, and offline fast-path stream resolution (`111` tests passing).

### Fixed
- **Playback Race Conditions & Recovery**: Added monotonic generation guards in `PlaybackService.playTrack`, prevented crossfade double-skip, fixed `Loop All` repeating a single track on ExoPlayer, added automatic mid-stream expiry/drop recovery, and added AudioSession interruption ducking & resume.
- **Eliminated 25×/sec Full-Screen Rebuild Storm**: Split `playerStateProvider` into lightweight `activeTrackProvider`, `isPlayingProvider`, `playbackStatusProvider`, and `playbackProgressProvider` so Home, Search, Library, Offline, sheets, and Now Playing chrome never rebuild on 250 ms position ticks.
- **Eliminated Download UI Lag & Main-Thread Freeze**: Moved Android MediaStore / SAF file exports onto a background `ExecutorService` thread in `MainActivity.kt`, patched active download progress purely in memory inside `OfflineController`, and throttled SQLite progress writes.
- **GPU & Memory Optimization**: Removed real-time `BackdropFilter` blur on the floating bottom dock, added DPR-scaled `memCacheWidth` / `memCacheHeight` to `AlbumArt`, isolated `EqualizerBars` in `RepaintBoundary`, cached `PaperGrain` shader, and added an LRU cache to `ColorMix`.

---

## [v2.0.2] — 2026-11-26
### Changed
- **Clean Home Masthead**: Removed repeated "EDITION" and date labels; greeting now sits cleanly on the left with the date once on the right in terracotta, and hero carousel cards display a crisp `TODAY'S PICK` badge.
- **Bespoke Edit Profile Sheet & Upgraded Profile Card**: Replaced the generic Material `AlertDialog` with a warm-paper / dark-ink editorial bottom sheet featuring live terracotta-ringed monogram preview and bordered inputs.
- **Full-Screen Settings Hub**: Settings now opens on the root navigator so the floating bottom nav and MiniPlayer never overlap; added a 1-tap `Light / Dark / System` theme strip and live trailing status badges on Settings rows.

---

## [v2.0.1] — 2026-11-26
### Added
- **Offline Bundled Bangla Lyrics Font**: Bundled `Hind Siliguri` (`Regular` & `SemiBold`) and auto-selected it via `TaanType.lyricStyleFor` for Bangla script in synced lyrics and Quote Card posters.
- **Smart Search Radio**: Tapping a song in Search now builds a title-deduplicated Up Next radio queue instead of queueing duplicate cover versions.

### Changed
- **Fit-to-Screen Now Playing**: Responsive cover art sizing ensures Cover, Scrubber, Transport Controls, and raised tactile `LYRICS / OFFLINE / QUEUE / QUALITY` buttons fit cleanly without scrolling.
- **Rich Queue Rows**: Upgraded inline Queue items with album thumbnails, source badges, durations, and active equalizer bars.
- Added a soft paper fade scrim beneath the Floating Editorial Bottom Dock.

---

## [v2.0.0] — 2026-11-26
### Added
- **Editorial UI/UX Redesign**: Now Playing 2.0 with `Playing · Lyrics · Queue` tabs, breathing cover art, and scrubber drag tooltip; Floating Editorial Pill Nav Dock; Adaptive Album-Tint Mini-Player; Home 2.0 3-Card Hero Carousel; Search 2.0 smart playlist link paste detection & typographic mood posters; Library 2.0 2×2 auto-collage playlist covers; First-launch 3-slide editorial onboarding.

---

## [v1.1.3] — 2026-11-26
### Changed
- Added Android 12+ transparent splash screen handoff and optically centered launcher foreground icon with resonance dot.

---

## [v1.1.2] — 2026-11-26
### Fixed
- Fixed Share Song scrolling/tapping inside `TrackOptionsSheet`, added official download links to all Share actions, hardened JioSaavn album parsing & YouTube mix filtering, added cross-source album fallback, wired Artist Sheet across screens, added swipe-to-Play-Next, and added live equalizer bars.

---

## [v1.1.1] — 2026-11-26
### Added
- Native Android periodic background update notifier (`JobScheduler`, zero Firebase/tracking) routing update alerts directly to the official Taan landing page.

---

## [v1.1.0] — 2026-11-25
### Added
- Public YouTube & Spotify playlist URL importer, 5-band manual hardware EQ sliders + smooth crossfade, Android 4×1 home screen widget, Lyrics Quote Card Studio (3× PNG share), Auto-Download Liked Songs, Offline tab active badge, and worldwide Home discovery balance.
