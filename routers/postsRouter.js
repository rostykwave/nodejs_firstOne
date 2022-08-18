const express = require('express');
const router = express.Router();

let posts = [
  { id: '1', topic: 'test1', text: 'test text1' },
  { id: '2', topic: 'test2', text: 'test text2' },
  { id: '3', topic: 'test3', text: 'test text3' },
];

router.get('/', (req, res) => {
  res.json({ posts, status: 'success' });
});

router.get('/:id', (req, res) => {
  const [post] = posts.filter(item => req.params.id === item.id);
  res.json({ post, status: 'success' });
});

router.post('/', (req, res) => {
  const { topic, text } = req.body;
  posts.push({ id: new Date().getTime().toString(), topic, text });
  res.json({ status: 'success' });
});

router.put('/:id', (req, res) => {
  const { topic, text } = req.body;
  // posts.map(post => {
  //   if (post.id === res.params.id) {
  //     post = { ...post, topic, text };
  //   }
  // });
  posts.forEach(post => {
    if (post.id === req.params.id) {
      post.topic = topic;
      post.text = text;
    }
  });
  res.json({ status: 'success' });
});

router.delete('/:id', (req, res) => {
  posts = posts.filter(item => req.params.id !== item.id);
  res.json({ status: 'success' });
});
// router
//   .get("/books", (req, res) => {
//     res.json({ books: [] });
//   })

//   .post("/books", (req, res) => {
//     res.json({ books: [0] });
//   });

module.exports = { postsRouter: router };
