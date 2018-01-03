//页面加载时
window.onload = function() {

	var a = $(".memberListOne").find("p").text(); //如果一级成员为空
	if(a == "") {
		//显示空页面
		$(".nullMeber").css("display", "block");
		$(".prompt").css("display", "block");
		$(".memberListOne").css("display", "none");
	} else {
		//否则显示成员列表
		$(".nullMeber").css("display", "none");
		$(".prompt").css("display", "none");
		$(".memberListOne").css("display", "block");

		$(".memberTar1").click(function() {
			$(".memberListOne").css("display", "block");
			$(".memberListTwo").css("display", "none");
			$(this).addClass("active").siblings().removeClass("active");
			$(".nullMeber").css("display", "none");
			$(".prompt").css("display", "none");

		})
		//如果二级成员为空
		var b = $(".memberListTwo").find("p").text();
		if(b == "") {
			//按钮显示灰色
			$(".memberTar2").css("background", "#ccc");
			$(".memberTar2").css("color", "#000")

		} else {

			//否则点击显示二级成员列表
			$(".memberTar2").click(function() {
				$(".memberListOne").css("display", "none");
				$(".memberListTwo").css("display", "block");
				$(this).addClass("active").siblings().removeClass("active");
				$(".nullMeber").css("display", "none");
				$(".prompt").css("display", "none");
			})
		}

	}
}

//点击推广时，跳转到个人首页
$(".tg").click(function() {
	localStorage.ge = '1';
	window.location.href = "personal.html";
})