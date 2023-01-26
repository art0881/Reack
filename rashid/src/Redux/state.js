let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message:'Привет пидар это пост', likesCount:'2'},
                {id: 2, message:'второй пост', likesCount:'7'}
               ],
               newPostText: 'Омаров Рашид '
            
           },
           dialogsPage: {
            dialogs: [
                {id: 1, name:'Русик'},
                {id: 2, name:'Ислам'}
            ],
            messages: [
                {id: 1, message:'привет'},
                {id: 2, message:'как дела'}
               ]
           }
    },
    getState(){
     return this._state;
    },
    _callSubscriber() {
        console.log('state срфтпув')
    },
    addPost() {
        let newPost = {
            id: 5, 
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
     }, 
     updateNewPostText(newText){
   
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
     },   
    subscribe(observer){
        this._callSubscriber = observer;
      }
    
}

 export default store;
 window.store = store;