exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("firstName", 128).notNull();
    table.string("lastName", 128).notNull();
    table.string("email").notNull().unique();
  });

  await knex.schema.createTable("posts", (table) => {
    table.increments("id");
    table.string("title").notNull();
    table.string("body").notNull();
    table
      .integer("users_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("posts");
  await knex.schema.dropTableIfExists("users");
};
