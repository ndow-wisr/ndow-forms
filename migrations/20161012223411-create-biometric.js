'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('biometrics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            biometric: {
                type: Sequelize.STRING
            },
            measurement: {
                type: Sequelize.REAL
            },
            unit: {
                type: Sequelize.STRING
            },
            biom_notes: {
                type: Sequelize.STRING
            },
            encounter_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'encounters',
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
        return queryInterface.dropTable('biometrics');
    }
};
