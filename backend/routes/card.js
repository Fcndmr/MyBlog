const express = require("express");
const Card = require("../models/Card");
const router = express.Router();

// Create (POST)
router.post("/", async (req, res) => {
    try {
        let { img, title, description } = req.body;

        if (!img || !title || !description) {
            return res.status(400).json({ error: "Tüm alanları doldurun." });
        }

        img = img.trim();
        title = title.trim();
        description = description.trim();

        const newCard = new Card({ img, title, description });
        await newCard.save();

        res.status(201).json(newCard);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Bir hata oluştu: ${error.message}` });
    }
});

// Get All (GET)
router.get("/", async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Bir hata oluştu: ${error.message}` });
    }
});

// Get By ID (GET)
router.get("/:id", async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (!card) {
            return res.status(404).json({ error: "Kart bulunamadı." });
        }
        res.status(200).json(card);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Bir hata oluştu: ${error.message}` });
    }
});

// Update (PUT)
router.put("/:id", async (req, res) => {
    try {
        const updateFields = req.body;
        if (updateFields.img) updateFields.img = updateFields.img.trim();
        if (updateFields.title) updateFields.title = updateFields.title.trim();
        if (updateFields.description) updateFields.description = updateFields.description.trim();

        const updatedCard = await Card.findByIdAndUpdate(
            req.params.id,
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedCard) {
            return res.status(404).json({ error: "Kart bulunamadı." });
        }

        res.status(200).json(updatedCard);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Bir hata oluştu: ${error.message}` });
    }
});

// Delete (DELETE)
router.delete("/:id", async (req, res) => {
    try {
        const deletedCard = await Card.findByIdAndDelete(req.params.id);
        if (!deletedCard) {
            return res.status(404).json({ error: "Kart bulunamadı." });
        }
        res.status(200).json({ message: "Kart başarıyla silindi." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Bir hata oluştu: ${error.message}` });
    }
});

module.exports = router;
