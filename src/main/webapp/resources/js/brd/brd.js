"use strict"
var brd = brd || {};
brd = (()=>{
	
	const WHEN_ERR = '호출하는 js파일을 찾지 못했습니다'
		
	let _, js, brd_vue_js,router_js,name
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		brd_vue_js = js+'/vue/brd_vue.js'
		router_js = js+'/cmm/router.js'
		name = $.uname
	}
	let onCreate =()=>{
		init()
		$.getScript((brd_vue_js), ()=>{
		setContentView()
		$('<a>',{
        	href : '#',
        	click : e=>{
        		e.preventDefault()
        		write()
        	},
        	text : '글쓰기'
        })
        .addClass('nav-link')
        .appendTo('#go_write')
        
		})
	}
	
	
	let  setContentView =()=>{
		
        $('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        .html(brd_vue.brd_body({ctx:'/web',css: $.css(), img: $.img()}))
        $('#recent_updates .media').remove()
        $('#recent_updates .d-block').remove()
        $('#recent_updates').append('<h1>등록된글이없습니다</h1>')
		
	}
	
	let write =x=>{
		alert('글쓰기로이동')
		$('#recent_updates').html(brd_vue.brd_write(name))
		$('#suggestions').remove()
		$('#uname').val(name())	
		
	}
	
	return{onCreate}
	
})();