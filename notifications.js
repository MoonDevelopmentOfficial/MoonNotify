window.addEventListener('message', function(event) {
    var data = event.data;
    var alertType = data.type;
    var message = data.text;
    var length = data.length || 5000;
    var height = data.height || 'Bottom';
    var position = data.position || 'Center';

    if (!message || !alertType) {
        console.error('Missing message or type in notification data:', data);
        return;
    }

    var alertDiv = document.createElement('div');
    alertDiv.className = `alert fade alert-simple alert-${alertType} alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show`;

    var icon;
    switch (alertType) {
        case 'success':
            icon = '<i class="fa fa-check"></i>';
            break;
        case 'info':
            icon = '<i class="fa fa-info-circle"></i>';
            break;
        case 'warning':
            icon = '<i class="fa fa-exclamation-triangle"></i>';
            break;
        case 'error':
            icon = '<i class="fa fa-times-circle"></i>';
            break;
        case 'primary':
            icon = '<i class="fa fa-exclamation-circle"></i>';
            break;
        default:
            icon = '';
            break;
    }

    alertDiv.innerHTML = `
        <strong class="font__weight-semibold">${icon}</strong> ${message}
    `;

    var notificationsContainer = document.getElementById('notifications');
    notificationsContainer.appendChild(alertDiv);

    // Apply height
    switch (height) {
        case 'Top':
            notificationsContainer.style.top = '20px';
            notificationsContainer.style.bottom = 'auto';
            break;
        case 'Center':
            notificationsContainer.style.top = '50%';
            notificationsContainer.style.bottom = 'auto';
            notificationsContainer.style.transform = 'translateY(-50%)';
            break;
        case 'Bottom':
        default:
            notificationsContainer.style.bottom = '20px';
            notificationsContainer.style.top = 'auto';
            break;
    }

    // Apply position
    switch (position) {
        case 'Left':
            notificationsContainer.style.left = '20px';
            notificationsContainer.style.right = 'auto';
            notificationsContainer.style.transform = 'none';
            alertDiv.style.animation = 'slide-in-left 0.5s forwards, slide-out-left 0.5s forwards 4.5s';
            break;
        case 'Center':
            if (height === 'Center') {
                notificationsContainer.style.left = '50%';
                notificationsContainer.style.right = 'auto';
                notificationsContainer.style.transform = 'translate(-50%, -50%)';
                alertDiv.style.animation = 'pop-up 0.5s forwards, pop-down 0.5s forwards 4.5s';
            } else {
                notificationsContainer.style.left = '50%';
                notificationsContainer.style.right = 'auto';
                notificationsContainer.style.transform = 'translateX(-50%)';
                alertDiv.style.animation = 'slide-in-center 0.5s forwards, slide-out-center 0.5s forwards 4.5s';
            }
            break;
        case 'Right':
            notificationsContainer.style.right = '20px';
            notificationsContainer.style.left = 'auto';
            notificationsContainer.style.transform = 'none';
            alertDiv.style.animation = 'slide-in-right 0.5s forwards, slide-out-right 0.5s forwards 4.5s';
            break;
    }

    setTimeout(function() {
        alertDiv.classList.remove('show');
        alertDiv.classList.add('hide');
        setTimeout(function() {
            notificationsContainer.removeChild(alertDiv);
        }, 500);
    }, length);
});
