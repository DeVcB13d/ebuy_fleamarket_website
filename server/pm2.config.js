module.exports = {
    apps: [
        {
            name: 'server',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                PORT: 5000,
            },
        },
        {
            name: 'client',
            script: 'npm',
            args: 'start',
            cwd: '/app/client',
            env: {
                NODE_ENV: 'development',
                PORT: 3000,
            },
        },
    ],
};
