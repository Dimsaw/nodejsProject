const { getPostsById } = require('../src/services/postsService');
const { WrongsParametersError } = require('../src/helpers/errors');
const { Post } = require('../src/db/postModel');


describe("Posts Service getPostsById test ", () => {
    it("should retern post data by providen id ", async () => {
        const mPostId = '1';
       const mUserId = '2';

        const post = {
            _id: mPostId,
            topic: 'topic',
            userId: mUserId,
            text: 'text'
       }
       
       
       jest.spyOn(Post, 'findOne').mockImplementationOnce( async () => post)
        const result = await getPostsById(mPostId, mUserId);
        expect(result._id).toEqual(mPostId);
        expect(result.topic).toBeDefined();
        expect(result.text).toBeDefined();
        
     });
 
});

