import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../index";
import { toggleTheme as toggleThemeAction } from "../actions";

export function useThemeManager(): [boolean, () => void] {
  const dispatch = useDispatch<AppDispatch>();
  const isDark = useSelector<AppState, AppState["user"]["isDark"]>(
    (state) => state.user.isDark
  );

  const toggleTheme = useCallback(() => {
    dispatch(toggleThemeAction());
  }, [dispatch]);

  return [isDark, toggleTheme];
}
