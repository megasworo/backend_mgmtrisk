module.exports = (sequelize, DataTypes) => {
  const Career = sequelize.define("Career", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    level: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });

  Career.associate = (models) => {
    Career.hasMany(models.Worker, {
      onDelete: "cascade",
    });

    Career.belongsTo(models.Profession, {
      foreignKey: { allowNull: false },
    });
  };

  return Career;
};
