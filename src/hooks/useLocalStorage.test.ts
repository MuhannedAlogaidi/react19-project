import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('returns initial value when localStorage is empty', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(null);

    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    expect(result.current[0]).toBe('initial');
  });

  it('returns stored value from localStorage', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(
      JSON.stringify('stored-value')
    );

    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    expect(result.current[0]).toBe('stored-value');
  });

  it('updates localStorage when value changes', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(null);

    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    act(() => {
      result.current[1]('new-value');
    });

    expect(result.current[0]).toBe('new-value');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'test-key',
      JSON.stringify('new-value')
    );
  });

  it('works with objects', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(null);

    const { result } = renderHook(() =>
      useLocalStorage('test-object', { count: 0 })
    );

    act(() => {
      result.current[1]({ count: 5 });
    });

    expect(result.current[0]).toEqual({ count: 5 });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'test-object',
      JSON.stringify({ count: 5 })
    );
  });

  it('handles localStorage errors gracefully', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(null);
    vi.mocked(localStorage.setItem).mockImplementation(() => {
      throw new Error('Quota exceeded');
    });

    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    act(() => {
      result.current[1]('new-value');
    });

    // Should not crash
    expect(result.current[0]).toBe('new-value');
  });
});
