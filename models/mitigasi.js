module.exports = (sequelize, DataTypes) => {
  const Mitigation = sequelize.define("Mitigation", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    mitigasi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tenggat: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  });

  Mitigation.associate = (models) => {
    Mitigation.belongsTo(models.Risk, {
      foreignKey: { allowNull: false },
    });

    Mitigation.hasMany(models.WorkStep, {
      onDelete: "cascade",
    });

    Mitigation.hasMany(models.DocMitigation, {
      onDelete: "cascade",
    });

    Mitigation.belongsTo(models.Worker, {
      foreignKey: { allowNull: false },
    });
  };

  return Mitigation;
};
