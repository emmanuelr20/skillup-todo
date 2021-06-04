
const data =  {
    baseUrl: "https://60ae8e345b8c300017dead6d.mockapi.io/api/v1/",
    // baseUrl: "https://todo-inc.herokuapp.com/",
    authToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdG9kby1pbmMuaGVyb2t1YXBwLmNvbSIsImlhdCI6MTYyMjU2ODI5OSwibmJmIjoxNjIyNTY4MTc5LCJleHAiOjE2MjI1ODk4OTksImRhdGEiOnsiaWQiOjksIm5hbWUiOiJTa2lsbCBVcCIsImVtYWlsIjoic2tpbGxAbWFpbC5jb20iLCJjcmVhdGVkX2F0IjoiMjAyMS0wNi0wMVQxNzoyMzoxNy4wMDAwMDBaIiwidXBkYXRlZF9hdCI6IjIwMjEtMDYtMDFUMTc6MjM6MTcuMDAwMDAwWiJ9fQ.R5Db_WpMn7E4ygAc6G-BjV2xG3T7p2WnydOF5_3U1PU',
    allTodos: [
    { id: 1, title: "todo 1", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 0 },
    { id: 2, title: "todo 2", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 1 },
    { id: 3, title: "todo 3", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 1 },
    { id: 4, title: "todo 4", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 1 },
    { id: 5, title: "todo 5", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 0 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 0 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 0 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 0 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 1 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 1 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 1 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 2 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 2 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 2 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 0 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 0 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 0 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: false, priority: 0 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 4 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 4 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 4 },
    { id: 6, title: "todo 6", description: "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Nullam accumsan lorem in dui. Aliquam erat volutpat. Etiam imperdiet imperdiet orci. Nam commodo suscipit quam.", done: true, priority: 0 },
  ]
}

export default data;