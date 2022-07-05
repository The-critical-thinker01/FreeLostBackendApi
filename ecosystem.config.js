module.exports = {
    apps: [{
        name: "freeLost",
        script: 'app.js',
        autorestart: true,
        watch: true,
    }],

    deploy: {
        production: {
            user: 'root',
            host: '94.176.234.8',
            ref: 'origin/main',
            repo: 'https://github.com/fred-dev22/freeLost-API.git',
            path: '/root/freeLost-API',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': ''
        }
    }
};