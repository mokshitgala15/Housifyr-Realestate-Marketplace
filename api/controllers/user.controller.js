import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
    res.json({ 
        message: 'Api route is working!',
     });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'You can only update your own account'));
    }

    try {
        const updateFields = {};
        const { username, email, password, avatar } = req.body;

        if (username) updateFields.username = username;
        if (email) updateFields.email = email;
        if (avatar) updateFields.avatar = avatar;
        if (password) updateFields.password = bcryptjs.hashSync(password, 10);

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedUser) return next(errorHandler(404, 'User not found'));

        const { password: pass, ...rest } = updatedUser._doc;
        return res.status(200).json(rest);
    } catch (error) {
        return next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'You can only delete your own account'));
    }

    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token');
        return res.status(200).json('User has been deleted');
    } catch (error) {
        return next(error);
    }
};
