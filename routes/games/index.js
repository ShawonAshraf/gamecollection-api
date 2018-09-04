import { Router } from 'express';
import Game from '../../model/game';

const gamesRouter = Router();

// get all games
gamesRouter.get('/all', (req, res) => {
  Game.find({})
    .then((games) => {
      res.status(200).send({ games });
    });
});

// get games by platform
gamesRouter.get('/:platform', (req, res) => {
  const { platform } = req.params;

  Game.find({ platform })
    .then((games) => {
      res.status(200).send({ games });
    })
    .catch((e) => {
      console.log(e);
      res.status(404).send({
        error: 'Nothing from this platform!',
      });
    });
});

// get total count of games for all platforms
gamesRouter.get('/total/all', (req, res) => {
  Game.find({})
    .then((games) => {
      const total = games.length;
      res.status(200).send({ total });
    })
    .catch((e) => {
      console.log(e);
      res.status(404).send();
    });
});

// get total count by platform
gamesRouter.get('/total/:platform', (req, res) => {
  const { platform } = req.params;

  Game.find({ platform })
    .then((games) => {
      const total = games.length;
      res.status(200).send({ total });
    })
    .catch((e) => {
      console.log(e);
      res.status(404).send();
    });
});

export default gamesRouter;
