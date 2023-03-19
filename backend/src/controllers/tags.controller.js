import TagService from "../services/tags.service.js";

async function createTag(req, res, next) {
  try {
    const { name, data_modificacao } = req.body;
    if (!name || !data_modificacao) {
      throw new Error(
        "Os campos name e data de modificação são obrigátorios para criação da tag e atualização do card."
      );
    }
    const { cardId } = req.params;
    const cardInfo = {
      cardId,
      name,
      data_modificacao,
    };
    await TagService.createTag(cardInfo);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
}

async function getTag(req, res, next) {
  try {
    const tag = await TagService.getTag(req.params);
    res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
}

async function updateTag(req, res, next) {
  try {
    const { name, data_modificacao } = req.body;
    if (!name || !data_modificacao) {
      throw new Error(
        "Os campos name e data de modificação são obrigatórios para a atualização de uma tag."
      );
    }
    const { cardId, id } = req.params;
    const data = {
      id,
      cardId,
      name,
      data_modificacao,
    };
    await TagService.updateTag(data);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

async function deleteTag(req, res, next) {
  try {
    const { data_modificacao } = req.body;
    if (!data_modificacao) {
      throw new Error(
        "O campo data de modificação é obrigatório para atualização do card após a remoção da tag."
      );
    }
    const { cardId, id } = req.params;
    const data = {
      id,
      cardId,
      data_modificacao,
    };
    await TagService.deleteTag(data);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

export default {
  createTag,
  getTag,
  deleteTag,
  updateTag,
};
