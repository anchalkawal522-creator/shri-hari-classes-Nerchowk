const mongoose = require("mongoose");
require("dotenv").config();

const Course = require("./models/Course");

const courses = [
  {
    title: "CBSE Boards",
    desc: "Class 9th - 12th Preparation",
    image: "cbsc.jpg",
  },
  {
    title: "NEET",
    desc: "Medical Entrance Preparation",
    image: "neetcou.avif",
  },
  {
    title: "JEE",
    desc: "Engineering Entrance Preparation",
    image: "jee.avif",
  },
  {
    title: "Engineering Entrance",
    desc: "Advanced Engineering Coaching",
    image: "eng enter.avif",
  },
  {
    title: "Government Exams",
    desc: "SSC, Banking & Other Exams",
    image: "govt.avif",
  },
  {
    title: "NDA",
    desc: "National Defence Academy",
    image: "nda.avif",
  },
  {
    title: "ICAR",
    desc: "Agriculture Entrance Preparation",
    image: "icar.avif",
  },
  {
    title: "Nursing",
    desc: "B.Sc Nursing Entrance Coaching",
    image: "nurcing.webp",
  },
  {
    title: "MNS",
    desc: "Military Nursing Services",
    image: "mns.avif",
  },
  {
    title: "IISER / NEST",
    desc: "Science Entrance Preparation",
    image: "nest.avif",
  },
  {
    title: "Physics",
    desc: "Physics Olympiad & Board Exams",
    image: "physics.avif",
  },
  {
    title: "Biology",
    desc: "Biology Entrance & Board Exams",
    image: "bio.avif",
  },
  {
    title: "Chemistry",
    desc: "Chemistry Entrance & Board Exams",
    image: "cam.avif",
  },
  {
    title: "JEE Main",
    desc: "Complete JEE Main Preparation",
    image: "jee main.avif",
  },
  {
    title: "JEE Advanced",
    desc: "Advanced Level Preparation",
    image: "jee adva.avif",
  },
  {
    title: "HP Board",
    desc: "HPBOSE Classes & Preparation",
    image: "hp b.avif",
  },
  {
    title: "NEET Crash Course",
    desc: "Quick Revision & Test Series",
    image: "neet crash.jpg",
  },
  {
    title: "JEE Crash Course",
    desc: "Fast-track JEE Preparation",
    image: "jee cra.avif",
  },
  {
    title: "NDA Crash Course",
    desc: "Special NDA Revision Program",
    image: "nda cra.avif",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Course.deleteMany({});
    await Course.insertMany(courses);

    console.log("19 courses inserted successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error.message);
  }
}

seedDatabase();