import { useCounter } from "../useCounter";
import { cleanup, renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";

describe("useCounterのテスト", () => {
  beforeEach(() => {
    cleanup();
  });

  test("increment関数を実行すると、countが1増える", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test("decrement関数を実行すると、countが1減る", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
