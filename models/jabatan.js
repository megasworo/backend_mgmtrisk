module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define("Position", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });

  Position.associate = (models) => {
    Position.hasMany(models.Worker, {
      onDelete: "cascade",
    });
  };

  return Position;
};
