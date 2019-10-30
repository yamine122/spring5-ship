package com.ship.web.brd;




import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article article);
	public void selectArticle(Article article);
	public void updateArticle(Article param);
	public void deleteArticle(Article param);
	public String count();
	public List<Article> selectAll();
}
