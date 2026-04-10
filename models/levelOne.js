module.exports = (sequelize, DataTypes) => {
  const LevelOne = sequelize.define("LevelOne", {
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

  LevelOne.associate = (models) => {
    LevelOne.hasMany(models.LevelTwo, {
      onDelete: "cascade",
    });
  };

  return LevelOne;
};
