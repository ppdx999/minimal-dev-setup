/**
 * @jest-environment jsdom
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "../Pagination";
import '@testing-library/jest-dom/extend-expect';

describe("Pagination", () => {
  test('currentIndexとindexが一致した時に、"◀︎ now"が表示される', () => {
    // 対象Componentのレンダリング
    render(<Pagination max={5} />);
    // 要素の検索と表示の検証
    expect(screen.queryByText(/1/)).toHaveTextContent(/◀︎ now/);
    expect(screen.queryByText(/2/)).not.toHaveTextContent(/◀︎ now/);
    // ユーザーの操作
    fireEvent.click(screen.queryByText(/next/) as HTMLElement);
    expect(screen.queryByText(/2/)).toHaveTextContent(/◀︎ now/);
    expect(screen.queryByText(/1/)).not.toHaveTextContent(/◀︎ now/);
  });

  test("currentIndexが1以下の時、prevボタンがdisabledになる", () => {
    render(<Pagination max={5} />);
    expect(screen.queryByText(/prev/)).toBeDisabled();
    fireEvent.click(screen.queryByText(/next/) as HTMLElement);
    expect(screen.queryByText(/prev/)).toBeEnabled();
    fireEvent.click(screen.queryByText(/prev/) as HTMLElement);
    expect(screen.queryByText(/prev/)).toBeDisabled();
  });

  test("currentIndexがmax以上の時、nextボタンがdisabledになる", () => {
    render(<Pagination max={5} />);
    fireEvent.click(screen.queryByText(/next/) as HTMLElement);
    fireEvent.click(screen.queryByText(/next/) as HTMLElement);
    fireEvent.click(screen.queryByText(/next/) as HTMLElement);
    fireEvent.click(screen.queryByText(/next/) as HTMLElement);
    expect(screen.queryByText(/next/)).toBeDisabled();
  });
});
