import { ArticleDto } from "../../../dtos";
import { ApiError } from "../../../errors";
import { toArticleDto } from "../../../mappers";
import { ArticleModel } from "../../../models";

/**
 * Adds in the database and returns a new article.
 * @param articleDto {ArticleDto}
 * @returns {Promise<ApiError | ArticleDto[]>}
 */
const create = async (
  articleDto: ArticleDto
): Promise<ApiError | ArticleDto> => {
  try {
    const article = await ArticleModel.create({
      name: articleDto.get_name(),
      price: articleDto.get_price(),
      img: articleDto.get_img(),
      description: articleDto.get_description(),
      brand: articleDto.get_brand(),
    });

    return toArticleDto(
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

/**
 * Returns all the existing articles in the database.
 * @returns {Promise<ApiError | ArticleDto[]>}
 */
const findAll = async (): Promise<ApiError | ArticleDto[]> => {
  try {
    const articles = await ArticleModel.find();

    return articles.map((article) =>
      toArticleDto(
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

/**
 * Returns the article with the given id.
 * @param id {string}
 * @returns {Promise<ApiError | ArticleDto>}
 */
const findOne = async (id: string): Promise<ApiError | ArticleDto> => {
  try {
    const article = await ArticleModel.findById(id);

    if (!article) {
      return ApiError.notFound("Article does not exist.");
    }

    return toArticleDto(
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

/**
 * Updates and returns attributs of a given article.
 * @param id {string}
 * @param articleDto {ArticleDto}
 * @returns {Promise<ApiError | ArticleDto>}
 */
const update = async (
  id: string,
  articleDto: ArticleDto
): Promise<ApiError | ArticleDto> => {
  try {
    const article = await ArticleModel.findById(id);

    if (!article) {
      return ApiError.notFound("Article does not exist.");
    }

    article.name = articleDto.get_name() ? articleDto.get_name() : article.name;
    article.price =
      articleDto.get_price() !== -1 ? articleDto.get_price() : article.price;
    article.img = articleDto.get_img() ? articleDto.get_img() : article.img;
    article.description = articleDto.get_description()
      ? articleDto.get_description()
      : article.description;
    article.brand = articleDto.get_brand()
      ? articleDto.get_brand()
      : article.brand;

    const newArticle = await article.save();

    return toArticleDto(
      newArticle._id,
      newArticle.name,
      newArticle.price,
      newArticle.img,
      newArticle.description,
      newArticle.brand
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Removes and returns the article with the give id from the database.
 * @param id {string}
 * @returns {Promise<ApiError | ArticleDto>}
 */
const remove = async (id: string): Promise<ApiError | ArticleDto> => {
  try {
    const article = await ArticleModel.findById(id);

    if (!article) {
      return ApiError.notFound("Article does not exist.");
    }

    await article.remove();

    return toArticleDto(
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
