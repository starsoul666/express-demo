const express = require("express");
const router = express.Router();
const multer = require("multer");

// 文件上传目录
const storage = multer.diskStorage({
  destination: "./upload",
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/download", (req, res) => {
  const file = path.resolve(__dirname, "doc/测试文档.xlsx");
  res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
  res.attachment(file);
  res.sendFile(file);
});

// 文件上传
router.post("/upload", upload.single("file"), (req, res) => {
  res.sendStatus(200);
});

module.exports = router
