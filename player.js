// player.js - carga el video seleccionado en el player
document.addEventListener('DOMContentLoaded', ()=>{
  const player = document.getElementById('mainPlayer');
  const title = document.getElementById('title');
  const desc  = document.getElementById('description');
  const poster = document.getElementById('coverPoster');
  const thumbs = document.querySelectorAll('.thumb');

  thumbs.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const src = btn.dataset.video;
      const t = btn.dataset.title || 'Vídeo';
      const d = btn.dataset.desc || '';
      const p = btn.dataset.poster || '';

      // Cambia fuente del video
      // Limpiar fuentes anteriores
      while(player.firstChild) player.removeChild(player.firstChild);
      const source = document.createElement('source');
      source.src = src;
      source.type = 'video/mp4';
      player.appendChild(source);

      // Cambiar poster, título y descripción
      if(p) poster.src = p;
      title.textContent = t;
      desc.textContent = d;

      // Carga y reproduce automáticamente
      player.load();
      player.play().catch(()=>{ /* autoplay puede fallar según navegador */ });
    });
  });
});
