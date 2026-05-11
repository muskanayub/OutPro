const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {

  try {

    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      data: contact
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};