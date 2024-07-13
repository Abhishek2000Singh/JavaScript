const express = require('express');
const path = require('path');
const multer = require('multer');
const { mergePdfs } = require('./merge.js');

const upload = multer({ dest: 'uploads/' });
const app = express();
const port = 3000;

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res) => {
    try {
        console.log(req.files);
        const mergedTimestamp = await mergePdfs(
            path.join(__dirname, 'uploads', req.files[0].filename),
            path.join(__dirname, 'uploads', req.files[1].filename)
        );
        res.redirect(`http://localhost:${port}/static/merged_${mergedTimestamp}.pdf`);
    } catch (error) {
        console.error('Error merging PDFs:', error);
        res.status(500).send('Error merging PDFs. Please try again later.');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
