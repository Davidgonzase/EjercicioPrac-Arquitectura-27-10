import { Request, Response } from "npm:express@4.18.2";
import Mascotamodel from "../Mascotamodel.ts";

const updatemas = async (req: Request, res: Response) => {
    try {
        const id=req.params.id;
        if (!id) {
            res.status(400).send("Falta id");
            return;
        }
        const { nombre, descripcion, tipo } = req.body;
        if (!nombre || !descripcion || !tipo) {
          res.status(400).send("Faltan campos");
          return;
        }
        const tipos:string=tipo
        if(!(tipos=="perros"||tipos=="gatos"||tipos=="serpientes")){
          res.status(400).send("Tipo incorrecto");
          return;
        }
        const updatedPerson = await Mascotamodel.findOneAndUpdate(
            { id },
            { nombre, descripcion, tipo },
            { new: true }
        ).exec();
      
    } catch (error) {
      res.status(404).send(error.message);
      return;
    }
  };
  
export default updatemas;