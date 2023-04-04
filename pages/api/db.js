import data from '../../public/dummyMongoDB.json';

export default function handler (req, res)  {
  res.status(200).json(data);
};

