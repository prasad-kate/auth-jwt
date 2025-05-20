import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  try {
    // TODO: signup logic
    // res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error signing up the user", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    // TODO: login logic
    // res.status(201).json({ message: "User logged-in successfully" });
  } catch (error) {
    console.error("Error during login", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
