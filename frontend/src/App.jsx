import './App.css'
// import { Button } from '@chakra-ui/react'
import { Button, HStack } from "@chakra-ui/react"
import Home from './myComponents/Home'
import { Route, Routes } from 'react-router-dom'
import ChatPage from './myComponents/ChatPage'

function App() {

  return (
    <div>
      <HStack>
        <Button bg="teal" _hover={{ bg: "teal.600" }}>RED Click me</Button>
        <Button>Click me</Button>
      </HStack>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App
