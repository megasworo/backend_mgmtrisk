module.exports = (sequelize, DataTypes) => {
  const WorkStep = sequelize.define("WorkStep", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    steps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inCharge: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bobot: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
    },
    tenggat: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });

  WorkStep.associate = (models) => {
    WorkStep.belongsTo(models.Mitigation, {
      foreignKey: { allowNull: false },
    });
  };

  return WorkStep;
};
