import { Request, Response } from "npm:express@4.18.2";
import Mascotamodel from "../Mascotamodel.ts";

const obtain = async (req: Request, res: Response) => {
  try {
    console.log("hola")
    const mascostas = await Mascotamodel.find().exec();
    if (!mascostas) {
      res.status(404).send("No hay mascotas");
      return;
    }
    res.status(200).send(JSON.stringify(mascostas));
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default obtain;