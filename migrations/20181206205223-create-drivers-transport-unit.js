'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Drivers_transportUnits', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      driver_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      transportUnit_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Drivers_transportUnits');
  }
};