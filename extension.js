// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Aurora Theme is now active!');

	let disposable = vscode.commands.registerCommand('Aurora-Theme.selectVariant', async () => {
		try {
			const variants = [
				{ label: 'Cyber', theme: 'Aurora Dark - Cyber', description: 'Cyberpunk inspired theme with blue accents' },
				{ label: 'Neon', theme: 'Aurora Dark - Neon', description: 'Vibrant neon colors on dark background' },
				{ label: 'Matrix', theme: 'Aurora Dark - Matrix', description: 'Classic matrix-style green on black' },
				{ label: 'Code Pro', theme: 'Aurora Dark - Code Pro', description: 'Professional coding theme with clear contrast' },
				{ label: 'Midnight Coder', theme: 'Aurora Dark - Midnight Coder', description: 'Perfect theme for late night coding' },
				{ label: 'One Dark', theme: 'Aurora Dark - One Dark', description: 'Classic Atom-inspired dark theme' },
				{ label: 'GitHub Dark', theme: 'Aurora Dark - GitHub', description: 'GitHub-style dark theme' }
			];

			const selected = await vscode.window.showQuickPick(variants, {
				placeHolder: 'Select Aurora Theme Variant',
				title: 'Aurora Theme Variants'
			});

			if (selected) {
				await vscode.workspace.getConfiguration().update('workbench.colorTheme', selected.theme, true);
				
				// 创建一个消息提示，并设置自动关闭选项
				vscode.window.withProgress({
					location: vscode.ProgressLocation.Notification,
					title: `Switched to ${selected.theme}`,
					cancellable: false
				}, async (progress) => {
					return new Promise(resolve => {
						setTimeout(() => {
							resolve();
						}, 2000);
					});
				});
			}
		} catch (error) {
			vscode.window.showErrorMessage(`Error switching theme: ${error.message}`);
		}
	});

	context.subscriptions.push(disposable);
}

/**
 * @type {() => void}
 */
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
