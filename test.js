// index.js
async function fetchPushNotification() {
    try {
        const response = await fetch('sdk-backend-production-5821.up.railway.app/push-notification');
        const message = await response.text();
        alert(message); // For demonstration, using alert. In production, use a more subtle method.
    } catch (error) {
        console.error('Error fetching push notification:', error);
    }
}

window.onload = fetchPushNotification;
