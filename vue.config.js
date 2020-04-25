const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {

  outputDir: 'dist', // 构建输出目录

  lintOnSave: false, // eslint-loader 关闭实时检测

  runtimeCompiler: false, // 运行时版本是否需要编译

  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度

  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名

  chainWebpack: (config) => {
    if (isProduction) {
      config.plugins.delete('prefetch');
      config.plugins.delete('preload');
    }

    config.output.filename('[name].[hash].js').end();
    config.resolve.alias.set('@', path.resolve('src'));
    config.entry('main').add('babel-polyfill');
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
    const fileRule = config.module.rule('file');
    fileRule.uses.clear();
    fileRule
      .test(/\.svg$/)
      .exclude.add(resolve('src/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader');
  },
  configureWebpack: (config) => {
    config.plugins.push(
      // gzip压缩配置
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        test: productionGzipExtensions,
        threshold: 10240,
      }),
    );
  }, // CSS 相关选项

  // eslint-disable-next-line global-require
  parallel: require('os').cpus().length > 1,

  css: {
    // extract: true,
    sourceMap: false,
    loaderOptions:
      {
        less: {
          javascriptEnabled: true, // 设置为true
          globalVars:
            {
              'border-color-base': '#DDDDDD',
              black: '#000',
              'tips-color': '#888888',
              'border-color-split': '#eeeeee',
              'primary-color': '#2F54EB',
              'link-active-color': '#2F54EB',
              'link-hover-color': '#2F54EB',
              'text-color': '#555555',
              white: '#fff',
              'ative-back-color': '#F0F5FF',
              'font-size-14': '14px',
              'font-size-16': '16px',
              'btn-disable-color': '#BBBBBB',
            },
        },
      },
    modules: false,
  },
  devServer: {
    port: 8088,
    proxy:
      {
        '': {
          target: '/api', // 跨域设置
          changeOrigin:
            true, // 如果需要跨域,
          pathRewrite: {},
        },
      },
  },
  pluginOptions: {
    'style-resources-loader':
      {
        preProcessor: 'less',
        patterns:
          [path.resolve(__dirname, './src/theme/variables.less')], // 引入全局样式变量
      },
  },
};
