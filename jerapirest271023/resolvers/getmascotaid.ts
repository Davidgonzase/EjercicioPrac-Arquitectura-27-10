import { Request, Response } from "npm:express@4.18.2";
import Mascotamodel from "../Mascotamodel.ts";

const obtainid = async (req: Request, res: Response) => {
    try {
      const id=req.params.id;
      if (!id) {
          res.status(400).send("Falta id");
          return;
      }
      const mascostas = await Mascotamodel.find({id}).exec();
      if (!mascostas) {
        res.status(404).send("Disco not found");
        return;
      }
      res.status(200).send(JSON.stringify(mascostas));
    } catch (error) {
      res.status(404).send(error.message);
      return;
    }
  };
  
export default obtainid;