exports.renderPokenea = (pokenea, containerId) => {
    return `
      <div style="max-width: 400px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; font-family: Arial, sans-serif; text-align: center;">
        <h1 style="color: #2a9d8f;">${pokenea.nombre}</h1>
        <p><strong>ID:</strong> ${pokenea.id}</p>
        <p><strong>Altura:</strong> ${pokenea.altura}</p>
        <p><strong>Habilidad:</strong> ${pokenea.habilidad}</p>
        <img src="${pokenea.imagen}" alt="${pokenea.nombre}" style="width: 150px; margin: 10px 0;">
        <p style="font-style: italic; color: #555;">"${pokenea.fraseFilosofica}"</p>
        <p style="margin-top: 20px; font-size: 0.9em; color: #888;">ID del Contenedor: ${containerId}</p>
      </div>
    `;
  };
  