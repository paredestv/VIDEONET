// app.js

// Función para abrir el modal con el video correspondiente
function openModal(videoId) {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    // Asigna el enlace de YouTube del video al iframe
    let videoUrl = '';
    switch(videoId) {
        case 'reportaje 1':
            videoUrl = 'https://www.youtube.com/embed/qki_wb0j3wo';
            break;
        case 'reportaje 2':
            videoUrl = 'https://www.youtube.com/embed/vO3yI9CcP4U';
            break;
        case 'reportaje 3':
            videoUrl = 'https://www.youtube.com/embed/hypNw8OHAXc';
            break;
        case 'reportaje 4':
            videoUrl = 'https://www.youtube.com/embed/csnGNclv6Lk';
            break;
        case 'turismo 5':
            videoUrl = 'https://www.youtube.com/embed/mEQX4bJeeB8';
            break;
        case 'turismo 6':
            videoUrl = 'https://www.youtube.com/embed/oZMjsFjYqK0';
            break;
            case 'turismo 7':
            videoUrl = 'https://www.youtube.com/embed/PAEQP55zscE';
            break;
            case 'turismo 8':
            videoUrl = 'https://www.youtube.com/embed/OQZQYmaz1II';
            break;
       
    }
    
    videoFrame.src = videoUrl;
    videoModal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = ''; // Detener el video al cerrar
    videoModal.style.display = "none";
}
