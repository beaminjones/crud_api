// controllers/clienteController.ts
import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";

//Rota que lista todos os clientes
export const index = async (req: Request, res: Response) => {
  const response = await ClientService.index();
  return res.status(200).json(response);
};

export const show = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await ClientService.show(id);
  return res.status(200).json(response);
};

//Rota que lista o filtro por documento
export const search = async (req: Request, res: Response) => {
  let document = req.body.document;
  const response = await ClientService.search(document);

  return res.status(200).json(response);
};

//Rota que cria um novo cliente
export const store = async (req: Request, res: Response) => {
  const response = await ClientService.store(req.body);
  return res.status(201).json(response);
};

//Rota que atualiza o cliente
export const update = async (req: Request, res: Response) => {
  let id = req.params.id;
  let data = req.body;

  const response = await ClientService.update(id, data);
  return res.status(200).json(response);
};

//Rota que deleta um cliente
export const destroy = async (req: Request, res: Response) => {
  let id = req.params.id;
  await ClientService.destroy(id);
  return res.status(200).json('Cliente excluído com sucesso');
};
