import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor, // Added for better accessibility
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Define the tags with their corresponding colors
const tags = [
  { name: 'function', color: '#f8d7da' }, // Red
  { name: 'variable', color: '#d1e7dd' }, // Green
  { name: 'add', color: '#d1c4e9' },      // Purple
  { name: 'subtract', color: '#c4e0e5' }, // Cyan
  { name: 'multiply', color: '#f5e0c4' }, // Orange
  { name: 'divide', color: '#e0e0e0' },   // Gray
];

// Sample styling (you can move this to a CSS file)
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '770px',
  width: '100%',
  // marginBottom: '5px',
  backgroundColor: '#f5f5f5',
  padding: '10px',
};

const messageListStyle = {
  flex: 1,
  overflowY: 'auto',
  marginBottom: '20px',
};

const messageStyle = (tag) => {
  const tagObj = tags.find((t) => t.name === tag);
  return {
    backgroundColor: tagObj ? tagObj.color : '#e0e0e0',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '10px',
    cursor: 'grab',
  };
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  borderTop: '1px solid #ccc',
  padding: '10px',
};

const tagContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '10px',
};

const tagStyle = (color) => ({
  backgroundColor: color,
  padding: '5px 10px',
  margin: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
  color: '#000',
});

const inputStyle = {
  flex: 1,
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ccc',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

// Sortable Item Component
const SortableItem = ({ id, message }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    ...messageStyle(message.tag),
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {message.text}
    </div>
  );
};

// Main Component
const ChatInput = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

  // Setup sensors for drag-and-drop
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Require a small movement to start dragging
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: verticalListSortingStrategy,
    })
  );

  // Handle tag click
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setInputValue(`${tag}: `);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const message = selectedTag
        ? `${selectedTag}: {${inputValue.replace(`${selectedTag}: `, '')}}`
        : inputValue;
      setMessages([...messages, { id: `message-${messages.length}`, text: message, tag: selectedTag }]);
      setInputValue('');
      setSelectedTag(null);
    }
  };

  // Handle drag-and-drop reordering
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setMessages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div style={containerStyle}>
      {/* Drag-and-Drop Context */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={messages.map((message) => message.id) || []} // Ensure items is always an array
          strategy={verticalListSortingStrategy}
        >
          <div style={messageListStyle}>
            {messages.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#888' }}>
                No messages yet
              </div>
            ) : (
              messages.map((message) => (
                <SortableItem key={message.id} id={message.id} message={message} />
              ))
            )}
          </div>
        </SortableContext>
      </DndContext>

      {/* Tag Selection and Input */}
      <div style={inputContainerStyle}>
        <div style={tagContainerStyle}>
          {tags.map((tag) => (
            <div
              key={tag.name}
              style={{
                ...tagStyle(tag.color),
                opacity: selectedTag === tag.name ? 0.7 : 1,
              }}
              onClick={() => handleTagClick(tag.name)}
            >
              {tag.name}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
            style={inputStyle}
          />
          <button onClick={handleSendMessage} style={buttonStyle}>
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;