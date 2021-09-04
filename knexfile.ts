// Update with your config settings.

const dbConfig = {
    development: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'prueba',
      }
        ,migrations: {
          directory: __dirname + '/db/migrations',
        },
        seeds: {
          directory: __dirname + '/db/seeds',
        },
      },

      production: {
        client: 'mysql',
        connection: {
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'prueba',
        },
        migrations: {
          directory: __dirname + '/db/migrations',
        },
        seeds: {
          directory: __dirname + '/db/seeds',
        },
      },

  

};


export default dbConfig;