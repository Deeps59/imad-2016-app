var express = require('express');
var morgan = require('morgan');//importing packages
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
    title:'Article One|Deepak Saidam',
    heading: 'Article One',
    date: 'Sept 5 2016',
    content:
        `<div>
            <p>
                This is the content of the first ariticle. IN this article we've created the html file with basic commands in html.
            </p>
            <p>
                This is the second paragraph of the article.
            </p>
        </div>`
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=`
                    <html>
                        <head>
                            <title>
                                ${title}
                            </title>
                            <meta name="viewport" content="width=device-width, intial-scale=1"/>
                            <link href="/ui/style.css" rel="stylesheet" />
                        </head>
                        <body>
                            <div class="container">
                            <div>
                                <a href="/">Home</a>
                            </div>
                            <hr/>
                            <h3>
                                ${heading}
                            </h3>
                            <div>
                                ${date}
                            </div>
                            <div>
                                ${content}
                            </div>
                            </div>
                        </body>
                    </html>`
                    ;
return htmltemplate;
}

//lines with app.get handling specific urls
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article_one',function(req,res) {
    res.send(createTemplate(articleOne));
});
app.get('/article_two',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article_two.html'));
});
app.get('/article_three',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')) ;
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
