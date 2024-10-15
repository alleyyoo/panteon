export const redis2Array = (data: any[], id = 'id', score = 'score') => {
  const objectArray = [];

  for (let i = 0; i < data.length; i += 2) {
    const player = {
      [id]: data[i],
      [score]: Number(data[i + 1])
    };
    objectArray.push(player);
  }

  return objectArray;
};
