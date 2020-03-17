var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var schedulesSchema = new Schema({
	"homeTeam": String,
	"visitTeam":String,
	"playPlace": String,
	"playDate":String,
	"playTime":String,
	"homeImage":String,
	"visitImage":String,
	"homeRecent":String,
	"visitRecent":String,
  	"playSpot":String,
  	"playRecord":String,
});

module.exports = mongoose.model('Schedules',schedulesSchema);