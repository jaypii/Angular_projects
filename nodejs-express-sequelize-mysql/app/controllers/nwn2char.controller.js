const db = require("../models");
const NWN2Char = db.nwn2chars;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: nwn2chars } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, nwn2chars, totalPages, currentPage };
};


// Create and Save a new NWN2Char
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

  // Create a NWN2Char
  const nwn2char = {
    name: req.body.name,
    gender: req.body.gender,
    race: req.body.race,
    alignment: req.body.alignment
  };

  // Save NWN2Char in the database
  NWN2Char.create(nwn2char)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the NWN2Char."
      });
    }); 
};

// Retrieve all NWN2Chars from the database.
exports.findAll = (req, res) => {
  const { page, size, name } = req.query;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
  const { limit, offset } = getPagination(page, size);

  NWN2Char.findAndCountAll({
    where: condition,
    order: [
        ['lvltotal', 'ASC'],
        ['name', 'ASC']
    ],
    limit: limit,
    offset: offset
  }).then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving nwn2chars."
      });
    });
};

// Find a single NWN2Char with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    NWN2Char.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving NWN2Char with id=" + id
        });
      });
};

// Update a NWN2Char by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    NWN2Char.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "NWN2Char was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update NWN2Char with id=${id}. Maybe NWN2Char was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating NWN2Char with id=" + id
        });
      });
};

// Delete a NWN2Char with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  NWN2Char.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "NWN2Char was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete NWN2Char with id=${id}. Maybe NWN2Char was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete NWN2Char with id=" + id
      });
    });
};

// Delete all NWN2Chars from the database.
exports.deleteAll = (req, res) => {
  NWN2Char.destroy({
    where: {},
    truncate: false
  })
  .then(nums => {
    res.send({ message: `${nums} Tutorials were deleted successfully!` });
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occurred while removing all nwn2chars."
    });
  });
};