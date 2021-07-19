const path = require('path')

module.exports = {
    // webpack default config browserille, ei node
    target: 'node',

    // tell webpack the root file of server app
    entry: './src/index.js',

    //Tell webpack where to put file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    //Tell webpack to run babel
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }

}
