# Aurora Theme

Aurora Theme 是一款优雅的 VS Code 主题集合插件，提供多种精心设计的深色和浅色主题，满足不同开发场景的视觉需求。

## 主题预览

### 深色主题
- **Auror Dark-Code Pro**
![Auror Dark-Code Pro](images/Auror%20Dark-Code%20Pro.jpg)

- **Auror Dark-Cyber**
![Auror Dark-Cyber](images/Auror%20Dark-Cyber.jpg)

- **Auror Dark-Github**
![Auror Dark-Github](images/Auror%20Dark-Github.jpg)

- **Auror Dark-Matrix**
![Auror Dark-Matrix](images/Auror%20Dark-Matrix.jpg)

- **Auror Dark-Midnight Coder**
![Auror Dark-Midnight Coder](images/Auror%20Dark-Midnight%20Coder.jpg)

- **Auror Dark-Neon**
![Auror Dark-Neon](images/Auror%20Dark-Neon.jpg)

- **Auror Dark-One Dark**
![Auror Dark-One Dark](images/Auror%20Dark-One%20Dark.jpg)

- **Auror Dark-Back**
![Auror Dark-Back](images/Auror%20Dark-Back.jpg)

- **Auror Dark-White**
![Auror Dark-White](images/Auror%20Dark-White.jpg)

- **Aurora Dark - Rainbow**（深色多拼色主题）
![Aurora Dark-Rainbow](images/Aurora%20Dark-Rainbow.jpg)

### 浅色主题
- **Aurora Bright - Refresh**（浅色多拼色主题）
![Aurora Bright-Refresh](images/Aurora%20Bright-Refresh.jpg)

## 功能
- 支持11款精心设计的主题（10款深色主题和1款浅色主题）
- 提供左侧 Activity Bar 图标，一键访问所有主题
- 直观的主题选择视图，分类展示深色和浅色主题
- 当前选中主题显示勾选标记，便于识别
- 支持通过命令面板快速切换主题

## 使用方法

### 方法一：使用左侧 Activity Bar 图标（推荐）
1. 在 VS Code 左侧 Activity Bar 找到并点击 Aurora Theme 图标
2. 在打开的主题视图中，查看深色和浅色主题分类
3. 直接点击任意主题即可切换

### 方法二：通过命令面板
- **Windows**: `Ctrl+Shift+P`，搜索 "Aurora Theme"，选择主题后按回车
- **macOS**: `Cmd+Shift+P`，搜索 "Aurora Theme"，选择主题后按回车

## 安装

### 通过 VS Code 扩展市场
1. 在 VS Code 中打开扩展面板（左侧最下方图标或 `Ctrl+Shift+X`）
2. 搜索 "AuroraWaterTheme"
3. 点击安装按钮

### 微软市场链接
https://marketplace.visualstudio.com/search?term=AuroraWaterTheme&target=VSCode&category=All%20categories&sortBy=Relevance



## 主题配置说明

以下是主题配置文件的核心结构示例，展示了如何定义主题的UI元素颜色和代码语法高亮：

