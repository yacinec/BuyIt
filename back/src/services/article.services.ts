import { ArticleDto } from "../dtos";
import { ArticleEntity } from "../entities";
import { ApiError } from "../errors";
import { toArticleEntity } from "../mappers";
import { ArticleModel } from "../models";

const create = async (
  articleDto: ArticleDto
): Promise<ApiError | ArticleEntity> => {
  try {
    const article = await ArticleModel.create({
      name: articleDto.get_name(),
      price: articleDto.get_price(),
      img: articleDto.get_img(),
      description: articleDto.get_description(),
      brand: articleDto.get_brand(),
    });

    return toArticleEntity(
      article._id,
      article.name,
      article.price,
      article.img,
      article.description,
      article.brand
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

const findAll = async (): Promise<ApiError | ArticleEntity[]> => {
  try {
    const articles = await ArticleModel.find();

    return articles.map((article) =>
      toArticleEntity(
        article._id,
        article.name,
        article.price,
        article.img,
        article.description,
        article.brand
      )
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

const findOne = async (_id: string): Promise<ApiError | ArticleEntity> => {
  try {
    const article = await ArticleModel.findById(_id);

    if (!article) {
      return ApiError.notFound("Article does not exist.");
    }

    return toArticleEntity(
      article._id,
      article.name,
      article.price,
      article.img,
      article.description,
      article.brand
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

const update = async (
  _id: string,
  articleDto: ArticleDto
): Promise<ApiError | ArticleEntity> => {
  try {
    const article = await ArticleModel.findById(_id);

    if (!article) {
      return ApiError.notFound("Article does not exist.");
    }

    const articleEntity = toArticleEntity(
      article._id,
      articleDto.get_name(),
      articleDto.get_price() === -1 ? article.price : articleDto.get_price(),
      articleDto.get_img(),
      articleDto.get_description(),
      articleDto.get_brand()
    );

    await article.update({ _id: _id }, articleEntity);

    return articleEntity;
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

const remove = async (_id: string): Promise<ApiError | ArticleEntity> => {
  try {
    const article = await ArticleModel.findById(_id);

    if (!article) {
      return ApiError.notFound("Article does not exist.");
    }

    await article.remove();

    return toArticleEntity(
      article._id,
      article.name,
      article.price,
      article.img,
      article.description,
      article.brand
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

export default { create, findAll, findOne, update, remove };
