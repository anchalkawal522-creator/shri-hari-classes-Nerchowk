const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Course = require("./models/Course");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  
  res.json({
    success: true,
    message: "Shri Hari Classes API is running",
  });
});

// GET ALL COURSES
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
    });
  }
});

// GET ONE COURSE
app.get("/api/courses/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid course ID",
    });
  }
});

// CREATE COURSE
app.post("/api/courses", async (req, res) => {
  try {
    const { title, desc, image } = req.body;

    if (!title || !desc || !image) {
      return res.status(400).json({
        success: false,
        message: "Title, description and image are required",
      });
    }

    const course = await Course.create({
      title,
      desc,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create course",
    });
  }
});

// UPDATE COURSE
app.put("/api/courses/:id", async (req, res) => {
  try {
    const { title, desc, image } = req.body;

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      {
        title,
        desc,
        image,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update course",
    });
  }
});

// DELETE COURSE
app.delete("/api/courses/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid course ID",
    });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  });