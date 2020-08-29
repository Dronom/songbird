const reduceLevelScore = (action, state) => ({
  ...state,
  list: state.list.map((page) => {
    if (action.payload.category === page.name) {
      return { ...page, levelScore: page.levelScore - 1 };
    }
    return { ...page };
  }),
});

export default reduceLevelScore;
