/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('students', table => {
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
            table.timestamps(true, true);
        })
        .createTable('books', table => {
            table.increments('id');
            table.string('book_name', 255).notNullable();
            table.string('author', 255).notNullable();
            table.string('borrowed_by', 255).notNullable();
            table.string('date_of_borrow', 255).notNullable();
            table.string('date_of_return', 255).notNullable();
            table.timestamps(true, true);
        })
}; 

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable('students');
  knex.schema.dropTable('books');
};
