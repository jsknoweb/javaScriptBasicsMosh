let blogPost = new BlogPost(
    'Airbnb review',
    'Great views',
    'Jose Cano');

function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
};
console.log(blogPost);
