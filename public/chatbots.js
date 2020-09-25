window.addEventListener('dfMessengerLoaded', function (event) {
    console.log('Chatbot cargado e inicializado' + event);

    const dfMessenger = document.querySelector('df-messenger');


    //EVENTOS
    dfMessenger.renderCustomText('🍷 Pulse para encontrar su vino 🥂');


    /*
    //Manejar un evento al pulsar sobre una lista
    dfMessenger.addEventListener('df-list-element-clicked', function (event) {
        console.log("df-list-element-clicked", event.detail.element.title);
        alert("has pulsado la opcion" + event.detail.element.title);
    });
    */

    //Gestion de la entrada de texto
    dfMessenger.addEventListener('df-user-input-entered', function (event) {
        console.log("df-user-input-entered:", event.detail.input);

    });

});