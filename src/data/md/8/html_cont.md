## Icebreaker

### hello.html 

```html 
<!DOCTYPE html>

<html>
    <head>
        <title>hello</title>
    </head>
    <body>
        <form action="hello.php" method="get">
            <input name="name" placeholder="Name" type="text"/>
            <input type="submit" value="Say Hello"/>
        </form>
    </body>
</html>
```

### hello.php 

```php 
<!DOCTYPE html>

<html>
    <head>
        <title>hello</title>
    </head>
    <body>
        hello, <?= htmlspecialchars($_GET["name"]) ?>
    </body>
</html>
```
