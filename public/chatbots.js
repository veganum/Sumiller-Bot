window.addEventListener('dfMessengerLoaded', function (event) {
    console.log('Chatbot cargado e inicializado' + event);

    const dfMessenger = document.querySelector('df-messenger');


    //EVENTOS
    dfMessenger.renderCustomText('Buenos días');

    //Manejar un evento al pulsar sobre una lista
    dfMessenger.addEventListener('df-list-element-clicked', function (event) {
        console.log("df-list-element-clicked", event);
    });

});