"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button, MantineProvider, Modal } from "@mantine/core";
import "@mantine/core/styles.css";

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [mousePosInsideModal, setMousePosInsideModal] = useState({
    x: 0,
    y: 0,
  });

  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    setIsDragging(true);
    if (modalRef.current) {
      const diffX = e.clientX - modalRef.current.offsetLeft;
      const diffY = e.clientY - modalRef.current.offsetTop;

      setMousePosInsideModal({ x: diffX, y: diffY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const modalOffsetX = modalRef.current.offsetLeft;
      const modalOffsetY = modalRef.current.offsetTop;

      const modalWidth = modalRef.current.getBoundingClientRect().width;
      const modalHeight = modalRef.current.getBoundingClientRect().height;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const newX = mouseX - mousePosInsideModal.x - modalOffsetX;
      const newY = mouseY - mousePosInsideModal.y - modalOffsetY;

      const maxX = viewportWidth / 2 - modalWidth / 2;
      const maxY = viewportHeight / 2 - modalHeight / 2;

      setPosition(() => {
        return {
          x: Math.min(Math.max(-maxX, newX), maxX),
          y: Math.min(Math.max(-maxY, newY), maxY),
        };
      });
    },
    [isDragging] // eslint-disable-line
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (isDragging) {
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isDragging]); // eslint-disable-line

  useEffect(() => {
    setTimeout(() => {
      if (modalRef.current && isOpen) {
        modalRef.current.style.transform = `translate(${position.x}, ${position.y})`;
      }
    }, 200);
  }, [isOpen]); // eslint-disable-line

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
    console.log({ ...position });
  }, [position]);

  return (
    <MantineProvider>
      <div
        id="home"
        className="relative w-screen h-screen !text-black flex flex-col gap-3 justify-center items-center bg-gray-300"
      >
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        <Modal.Root
          classNames={{
            content:
              "!min-w-[300px] !min-h-[500px] !max-w-[300px] !max-h-[500px] !transition-none",
          }}
          size={300}
          opened={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Modal.Content ref={modalRef}>
            <Modal.Header onMouseDown={handleMouseDown}>
              <Modal.Title>Modal title</Modal.Title>
              <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>Modal content</Modal.Body>
          </Modal.Content>
        </Modal.Root>
      </div>
    </MantineProvider>
  );
}
