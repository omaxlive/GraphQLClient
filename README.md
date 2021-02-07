### Simple Query

```js
query {
  getAuthors {
    author
  }
}
```

### Query with input

```js
query {
  getPosts(input: {
    author: "author 2"
  }) {
    title
    detail
  }
}
```

### Using Variables as input

```js
query getPosts($input: PostInput!) {
  getPosts(input: $input) {
    title
    detail
  }
}
```
