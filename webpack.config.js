const config = {
  entry: {
    'main': `${__dirname}/src/ts/main/index.ts`
  },
  output: {
    path: `${__dirname}/public/js`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'ts-loader',
          'tslint-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  }
};

module.exports = config;
