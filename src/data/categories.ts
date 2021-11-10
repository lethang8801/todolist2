  export const categories = [
  { id: 0, name: "Finance"},
  { id: 1, name: "Wedding" },
  { id: 2, name: "Freelance" },
  { id: 4, name: "Shoppinglist" },
];



export var nameCate = (idTodo: number) => {
    const nameCate: any = categories.filter((cate) => cate.id === idTodo);
    return nameCate[0].name;
}