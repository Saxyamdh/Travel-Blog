const blogPost = async (req, res) => {
  const { random } = req.body;
  console.log("Controller",random);
};

module.exports = { blogPost };
