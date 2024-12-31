const express = require('express');
const app = express();

app.get('/', (req, res) => {
    try
    {
        res.status(200).json({message:"This API WORKS"});
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
