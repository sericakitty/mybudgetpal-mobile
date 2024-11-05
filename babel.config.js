// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env', // Base .env file
          safe: false, // Set to true to load only safe variables
          allowUndefined: true, // Allow undefined variables to be replaced by process.env
          verbose: false, // Display messages on the console
        },
      ],
    ],
  };
};
