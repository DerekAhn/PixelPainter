$(document).ready(function() {
	function PixPaint(height, width, size) {
		this.height = height;
		this.width = width;
		this.size = size;
		this.render = function(where, what) {
			for (var x = 0; x < height; x++) {
				var cell1 = ("<tr id='" + what + "row" + x + "'>");
				$(where).append(cell1);
				$("#" + what + "row" + x).css({"border" : "1px solid black", "background-color" : "white"});

				for (var y = 0; y < width; y++) {
					var cell2 = ("<td class='columns" + y + "'>");
					$("#" + what + "row" + x).append(cell2);
					$(".columns" + y).css({"border" : "1px solid black", "background-color" : "white", "width" : size, "height" : size});
					} // end of y loop
			} // end of x loop
			$("td").click(function() {
				$(this).css("background-color", currentColor);
			}); // end of painting method
			$("#clear").click(function() {
				$("#canvas td").css("background-color", "white");
			}); // end of clearing button
			$("#erase").click(function() {
				currentColor = "#FFFFFF";
			}); // ends erase button
		}; // ends render method
	} // end of PixPaint class

	function ColorPalette(height, width, size) {
		this.height = height;
		this.width = width;
		this.size = size;
		this.color = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGreen","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","Yellow","YellowGreen"];
		currentColor = "";
		this.render = function(where, what) {
			for (var x = 0; x < height; x++) {
				var cell3 = ("<tr id='" + what + "row2_" + x + "'>");
				$(where).append(cell3);
				$("#" + what + "row2_" + x).css({"border" : "1px solid black", "background-color" : "white"});

				for (var y = 0; y < width; y++) {
					var cell4 = $("<td class='columns2_" + y + "'>");
					$("#" + what + "row2_" + x).append(cell4);
					$(".columns2_" + y).css({"border" : "1px solid black", "background-color" : "white", "width" : size + "px", "height" : size + "px"});
					} // end of y loop
			} // end of x loop
			
			var palColors = 0;
			for (var i = 0; i < height; i++) {
				for(var k = 0; k < width; k++) {
					$("#" + what + "row2_" + i + " .columns2_" + k).css("background-color", this.color[palColors]);
						palColors++;
				} // end of the k loop
			} //end of the i loop
			$("#palette tr td").click(function() {
				currentColor = $(this).css("background-color");
			});
		}; // ends render method
	} // end of Color Palette

	var pp = new PixPaint(40, 60, 15);
	var palette = new ColorPalette(20, 7, 26);
	
	pp.render("#canvas","section_");
	palette.render("#palette", "sec_");
	
	

}); // end of doc.ready