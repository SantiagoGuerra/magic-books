import React from "react";
import { useDispatch } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { removeBook } from "../actions/index";

const Book = (book) => {
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const { title, category, author, id } = book;
  const percentage = 64;

  return (
    <tr id={`book-${id}`} className="book">
      <td className="book-container">
        <div className="book-info">
          <div className="book-desc">
            <span className="book-desc-category">{category}</span>
            <span className="book-desc-title">{title}</span>
            <span className="book-desc-author">{author}</span>
          </div>

          <div className="book-actions">
            <button type="button" className="btn-book-action">
              Comments
            </button>
            <button
              className="btn-book-action"
              type="button"
              onClick={() => {
                handleRemoveBook(book);
              }}
            >
              Remove
            </button>

            <button type="button" className="btn-book-action">
              Edit
            </button>
          </div>
        </div>

        <div className="book-progress-chart">
          <div style={{ width: 54, height: 54 }}>
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 1,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `var(--blue-color)`,
                textColor: "#f88",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
          
          <div className="chart-values">
            <span className="book-progress-chart__percentage">64%</span>
            <span className="book-progress-chart__status">Completed</span>
          </div>
        </div>

        <div className="book-progress">
          <div className="book-progress-info">
            <span className="book-progress-info__title">CURRENT CHAPTER</span>
            <span className="book-progress-info__current-chapter">
              Chapter 17
            </span>
          </div>

          <button type="button" className="btn-update-progress">
            UPDATE PROGRESS
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Book;
