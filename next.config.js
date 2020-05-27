module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(woff2|woff|eot|ttf|otf)$/,
            use: ['file-loader'],
        });
        return config;
    },
};
