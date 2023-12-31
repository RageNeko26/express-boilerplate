import { Request, Response } from "express"

export const Home = (_req: Request, res: Response): void => {
  res.json({
    message: "Welcome to Boilerplate API Version 1.0.0"
  })
}

export const About = (_req: Request, res: Response ): void => {
  res.json({
    message: "About route"
  })
}

export const Nested = (_req: Request, res: Response): void => {
  res.json({
    message: "I'm nested"
  })
}

export const OtherNest = (_req: Request, res: Response): void => {
  res.json({
    message: "Other nest route"
  })
}

export const v1 = (_req: Request, res: Response): void => {
  res.json({
    message: "Home version 1.0.0"
  })
}

export const SaveBook = (req: Request, res: Response): void => {
    const title = req.body.title
    const author = req.body.author

    res.status(201).json({
      data: {
        title: title,
        author: author,
      },
    })
}
