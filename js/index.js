$(document).ready(function(){
    var url='https://m.douban.com/rexxar/api/v2/recommend_feed';
    $.ajax({
    	url:url,
    	processData: false,
    	dataType:'jsonp',
    	type:'get',
    	success:function(data){
    	$(".date").html(data.date);
    	var str = '';
    	for(var i=0;i<data.recommend_feeds.length;i++){
    		var dt = data.recommend_feeds[i];
			str += `<li>
						<a href="${"https:"+dt.target.uri.split(":")[1]}">
							<span class="img_wrap">
								<img src="${dt.target.cover_url}" alt="">
							</span>
							<h3>${dt.title}</h3>
							<p>${dt.target.desc}</p>
							<span class="from">${dt.source_cn}</span>
						</a>
					</li>`;
       	}
       	$("ul").html(str);
     },
    	error:function(error) {
    		alert("出错了!"+error)
    	}});
	});