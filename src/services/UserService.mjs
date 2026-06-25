import userModel from '../models/User.mjs';

class UserService{
    async createUser(userData){
        try{
            const user = await userModel.create(userData);
            return user;
        } catch (e) {
            console.error("error message: ", e);
        }
    }

    async checkUser(userData){
        try{
            const user = await userModel.findOne(userData.user);

            if(!user || !user.password || !userData.password){
                return 'password and user required'
            }

            if(user.password !== userData.password){
                return 'invalid user or bad password';
            }

            return user;

        } catch (e) {
            console.error("error message: ", e);
        }
    }
}

export default new UserService();
