package com.ship.web.cmm;

@FunctionalInterface
public interface IConsumer<T> {
	public void accept(T t);
}
