var port = process.env.PORT || 4001;
require("./app").listen(port, () => {
  console.log(`⚡️[bootup]: Server is running at port:${port}`);
});
