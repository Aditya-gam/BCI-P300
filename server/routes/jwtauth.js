const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

// Register Route

router.post("/register", validInfo, async (req, res) => {
  try {
    // 1. Destructure the req.body (name, email, password)

    const { name, email, password, access } = req.body;

    // 2. Check if user exist (if user exist then throw error)

    const user = await pool.query(
      "SELECT * FROM users WHERE user_email = $1 And user_access = $2",
      [email, access]
    );

    if (user.rows.length != 0) {
      return res.status(401).json("User already exists");
    }

    // 3. Bcrypt the user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // 4. Enter the new user inside our database

    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password, user_access) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, bcryptPassword, access]
    );

    // 5. Generating our JWT token

    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Login Route

router.post("/login", validInfo, async (req, res) => {
  try {
    // 1. Destructure the req.body (name, email, password)

    const { email, password, access } = req.body;

    // 2. Check if user doesn't exist (if not then throw error)

    const user = await pool.query(
      "SELECT * FROM users WHERE user_email = $1 AND user_access = $2",
      [email, access]
    );

    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    }

    // 3. Check if incoming password is same as database password

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }

    // 5. Generating our JWT token

    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Verify user is logged in

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
