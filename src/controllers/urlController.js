import { v4 as uuid } from 'uuid';
import { connection } from '../database.js';

export async function createShorterUrl(req, res) {
  const url = req.body;

  try {
    
    res.status(201).send({shortUrl: uuid()});
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getUser(req, res) {
  const { user } = res.locals;

  try {
    res.send(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}