import express from 'express';
import UserController from '../controller/UserController';

import UserBusiness from '../business/UserBusiness';

import UserDatabase from '../database/UserDatabase';
import GetAllDatabase from '../database/getAllDatabase';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';
import { TokenManager } from '../services/TokenManager';

const userDatabase = new UserDatabase();
const getAllDatabase = new GetAllDatabase();
const idGenerator = new IdGenerator();
const hashManager = new HashManager();
const tokenManager = new TokenManager();




const userController = new UserController(new UserBusiness(new UserDatabase(),new IdGenerator(),new HashManager(),new TokenManager()));


const userRouter = express.Router();


userRouter.post('/signup', userController.signup);

userRouter.post('/login', userController.login);

export { userRouter };

