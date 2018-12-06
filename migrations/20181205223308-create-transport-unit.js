'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TransportUnits', {
      id: {
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      numberUnit: {
        type: Sequelize.INTEGER
      },
      lincensePlate: {
        type: Sequelize.STRING
      },
      company_id: {
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
    return queryInterface.dropTable('TransportUnits');
  }
};