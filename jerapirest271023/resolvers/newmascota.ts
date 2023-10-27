import { Request, Response } from "npm:express@4.18.2";
import Mascotamodel from "../Mascotamodel.ts";

const addMascota = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, tipo } = req.body;
    if (!nombre || !descripcion || !tipo) {
      res.status(400).send("Faltan campos");
      return;
    }
    const tipos:string=tipo
    console.log(tipos)
    if(!(tipos=="perros"||tipos=="gatos"||tipos=="serpientes")){
      res.status(400).send("Tipo incorrecto");
      return;
    }
    const newMascota = new Mascotamodel({ nombre, descripcion, tipo });
    await newMascota.save();

    res.status(200).send({
      nombre: newMascota.nombre,
      descripcion: newMascota.descripcion,
      tipo: newMascota.tipo,
      id: newMascota._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addMascota;
