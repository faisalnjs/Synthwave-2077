# Synthwave 2077 Neon Glow

**Warning:** Activating the Neon Glow extension may add lag.

An optional text glow for the [Synthwave 2077 color theme](https://marketplace.visualstudio.com/items?itemName=DangoWeb.synthwave-2077). Requires VS Code 1.100 or later.

1. Open the **Marketplace** in Visual Studio Code and search for **"Synthwave 2077 Neon Glow."**
2. Click the **"Install"** button to add the theme to your VSCode.
3. Select **Synthwave 2077** as your color theme.
4. Run **Synthwave 2077: Toggle Neon Glow** from the Command Palette.

Adjust **Synthwave 2077 Neon Glow: Brightness** in Settings, or set `synthwave2077.glow.brightness` in your user settings. The default is `0.45`. Changes apply as you adjust the setting.

The glow is off by default and applies only while the Synthwave 2077 theme is active. It uses an undocumented behavior of VS Code's editor decoration API to apply CSS in memory. A future VS Code update may stop the effect from rendering. The companion leaves the application files alone. If the glow stops working, try manually building and installing the VSIX from source (below).

## Build the VSIX

To build and install from source, clone this repository and navigate to the `neon-glow` directory. From this directory, run:

```sh
npx --yes @vscode/vsce package
```
