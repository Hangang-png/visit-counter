// 访问计数器主逻辑
let count = 0;

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    count++;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ total: count });
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
