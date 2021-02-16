const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

// module.exports = (env, argv) => {
//     // let config = argv.mode === 'development' ? devConfig : proConfig;
//     // return merge(baseConfig, config);
//     console.log(argv);
// };
module.exports = (env,argv) => {
    switch(argv.mode) {
        case 'development':
        return merge(baseConfig, devConfig);
      case 'production':
        console.log('production');
        return merge(baseConfig, proConfig);
      default:
        throw new Error('No matching configuration was found!');
    }
}