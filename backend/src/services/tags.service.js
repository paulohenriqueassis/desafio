import TagRepository from "../repositories/tags.repository.js";

async function createTag(tagInfo) {
  return await TagRepository.createTag(tagInfo);
}

async function getTag(params) {
  try {
    const tag = await TagRepository.getTag(params);
    if(!tag) throw new Error("Tag não encontrada, verifique os ids digitados.");
    return tag;
  } catch (error) {
    throw new Error("Tag não encontrada, verifique os ids digitados.");
  }
}

async function updateTag(tag) {
  try {
    return await TagRepository.updateTag(tag);
  } catch (error) {
    throw new Error("Nao existe tag com esse id.");
  }
}

async function deleteTag(data) {
  try {
    const tag = await TagRepository.deleteTag(data);
    return tag;
  } catch (error) {
    throw new Error("Tag não encontrada, verifique os ids digitados.");
  }
}

export default {
  createTag,
  getTag,
  updateTag,
  deleteTag,
};
