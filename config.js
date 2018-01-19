exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://user1:user1@ds261247.mlab.com:61247/dungeons-and-dragons-characters'
exports.PORT = process.env.PORT || 8080;
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://user1:user1@ds263707.mlab.com:63707/test-dungeons-app'
exports.TEST_PORT = process.env.PORT || 7070;