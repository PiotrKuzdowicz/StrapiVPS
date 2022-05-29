module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['GFh/TyrZuzIHH/p2DY7NNg==','dFdwU0f+t71Tu4IxAeAq7A==']),
  },
});
