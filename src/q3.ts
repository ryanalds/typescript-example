let ordenarDecrescente = (array: string[]) => {
  return array.sort((a, b) => b.localeCompare(a));
}

export {ordenarDecrescente};