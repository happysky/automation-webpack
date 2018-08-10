module.exports = {
    entry: './entry.js',
    //entry: './require-entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};