import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').
        createTable('roles', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()"));
            table.string('name');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('users', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()")).index();
            table.string('role_id');
            table.foreign('role_id').references('roles.id');
            table.string('name');
            table.string('email').notNullable();
            table.string('number');
            table.string('password').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('user_details', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()")).index();
            table.string('user_id');
            table.foreign('user_id').references('users.id');
            table.string('address');
            table.string('city');
            table.string('email_otp');
            table.string('email_sent_time');
            table.string('pin_code');
            table.boolean('is_registered');
            table.boolean('is_active');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('categorys', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()")).index();
            table.string('name').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('products', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()")).index();
            table.specificType('product_images', 'text ARRAY');
            table.string('category_id');
            table.foreign('category_id').references('categorys.id');
            table.string('name').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('product_details', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()")).index();
            table.string('product_id');
            table.foreign('product_id').references('products.id');
            table.string('price');
            table.string('disc');
            table.specificType('avilabe_size', 'text ARRAY');
            table.integer('rating');
            table.specificType('reviwers', 'text ARRAY');
            table.string('saler_id');
            table.foreign('saler_id').references('users.id');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('reviwers', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()")).index();
            table.string('product_id');
            table.foreign('product_id').references('products.id');
            table.string('reviwer_id');
            table.foreign('reviwer_id').references('users.id');
            table.string('reviwer_disc');
            table.integer('reviwer_rating');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('roles')
    .dropTable('users')
    .dropTable('user_details')
    .dropTable('categorys')
    .dropTable('products')
    .dropTable('product_details')
    .dropTable('reviwers')
}
