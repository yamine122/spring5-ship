package com.ship.web.brd;


import org.springframework.stereotype.Repository;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article article);
	public void selectArticle(Article article);
	public void updateArticle(Article article);
	public void deleteArticle(Article article);
}
