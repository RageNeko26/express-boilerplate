import { Request, Response } from "express"

export const Home = (req: Request, res: Response): void => {
  res.json({
    message: "Welcome to Boilerplate API Version 1.0.0"
  })
}

export const About = (req: Request, res: Response ): void => {
  res.json({
    message: "About route"
  })
}

export const Nested = (req: Request, res: Response): void => {
  res.json({
    message: "I'm nested"
  })
}

export const OtherNest = (req: Request, res: Response): void => {
  res.json({
    message: "Other nest route"
  })
}

export const v1 = (req: Request, res: Response): void => {
  res.json({
    message: "Home version 1.0.0"
  })
}

export const SaveBook = (req: Request, res: Response): void => {
  
}
