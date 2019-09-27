[Back to home](https://github.com/misurida/eg-elements#eg-elements)

---

## \<ActionMessages\>


Based on the [Vuex](https://vuex.vuejs.org/guide/) store system, action messages allows you to display floating messages on a corner of the screen. The messages are stackable disappear after a define time, and are designed to give quick information to the user such as a task confirmation or a notification.

To display the messages, simply add `<action-messages></action-messages>` inside the selected parent element (generally the page container). Then, you will have to configure your store to be able to push messages from any element.

Here is the standard store configuration:

### Preparing the store

Add in the `state`:
```
actionMessages: []
```

Add in the `getters`:
```
actionMessages(state) { return state.actionMessages },
```

Add in the `mutations`:
```
PUSH_MESSAGE(state, msg) {
    state.actionMessages.push(msg);
},
PULL_MESSAGE(state, msg) {
    state.actionMessages = state.actionMessages.filter(m => m.guid !== msg.guid);
},
```

Add in the `actions`:
```
pushMessage({ commit }, message) {
        const buildId = () => Math.random().toString(36).substr(2, 9);
        let msg = message;
        if(typeof message === "string") {
            msg = { text: message };
        }
        if(msg) {
            msg.guid = buildId();
            msg.timer = msg.timer ? msg.timer : 5000;
            commit('PUSH_MESSAGE', msg);
            setTimeout(() => { commit('PULL_MESSAGE', msg); }, msg.timer);
        }
        else {
            console.warn('MESSAGE ERROR', message);
        }
    }
```

### Pushing a message

Then if you want to push a message, you can use *dispatch* to tack a new message to display directly into the store:
```
this.$store.dispatch('pushMessage', {
    text: getRemainingTime(),
    subtext: 'Remaining time',
    timer: 5000
});
```

Or more simply:
```
this.$store.dispatch('pushMessage', 'New entry created')
```

You can also specify a subtext using the attribute `subtext` to the message object. The main text will be *1.2rem* and the subtext will have an opacity of *0.5*.