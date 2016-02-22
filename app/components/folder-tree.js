import Ember from 'ember';

export default Ember.Component.extend({
    click( event ){
        event.stopPropagation();
        this.get('folderItem');
    }
});
