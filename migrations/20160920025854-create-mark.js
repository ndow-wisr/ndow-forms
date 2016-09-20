'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('marks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            mark_type: {
                type: Sequelize.STRING
            },
            mark_id: {
                type: Sequelize.STRING
            },
            mark_color: {
                type: Sequelize.STRING
            },
            mark_location: {
                type: Sequelize.STRING
            },
            date_given: {
                type: Sequelize.DATEONLY
            },
            mark_removed: {
                type: Sequelize.DATEONLY
            },
            mark_on_animal: {
                type: Sequelize.BOOLEAN
            },
            animal_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'animals',
                    key: 'id'
                }
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('marks');
    }
};
