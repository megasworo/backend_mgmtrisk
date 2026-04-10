module.exports = (sequelize, DataTypes) => {
  const LevelFive = sequelize.define("LevelFive", {
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

  LevelFive.associate = (models) => {
    LevelFive.hasMany(models.LevelSix, {
      onDelete: "cascade",
    });

    LevelFive.belongsTo(models.LevelFour, {
      foreignKey: { allowNull: false },
    });
  };

  return LevelFive;
};
