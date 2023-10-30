const { async } = require('@firebase/util');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true
            }
        })
    },
    resolver: {
        sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json']
    }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);