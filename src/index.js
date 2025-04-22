const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});


// Handle form submission
app.post('/submit-admission', (req, res) => {
  const {
    'student-name': studentName,
    dob,
    'grade': classApplied,
    'parent-name': parentName,
    email,
    phone,
    message: address
  } = req.body;

  const csvLine = `\n"${studentName}","${dob}","${classApplied}","${parentName}","${email}","${phone}","${address.replace(/\n/g, ' ')}"`;

  const dirPath = path.join(__dirname, 'data');
  const filePath = path.join(dirPath, 'admissions.csv');
  const header = `"Student Name","Date of Birth","Grade","Parent/Guardian Name","Email","Phone","Additional Information"`;

  // Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Write header if file doesn't exist
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, header);
  }

  // Append data
  fs.appendFile(filePath, csvLine, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Something went wrong while submitting the form.');
    }
    res.send('Admission form submitted successfully!');
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
