import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";

const chatMessages = [
        {"role": "user", "content": "Hi there!"},
        {"role": "assistant", "content": "Hello! How can I assist you today?"},
        {"role": "user", "content": "I need help with setting up my email."},
        {"role": "assistant", "content": "Sure, I can help with that. Which email service are you using?"},
        {"role": "user", "content": "I'm using Gmail."},
        {"role": "assistant", "content": "Great! Let's start by opening your Gmail account."},
        {"role": "assistant", "content": "Once you're logged in, go to the settings gear icon in the top right corner."},
        {"role": "assistant", "content": "From there, select 'See all settings'."},
        {"role": "assistant", "content": "Now, you can configure your email settings as needed."},
        {"role": "user", "content": "Thank you for the guidance!"},
        {"role": "assistant", "content": "You're welcome! If you have any more questions, feel free to ask."},
        {"role": "user", "content": "How can I improve my productivity at work?"},
        {"role": "assistant", "content": "There are many ways to boost productivity. One suggestion is to prioritize tasks and break them into manageable chunks."},
        {"role": "assistant", "content": "Also, consider taking regular breaks to avoid burnout and stay focused."},
        {"role": "assistant", "content": "Additionally, utilizing productivity tools and techniques such as time blocking or the Pomodoro Technique can be beneficial."},
        {"role": "user", "content": "Thanks for the tips! I'll give them a try."},
        {"role": "assistant", "content": "You're welcome! Let me know if you need further assistance."},
        {"role": "user", "content": "Goodbye for now!"},
        {"role": "assistant", "content": "Goodbye! Have a great day!"}    
]
const Chat = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {/* {auth?.user?.name.split(" ")[1][0]} */}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to ChatBot
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask some questions related to Knowledge, Business, Advices,
            Education, etc. But avoid sharing personal information
          </Typography>
          <Button
            sx={{
              my: "auto",
              width: "200px",
              color: "white",
              fontWeight: 700,
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flex: { md: 0.8, sm: 1, xs: 1 }, flexDirection: "column", px: 3 }}
      >
        <Typography
          sx={{ fontSize: "40px", color: "white", mb: 2, mx: "auto", fontWeight: 600 }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        > {chatMessages.map((chat, index) => <ChatItem content={ chat.content } role={ chat.role } key={index} />)} 
        </Box>
        
      </Box>
    </Box>
  );
};

export default Chat;
