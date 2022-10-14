module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions"
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-vite"
	},
	features: {
		storyStoreV7: true
	},
	viteFinal: (config, { configType }) => {
		if (confiType === "Production") {
			config.base = "/ignite-design-system/";
		}
		return config;
	}
};
