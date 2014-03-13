# ExcerptSearch
Extract an excerpt from a given block of text any number of characters around a search term and wrap the search term in a span.

All excerpts end on a word boundary.

```javascript
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta, sem id dignissim sollicitudin, est risus scelerisque enim, non scelerisque quam justo at est. Sed nec diam massa. Suspendisse lectus risus, facilisis ut urna in, venenatis gravida purus. Quisque id fermentum mi, in porttitor ipsum. Etiam a dui mi. Nam commodo lectus non massa porttitor, eget aliquam urna tincidunt. Praesent vestibulum quis lectus sit amet adipiscing. Vivamus eu velit lorem. Pellentesque tincidunt erat quis leo hendrerit euismod. Donec elementum tortor ac sodales tincidunt. Integer fermentum pretium tortor, ac mattis odio malesuada at. Vivamus porttitor est vitae adipiscing imperdiet. Mauris dolor justo, feugiat vel dui pellentesque, adipiscing vulputate neque. In lacus diam, sollicitudin non odio ac, euismod sodales diam.";

excerptSearch("enim", text, {padding: 14, highlightClass: "highlight"});

// scelerisque <span class='highlight'>enim</span>, non
```

## Searching for multiple words
You can search for multiple words by calling
```javascript
excerptSearch(["lorem", "ipsum"], text);
```
The excerpt will be the *first* match found with either string, but both terms will be highlighted within the results.

## Defaults
```javascript
 {
   highlightClass: "highlight",
   padding: 100
 }
 ```
