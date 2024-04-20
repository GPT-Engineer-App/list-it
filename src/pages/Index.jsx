// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Button, Input, List, ListItem, IconButton, Text, Checkbox } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: input,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Box display="flex" mb="4">
        <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTask()} />
        <Button onClick={handleAddTask} ml="2" colorScheme="blue">
          <FaPlus />
        </Button>
      </Box>
      <List spacing={3}>
        {tasks.map((task) => (
          <ListItem key={task.id} display="flex" alignItems="center">
            <Checkbox isChecked={task.isCompleted} onChange={() => handleToggleComplete(task.id)} mr="3" />
            <Text as={task.isCompleted ? "del" : "span"} flex="1">
              {task.text}
            </Text>
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} colorScheme="red" aria-label="Delete task" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
