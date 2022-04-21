const withNx = require('@nrwl/next/plugins/with-nx');
const path = require('path');

const isSSRBuild = process.env.AMPLIFy_SSR_BUILD === 'true';

// eslint-disable-next-line spaced-comment
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  webpack(config, { defaultLoaders }) {
    if (isSSRBuild) {
      config.module.rules.push({
        test: /\.([jt])sx?$/,
        include: [path.join(__dirname, '../../libs')],
        exclude: /node_modules/,
        use: [defaultLoaders.babel],
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withNx(nextConfig);
