package com.ship.web.brd;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ship.web.pxy.Proxy;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article article);
	public void selectArticle(Article article);
	public void updateArticle(Article param);
	public void deleteArticle(Article param);
	public String count();
	public List<Article> selectAll(Proxy pxy);
}
