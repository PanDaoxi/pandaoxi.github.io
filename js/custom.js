function f1() {
	var d = new Date();
	m = d.getMonth() + 1;
	dd = d.getDate();
	y = d.getFullYear();

	if (m == 9 && dd == 18) {
		document
			.getElementsByTagName("html")[0]
			.setAttribute("style", "filter: grayscale(80%);");
		if (sessionStorage.getItem("isPopupWindow") != "1") {
			Swal.fire({
				position: "top-end",
				icon: "info",
				title:
					"今天是九一八事变 " +
					(y - 1931).toString() +
					" 周年纪念日。\n铭记历史，缅怀先烈，珍爱和平，开创未来。",
				showConfirmButton: false,
				toast: true,
				backdrop: false,
			});
			sessionStorage.setItem("isPopupWindow", "1");
		}
	}

	if (m == 7 && dd == 7) {
		document
			.getElementsByTagName("html")[0]
			.setAttribute("style", "filter: grayscale(80%);");
		if (sessionStorage.getItem("isPopupWindow") != "1") {
			Swal.fire({
				position: "bottom-end",
				icon: "info",
				title:
					"今天是七七事变 " +
					(y - 1937).toString() +
					" 周年纪念日。\n铭记历史，缅怀先烈，珍爱和平，开创未来。",
				showConfirmButton: false,
				toast: true,
				backdrop: false,
			});
			sessionStorage.setItem("isPopupWindow", "1");
		}
	}

	if (m == 12 && dd == 13) {
		document
			.getElementsByTagName("html")[0]
			.setAttribute("style", "filter: grayscale(80%);");
		if (sessionStorage.getItem("isPopupWindow") != "1") {
			Swal.fire({
				position: "top-end",
				icon: "info",
				title:
					"今天是南京大屠杀 " +
					(y - 1937).toString() +
					" 周年纪念日。\n国行公祭，法立典章。铸兹宝鼎，祀我国殇。\n——《南京大屠杀死难者国家公祭鼎铭文》",
				showConfirmButton: false,
				toast: true,
				backdrop: false,
			});
			sessionStorage.setItem("isPopupWindow", "1");
		}
	}

	if (m == 10 && dd <= 3) {
		if (sessionStorage.getItem("isPopupWindow") != "1") {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "祝祖国 " + (y - 1949).toString() + " 岁生日快乐！",
				showConfirmButton: false,
				toast: true,
				backdrop: false,
			});
			sessionStorage.setItem("isPopupWindow", "1");
		}
	}

	if (m == 1 && dd == 1) {
		if (sessionStorage.getItem("isPopupWindow") != "1") {
			Swal.fire({
				position: "top-end",
				title: y.toString() + " 年元旦快乐！🎉",
				showConfirmButton: false,
				toast: true,
				backdrop: false,
			});
			sessionStorage.setItem("isPopupWindow", "1");
		}
	}

	if (m == 5 && dd == 4) {
		if (sessionStorage.getItem("isPopupWindow") != "1") {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "屏幕前的你，青年节快乐！青年是整个社会力量中最积极、最有生气的力量，国家的希望在青年，民族的未来在青年。",
				showConfirmButton: false,
				toast: true,
				backdrop: false,
			});
			sessionStorage.setItem("isPopupWindow", "1");
		}
	}

	if (m == 7 && dd == 1) {
		if (sessionStorage.getItem("isPopupWindow") != "1") {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title:
					"祝中国共产党 " +
					(y - 1921).toString() +
					" 岁生日快乐！没有共产党就没有新中国！",
				showConfirmButton: false,
				toast: true,
				backdrop: false,
			});
			sessionStorage.setItem("isPopupWindow", "1");
		}
	}

	if (m == 9 && dd == 22) {
		if (sessionStorage.getItem("isPopupWindow") != "1") {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title:
					"祝 PanDaoxi " + (y - 2009).toString() + " 岁生日快乐！🎉",
				showConfirmButton: false,
				toast: true,
				backdrop: false,
			});
			sessionStorage.setItem("isPopupWindow", "1");
		}
	}
}

function f2() {
	var title = document.title;
	document.addEventListener(
		"visibilitychange",
		function () {
			if (document.hidden) {
				document.title = "PanDaoxi | ಠ_ಠ";
			} else {
				document.title = "PanDaoxi | (๑>◡<๑)";
				setTimeout(function () {
					document.title = title;
				}, 2000);
			}
		},
		false
	);
}

function f3() {
	function givePoems(distance) {
		if (distance > 1000) {
			return "海内存知己，天涯若比邻。";
		} else if (distance > 500) {
			return "莫愁前路无知己，天下谁人不识君。";
		} else if (distance > 100) {
			return "相逢意气为君饮，系马高楼垂柳边。";
		} else if (distance > 50) {
			return "近水楼台先得月，向阳花木易为春。";
		} else if (distance > 10) {
			return "绿树村边合，青山郭外斜。";
		} else if (distance > 5) {
			return "青山一道同云雨，明月何曾是两乡。";
		} else {
			return "千山万水总关情，步步近，心心相印。";
		}
	}

	const hostCityCoords = { lat: 38.036, lon: 114.4654 };
	const apiIp = "https://api.ip.sb/geoip";

	fetch(apiIp)
		.then((response) => response.json())
		.then((data) => {
			const userCoords = { lat: data.latitude, lon: data.longitude };
			const distance = calculateDistance(userCoords, hostCityCoords);
			document.getElementById(
				"distance"
			).textContent = `与你相距 ${Math.round(distance)} 千米。${givePoems(
				distance
			)}`;
		})
		.catch((error) => {
			document.getElementById(
				"distance"
			).textContent = `青山一道同云雨，明月何曾是两乡。`;
			console.warn("fetch 地理信息 API 失败。", error);
		});

	function calculateDistance(coords1, coords2) {
		const R = 6371;
		const dLat = toRadians(coords2.lat - coords1.lat);
		const dLon = toRadians(coords2.lon - coords1.lon);
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(toRadians(coords1.lat)) *
				Math.cos(toRadians(coords2.lat)) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const distance = R * c;
		return distance;
	}

	function toRadians(degrees) {
		return degrees * (Math.PI / 180);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	f1();
	f2();
	f3();
});
