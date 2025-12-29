const gramVoKilogram = g => {
  return g / 1000;
};

const kilogramVoGram = kg => {
  return kg * 1000;
};

const litarVoMililitar = l => {
  return l * 1000;
};

const mililitarVoLitar = ml => {
  return ml / 1000;
};

module.exports = {
  gramVoKilogram,
  kilogramVoGram,
  litarVoMililitar,
  mililitarVoLitar,
};


