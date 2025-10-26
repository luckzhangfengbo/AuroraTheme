// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// 主题数据
const themeData = [
	{ label: 'Rainbow', theme: 'Aurora Dark - Rainbow', description: 'Colorful rainbow theme with vibrant accents', type: 'dark' },
	{ label: 'Cyber', theme: 'Aurora Dark - Cyber', description: 'Cyberpunk inspired theme with blue accents', type: 'dark' },
	{ label: 'Neon', theme: 'Aurora Dark - Neon', description: 'Vibrant neon colors on dark background', type: 'dark' },
	{ label: 'Matrix', theme: 'Aurora Dark - Matrix', description: 'Classic matrix-style green on black', type: 'dark' },
	{ label: 'Code Pro', theme: 'Aurora Dark - Code Pro', description: 'Professional coding theme with clear contrast', type: 'dark' },
	{ label: 'Midnight Coder', theme: 'Aurora Dark - Midnight Coder', description: 'Perfect theme for late night coding', type: 'dark' },
	{ label: 'One Dark', theme: 'Aurora Dark - One Dark', description: 'Classic Atom-inspired dark theme', type: 'dark' },
	{ label: 'GitHub Dark', theme: 'Aurora Dark - GitHub', description: 'GitHub-style dark theme', type: 'dark' },
	{ label: 'Back', theme: 'Aurora Dark - Back', description: 'Dark theme inspired by the popular VSCode theme', type: 'dark' },
	{ label: 'White', theme: 'Aurora Dark - White', description: 'Dark theme with a touch of purple', type: 'dark' },
	{ label: 'Bright', theme: 'Aurora Bright - Refresh', description: 'Bright theme with a touch of purple', type: 'light' },
	{ label: 'Solarized Light', theme: 'Aurora Light - Solarized', description: 'Solarized inspired light theme', type: 'light' },
	{ label: 'Pastel Light', theme: 'Aurora Light - Pastel', description: 'Soft pastel colors on light background', type: 'light' }
];

// 主题树项类
class ThemeTreeItem extends vscode.TreeItem {
	constructor(theme) {
		super(theme.label, vscode.TreeItemCollapsibleState.None);
		this.theme = theme.theme;
		this.description = theme.description;
		this.tooltip = `${theme.label}\n${theme.description}`;
		this.command = {
			command: 'AuroraTheme.switchToTheme',
			title: 'Switch to Theme',
			arguments: [theme.theme, theme.label]
		};
		
		// 根据当前活动主题设置图标
		const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');
		if (currentTheme === theme.theme) {
			this.iconPath = new vscode.ThemeIcon('check');
			this.contextValue = 'activeTheme';
		} else {
			this.contextValue = 'inactiveTheme';
		}
	}
}

// 主题分类树项类
class ThemeCategory extends vscode.TreeItem {
	constructor(label, collapsibleState) {
		super(label, collapsibleState);
		this.contextValue = 'themeCategory';
	}
}

// 主题树数据提供器
class ThemeTreeDataProvider {
	constructor() {
		this._onDidChangeTreeData = new vscode.EventEmitter();
		this.onDidChangeTreeData = this._onDidChangeTreeData.event;
	}

	setCurrentTheme(theme) {
		// 刷新树视图以更新选中状态
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element) {
		return element;
	}

	getChildren(element) {
		if (!element) {
			// 根节点，返回分类
			return [
				new ThemeCategory('Dark Themes', vscode.TreeItemCollapsibleState.Collapsed),
				new ThemeCategory('Light Themes', vscode.TreeItemCollapsibleState.Collapsed)
			];
		}

		// 返回分类下的主题
		if (element.contextValue === 'themeCategory') {
			const themeType = element.label === 'Dark Themes' ? 'dark' : 'light';
			return themeData
				.filter(theme => theme.type === themeType)
				.map(theme => new ThemeTreeItem(theme));
		}

		return [];
	}
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Aurora Theme is now active!');

	// 创建主题树数据提供器
	const treeDataProvider = new ThemeTreeDataProvider();

	// 注册树视图
	const treeView = vscode.window.createTreeView('AuroraTheme.themesView', {
		treeDataProvider
	});

	// 切换主题命令
	let switchThemeCommand = vscode.commands.registerCommand('AuroraTheme.switchToTheme', async (themeName, label) => {
		try {
			await vscode.workspace.getConfiguration().update('workbench.colorTheme', themeName, true);
			
			// 更新树视图以显示新选中的主题
			treeDataProvider.setCurrentTheme(themeName);
			
			// 创建一个消息提示，并设置自动关闭选项
			vscode.window.withProgress({
				location: vscode.ProgressLocation.Notification,
				title: `Switched to ${themeName}`,
				cancellable: false
			}, async (progress) => {
				return new Promise(resolve => {
					setTimeout(() => {
						resolve();
					}, 2000);
				});
			});
		} catch (error) {
			vscode.window.showErrorMessage(`Error switching theme: ${error.message}`);
		}
	});

	// 显示主题视图命令
	let showThemesViewCommand = vscode.commands.registerCommand('AuroraTheme.showThemesView', () => {
		treeView.reveal(
			new ThemeCategory('Dark Themes', vscode.TreeItemCollapsibleState.Collapsed),
			{ expand: true }
		);
	});

	// 刷新主题视图命令
	let refreshThemesCommand = vscode.commands.registerCommand('AuroraTheme.refreshThemes', () => {
		treeDataProvider.setCurrentTheme();
	});

	// 快速选择主题命令（保留原有的命令功能）
	let selectVariantCommand = vscode.commands.registerCommand('AuroraTheme.selectVariant', async () => {
		try {
			const variants = themeData.map(theme => ({
				label: theme.label,
				theme: theme.theme,
				description: theme.description
			}));

			const selected = await vscode.window.showQuickPick(variants, {
				placeHolder: 'Select Aurora Theme Variant',
				title: 'Aurora Theme Variants'
			});

			if (selected) {
				await vscode.commands.executeCommand('AuroraTheme.switchToTheme', selected.theme, selected.label);
			}
		} catch (error) {
			vscode.window.showErrorMessage(`Error switching theme: ${error.message}`);
		}
	});

	// 订阅所有命令
	context.subscriptions.push(
		switchThemeCommand,
		showThemesViewCommand,
		refreshThemesCommand,
		selectVariantCommand,
		treeView
	);
	
	// 监听主题变化，更新树视图
	vscode.workspace.onDidChangeConfiguration(e => {
		if (e.affectsConfiguration('workbench.colorTheme')) {
			treeDataProvider.setCurrentTheme();
		}
	});
}

/**
 * @type {() => void}
 */
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
