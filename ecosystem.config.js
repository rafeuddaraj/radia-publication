module.exports = {
  apps: [
    {
      name: "nextjs-app", // Application name
      script: "npm", // Use npm to run commands
      args: "run start-prod", // Custom script for build and start
      instances: "max", // Use all available CPU cores
      exec_mode: "cluster", // Cluster mode for scalability
      env: {
        NODE_ENV: "production", // Environment variable
        PORT: 8101, // Application port
      },
    },
  ],
};
