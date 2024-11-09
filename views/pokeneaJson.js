// views/pokeneaJsonView.js
exports.renderPokeneaJson = (pokenea, containerId) => {
  return {
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    containerId: containerId
  };
};
