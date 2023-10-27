import { Request, Response } from "npm:express@4.18.2";
import Mascotamodel from "../Mascotamodel.ts";

const deletemas = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const Mascota = await Mascotamodel.findOneAndDelete({ id }).exec();
      if (!Mascota) {
        res.status(404).send("Mascota not found");
        return;
      }
      res.status(200).send("Mascota deleted");
    } catch (error) {
      res.status(404).send(error.message);
      return;
    }
};

export default deletemas