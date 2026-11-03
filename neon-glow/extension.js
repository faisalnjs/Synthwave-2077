const vscode = require('vscode');

function activate(context) {
  const themeExtension = vscode.extensions.getExtension('DangoWeb.synthwave-2077');
  const theme = themeExtension?.packageJSON.contributes?.themes?.find(({ label }) => label === "Synthwave 2077");

  if (!theme) return;

  const themeClass = `${themeExtension.id}-${theme.path.replace(/^\.\//, '')}`.replace(/[^_a-zA-Z0-9-]/g, '-');
  let glow;

  const refresh = () => {
    glow?.dispose();
    glow = undefined;

    const settings = vscode.workspace.getConfiguration('synthwave2077.glow');
    const value = settings.get('brightness', 0.45);
    const brightness = Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0.45;

    if (settings.get('enabled', false) && brightness > 0) {
      const color = `color-mix(in srgb, currentColor ${brightness * 100}%, transparent)`;
      glow = vscode.window.createTextEditorDecorationType({
        textDecoration: `; :is(&, :root):has(.${themeClass}) { .monaco-editor .view-lines span[class^="mtk"] { text-shadow: 0 0 3px ${color}, 0 0 7px ${color}; } }`
      });
    }
  };

  context.subscriptions.push(
    vscode.commands.registerCommand('synthwave2077.toggleGlow', () => {
      const settings = vscode.workspace.getConfiguration('synthwave2077.glow');
      return settings.update('enabled', !settings.get('enabled', false), vscode.ConfigurationTarget.Global);
    }),
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration('synthwave2077.glow')) refresh();
    }),
    { dispose: () => glow?.dispose() }
  );

  refresh();
}

module.exports = { activate };