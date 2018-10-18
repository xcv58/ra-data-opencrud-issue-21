This repo reproduces the issue: https://github.com/Weakky/ra-data-opencrud/issues/21

The `filter` is here:
https://github.com/xcv58/ra-data-opencrud-issue-21/blob/master/src/App.js#L10

The variables `ra-data-opencrud` generates:

```
{skip: 0, first: 10, orderBy: "id_DESC", where: {title_in: {id_in: ["Hello World", "My Second Post"]}}}
```

It leads to an invalid query.

# Links

Broken link: https://ra-data-opencrud-issue-21-qebwieppsg.now.sh/#/Post

Workable link: https://ra-data-opencrud-issue-21-sytxuubrxx.now.sh/#/Post

There is a branch contains dirty fix: https://github.com/xcv58/ra-data-opencrud-issue-21/tree/workable
