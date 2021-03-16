// 使redux reducer更容易模块化

export function getUsersModule() {
    return {
        id: "users",
        reducerMap: {
            users: usersReducer,
        },
    };
}

const store= createStore({
    initialState: { /** initial state */ },
    enhancers: [ /** enhancers to include */ ], 
    extensions: [/** extensions to include i.e. getSagaExtension(), getThunkExtension() */],
},
  getUsersModule()
  /* ...any additional modules */
);