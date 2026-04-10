module.exports = (sequelize, DataTypes) => {
  const LevelSix = sequelize.define("LevelSix", {
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

  LevelSix.associate = (models) => {
    LevelSix.belongsTo(models.LevelFive, {
      foreignKey: { allowNull: false },
    });

    LevelSix.hasMany(models.Risk, {
      onDelete: "cascade",
    });

    LevelSix.hasMany(models.Worker, {
      onDelete: "cascade",
    });
  };

  return LevelSix;
};
