var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var newsSchema = new Schema({
	"newId": String,
	"newTitle":String,
	"newAuthor": String,
	"newDate":String,
	"newImage":String,
	"newContent":String,
  	"newClicks":Number,
	"commentList":[
	    {
	      "commentName":String,
	      "commentCon":String,
	      "commentId":String,
	      "commentZan":String,
	      "zanCheck":String,
	      "commentDate":String,
	      "commentAvatar":String,	     
	    }
    ],
},{usePushEach: true});

module.exports = mongoose.model('News',newsSchema);
