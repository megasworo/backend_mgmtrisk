module.exports = (sequelize, DataTypes) => {
  const LevelTwo = sequelize.define("LevelTwo", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });

  LevelTwo.associate = (models) => {
    LevelTwo.hasMany(models.LevelThree, {
      onDelete: "cascade",
    });

    LevelTwo.belongsTo(models.LevelOne, {
      foreignKey: { allowNull: false },
    });
  };

  return LevelTwo;
};
