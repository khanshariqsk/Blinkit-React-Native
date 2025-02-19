module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@state': './src/state',
          '@service': './src/service',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@types': './src/types',
        },
      },
    ],
  ],
};
