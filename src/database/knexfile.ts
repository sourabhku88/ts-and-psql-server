import { Knex } from 'knex'

export const DB_Config: Knex.Config = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',//process.env.DB_HOST,
        port: 5432,
        user: 'postgres', // process.env.DB_USER,
        password: 'qwerty1234', //process.env.DB_PASS,
        database: 'ecommerce',//process.env.DB_NAME
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: 'migrations'
    },
};


