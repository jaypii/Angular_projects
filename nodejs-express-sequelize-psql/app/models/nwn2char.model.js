module.exports = (sequelize, Sequelize) => {
    const NWN2Char = sequelize.define("nwn2char", {
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      alignment: {
          type: Sequelize.STRING
      },
      startclass: {
          type: Sequelize.STRING
      },
      lvlclass1: {
        type: Sequelize.INTEGER
      },
      class2: {
        type: Sequelize.STRING
      },
      lvlclass2: {
        type: Sequelize.INTEGER
      },
      class3: {
        type: Sequelize.STRING
      },
      lvlclass3: {
        type: Sequelize.INTEGER
      },
      class4: {
        type: Sequelize.STRING
      },
      lvlclass4: {
        type: Sequelize.INTEGER
      },
      lvltotal: {
        type: Sequelize.INTEGER
      },
      layer: {
        type: Sequelize.STRING
      }
    });
  
    return NWN2Char;
  };