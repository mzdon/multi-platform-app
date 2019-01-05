/**
 * @param options
 *      type Options = {
 *          platform: 'ios' | 'android', // Current platform
 *          dev: boolean, // Whether to build for development
 *          minify: boolean, // Whether to minify the bundle
 *          bundle: boolean, // Whether building the bundle for packaging
 *          root: string, // Absolute path to the project root
 *      }
 * @param defaults - default config used by Haul... this is what I want to extend
 */

module.exports = (options, defaults) => {
    const ruleIndex = defaults.module.rules.findIndex(r => {
        return r.test && r.test.toString().indexOf("js$");
    });

    let config;
    if (ruleIndex) {
        config = {
            ...defaults,
            entry: "./index.js",
            module: {
                ...defaults.module,
                rules: [
                    ...defaults.module.rules,
                    {
                        ...defaults.module.rules[ruleIndex],
                        test: /\.jsx?$/,
                        exclude: /node_modules(?!.*[\/\\](react|@react-navigation|@expo|pretty-format|haul|metro))/
                    }
                ],
            }
        };
    } else {
        config = defaults;
    }

    return config;
};
