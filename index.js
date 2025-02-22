import express from "express";
import path from "path";

const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set static folder for CSS and images
app.use(express.static(path.join(process.cwd(), "public")));

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/how-it-works", (req, res) => res.render("howitworks"));
app.get("/contact", (req, res) => res.render("contact"));

// Start Server
const server=app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export both app & server
export { app, server };


