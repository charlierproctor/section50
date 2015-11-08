## The DOM (Document Object Model)

- hierarchical way of laying out information

```html
<!DOCTYPE html>
    <head>
        <title id="title">Hey Rob!</title>
    </head>
    <body>
        <div>
            <img id="pic" src="rob.jpg" alt="rob">
        </div>
        <div>
            <p id="quote">There is no happiness in the world, only rice...</p>
        </div>
    </body>
</html>
```

![](data/md/9/DOM.jpg)

- `JS` can change the DOM dynamically without having to reload the page! With code like this:

```js
    var title = document.getElementById("title");
    title.innerHTML = "David";

    var pic = document.getElementById("pic");
    pic.src = "david.jpg";

    var alt = document.getElementById("pic");
    alt.alt = "david";

    document.getElementById("quote").innerHTML = "alllllright";
```

![](data/md/9/DOM_2.jpg)

- JS can be used for **much more**.