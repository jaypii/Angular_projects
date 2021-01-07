module.exports = app => {
    const nwn2chars = require("../controllers/nwn2char.controller");
  
    var router = require("express").Router();
  
    // Create a new NWN2Char
    router.post("/", nwn2chars.create);
  
    // Retrieve all NWN2Chars
    router.get("/", nwn2chars.findAll);
  
    // Retrieve a single NWN2Char with id
    router.get("/:id", nwn2chars.findOne);
  
    // Update a NWN2Char with id
    router.put("/:id", nwn2chars.update);
  
    // Delete a NWN2Char with id
    router.delete("/:id", nwn2chars.delete);
  
    // Delete all NWN2Chars
    router.delete("/", nwn2chars.deleteAll);
  
    app.use('/api/nwn2chars', router);
  };
