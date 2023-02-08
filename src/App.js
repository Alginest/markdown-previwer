import "./App.css";
import { useState } from "react";
import { marked } from "marked";
import WhatshotIcon from "@mui/icons-material/Whatshot";
function App() {
  const [text, setText] = useState(`
   # Welcome to My Markdown Previewer
   ---
   ## Experience the markdown
   ---
   [MarkDown CheatSheet](https://www.markdownguide.org/cheat-sheet/)
   \`Multi Line Code:\`
   \`\`\`
   {
     "firstName": "John",
     "lastName": "Smith",
     "age": 25
   }
   \`\`\`
   - America
   - Japan
   - Bosnia 
   > Made for FreeCodeCamp Project.
   ![alt text](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
   **Made by Aldin Durakovic**
  `);
  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="app">
      <div className="textBg">
        <div className="editorDiv">
          <WhatshotIcon className="hotIcon" />
          <h4 className="editor">Editor</h4>
        </div>
        <textarea
          id="editor"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></textarea>
      </div>
      <div className="previewerBg">
        <div className="editorDiv">
          <WhatshotIcon className="hotIconP" />
          <h4 className="editorP">Previewer</h4>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
