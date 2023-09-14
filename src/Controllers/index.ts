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

export const nested = (req: Request, res: Response): void => {
  res.json({
    message: "I'm nested"
  })
}

