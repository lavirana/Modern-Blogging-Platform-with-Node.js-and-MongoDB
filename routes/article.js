const { Router } = require("express");
const router = Router();

router.get('/add-new', (req, res) => {
  return res.render('add_article', {
    user: req.user,
  });
});


module.exports = router;