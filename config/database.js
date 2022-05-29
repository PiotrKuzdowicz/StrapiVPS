module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '141.136.42.155'),
      port: env.int('DATABASE_PORT', 5433),
      database: env('DATABASE_NAME', 'strapi_db'),
      user: env('DATABASE_USERNAME', 'strapi_user'),
      password: env('DATABASE_PASSWORD', '^+.q#rN&7w_]X%m+'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
