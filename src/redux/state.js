let state = {
    profilePage:{
        postsData: [
            {
                id: 1,
                img: "http://img1.liveinternet.ru/images/attach/c/8/102/784/102784519__obitatli_morea.png",
                likesCount: 4,
                message: "Hello, how are you?"
            },
            {
                id: 2,
                img: "https://clipartart.com/images/angler-fish-clipart-13.png",
                likesCount: 2,
                message: "Let's play a game!"
            },
            {
                id: 3,
                img: "https://i.pinimg.com/originals/da/69/6b/da696b031eee3d2822e94b44180ef52a.png",
                likesCount: 1,
                message: "Arrr"
            }
        ]
    },
    dialogsPage:{
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Have a nice day'},
            {id: 3, message: 'When will I see you?'},
            {id: 4, message: 'Omg'},
            {id: 5, message: 'Dimych)'}
        ],
        dialogsData: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Sanya'},
            {id: 3, name: 'Masha'},
            {id: 4, name: 'Roma'},
            {id: 5, name: 'Kate'}
        ]
    }
}

export default state;