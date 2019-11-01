package com.ship.web.aop;

import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface TxMapper {
	public Map<?,?> crawl(Map<?,?> paramMap);
}
