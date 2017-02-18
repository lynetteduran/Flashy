function index(req, res) {
  res.json({
    message: "Welcome to flashy",
    doc_url: "https://github.com/lynetteduran/flashy/api.md",
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
