/**
 * Created by Hyiero on 7/31/2016.
 */

var mongoose = require('mongoose');

module.exports = {
    connectToDB: function(){
        mongoose.connect(''); //You will put the url to your mongo db here.
    }
}