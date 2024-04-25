# Synthwave 2077 - VSCode Theme

![Synthwave 2077 Banner](https://github.com/faisalnjs/Synthwave-2077/raw/main/banner.png)

## When Cyberpunk 2077 meets Synthwave '84 🌇

Get ready to dive into a futuristic, dystopian world with the "Synthwave 2077" VSCode theme, where Cyberpunk 2077 meets [Synthwave '84](https://github.com/robb0wen/synthwave-vscode). Cyberpunk 2077, a popular role-playing game developed by CD Projekt Red, inspires the theme's design with its advanced technology, neon lights, and gritty urban environment. Synthwave '84, a fantastic VSCode theme created by [robb0wen](https://github.com/robb0wen) sets the theme's mood with its retro-futuristic art style and synthwave music genre inspiration. The result is a unique, eye-catching theme created by [SBigz](https://github.com/SBigz) that will transport you to a world of neon lights, cybernetic enhancements, and advanced technology. Some adjustments and fixes were made by [Faisal N](https://faisaln.com).

## Key Features 🚀

- Bright neon colors reminiscent of the '80s, fitting for the [Cyberpunk 2077](https://github.com/carlos18mz/Cyberpunk-2077-rebuild) aesthetic VSCode theme created by [carlos18mz](https://github.com/carlos18mz).
- Sleek design and easy on the eyes, improving your coding experience
- Compatible with most programming languages
- Available for Windows, macOS, and Linux

## Take a look 🤩

These screenshots are from a previous version of the theme, modifications were made that may not be reflected in the images below.

![Synthwave 2077 Preview 1](https://github.com/SBigz/Synthwave-2077/raw/main/preview1.png)

![Synthwave 2077 Preview 2](https://github.com/SBigz/Synthwave-2077/raw/main/preview2.png)

![Synthwave 2077 Preview 3](https://github.com/SBigz/Synthwave-2077/raw/main/preview3.png)

![Synthwave 2077 Preview 4](https://github.com/SBigz/Synthwave-2077/raw/main/preview4.png)

## Installation 🔌

1. Open the Marketplace in Visual Studio Code and search for "Synthwave 2077."
2. Click the "Install" button to add the theme to your VSCode.
3. Once the installation is complete, click "Reload" to refresh your editor.
4. To activate the theme, go to "File" > "Preferences" > "Color Theme," and select "Synthwave 2077."
5. To enable the Neon of "Synthwave 2077," check the instructions below.
6. Each time you enable or disable the custom styles, VSCode will reload to apply the changes.
7. To customize your terminal theme, install [ohmyzsh!](https://github.com/ohmyzsh/ohmyzsh) and choose your desired theme!

### Neon Glow Effect 🌟

VS code doesn't natively support text effects and as a result, the glow is experimental. It's likely to be buggy and, whilst it looks rad, it isn't intended for extended use. 

If you do decide to use the glow effect, do so at your own risk. Bring your Sunglasses. Here be (laser)dragons.

Install this [excellent plugin that allows you to load custom CSS and JS](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) from the VS Marketplace. **Please carefully read the readme regarding permission for that extension before continuing with this installation.**

Locate [`synthwave.css`](https://github.com/faisalnjs/Synthwave-2077/synthwave.css) and save it to a directory on your machine that will not be modified when VSCode updates.

Copy the file path and add it to your VSCode's `settings.json` file.

On MacOS it might look something like the snippet below:

``` json
{
    "vscode_custom_css.imports": [
        "file:///Users/{your username}/synthwave.css"
    ]
}
```

On Windows it might resemble:

``` json
{
    "vscode_custom_css.imports": [
        "file:///C:/Users/{your username}/synthwave.css"
    ]
}
```

## Disclaimer 👀

This theme, Synthwave 2077, was created by SBigz (CodeSasha) and this is just a fork of his repo [SBigz/Synthwave-2077](https://github.com/SBigz/Synthwave-2077) made due to it being incompatible with my VSCode version. I loved how it looked at first sight, and was heartbroken when I saw that I couldn't use it. It also left out the neon glow effect, which I thought was a cool feature. So I decided to fix it and make it compatible with my VSCode version. I'm not the original creator of this theme, I just made it work for me and decided to share it with the world. All credits go to SBigz, robb0wen, and carlos18mz for creating this awesome theme.

## Credits ✨

- [Cyberpunk 2077](https://github.com/carlos18mz/Cyberpunk-2077-rebuild) VSCode Theme by [carlos18mz](https://github.com/carlos18mz)
- [Synthwave '84](https://github.com/robb0wen/synthwave-vscode) VSCode Theme by [robb0wen](https://github.com/robb0wen)
- [Synthwave '2077](https://github.com/SBigz/Synthwave-2077) VSCode Theme by [SBigz](https://github.com/SBigz)