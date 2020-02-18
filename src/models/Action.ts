export interface Action<T extends ActionType> {
  (payload: T["payload"]): T;
}

export interface ActionType {
  readonly type: string;
  readonly payload?: unknown;
  readonly error?: boolean;
}