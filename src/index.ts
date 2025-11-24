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

// Function to add a new task (using arrow function)
const addTask = (title: string, description: string): void => {
  // Условный оператор для проверки валидности данных
  if (!title || title.trim() === '') {
    console.log('Ошибка: название задачи не может быть пустым.');
    return;
  }
  
  const newTask: Task = {
    id: taskIdCounter++,
    title: title,
    description: description || 'Без описания', // Использование логического ИЛИ для значения по умолчанию
    completed: false
  };
  tasks.push(newTask);
};

// Function to remove a task by ID (using arrow function)
const removeTask = (id: number): void => {
  // Условный оператор для проверки существования задачи
  if (id <= 0) {
    console.log('Ошибка: неверный идентификатор задачи.');
    return;
  }
  
  const taskIndex = tasks.findIndex((task: Task) => task.id === id);
  
  // Условный оператор if/else
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    console.log(`Задача с ID ${id} успешно удалена.`);
  } else {
    console.log(`Задача с ID ${id} не найдена.`);
  }
};

// Function to mark a task as completed (using arrow function)
const markTaskAsCompleted = (id: number): void => {
  // Использование цикла for для поиска задачи
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    // Условный оператор для проверки существования задачи
    if (task && task.id === id) {
      // Условный оператор для проверки текущего статуса
      if (task.completed) {
        console.log(`Задача с ID ${id} уже выполнена.`);
      } else {
        task.completed = true;
        console.log(`Задача с ID ${id} помечена как выполненная.`);
      }
      return;
    }
  }
  console.log(`Задача с ID ${id} не найдена.`);
};

// Function to list all tasks (using arrow function)
const listTasks = (): void => {
  // Условный оператор для проверки пустого массива
  if (tasks.length === 0) {
    console.log('Список задач пуст.');
    return;
  }
  
  console.log('Все задачи:');
  // Использование метода forEach с стрелочной функцией
  tasks.forEach((task: Task) => {
    // Тернарный оператор для определения статуса
    const status: string = task.completed ? '✓ Выполнена' : '○ Не выполнена';
    console.log(`ID: ${task.id} | ${status}`);
    console.log(`  Название: ${task.title}`);
    console.log(`  Описание: ${task.description}`);
    console.log('');
  });
};

// Function to list completed tasks (using arrow function)
const listCompletedTasks = (): void => {
  // Использование стрелочной функции в filter
  const completedTasks: Task[] = tasks.filter((task: Task) => task.completed === true);
  
  // Условный оператор if/else
  if (completedTasks.length === 0) {
    console.log('Нет выполненных задач.');
  } else {
    console.log('Выполненные задачи:');
    // Использование цикла for для перебора массива
    for (let i = 0; i < completedTasks.length; i++) {
      const task = completedTasks[i];
      // Условный оператор для проверки существования задачи
      if (task) {
        console.log(`ID: ${task.id} | ${task.title}`);
        console.log(`  Описание: ${task.description}`);
        console.log('');
      }
    }
  }
};

// Function to list pending tasks (using arrow function)
const listPendingTasks = (): void => {
  // Использование стрелочной функции в filter
  const pendingTasks: Task[] = tasks.filter((task: Task) => !task.completed);
  
  // Условный оператор с тернарным оператором
  const message: string = pendingTasks.length === 0 
    ? 'Нет невыполненных задач.' 
    : 'Невыполненные задачи:';
  
  console.log(message);
  
  // Использование цикла for...of для перебора массива
  if (pendingTasks.length > 0) {
    for (const task of pendingTasks) {
      console.log(`ID: ${task.id} | ${task.title}`);
      console.log(`  Описание: ${task.description}`);
      console.log('');
    }
  }
};

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

