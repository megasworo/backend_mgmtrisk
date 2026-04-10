const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

router.get("/", (req, res) => {
  res.send("ini router kategori risiko");
});

// create or post category
router.post("/post", (req, res) => {
  db.Category.create({
    kategori: req.body.kategori,
    status: "active",
  })
    .then((category) => {
      res.status(200).json({
        message: "Satu kategori berhasil ditambahkan",
        result: category,
      });
    })
    .catch((err) => res.send(err));
});

// get all categories
router.get("/all", (req, res) => {
  db.Category.findAll({
    include: [
      {
        model: db.Risk,
        include: [{ model: db.Mitigation, include: [{ model: db.WorkStep }] }],
      },
    ],
  })
    .then((categories) =>
      res.status(200).json({
        message: "Get all categories in database",
        count: categories.length,
        results: categories,
      }),
    )
    .catch((err) => res.send(err));
});

// get single category
router.get("/single/:id", (req, res) => {
  db.Category.findAll({
    where: { id: req.params.id },
    include: [
      {
        model: db.Risk,
        include: [{ model: db.Mitigation, include: [{ model: db.WorkStep }] }],
      },
    ],
  })
    .then((category) => res.send(category))
    .catch((err) => res.send(err));
});

// get all not deleted category
router.get("/notdeleted", (req, res) => {
  db.Category.findAll({
    where: {
      [Op.not]: [{ status: "deleted" }],
    },
    include: [
      {
        model: db.Risk,
        include: [{ model: db.Mitigation, include: [{ model: db.WorkStep }] }],
      },
    ],
  }).then((categories) =>
    res.status(200).json({
      message: "Get not-deleted-categories in database",
      count: categories.length,
      results: categories,
    }),
  );
});

// edit category
router.put("/edit", (req, res) => {
  db.Category.update(
    {
      kategori: req.body.kategori,
    },
    {
      where: { id: req.body.id },
    },
  )
    .then(() => res.status(200).json({ message: "kategori sudah diganti" }))
    .catch((err) => res.send(err));
});

// hapus category
router.put("/delete", (req, res) => {
  db.Category.update(
    {
      status: "deleted",
    },
    {
      where: { id: req.body.id },
    },
  )
    .then(() => res.status(200).json({ message: "kategori dihapus" }))
    .catch((err) => res.send(err));
});

module.exports = router;
