import { knex } from 'knex'
import { DB_Config } from './knexfile'

export const DB = knex(DB_Config)