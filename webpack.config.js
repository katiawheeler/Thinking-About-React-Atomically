module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif|jpeg|mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ]
    }
};
