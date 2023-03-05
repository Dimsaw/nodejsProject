const { getPostsById } = require('../src/services/postsService');
const { WrongsParametersError } = require('../src/helpers/errors');
const { Post } = require('../src/db/postModel');
const { JsonWebTokenError } = require('jsonwebtoken');
const { User } = require('../src/db/userModel');

describe("Posts Service getPostsById test ", () => {
    it("should retern post data by providen id ", async (done) => {
        const post = {
            _id: mPostId,
            topic: 'topic',
            userId: mUserId,
            text: 'text'
       }
       const mPostId = '1';
       const mUserId = '2';
       
       jest.spyOn(User, 'findOne').mockImplementationOnce(() => post)
       const result = await getPostsById(mPostId, mUserId)
        done();
     });
 
});

