# Synthwave 2077 Neon Glow

An optional text glow for the [Synthwave 2077 color theme](https://github.com/faisalnjs/Synthwave-2077). Requires VS Code 1.100 or later.

1. Install the companion VSIX from **Extensions → … → Install from VSIX**.
2. Select **Synthwave 2077** as your color theme.
3. Run **Synthwave 2077: Toggle Neon Glow** from the Command Palette.

Adjust **Synthwave 2077 Neon Glow: Brightness** in Settings, or set `synthwave2077.glow.brightness` in your user settings. The default is `0.45`. Changes apply as you adjust the setting.

The glow is off by default and applies only while the Synthwave 2077 theme is active. It uses an undocumented behavior of VS Code’s editor decoration API to apply CSS in memory. A future VS Code update may stop the effect from rendering. The companion leaves the application files alone.

## Build the VSIX

From this directory, run:

```sh
npx --yes @vscode/vsce package
```
