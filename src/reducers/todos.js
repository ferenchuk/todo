

const initialState = [];

export default function todos(state = initialState, action) {
    const { type } = action;
    switch(type) {
        default: 
            return initialState;
    }
}
