import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😐": "Neutral Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears Of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>
        <strong>EMOJI</strong>
      </h1>

      <input
        style={{
          width: "80%",
          height: "8vh",
          textAlign: "center",
          fontSize: "1.5rem",
          borderRadius: "0.5rem"
        }}
        placeholder="Insert The Emoji Here"
        onChange={inputEmojiHandler}
      ></input>
      <h2 style={{ color: "white" }}>
        <em>{meaning}</em>
      </h2>
      <h3 style={{ color: "white" }}> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "1.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <footer>
        <div className="links">
          <ul className="list-unbulleted-list">
            <li className="list-item-inline">
              <a className="link" href="https://github.com/dushyant2901">
                Github
              </a>
            </li>
            <li className="list-item-inline">
              <a className="link" href="https://twitter.com/DushyantPS">
                {" "}
                Twitter
              </a>
            </li>
            <li className="list-item-inline">
              <a
                className="link"
                href="https://in.linkedin.com/in/dushyant-pratap-singh-04b24619b"
              >
                Linkedin
              </a>
            </li>
          </ul>{" "}
        </div>
      </footer>
    </div>
  );
}
