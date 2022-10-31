import express  from "express"
import { changePassword, deleteUser, getCurrentUser, getUser, signIn, signInWidthFaceBook, signInWidthGoogle, signUp, updateUser, userDetail } from "../controllers/user";

const routeAuth = express.Router();

routeAuth.post('/signin',signIn);
routeAuth.post('/signInnWidthFacebook',signInWidthFaceBook);
routeAuth.post('/signInWidthGoogle',signInWidthGoogle);
routeAuth.post('/signup',signUp);
routeAuth.get('/users/:id',userDetail);
routeAuth.get('/users',getUser);
routeAuth.put('/users/:id',updateUser);
routeAuth.delete('/users/:id',deleteUser);
routeAuth.get('/users/currentUser/current', getCurrentUser);



 router.get("/join-class", joinClass);
export default routeAuth;

