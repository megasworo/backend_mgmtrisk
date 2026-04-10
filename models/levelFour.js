module.exports = (sequelize, DataTypes) => {
  const LevelFour = sequelize.define("LevelFour", {
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

  LevelFour.associate = (models) => {
    LevelFour.hasMany(models.LevelFive, {
      onDelete: "cascade",
    });

    LevelFour.belongsTo(models.LevelThree, {
      foreignKey: { allowNull: false },
    });
  };

  return LevelFour;
};
