import express from "express";
import cors from "cors";
import axios from "axios";
import fs from "fs";

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

const filePath = "./history.json";

app.get("/queries", async (req, res) => {
  const searchParam = req.query.q;
  try {
    const response = await axios.get(
      `https://api.duckduckgo.com/?q=${searchParam}&format=json`
    );
    const returnArr = response.data.Results.map((res) => {
      return { FirstURL: res.FirstURL, Text: res.Text };
    });

    res.status(200).send(returnArr);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/queriesdb", async (req, res) => {
  const dbQueries = fs.readFileSync(filePath, (err) => {
    if (err) {
      console.error("Error writing to JSON file:", err);
      return;
    }
    console.log("Data sent from JSON file successfully.");
  });
  res.status(200).send(dbQueries);
});

app.post("/queriesdb", async (req, res) => {
  const newQueries = req.body;
  const jsonData = JSON.stringify(newQueries);

  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error("Error writing to JSON file:", err);
      return;
    }
    console.log("Data written to JSON file successfully.");

    res.status(200).json({ message: "POST request successful" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
