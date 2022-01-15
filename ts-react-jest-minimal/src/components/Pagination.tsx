import React, { VFC, useState } from "react";

type Props = {
  max: number;
};

export const Pagination: VFC<Props> = ({ max }) => {
  // setCurrentIndex、pageIndexArray あたりは本来はカスタムhooks化 & 別途ユニットテストすべき。
  // そのため、今回はテスト対象外
  const [currentIndex, setCurrentIndex] = useState(1);
  // 1〜max値までの数字の配列を作る
  const pageIndexArray = [...Array(max)].map((_, index) => index + 1);

  return (
    <div>
      <ul>
        {pageIndexArray.map((index) => (
          <li key={`paginationItem_${index}`}>
            {index} {index === currentIndex && <span>◀︎ now</span>}
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          disabled={currentIndex <= 1}
        >
          prev
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          disabled={currentIndex >= max}
        >
          next
        </button>
      </div>
    </div>
  );
};
