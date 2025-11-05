import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const QnASection = ({ label, qna, setQna }) => {
  const addQnA = () => {
    setQna([...qna, { question: "", answer: [] }]);
  };

  const updateQnA = (index, field, value) => {
    const updated = [...qna];
    updated[index][field] = value;
    setQna(updated);
  };

  const addAnswerBlock = (qIndex, type) => {
    const updated = [...qna];
    updated[qIndex].answer.push({ type, content: type === "list" ? [] : "" });
    setQna(updated);
  };

  const updateAnswerContent = (qIndex, aIndex, content) => {
    const updated = [...qna];
    updated[qIndex].answer[aIndex].content = content;
    setQna(updated);
  };

  return (
    <div className="border rounded-xl p-4 bg-gray-50 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{label}</h3>
        <button
          type="button"
          onClick={addQnA}
          className="flex items-center text-blue-600"
        >
          <AiOutlinePlusCircle className="mr-1" /> Add Question
        </button>
      </div>

      {qna.map((qa, qIndex) => (
        <div key={qIndex} className="mb-5 bg-white p-3 rounded border">
          <input
            type="text"
            placeholder="Question"
            value={qa.question}
            onChange={(e) => updateQnA(qIndex, "question", e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />

          {qa.answer.map((ans, aIndex) => (
            <div key={aIndex} className="mb-2">
              {ans.type === "list" ? (
                <textarea
                  placeholder="List items (comma separated)"
                  value={ans.content.join(", ")}
                  onChange={(e) =>
                    updateAnswerContent(qIndex, aIndex, e.target.value.split(","))
                  }
                  className="w-full border p-2 rounded"
                />
              ) : (
                <textarea
                  placeholder={`Write ${ans.type}`}
                  value={ans.content}
                  onChange={(e) =>
                    updateAnswerContent(qIndex, aIndex, e.target.value)
                  }
                  className="w-full border p-2 rounded"
                />
              )}
            </div>
          ))}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => addAnswerBlock(qIndex, "header")}
              className="text-xs text-blue-500 border p-1 rounded"
            >
              + Header
            </button>
            <button
              type="button"
              onClick={() => addAnswerBlock(qIndex, "paragraph")}
              className="text-xs text-green-500 border p-1 rounded"
            >
              + Paragraph
            </button>
            <button
              type="button"
              onClick={() => addAnswerBlock(qIndex, "list")}
              className="text-xs text-purple-500 border p-1 rounded"
            >
              + List
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QnASection;
