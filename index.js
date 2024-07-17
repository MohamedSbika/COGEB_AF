// import express from "express";
// import mongoose from "mongoose";
// import "dotenv/config";
// import userRouter from "./api/routes/user.route.js";
// import auth from "./api/routes/auth.route.js";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import postRouter from "./api/routes/post.route.js";
// import messageRouter from "./api/routes/message.route.js";
// import conversationRoute from "./api/routes/conversation.route.js";
// import notificatonRoute from "./api/routes/notification.route.js";

// import path from "path";
// import http from "http";
// import { Server } from "socket.io";

// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// const expressServer = http.createServer(app);

// //Handling CORS origin
// if (process.env.NODE_ENV === "local") {
//   app.use(
//     cors({
//       origin: "http://localhost:5173",
//       credentials: true,
//     })
//   );
// } else {
//   app.use(
//     cors({
//       origin: "*",
//       credentials: true,
//       methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     })
//   );
// }

// const PORT = process.env.PORT || 4000;

// // Connect to the database
// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/API");
//   console.log("Database connected");
// }

// // Starting the server
// expressServer.listen(PORT, () => {
//   console.log(`Server running at port ${PORT}`);
// });

// // Routes
// app.use("/api/users", userRouter);
// app.use("/api/auth", auth);
// app.use("/api/posts", postRouter);
// app.use("/api/message", messageRouter);
// app.use("/api/conversation", conversationRoute);
// app.use("/api/notification", notificatonRoute);

// //============== Deployment==============//

// const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   const staticFilesPath = path.join(__dirname, "client", "dist");
//   app.use(express.static(staticFilesPath));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(staticFilesPath, "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("api listing...");
//   });
// }

// //============== Deployment==============//

// // Handle middleware
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

// //----------------------------Handling Socket.io ------------------------------//

// //Handling CORS origin
// export const io = new Server(expressServer, {
//   cors: {
//     origin: [
//       "http://localhost:5173",
//       "https://property-sell.vercel.app",
//       "https://property-sell-gjz462ec1-emoncr.vercel.app/",
//     ],
//     credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`socket connected with ${socket.id}`);

//   //=======Messaging Feature Here ======//
//   socket.on("join_room", (chatId) => {
//     socket.join(chatId);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.chatId).emit("receive_message", data);
//     socket.broadcast.emit(`${data.to}`, data);
//   });

//   socket.on("disconnect", (data) => {
//     console.log(`user disconnected successfully ${socket.id}`);
//   });
// });

// export default () => expressServer;
// index.js
import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'; // Assurez-vous que dotenv est correctement configuré
import userRouter from "./api/routes/user.route.js";
import authRouter from "./api/routes/auth.route.js";
import postRouter from "./api/routes/post.route.js";
import projectRouter from "./api/routes/project.route.js";
import conversationRouter from "./api/routes/conversation.route.js";
import messageRouter from "./api/routes/message.route.js";
import notificatonRoute from "./api/routes/notification.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.NODE_ENV === "local" ? "http://localhost:5173" : "*",
  credentials: true,
}));

const expressServer = http.createServer(app);
const PORT = process.env.PORT || 4000;

// Connect to the database
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI environment variable is not defined');
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/projects", projectRouter);
app.use("/api/conversations",conversationRouter);
app.use("/api/message", messageRouter);
app.use("/api/notification", notificatonRoute);


// Deployment settings
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  const staticFilesPath = path.join(__dirname, "client", "dist");
  app.use(express.static(staticFilesPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(staticFilesPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API listing...");
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});

// Socket.io setup
const io = new Server(expressServer, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://property-sell.vercel.app",
      "https://property-sell-gjz462ec1-emoncr.vercel.app/",
    ],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`socket connected with ${socket.id}`);
  socket.on("join_room", (chatId) => {
    socket.join(chatId);
  });
  socket.on("send_message", (data) => {
    socket.to(data.chatId).emit("receive_message", data);
    socket.broadcast.emit(`${data.to}`, data);
  });
  socket.on("disconnect", () => {
    console.log(`user disconnected successfully ${socket.id}`);
  });
});

// Start server
expressServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

export default () => expressServer;
