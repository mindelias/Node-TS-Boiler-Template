import express, { Request, Response, NextFunction } from "express";
var router = express.Router();

/* GET home page. */
router.get('/', function(_req:Request, res:Response, _next:NextFunction) {
  // res.render('index', { title: 'Express' });
  res.send('hello')
});

export default router
