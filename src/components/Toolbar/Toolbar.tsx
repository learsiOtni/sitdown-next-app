import { Editor } from "@tiptap/react";
import classes from "./Toolbar.module.css";
import Icon from "../Icon/Icon";
import { ChangeEvent } from "react";
import { Level } from "@tiptap/extension-heading";

type ToolbarProps = {
  editor: Editor | null;
};

export default function Toolbar({ editor }: ToolbarProps) {
  if (!editor) return null;

  const handleHeadingChange  = (e: ChangeEvent<HTMLSelectElement>) => {
    editor.chain().focus().toggleHeading({ level: Number(e.target.value) as Level}).run()
  }

  return (
    <div className={classes.toolbar}>
      <select onChange={handleHeadingChange} className={classes.select} value={0}>
        <option disabled value={0}>Heading:</option>
        <option value={1}>H1</option>
        <option value={2}>H2</option>
        <option value={3}>H3</option>
      </select>

      <button
        type="button"
        className={classes.button}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        data-active={editor.isActive("bold") ? "is-active" : undefined}
        aria-label="bold"
      >
        <strong>B</strong>
      </button>
      
      <button
        type="button"
        className={classes.button}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        data-active={editor.isActive("italic") ? "is-active" : undefined}
        aria-label="italic"
      >
        <em>I</em>
      </button>

      <button
        type="button"
        className={classes.button}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        data-active={editor.isActive("underline") ? "is-active" : undefined}
        aria-label="italic"
      >
        <u>U</u>
      </button>

      <button
        type="button"
        className={classes.button}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        data-active={editor.isActive("strike") ? "is-active" : undefined}
        aria-label="strikethrough"
      >
        <s>S</s>
      </button>

      <button
        type="button"
        className={classes.button}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive("bulletList") ? "is-active" : undefined}
      >
        <Icon name="list" />
      </button>

      <button
        type="button"
        className={classes.button}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive("orderedList") ? "is-active" : undefined}
      >
        <Icon name="orList" />
      </button>
    </div>
  );
}
