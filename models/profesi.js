module.exports = (sequelize, DataTypes) => {
  const Profession = sequelize.define("Profession", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    profesi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });

  Profession.associate = (models) => {
    Profession.hasMany(models.Worker, {
      onDelete: "cascade",
    });

    Profession.hasMany(models.Career, {
      onDelete: "cascade",
    });
  };

  return Profession;
};
