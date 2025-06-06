import React from "react";
import { Link } from "react-router-dom";


export default function ContactForm() {
  return (
    <div className="ContactContainer">
      <div className="form">
        <form>
            <label>
                Name:
                <input type="text" name="name" required />
            </label>
            <label>
                Email:
                <input type="email" name="email" required />
            </label>
            <label>
                Message:
                <textarea name="message" required></textarea>
            </label>
        </form>
      </div>
    </div>
  );
}
