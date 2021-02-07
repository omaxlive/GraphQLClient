# GraphQL Project

- Run dev server `npm run dev`

- Find the GraphQL Playground in `http://localhost:4000/`

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

Variable declararion in Playground

```json
{
  "input": {
    "author": "author 1"
  }
}
```
