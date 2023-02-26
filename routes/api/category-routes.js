const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id,
      {
        include: [
          { model: Product }
        ]
      });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with that Id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => {
    res.status(200).json(category)
  })
  .catch((err) => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log(req.body)
  Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then((category) => {
    let validate = Object.keys(req.body)
    if (req.body.category_name == 0) {
      res.status(404).json({message: 'Cannot leave the category name blank'});
      return;
    } else if (validate == 0) {
      res.status(404).json({message: 'Cannot leave body blank'});
      return;
    } else if(category == 0) {
      res.status(404).json({message: 'No category with that Id!'});
      return;
    }
    res.status(200).json(category);
  })
  .catch((err) => {
    res.status(500).json(err)
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((categoryData) => {
    if (categoryData == 1) {
    res.status(200).json({message: `Successfully Deleted category Id: ${req.params.id}`})
    } else {
      res.status(404).json({message: "Tag with this id doesn't exist"})
    }
  })
  .catch((err) => res.status(404).json({Error: err }))
});

module.exports = router;
