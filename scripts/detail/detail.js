"use strict";function setCookie(n,s,t){var e=new Date;e.setTime(e.getTime()+24*t*60*60*1e3);var i="expires="+e.toGMTString();document.cookie=n+"="+s+";"+i+";path=/"}function getCookie(n){for(var s=n+"=",t=decodeURIComponent(document.cookie).split(";"),e=0;e<t.length;e++){for(var i=t[e];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(s))return i.substring(s.length,i.length)}return""}function checkCookie(n){var s=getCookie("code-".concat(n));if(""!=s){var t=getCookie("number-".concat(n));t++,setCookie("number-".concat(n),t,30),console.log(document.cookie)}else{t=1;setCookie("code-".concat(s=n),s,30),setCookie("number-".concat(n),t,30)}}function oneValues(){var n,s=window.location.search;return-1!=s.indexOf("?")&&(n=s.substr(s.indexOf("=")+1)),n}function manyValues(){var n=window.location.search;if(-1!=n.indexOf("?")){var s=n.substr(1);strs=s.split("&");var t=new Array(strs.length),e=new Array(strs.length);for(i=0;i<strs.length;i++)t[i]=strs[i].split("=")[0],e[i]=unescape(strs[i].split("=")[1]),alert(t[i]+"="+e[i])}}$(function(){$("#show").html(oneValues())}),$(function(){var c="";$.ajax({url:"scripts/xmyp.json",type:"GET",dataType:"json",success:function(n){$.each(n,function(n,s){0,s.gid==oneValues()&&(c='  <div class="detail">\n                          <div class="container">\n                              <div>\n                                  <div class="header clearfix">\n                                      <div class="banner clearfix">\n                                          <div class="main fl">\n                                              <img src="'.concat(s.imgs.img800,'">\n                                          </div>\n                                          <div class="thumb fr" style="display: block;">\n                                              <div class="thumb-container" style="top: 0px;">\n                                                  <div class="thumb-pic" style="border-color: rgb(132, 95, 63);">\n                                                      <img src="').concat(s.imgs.img800,'">\n                                                  </div>\n                                                  <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">\n                                                      <img src="').concat(s.imgs.img800s,'">\n                                                  </div>\n                                                  <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">\n                                                      <img src="').concat(s.imgs.img_horizon,'">\n                                                  </div>\n                                                  <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">\n                                                      <img src="').concat(s.imgs.img_safe_area_url,'">\n                                                  </div>\n                                                  <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">\n                                                      <img src="').concat(s.imgs.img_square,'">\n                                                  </div>\n                                              </div>\n                                              <div class = "thumb-arrow-up">\n                                                  <a class="m-icons m-icons-up " data-src="" href="javascript:;"></a>\n                                              </div>\n                                              <div class="thumb-arrow-down">\n                                                  <a class="m-icons m-icons-down " data-src="" href="javascript:;"></a>\n                                              </div>\n                                          </div>\n                                      </div>\n                                      <div class="sku-container">\n                                          <div class="name clearfix">\n                                              <div class="good-name fl">').concat(s.name,'</div>\n                                          </div>\n                                          <div class="summary">').concat(s.summary,'</div>\n                                          <div class="promotion-box"></div>\n                                          <div class="card">\n                                              <div class="price-line">\n                                                  <h5 class="sku-title">售价</h5>\n                                                  <div class="price">\n                                                      <span class="money-symbol">¥</span>\n                                                      <span class="value">').concat(s.price/100,'</span>\n                                                  </div>\n                                              </div>\n                                              <div class="service-line">\n                                                  <h5 class="sku-title">服务</h5>\n                                                  <div class="introduce-container">\n                                                      <p class="icon">!</p>\n                                                      <div class="content ">\n                                                          <div class="cardmodal-outer-container" style="width: 500px; left: -20px; top: -20px;">\n                                                              <div class="inner-container" style="width: 500px; left: 20px; top: 20px;">\n                                                                  <div class="container" style="width: 494px;">\n                                                                      <div class="content-main">\n                                                                          <div class="text-item">\n                                                                              <p class="text-title">满99包邮</p>\n                                                                              <p class="text-content">本商品满99元可包邮，不足99元收取运费10元</p>\n                                                                          </div>\n                                                                          <div class="text-item">\n                                                                              <p class="text-title">有品三方</p>\n                                                                              <p class="text-content">本商品为有品精选精品，第三方品牌方为实际销售方，小米有品精心挑选，严格把关，为您精选品质上乘的精品商品。</p>\n                                                                          </div>\n                                                                          <div class="text-item">\n                                                                              <p class="text-title">由有品配送发货，云丁网络技术（北京）有限公司提供售后</p>\n                                                                              <p class="service-item-qualification">查看商家资质</p>\n                                                                          </div>\n                                                                          <div class="text-item">\n                                                                              <p class="text-title">7天无理由</p>\n                                                                              <p class="text-content">本商品支持7天无理由退货</p>\n                                                                          </div>\n                                                                          <div class="text-item">\n                                                                              <p class="text-title">平台运费说明</p>\n                                                                              <p class="text-content">由小米平台发货的小米自营商品,单笔满150元免运费,不满150元收取10元运费;</p>\n                                                                              <p class="text-content">有品平台三方商品,单笔订单满99元免运费,不满99元收取10元运费;</p>\n                                                                              <p class="text-content">特殊商品需要单独收取运费,具体以实际结算金额为准;</p>\n                                                                              <p class="text-content">优惠券不能抵扣运费。</p>\n                                                                          </div>\n                                                                          <div class="text-item">\n                                                                              <p class="text-title">退换货运费声明</p>\n                                                                              <p class="text-content">非质量问题退换货,运费不予返还;</p>\n                                                                              <p class="text-content">因质量问题退换货,运费予以返还,多件产品只退部分产品时,运费按比例返还;</p>\n                                                                              <p class="text-content">电视等大件商品,无质量问题退货产生的运费由购买者承担,从退款中直接扣除。</p>\n                                                                          </div><div class="text-item">\n                                                                              <p class="text-title">企业信息</p>\n                                                                              <p class="text-content">企业名称： 云丁网络技术（北京）有限公司</p>\n                                                                              <p class="text-content">企业执照注册号： 91110108399514950D</p>\n                                                                              <p class="text-content">企业地址： 北京市海淀区花园路1号27幢333号</p>\n                                                                              <p class="text-content">企业电话： 010-56234691</p>\n                                                                              <p class="text-content">营业期限： 2014年05月21日至2034年05月20日</p>\n                                                                              <p class="text-content">经营范围： 技术开发、技术转让、技术咨询、技术服务、技术推广；电脑动画设计；维修计算机；办公设备维修；仪器仪表维修；销售计算机、软件及辅助设备、电子产品。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）</p>\n                                                                          </div>\n                                                                      </div>\n                                                                  </div>\n                                                              </div>\n                                                              <div class="size">\n                                                                  <div class="content-main">\n                                                                      <div class="text-item">\n                                                                          <p class="text-title">满99包邮</p>\n                                                                          <p class="text-content">本商品满99元可包邮，不足99元收取运费10元</p>\n                                                                      </div>\n                                                                      <div class="text-item">\n                                                                          <p class="text-title">有品三方</p>\n                                                                          <p class="text-content">本商品为有品精选精品，第三方品牌方为实际销售方，小米有品精心挑选，严格把关，为您精选品质上乘的精品商品。</p>\n                                                                      </div>\n                                                                      <div class="text-item">\n                                                                          <p class="text-title">由有品配送发货，云丁网络技术（北京）有限公司提供售后</p>\n                                                                          <p class="service-item-qualification">查看商家资质</p>\n                                                                      </div>\n                                                                      <div class="text-item">\n                                                                          <p class="text-title">7天无理由</p>\n                                                                          <p class="text-content">本商品支持7天无理由退货</p>\n                                                                      </div>\n                                                                      <div class="text-item">\n                                                                          <p class="text-title">平台运费说明</p>\n                                                                          <p class="text-content">由小米平台发货的小米自营商品,单笔满150元免运费,不满150元收取10元运费;</p>\n                                                                          <p class="text-content">有品平台三方商品,单笔订单满99元免运费,不满99元收取10元运费;</p>\n                                                                          <p class="text-content">特殊商品需要单独收取运费,具体以实际结算金额为准;</p>\n                                                                          <p class="text-content">优惠券不能抵扣运费。</p>\n                                                                      </div>\n                                                                      <div class="text-item">\n                                                                          <p class="text-title">退换货运费声明</p>\n                                                                          <p class="text-content">非质量问题退换货,运费不予返还;</p>\n                                                                          <p class="text-content">因质量问题退换货,运费予以返还,多件产品只退部分产品时,运费按比例返还;</p>\n                                                                          <p class="text-content">电视等大件商品,无质量问题退货产生的运费由购买者承担,从退款中直接扣除。</p>\n                                                                      </div>\n                                                                      <div class="text-item">\n                                                                          <p class="text-title">企业信息</p>\n                                                                          <p class="text-content">企业名称： 云丁网络技术（北京）有限公司</p>\n                                                                          <p class="text-content">企业执照注册号： 91110108399514950D</p>\n                                                                          <p class="text-content">企业地址： 北京市海淀区花园路1号27幢333号</p>\n                                                                          <p class="text-content">企业电话： 010-56234691</p>\n                                                                          <p class="text-content">营业期限： 2014年05月21日至2034年05月20日</p>\n                                                                          <p class="text-content">经营范围： 技术开发、技术转让、技术咨询、技术服务、技术推广；电脑动画设计；维修计算机；办公设备维修；仪器仪表维修；销售计算机、软件及辅助设备、电子产品。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）</p>\n                                                                      </div>\n                                                                  </div>\n                                                              </div>\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <div class="service">\n                                                      <div class="service-item">\n                                                          <a class="m-icons m-icons-service " data-src="" href="javascript:;"></a>\n                                                          <span class="service-item-text">满99包邮</span>\n                                                      </div>\n                                                      <div class="service-item">\n                                                          <a class="m-icons m-icons-service " data-src="" href="javascript:;"></a>\n                                                          <span class="service-item-text">有品三方</span>\n                                                      </div>\n                                                      <div class="service-item">\n                                                          <a class="m-icons m-icons-service " data-src="" href="javascript:;"></a>\n                                                          <span class="service-item-text">7天无理由</span>\n                                                      </div>\n                                                      <div class="service-item">\n                                                          <a class="m-icons m-icons-service " data-src="" href="javascript:;"></a>\n                                                          <span class="service-item-text">由有品配送发货，云丁网络技术（北京）有限公司提供售后</span>\n                                                          <span class="service-item-qualification">(查看商家资质)</span>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                          <div class="address-line">\n                                              <h5 class="sku-title">配送区域</h5>\n                                              <div class="address">\n                                                  <div>\n                                                      <span>北京 北京市 海淀区</span>\n                                                      <span>&nbsp;</span>\n                                                      <a>修改</a>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                          <div>\n                                              <div style="overflow: hidden; padding: 0px 0px 12px;">\n                                                  <div class="size-line clearfix">\n                                                      <h5 class="sku-title"> 选择').concat(s.style,' </h5>\n                                                      <div class="size-container">\n                                                          <div class="tag-item-onSaled">白色</div>\n                                                          <div class="tag-item-onSaled">黑色</div>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                              <div class="count-line">\n                                                  <h5 class="sku-title count-title">数量</h5>\n                                                  <div class="count-container">\n                                                      <div>\n                                                          <div class="minus-btn">\n                                                              <a class="m-icons m-icons-reduce " data-src="" href="javascript:;"></a>\n                                                          </div>\n                                                          <input type="text" value="1" class="count-input">\n                                                          <div class="minus-btn-active">\n                                                              <a class="m-icons m-icons-add-active " data-src="" href="javascript:;"></a>\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                          <div class="btn-line">\n                                              <div class="buy-btn-container">\n                                                  <a class="m-btns m-btn-middle m-btn-brown" href="javascript:;" data-gid="').concat(s.gid,'" id="cart">加入购物车</a>\n                                                  <a class="m-btns m-btn-middle m-btn-brown-stroke" href="javascript:;">立即购买</a>\n                                              </div>\n                                              <div class="favor-btn ">\n                                                  <div>\n                                                      <a class="m-icons m-icons-collection " data-src="" href="javascript:;"></a>\n                                                      <p>收藏</p>\n                                                  </div>\n                                              </div>\n                                              <div class="faver-service-btn favor-btn ">\n                                                  <div>\n                                                      <a class="m-icons m-icons-service-detail " data-src="" href="javascript:;"></a>\n                                                      <p>客服</p>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>'))}),$(".detail")[0].innerHTML=c;var s=$("#cart"),t=document.querySelector("[data-gid]");t.addEventListener("click",function(){console.log(t),checkCookie(s.data("gid"))});var e=document.querySelectorAll(".thumb-pic"),i=document.querySelector(".main");e.forEach(function(n){n.addEventListener("mouseover",function(){console.log(n),i.children[0].src=n.children[0].src,n.style.borderColor="rgb(132, 95, 63)"}),n.addEventListener("mouseleave",function(){console.log(n),n.style.borderColor="rgb(236, 236, 236)"})})}})}),$(function(){var n=$("#m-header"),s=(n.offset(),$(".search-form")),t=$(".search-input-con input"),e=$(".m-fixedBar>ul>li"),i=$(".fixed-service-pop"),c=$(".fixed-down-pop"),a=$(".fixed-gift-pop"),l=$(".fixed-wx-pop"),o=$("#m-clauses"),d=$(".site-item-nav");console.log(d),$(document).on("scroll",function(){450<$(document).scrollTop()?n.addClass("m-header-fixed"):n.removeClass("m-header-fixed")}),o.mouseenter(function(){d.addClass("show")}),o.mouseleave(function(){d.removeClass("show")}),t.focus(function(){s.addClass("active")}),t.blur(function(){s.removeClass("active")}),e.mouseenter(function(){switch($(this).index()){case 0:i.addClass("show");break;case 1:c.addClass("show");break;case 2:a.addClass("show");break;case 3:l.addClass("show")}}),e.mouseleave(function(){i.removeClass("show"),c.removeClass("show"),a.removeClass("show"),l.removeClass("show")})});