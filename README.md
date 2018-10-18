This repo reproduces the issue: https://github.com/Weakky/ra-data-opencrud/issues/21


There is a branch contains dirty fix: https://github.com/xcv58/ra-data-opencrud-issue-21/tree/workable

Broken link: https://ra-data-opencrud-issue-21-qebwieppsg.now.sh/#/Post
Workable link: https://ra-data-opencrud-issue-21-sytxuubrxx.now.sh/#/Post

The variables `ra-data-opencrud` generated:

```
{skip: 0, first: 10, orderBy: "id_DESC", where: {title_in: {id_in: ["Hello World", "My Second Post"]}}}
```

It leads to an invalid query.
