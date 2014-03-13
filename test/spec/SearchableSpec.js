describe("excerptSearch", function() {

	it("Should be defined", function() {
		expect(excerptSearch).toBeDefined();
	});

	it("Should know how to highlight a term", function() {
		var text = "lorem ipsum",
			term = "lorem";
		expect(excerptSearch(term, text)).toEqual("<span class='highlight'>lorem</span> ipsum");
	});

	it("Should respect text beginning/end", function() {
		text = "lorem ipsum",
		term = "lorem";
		expect(excerptSearch(term, text, {padding: 1000})).toEqual("<span class='highlight'>lorem</span> ipsum");
	});

	it("Should know how to end on a word boundary", function() {
		var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta, sem id dignissim sollicitudin, est risus scelerisque enim, non scelerisque quam justo at est. Sed nec diam massa. Suspendisse lectus risus, facilisis ut urna in, venenatis gravida purus. Quisque id fermentum mi, in porttitor ipsum. Etiam a dui mi. Nam commodo lectus non massa porttitor, eget aliquam urna tincidunt. Praesent vestibulum quis lectus sit amet adipiscing. Vivamus eu velit lorem. Pellentesque tincidunt erat quis leo hendrerit euismod. Donec elementum tortor ac sodales tincidunt. Integer fermentum pretium tortor, ac mattis odio malesuada at. Vivamus porttitor est vitae adipiscing imperdiet. Mauris dolor justo, feugiat vel dui pellentesque, adipiscing vulputate neque. In lacus diam, sollicitudin non odio ac, euismod sodales diam.",
			term = "enim",
			expectedResult = "scelerisque <span class='highlight'>enim</span>, non",
			result = excerptSearch(term, text, {padding: 14});
		expect(expectedResult).toEqual(result);
	});

	it("Should let me specify a class", function() {
		var text = "lorem ipsum",
			term = "lorem";
		expect(excerptSearch(term, text, {highlightClass: "what"})).toEqual("<span class='what'>lorem</span> ipsum");
	});

	it("Should let me pass in an array", function() {
		var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta, sem id dignissim sollicitudin, est risus scelerisque enim, non scelerisque quam justo at est. Sed nec diam massa. Suspendisse lectus risus, facilisis ut urna in, venenatis gravida purus. Quisque id fermentum mi, in porttitor ipsum. Etiam a dui mi. Nam commodo lectus non massa porttitor, eget aliquam urna tincidunt. Praesent vestibulum quis lectus sit amet adipiscing. Vivamus eu velit lorem. Pellentesque tincidunt erat quis leo hendrerit euismod. Donec elementum tortor ac sodales tincidunt. Integer fermentum pretium tortor, ac mattis odio malesuada at. Vivamus porttitor est vitae adipiscing imperdiet. Mauris dolor justo, feugiat vel dui pellentesque, adipiscing vulputate neque. In lacus diam, sollicitudin non odio ac, euismod sodales diam.",
			term = ["enim", "non"];

		expect(excerptSearch(term, text, {padding:14})).toEqual("scelerisque <span class='highlight'>enim</span>, <span class='highlight'>non</span>");
	});

	it("Should let me pass in regex characters for the search", function() {
		var text = "this text has a | in it, and that's what we want to search on!",
			term = "|";
		expect(excerptSearch(term, text, {buffer: 10000})).toEqual("this text has a <span class='highlight'>|</span> in it, and that's what we want to search on!")
	});

});
