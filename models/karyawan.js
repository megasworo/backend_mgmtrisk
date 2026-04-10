module.exports = (sequelize, DataTypes) => {
  const Worker = sequelize.define("Worker", {
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
    tempatLahir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggalLahir: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nikPenduduk: {
      type: DataTypes.INTEGER(25),
      allowNull: false,
    },
    nikPegawai: {
      type: DataTypes.INTEGER(25),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    tanggalGabung: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pendidikanAkhir: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    prodiAkhir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggalLulus: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });

  Worker.associate = (models) => {
    Worker.hasMany(models.Risk, {
      onDelete: "cascade",
    });

    Worker.belongsTo(models.Profession, {
      foreignKey: { allowNull: false },
    });

    Worker.belongsTo(models.Position, {
      foreignKey: { allowNull: false },
    });

    Worker.belongsTo(models.Career, {
      foreignKey: { allowNull: false },
    });

    Worker.belongsTo(models.LevelSix, {
      foreignKey: { allowNull: false },
    });

    Worker.hasMany(models.Mitigation, {
      onDelete: "cascade",
    });
  };

  return Worker;
};
