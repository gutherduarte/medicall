import React from "react";
import { useState, useRef } from "react";
import db from "../../../../../lib/data/config";
import firebase from "../../../../../lib/data/index";
import "./chat.css";
import Layout from "../../../../components/shared/theme/layout";
import { chatStyles } from "./chat.styles";
import { Typography, Grid } from "@material-ui/core";
import {
  faPlus,
  faCalendarAlt,
  faCalendarTimes,
  faCalendarCheck,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useCollectionData } from "react-firebase-hooks/firestore";

const Chat = () => {
  const classes = chatStyles();

  const dummy = useRef();
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    // const { uid, photoURL } = auth.currentUser;

    const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: currentUser.id,
      photoURL: currentUser.image,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Layout>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>Consultas</Typography>
          <Typography className={classes.subtitle}>| Chat</Typography>
        </div>

        <Grid className={classes.form}>
          <div className={classes.cardForm}>
            <Grid className={classes.container} container>
              <main className="message-list">
                {messages &&
                  messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                  ))}

                <span ref={dummy}></span>
              </main>

              <form onSubmit={sendMessage} className={"message-form"}>
                <input
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className="form-input"
                />

                <button
                  type="submit"
                  disabled={!formValue}
                  className={"form-button"}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className={"icon"} />
                </button>
              </form>
            </Grid>
          </div>
        </Grid>
      </Layout>
    </>
  );
};

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));

  const messageClass = uid === currentUser.id ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />

        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;
