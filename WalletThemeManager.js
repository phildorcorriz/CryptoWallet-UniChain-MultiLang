class WalletThemeManager {
    constructor() {
        this.themes = {
            light: { bg: "#fff", text: "#000" },
            dark: { bg: "#121212", text: "#fff" },
            blue: { bg: "#0056ff", text: "#fff" }
        };
    }

    getTheme(name) {
        return this.themes[name] || this.themes.light;
    }
}

const theme = new WalletThemeManager();
console.log("=== 钱包主题管理器 ===");
console.log(theme.getTheme("dark"));
