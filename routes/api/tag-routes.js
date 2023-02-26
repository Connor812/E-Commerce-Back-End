const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({include: {model: Product}})
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {include: {model: Product}});
    if (!tagData) {
      res.status(404).json({ message: 'No tag with this Id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  console.log(req.body)
  Tag.create(req.body)
  .then((tag) => {
    let validate = Object.keys(req.body)
    if (req.body.tag_name == 0) {
      res.status(404).json({message: 'Cannot leave the tag name blank'});
      return;
    } else if (validate == 0) {
      res.status(404).json({message: 'Cannot leave body blank'});
      return
    }
    res.status(200).json(tag);
})
.catch((err) => {
  res.status(500).json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => {
    let validate = Object.keys(req.body)
    if (req.body.tag_name == 0) {
      res.status(404).json({message: 'Cannot leave the tag name blank'});
      return;
    } else if (validate == 0) {
      res.status(404).json({message: 'Cannot leave body blank'});
      return;
    } else if(tag == 0) {
      res.status(404).json({message: 'No tag with that Id!'});
      return;
    }
    res.status(200).json(tag);
  })
  .catch((err) => {
    res.status(500).json(err)
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((tagData) => {
    if (tagData == 1) {
    res.status(200).json({message: `Successfully Deleted Tag Id: ${req.params.id}`})
    } else {
      res.status(404).json({message: "Tag with this id doesn't exist"})
    }
  })
  .catch((err) => res.status(404).json({Error: err }))
});

module.exports = router;
