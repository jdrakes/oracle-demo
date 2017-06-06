var Sequelize = require('sequelize');

// Initialize sequelize database connection
var sequelize = new Sequelize('oracle', 'root', 'Oracledemo1!', {
  host: '129.150.72.156',
  dialect: 'mysql',
  pool: { max: 5, min: 0, idle: 10000 }
});

// Define Question table definition
var Question = sequelize.define('question', {
  questionId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  question: { type: Sequelize.STRING, unique: true },
  answerChoices: { type: Sequelize.STRING, field: 'answer_choices' },
  answer: Sequelize.STRING
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Question.sync();

module.exports = Question;
