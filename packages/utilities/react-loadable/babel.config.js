module.exports = {
  plugins: [
    'babel-plugin-dynamic-import-node',
    'babel-plugin-module-resolver',
    'babel-plugin-transform-async-to-generator',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-object-assign',
  ],
  presets: ['@babel/preset-react', '@babel/preset-es2015'],
};
