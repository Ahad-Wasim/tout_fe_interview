function customDeepClone(state, nestedProp, data) {

  let clonedState = null;

  nestedProp.reduce((acc, prop, i, coll) => {
    clonedState = !clonedState ? acc : clonedState;
    if (i + 1 === coll.length) {
      return acc[prop] =  Object.assign({}, acc[prop], data);
    } else {
      return acc[prop] = { ...acc[prop] };
    }

  }, { ...state });

  return clonedState;
}
