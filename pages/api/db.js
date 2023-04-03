import data from '../../public/dummyMongoDB.json';

const handler = (req, res) => {
  res.status(200).json(data);
};

export default handler