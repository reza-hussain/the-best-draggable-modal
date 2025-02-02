# Draggable Modal Component 🖱️

A fully customizable, draggable modal component built from scratch using **Next.js**, **Tailwind CSS**, and **Mantine**. This project demonstrates how to implement drag functionality without relying on external libraries (except for the UI components from Mantine).

## Features ✨
- **Draggable Modal**: Smooth drag-and-drop functionality with boundary constraints.
- **No External Dependencies**: Drag logic is implemented from scratch.

## Technologies Used 🛠️
- **Next.js**: For the React framework.
- **Tailwind CSS**: For styling the components.
- **Mantine**: For the modal and button components.

## How It Works 🧠
The modal can be dragged by clicking and holding the header. The position is calculated relative to the mouse movement, ensuring smooth and accurate dragging. Boundaries are set to prevent the modal from going off-screen.

## Code Overview 📂
- **`handleMouseDown`**: Tracks when dragging starts.
- **`handleMouseMove`**: Updates the modal's position during dragging.
- **`handleMouseUp`**: Stops dragging when the mouse is released.
- **Boundary Logic**: Ensures the modal stays within the viewport.

## Detailed Tutorial 📖
For a step-by-step guide on how this was built, check out my Dev.to post:  
👉 [Concept behind building a Draggable Modal](https://dev.to/rezahussain/concept-behind-building-a-draggable-modal-48na)

## Installation 🛠️
1. Clone the repository:
   ```bash
   git clone git@github.com:reza-hussain/the-best-draggable-modal.git
