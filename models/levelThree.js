module.exports = (sequelize, DataTypes) => {
  const LevelThree = sequelize.define("LevelThree", {
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

  LevelThree.associate = (models) => {
    LevelThree.hasMany(models.LevelFour, {
      onDelete: "cascade",
    });

    LevelThree.belongsTo(models.LevelTwo, {
      foreignKey: { allowNull: false },
    });
  };

  return LevelThree;
};
