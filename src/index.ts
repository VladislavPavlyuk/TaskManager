// Task type definition
type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

// Array to store tasks
let tasks: Task[] = [];

// Function to create a new task
function createTask(title: string, description: string): Task {
  const newTask: Task = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: title,
    description: description,
    completed: false
  };
  tasks.push(newTask);
  return newTask;
}

// Function to get all tasks
function getAllTasks(): Task[] {
  return tasks;
}

// Function to get a task by ID
function getTaskById(id: number): Task | undefined {
  return tasks.find(task => task.id === id);
}

// Function to update a task
function updateTask(id: number, updates: Partial<Omit<Task, 'id'>>): Task | null {
  const currentTask = getTaskById(id);
  if (!currentTask) {
    return null;
  }
  const updatedTask: Task = {
    id: currentTask.id,
    title: updates.title !== undefined ? updates.title : currentTask.title,
    description: updates.description !== undefined ? updates.description : currentTask.description,
    completed: updates.completed !== undefined ? updates.completed : currentTask.completed
  };
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
  }
  return updatedTask;
}

// Function to delete a task
function deleteTask(id: number): boolean {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return false;
  }
  tasks.splice(taskIndex, 1);
  return true;
}

// Function to toggle task completion status
function toggleTaskCompletion(id: number): Task | null {
  const task = getTaskById(id);
  if (!task) {
    return null;
  }
  return updateTask(id, { completed: !task.completed });
}

// Function to get completed tasks
function getCompletedTasks(): Task[] {
  return tasks.filter(task => task.completed);
}

// Function to get incomplete tasks
function getIncompleteTasks(): Task[] {
  return tasks.filter(task => !task.completed);
}

// Example usage
console.log('=== Task Manager Application ===\n');

// Create some sample tasks
const task1 = createTask('Learn TypeScript', 'Study TypeScript basics and advanced features');
const task2 = createTask('Build a project', 'Create a task management application');
const task3 = createTask('Write documentation', 'Document the code and usage');

console.log('Created tasks:');
tasks.forEach(task => {
  console.log(`- [${task.completed ? '✓' : ' '}] ${task.title} (ID: ${task.id})`);
  console.log(`  Description: ${task.description}\n`);
});

// Toggle completion for task 1
console.log('Marking task 1 as completed...');
toggleTaskCompletion(task1.id);
console.log(`Task 1 status: ${getTaskById(task1.id)?.completed ? 'Completed' : 'Incomplete'}\n`);

// Display completed tasks
console.log('Completed tasks:');
getCompletedTasks().forEach(task => {
  console.log(`- ${task.title}`);
});

// Display incomplete tasks
console.log('\nIncomplete tasks:');
getIncompleteTasks().forEach(task => {
  console.log(`- ${task.title}`);
});

