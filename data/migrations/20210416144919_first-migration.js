
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments("project_id");
            tbl.string("project_name", 128).notNullable();
            tbl.string("project_description");
            tbl.boolean("project_completed").notNullable().defaultTo(0);
        })
        .createTable()
        .createTable()
        .createTable()
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists()
        .dropTableIfExists()
        .dropTableIfExists()
        .dropTableIfExists("projects")
};
