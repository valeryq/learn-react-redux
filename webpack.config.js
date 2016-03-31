const webpack = require('webpack');


// Получаем окружение для разных типов сборки
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: __dirname + '/src/js',
  entry: {
    index: "./index"
  },
  output: {
    path: __dirname + '/public',
    filename: "[name].js",
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    // Лоадеры, которые подключают разного типа файлы в бандл
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },

  plugins: [
    // Позволяет создавать всякого рода глобальные переменные, а так же после сборки преобразовывает их в вид строки, переменной и т.д. if ('development' == '')
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),

    // Если будет ошибка в билде, то не создаст файлы бандлов
    new webpack.NoErrorsPlugin(),

    // Анализирует и выделяет общие используемые модули в отдельный файл
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    })

  ],

  // Ждёт изменений исходников и делает ребилд
  watch: NODE_ENV == 'development',

  // Ждет кол-во милисекунд после сохранения файла чтоб сделать ребилд
  watchOptions: {
    aggregateTimeout: 100
  },

  // Генерация source-map для дебага
  devtool: NODE_ENV == 'development' ? 'eval' : null,

};

// Если окружение == production, то подключаем плагин минификации и удаляем console_* из кода, убираем warnings
if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}