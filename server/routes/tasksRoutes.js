const router = require("express").Router();

const Task = require("../models/Task");

//Postagem de tarefa
router.post("/", async (req, res) => {
  let { title, description, date, duration } = req.body;

  let task = {
    title,
    description,
    date,
    duration,
  };
  try {
    await Task.create(task);
    res.status(201).json({ message: "Tarefa inserida no sistema" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
//Regate de tarefas

router.get("/", async (req, res) => {
  try {
    let task = await Task.find({});
    res.status(200).json(task);
  } catch (error) {}
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let task = await Task.findById({ _id: id });
    if (!task) {
      res.status(422).json({ message: "Tarefa não encontrada" });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Atualização de tarefas
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { title, description, date, duration } = req.body;

  const task = {
    title,
    description,
    date,
    duration,
  };

  try {
    const updateTask = await Task.updateOne({ _id: id }, task);
    if (updateTask.matchedCount === 0) {
      res.status(422).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json(task);
    console.log("hello");
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Exclusão de tarefa
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let task = await Task.findOne({ _id: id });
  if (!task) {
    res.status(422).json({ message: "Tarefa não encontrada" });
    return;
  }
  try {
    await Task.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Tarefa removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
module.exports = router;
