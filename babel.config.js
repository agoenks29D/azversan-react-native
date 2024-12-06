module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.android.js',
          '.ios.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@': './src',
          '@config': './config',
          '@assets': './assets',
        },
      },
    ],
  ],
};
