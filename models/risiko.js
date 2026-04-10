module.exports = (sequelize, DataTypes) => {
  const Risk = sequelize.define("Risk", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    risiko: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    penyebab: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dampak: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pernyataan: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bobotBfr: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    severityBfr: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    probBfr: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bobotAft: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    severityAft: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    probAft: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    riskNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Risk.associate = (models) => {
    Risk.belongsTo(models.Category, {
      foreignKey: { allowNull: false },
    });

    Risk.belongsTo(models.Worker, {
      foreignKey: { allowNull: false },
    });

    Risk.belongsTo(models.LevelSix, {
      foreignKey: { allowNull: false },
    });

    Risk.hasMany(models.Mitigation, {
      onDelete: "cascade",
    });
  };

  return Risk;
};
