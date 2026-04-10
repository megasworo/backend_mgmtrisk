module.exports = (sequelize, DataTypes) => {
  const DocMitigation = sequelize.define("DocMitigation", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });

  DocMitigation.associate = (models) => {
    DocMitigation.belongsTo(models.Mitigation, {
      foreignKey: { allowNull: false },
    });
  };

  return DocMitigation;
};
