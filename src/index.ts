// Task type definition
type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

// Array to store tasks
let tasks: Task[] = [];

// Counter for unique task IDs
let taskIdCounter: number = 1;

// Function to add a new task
function addTask(title: string, description: string): void {
  const newTask: Task = {
    id: taskIdCounter++,
    title: title,
    description: description,
    completed: false
  };
  tasks.push(newTask);
}

// Function to remove a task by ID
function removeTask(id: number): void {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  }
}

// Function to mark a task as completed
function markTaskAsCompleted(id: number): void {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.completed = true;
  }
}

// Function to list all tasks
function listTasks(): void {
  if (tasks.length === 0) {
    console.log('Список задач пуст.');
    return;
  }
  console.log('Все задачи:');
  tasks.forEach(task => {
    const status = task.completed ? '✓ Выполнена' : '○ Не выполнена';
    console.log(`ID: ${task.id} | ${status}`);
    console.log(`  Название: ${task.title}`);
    console.log(`  Описание: ${task.description}`);
    console.log('');
  });
}

// Function to list completed tasks
function listCompletedTasks(): void {
  const completedTasks = tasks.filter(task => task.completed);
  if (completedTasks.length === 0) {
    console.log('Нет выполненных задач.');
    return;
  }
  console.log('Выполненные задачи:');
  completedTasks.forEach(task => {
    console.log(`ID: ${task.id} | ${task.title}`);
    console.log(`  Описание: ${task.description}`);
    console.log('');
  });
}

// Function to list pending tasks
function listPendingTasks(): void {
  const pendingTasks = tasks.filter(task => !task.completed);
  if (pendingTasks.length === 0) {
    console.log('Нет невыполненных задач.');
    return;
  }
  console.log('Невыполненные задачи:');
  pendingTasks.forEach(task => {
    console.log(`ID: ${task.id} | ${task.title}`);
    console.log(`  Описание: ${task.description}`);
    console.log('');
  });
}

// Example usage
console.log('=== Task Manager Application ===\n');

// Add some sample tasks
addTask('Изучить TypeScript', 'Изучить основы и продвинутые возможности TypeScript');
addTask('Создать проект', 'Создать приложение для управления задачами');
addTask('Написать документацию', 'Документировать код и использование');

// List all tasks
listTasks();

// Mark task with ID 1 as completed
console.log('Помечаем задачу с ID 1 как выполненную...\n');
markTaskAsCompleted(1);

// List completed tasks
listCompletedTasks();

// List pending tasks
listPendingTasks();

