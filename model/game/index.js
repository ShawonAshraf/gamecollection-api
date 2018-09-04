import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  publisher: {
    type: String,
    minlength: 1,
  },
  platform: {
    type: String,
    required: true,
    minlength: 1,
  },
});

const Game = mongoose.model('Game', GameSchema);

export default Game;
