let wakeLock = null;

async function activarWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('🔒 WakeLock activo');
    }
  } catch (err) {
    console.error(`Error WakeLock: ${err.name}`);
  }
}

// Reactivar si vuelve a la app
document.addEventListener('visibilitychange', () => {
  if (wakeLock !== null && document.visibilityState === 'visible') {
    activarWakeLock();
  }
});

// Activar con interacción (clave en Android)
document.addEventListener('click', function init() {
  activarWakeLock();
  document.removeEventListener('click', init);
});