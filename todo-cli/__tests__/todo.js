const todoList = require("../todo");

const { all, overdue, dueLater, dueToday, markAsComplete, add } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    const today = new Date();
    const day = 60 * 60 * 24 * 1000;
    add({
      title: "Test todo1",
      completed: false,
      dueDate: new Date(today.getTime() - 3 * day).toLocaleDateString("en-CA"),
    });

    add({
      title: "Test todo2",
      completed: false,
      dueDate: new Date(today.getTime() + 5 * day).toLocaleDateString("en-CA"),
    });
  });

  test("Should add new todoitem to todolist", () => {
    const today = new Date();
    // console.log(all.length);

    add({
      title: "Test todo3",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    const items = all.length;
    expect(items).toBe(3);
  });

  test("Should mark a todoitem as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("should retrive the overdue items from todo list", () => {
    let items = overdue().length;
    expect(items).toBe(1);
  });

  test("should retrive the dueToday items from todo list", () => {
    let items = dueToday().length;
    expect(items).toBe(1);
  });

  test("should retrive the dueLater items from todo list", () => {
    let items = dueLater().length;
    expect(items).toBe(1);
  });
});