```json
{
    "name": "Aurora Dark - Rainbow",  // 主题的名称
    "type": "dark",  // 主题类型，"dark" 表示暗色主题
    "colors": {  // 定义了 UI 元素的颜色
        "editor.background": "#1E1E1E",  // 编辑器背景色
        "editor.foreground": "#D4D4D4",  // 编辑器文字颜色
        "activityBar.background": "#2B213A",  // 活动栏背景色（左侧栏）
        "activityBar.foreground": "#E9D8FD",  // 活动栏前景色（图标等）
        "activityBar.inactiveForeground": "#6B7280",  // 活动栏非活动时图标颜色
        "activityBarBadge.background": "#9F7AEA",  // 活动栏徽标背景色
        "activityBarBadge.foreground": "#F8F8F2",  // 活动栏徽标前景色
        "activityBar.border": "#1E1E1E",  // 活动栏的边框颜色
        "sideBar.background": "#1A365D",  // 侧边栏背景色
        "sideBar.foreground": "#E2E8F0",  // 侧边栏文字颜色
        "sideBarTitle.foreground": "#63B3ED",  // 侧边栏标题文字颜色
        "sideBarSectionHeader.background": "#2A4365",  // 侧边栏部分标题背景色
        "sideBarSectionHeader.foreground": "#90CDF4",  // 侧边栏部分标题文字颜色
        "statusBar.background": "#065F46",  // 状态栏背景色
        "statusBar.foreground": "#D1FAE5",  // 状态栏文字颜色
        "statusBar.debuggingBackground": "#FF5555",  // 调试时状态栏的背景色
        "statusBar.noFolderBackground": "#047857",  // 没有打开文件夹时状态栏的背景色
        "titleBar.activeBackground": "#2D2D2D",  // 活动窗口的标题栏背景色
        "titleBar.activeForeground": "#F8F8F2",  // 活动窗口的标题栏文字颜色
        "titleBar.inactiveBackground": "#1E1E1E",  // 非活动窗口的标题栏背景色
        "titleBar.inactiveForeground": "#6272A4",  // 非活动窗口的标题栏文字颜色
        "tab.activeBackground": "#2D2D2D",  // 活动标签页的背景色
        "tab.activeForeground": "#50FA7B",  // 活动标签页的文字颜色
        "tab.inactiveBackground": "#1E1E1E",  // 非活动标签页的背景色
        "tab.inactiveForeground": "#6272A4",  // 非活动标签页的文字颜色
        "editorGroupHeader.tabsBackground": "#1E1E1E",  // 编辑器组头部的标签背景色
        "button.background": "#50FA7B",  // 按钮的背景色
        "button.foreground": "#1E1E1E",  // 按钮文字颜色
        "button.hoverBackground": "#8BE9FD",  // 按钮悬停时的背景色
        "list.activeSelectionBackground": "#44475A",  // 活动列表选中项的背景色
        "list.activeSelectionForeground": "#F8F8F2",  // 活动列表选中项的文字颜色
        "list.hoverBackground": "#44475A50",  // 列表项悬停时的背景色
        "list.hoverForeground": "#8BE9FD",  // 列表项悬停时的文字颜色
        "panel.background": "#252526",  // 面板背景色
        "panelTitle.activeBorder": "#FF79C6",  // 面板标题激活时的下边框颜色
        "panelTitle.activeForeground": "#F8F8F2",  // 面板标题激活时的文字颜色
        "panelTitle.inactiveForeground": "#6272A4"  // 面板标题非激活时的文字颜色
    },
    "tokenColors": [  // 代码标记的颜色配置
        {
            "name": "Comments",  // 配置注释的颜色
            "scope": ["comment", "punctuation.definition.comment"],  // 匹配注释的语法范围
            "settings": {
                "foreground": "#6272A4"  // 注释的文字颜色
            }
        },
        {
            "name": "Strings",  // 配置字符串的颜色
            "scope": ["string", "string.quoted"],  // 匹配字符串的语法范围
            "settings": {
                "foreground": "#F1FA8C"  // 字符串的文字颜色
            }
        },
        {
            "name": "Keywords",  // 配置关键字的颜色
            "scope": ["keyword", "storage.type", "storage.modifier"],  // 匹配关键字的语法范围
            "settings": {
                "foreground": "#FF79C6"  // 关键字的文字颜色
            }
        },
        {
            "name": "Functions",  // 配置函数名的颜色
            "scope": ["entity.name.function", "support.function"],  // 匹配函数名的语法范围
            "settings": {
                "foreground": "#50FA7B"  // 函数名的文字颜色
            }
        },
        {
            "name": "Variables",  // 配置变量的颜色
            "scope": ["variable", "support.variable"],  // 匹配变量的语法范围
            "settings": {
                "foreground": "#8BE9FD"  // 变量的文字颜色
            }
        }
    ]
}
```