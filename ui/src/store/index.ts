export interface ApplicationState {
    
}

export const reducers = {
    
};

export interface AppAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
